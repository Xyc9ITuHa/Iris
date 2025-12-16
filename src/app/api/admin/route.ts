import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

const MOCK_USER_ID = 1;

// Helper to ensure mock user exists
async function ensureMockUser() {
    try {
        const user = await prisma.users.findUnique({
            where: { id: MOCK_USER_ID }
        });

        if (!user) {
            await prisma.users.create({
                data: {
                    id: MOCK_USER_ID,
                    name: 'admin',
                    email: 'admin@example.com',
                    password_hash: 'mock_hash',
                    role: 'admin',
                    created_at: new Date()
                }
            });
        }
    } catch (error) {
        console.error('Error ensuring mock user:', error);
    }
}

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    try {
        switch (type) {
            case 'manufacturers':
                const manufacturers = await prisma.manufacturers.findMany({
                    orderBy: { id: 'desc' }
                });
                return NextResponse.json(manufacturers);

            case 'lasers':
                const lasers = await prisma.lasers.findMany({
                    include: {
                        manufacturer: true
                    },
                    orderBy: { id: 'desc' }
                });
                return NextResponse.json(lasers);

            case 'pending':
                const pending = await prisma.pending_actions.findMany({
                    where: { status: 'pending' },
                    orderBy: { created_at: 'desc' }
                });
                return NextResponse.json(pending);

            case 'audit':
                const audit = await prisma.audit_log.findMany({
                    orderBy: { created_at: 'desc' },
                    take: 100
                });
                return NextResponse.json(audit);

            default:
                return NextResponse.json({ error: 'Invalid type parameter. Use: manufacturers, lasers, pending, or audit' }, { status: 400 });
        }
    } catch (error) {
        console.error('GET Error:', error);
        return NextResponse.json({
            error: 'Failed to fetch data',
            details: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        await ensureMockUser();

        const body = await request.json();
        const { type, data, reason, actionId, auditId } = body;

        // Handle approve action
        if (type === 'approve') {
            const action = await prisma.pending_actions.findUnique({
                where: { id: actionId }
            });

            if (!action || action.status !== 'pending') {
                return NextResponse.json({ error: 'Action not found or already processed' }, { status: 400 });
            }

            // Execute the action based on action_type
            if (action.action_type === 'CREATE') {
                if (action.target_table === 'manufacturers') {
                    const created = await prisma.manufacturers.create({
                        data: action.action_data as any
                    });

                    await prisma.audit_log.create({
                        data: {
                            user_id: MOCK_USER_ID,
                            table_name: 'manufacturers',
                            record_id: created.id,
                            action: 'CREATE',
                            new_data: action.action_data as any,
                            created_at: new Date()
                        }
                    });
                } else if (action.target_table === 'lasers') {
                    const created = await prisma.lasers.create({
                        data: action.action_data as any
                    });

                    await prisma.audit_log.create({
                        data: {
                            user_id: MOCK_USER_ID,
                            table_name: 'lasers',
                            record_id: created.id,
                            action: 'CREATE',
                            new_data: action.action_data as any,
                            created_at: new Date()
                        }
                    });
                }
            } else if (action.action_type === 'UPDATE') {
                if (action.target_table === 'manufacturers') {
                    const old = await prisma.manufacturers.findUnique({
                        where: { id: action.target_record_id! }
                    });

                    await prisma.manufacturers.update({
                        where: { id: action.target_record_id! },
                        data: action.action_data as any
                    });

                    await prisma.audit_log.create({
                        data: {
                            user_id: MOCK_USER_ID,
                            table_name: 'manufacturers',
                            record_id: action.target_record_id!,
                            action: 'UPDATE',
                            old_data: old as any,
                            new_data: action.action_data as any,
                            created_at: new Date()
                        }
                    });
                } else if (action.target_table === 'lasers') {
                    const old = await prisma.lasers.findUnique({
                        where: { id: action.target_record_id! }
                    });

                    await prisma.lasers.update({
                        where: { id: action.target_record_id! },
                        data: action.action_data as any
                    });

                    await prisma.audit_log.create({
                        data: {
                            user_id: MOCK_USER_ID,
                            table_name: 'lasers',
                            record_id: action.target_record_id!,
                            action: 'UPDATE',
                            old_data: old as any,
                            new_data: action.action_data as any,
                            created_at: new Date()
                        }
                    });
                }
            } else if (action.action_type === 'DELETE') {
                if (action.target_table === 'manufacturers') {
                    const old = await prisma.manufacturers.findUnique({
                        where: { id: action.target_record_id! }
                    });

                    await prisma.manufacturers.delete({
                        where: { id: action.target_record_id! }
                    });

                    await prisma.audit_log.create({
                        data: {
                            user_id: MOCK_USER_ID,
                            table_name: 'manufacturers',
                            record_id: action.target_record_id!,
                            action: 'DELETE',
                            old_data: old as any,
                            created_at: new Date()
                        }
                    });
                } else if (action.target_table === 'lasers') {
                    const old = await prisma.lasers.findUnique({
                        where: { id: action.target_record_id! }
                    });

                    await prisma.lasers.delete({
                        where: { id: action.target_record_id! }
                    });

                    await prisma.audit_log.create({
                        data: {
                            user_id: MOCK_USER_ID,
                            table_name: 'lasers',
                            record_id: action.target_record_id!,
                            action: 'DELETE',
                            old_data: old as any,
                            created_at: new Date()
                        }
                    });
                }
            }

            await prisma.pending_actions.update({
                where: { id: actionId },
                data: {
                    status: 'approved',
                    approved_by: MOCK_USER_ID,
                    approved_at: new Date(),
                    completed_at: new Date()
                }
            });

            return NextResponse.json({ success: true });
        }

        // Handle reject action
        if (type === 'reject') {
            await prisma.pending_actions.update({
                where: { id: actionId },
                data: {
                    status: 'rejected',
                    approved_by: MOCK_USER_ID,
                    approved_at: new Date()
                }
            });

            return NextResponse.json({ success: true });
        }

        // Handle rollback
        if (type === 'rollback') {
            const log = await prisma.audit_log.findUnique({
                where: { id: auditId }
            });

            if (!log) {
                return NextResponse.json({ error: 'Audit log not found' }, { status: 404 });
            }

            try {
                if (log.action === 'CREATE') {
                    if (log.table_name === 'manufacturers') {
                        await prisma.manufacturers.delete({
                            where: { id: log.record_id! }
                        });
                    } else if (log.table_name === 'lasers') {
                        await prisma.lasers.delete({
                            where: { id: log.record_id! }
                        });
                    }
                } else if (log.action === 'UPDATE') {
                    if (log.table_name === 'manufacturers') {
                        await prisma.manufacturers.update({
                            where: { id: log.record_id! },
                            data: log.old_data as any
                        });
                    } else if (log.table_name === 'lasers') {
                        await prisma.lasers.update({
                            where: { id: log.record_id! },
                            data: log.old_data as any
                        });
                    }
                }

                await prisma.rollback_history.create({
                    data: {
                        audit_log_id: auditId,
                        initiated_by: MOCK_USER_ID,
                        approved_by: MOCK_USER_ID,
                        status: 'completed',
                        created_at: new Date()
                    }
                });

                return NextResponse.json({ success: true });
            } catch (error) {
                await prisma.rollback_history.create({
                    data: {
                        audit_log_id: auditId,
                        initiated_by: MOCK_USER_ID,
                        status: 'failed',
                        error_message: String(error),
                        created_at: new Date()
                    }
                });

                throw error;
            }
        }

        // Handle regular CREATE
        const { id, manufacturer, created_at, updated_at, ...cleanData } = data || {};

        const actionData = {
            ...cleanData,
            created_at: new Date(),
            updated_at: new Date()
        };

        const pendingAction = await prisma.pending_actions.create({
            data: {
                initiated_by: MOCK_USER_ID,
                target_table: type === 'manufacturers' ? 'manufacturers' : 'lasers',
                action_type: 'CREATE',
                action_data: actionData,
                reason: reason || 'Creating new record',
                status: 'pending',
                created_at: new Date(),
                expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
            }
        });

        return NextResponse.json({ success: true, pendingId: pendingAction.id });
    } catch (error) {
        console.error('POST Error:', error);
        return NextResponse.json({
            error: 'Failed to process request',
            details: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    try {
        await ensureMockUser();

        const body = await request.json();
        const { type, data, reason } = body;

        if (!data || !data.id) {
            return NextResponse.json({ error: 'Missing record ID' }, { status: 400 });
        }

        const recordId = Number(data.id);

        // Remove read-only and metadata fields
        const { id, manufacturer, created_at, updated_at, ...cleanData } = data;

        // Add updated_at timestamp
        const updateData = {
            ...cleanData,
            updated_at: new Date()
        };

        const pendingAction = await prisma.pending_actions.create({
            data: {
                initiated_by: MOCK_USER_ID,
                target_table: type === 'manufacturers' ? 'manufacturers' : 'lasers',
                target_record_id: recordId,
                action_type: 'UPDATE',
                action_data: updateData as any,
                reason: reason || 'Updating record',
                status: 'pending',
                created_at: new Date(),
                expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
            }
        });

        return NextResponse.json({ success: true, pendingId: pendingAction.id });
    } catch (error) {
        console.error('PUT API Error:', error);
        return NextResponse.json({
            error: 'Failed to update record',
            details: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        await ensureMockUser();

        const body = await request.json();
        const { type, id, reason } = body;

        if (!id) {
            return NextResponse.json({ error: 'Missing record ID' }, { status: 400 });
        }

        const pendingAction = await prisma.pending_actions.create({
            data: {
                initiated_by: MOCK_USER_ID,
                target_table: type === 'manufacturers' ? 'manufacturers' : 'lasers',
                target_record_id: id,
                action_type: 'DELETE',
                reason: reason || 'Deleting record',
                status: 'pending',
                created_at: new Date(),
                expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
            }
        });

        return NextResponse.json({ success: true, pendingId: pendingAction.id });
    } catch (error) {
        console.error('DELETE Error:', error);
        return NextResponse.json({
            error: 'Failed to delete record',
            details: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}