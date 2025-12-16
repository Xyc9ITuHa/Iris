"use client";

import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, RotateCcw, Check, X, ChevronDown, ChevronRight } from 'lucide-react';
import styles from './AdminDashboard.module.sass';

// Types
interface Manufacturer {
    id: number;
    name: string;
    country?: string;
    website?: string;
    contact_email?: string;
}

interface Laser {
    id: number;
    model_name: string;
    manufacturer_id: number;
    laser_type: string;
    power_output_w: number;
    is_single_mode: boolean;
    modulation_type: string;
    application?: string;
    cooling_method?: string;
    power_consumption_w?: number;
    notes?: string;
    manufacturer?: Manufacturer;
}

interface PendingAction {
    id: number;
    action_type: string;
    target_table: string;
    target_record_id?: number;
    action_data: any;
    reason?: string;
    initiated_by: number;
    status: string;
    created_at: string;
}

interface AuditLog {
    id: number;
    action: string;
    table_name: string;
    record_id?: number;
    old_data?: any;
    new_data?: any;
    created_at: string;
    user_id?: number;
}

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState<'manufacturers' | 'lasers' | 'pending' | 'audit'>('manufacturers');
    const [manufacturers, setManufacturers] = useState<Manufacturer[]>([]);
    const [lasers, setLasers] = useState<Laser[]>([]);
    const [pendingActions, setPendingActions] = useState<PendingAction[]>([]);
    const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
    const [loading, setLoading] = useState(false);
    const [editingItem, setEditingItem] = useState<any>(null);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState<'create' | 'edit'>('create');
    const [expandedLogs, setExpandedLogs] = useState<Set<number>>(new Set());
    const [countryList, setCountryList] = useState<Record<string, string>>({});

    useEffect(() => {
        loadData();
    }, [activeTab]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const res = await fetch('https://flagcdn.com/en/codes.json');
                const data = await res.json();
                setCountryList(data);
            } catch (error) {
                console.error('Error loading countries:', error);
            }
        };
        fetchCountries();
    }, []);

    const loadData = async () => {
        setLoading(true);
        try {
            if (activeTab === 'manufacturers') {
                const res = await fetch('/api/admin?type=manufacturers');
                const data = await res.json();
                setManufacturers(data);
            } else if (activeTab === 'lasers') {
                const res = await fetch('/api/admin?type=lasers');
                const data = await res.json();
                setLasers(data);
            } else if (activeTab === 'pending') {
                const res = await fetch('/api/admin?type=pending');
                const data = await res.json();
                setPendingActions(data);
            } else if (activeTab === 'audit') {
                const res = await fetch('/api/admin?type=audit');
                const data = await res.json();
                setAuditLogs(data);
            }
        } catch (error) {
            console.error('Error loading data:', error);
        }
        setLoading(false);
    };

    const handleCreate = () => {
        setModalType('create');
        setEditingItem(activeTab === 'manufacturers' ? {
            name: '',
            country: '',
            website: '',
            contact_email: ''
        } : {
            model_name: '',
            manufacturer_id: '',
            laser_type: '',
            power_output_w: '',
            is_single_mode: false,
            modulation_type: '',
            application: '',
            cooling_method: '',
            power_consumption_w: '',
            notes: ''
        });
        setShowModal(true);
    };

    const handleEdit = (item: any) => {
        setModalType('edit');
        setEditingItem({ ...item });
        setShowModal(true);
    };

    const handleSave = async () => {
        try {
            const endpoint = '/api/admin';
            const method = modalType === 'create' ? 'POST' : 'PUT';

            const payload = {
                type: activeTab,
                data: editingItem,
                reason: `${modalType === 'create' ? 'Creating' : 'Updating'} ${activeTab}`
            };

            console.log('🔍 SAVE Payload:', JSON.stringify(payload, null, 2));

            const res = await fetch(endpoint, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const responseData = await res.json();
            console.log('📥 Response:', responseData);

            if (res.ok) {
                setShowModal(false);
                setEditingItem(null);
                loadData();
            } else {
                console.error('❌ Save failed:', responseData);
                alert(`Error: ${responseData.error}\n${responseData.details || ''}`);
            }
        } catch (error) {
            console.error('Error saving:', error);
            alert('Failed to save: ' + String(error));
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this item?')) return;

        try {
            const payload = {
                type: activeTab,
                id,
                reason: 'Deleting item'
            };

            console.log('🗑️ DELETE Payload:', JSON.stringify(payload, null, 2));
            console.log('🗑️ DELETE activeTab:', activeTab);
            console.log('🗑️ DELETE id:', id, 'type:', typeof id);

            const res = await fetch('/api/admin', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const responseData = await res.json();
            console.log('📥 DELETE Response:', responseData);

            if (res.ok) {
                loadData();
            } else {
                console.error('❌ Delete failed:', responseData);
                alert(`Delete Error: ${responseData.error}\n${responseData.details || ''}`);
            }
        } catch (error) {
            console.error('Error deleting:', error);
            alert('Failed to delete: ' + String(error));
        }
    };

    const handleApprove = async (actionId: number) => {
        try {
            const payload = {
                type: 'approve',
                actionId
            };

            console.log('✅ APPROVE Payload:', JSON.stringify(payload, null, 2));

            const res = await fetch('/api/admin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const responseData = await res.json();
            console.log('📥 APPROVE Response:', responseData);

            if (res.ok) {
                loadData();
            } else {
                console.error('❌ Approve failed:', responseData);
                alert(`Error: ${responseData.error}\n${responseData.details || ''}`);
            }
        } catch (error) {
            console.error('Error approving:', error);
            alert('Failed to approve: ' + String(error));
        }
    };

    const handleReject = async (actionId: number) => {
        try {
            const res = await fetch('/api/admin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'reject',
                    actionId
                })
            });

            if (res.ok) {
                loadData();
            }
        } catch (error) {
            console.error('Error rejecting:', error);
        }
    };

    const handleRollback = async (auditId: number) => {
        if (!confirm('Are you sure you want to rollback this change?')) return;

        try {
            const res = await fetch('/api/admin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'rollback',
                    auditId
                })
            });

            if (res.ok) {
                loadData();
                alert('Rollback successful');
            }
        } catch (error) {
            console.error('Error rolling back:', error);
        }
    };

    const toggleLogExpansion = (id: number) => {
        const newExpanded = new Set(expandedLogs);
        if (newExpanded.has(id)) {
            newExpanded.delete(id);
        } else {
            newExpanded.add(id);
        }
        setExpandedLogs(newExpanded);
    };

    const getStatusClass = (status: string) => {
        switch (status.toLowerCase()) {
            case 'pending': return styles.pending;
            case 'approved': return styles.approved;
            case 'rejected': return styles.rejected;
            default: return '';
        }
    };

    const getAuditClass = (action: string) => {
        switch (action.toUpperCase()) {
            case 'CREATE': return styles.create;
            case 'UPDATE': return styles.update;
            case 'DELETE': return styles.delete;
            default: return '';
        }
    };

    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.header}>
                <h1>Admin Dashboard</h1>
                <p>Manage laser database, pending actions, and audit logs</p>
            </div>

            <div className={styles.tabsContainer}>
                <div className={styles.tabsList}>
                    {['manufacturers', 'lasers', 'pending', 'audit'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}`}
                        >
                            {tab === 'pending' ? 'Pending Actions' : tab === 'audit' ? 'Audit Log' : tab}
                        </button>
                    ))}
                </div>
            </div>

            {activeTab === 'manufacturers' && (
                <div>
                    <div className={styles.sectionHeader}>
                        <h2>Manufacturers</h2>
                        <button onClick={handleCreate} className={styles.btnAdd}>
                            <Plus size={16} /> Add Manufacturer
                        </button>
                    </div>

                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Country</th>
                                    <th>Website</th>
                                    <th>Email</th>
                                    <th style={{ textAlign: 'right' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {manufacturers.map((mfr) => (
                                    <tr key={mfr.id}>
                                        <td>{mfr.id}</td>
                                        <td className={styles.fontMedium}>{mfr.name}</td>
                                        <td className={styles.textSecondary}>{mfr.country || '—'}</td>
                                        <td>
                                            {mfr.website ? <a href={mfr.website} target="_blank" rel="noreferrer">{mfr.website}</a> : '—'}
                                        </td>
                                        <td className={styles.textSecondary}>{mfr.contact_email || '—'}</td>
                                        <td>
                                            <div className={styles.actionsCell}>
                                                <button onClick={() => handleEdit(mfr)} className={styles.btnIcon}>
                                                    <Edit2 size={16} />
                                                </button>
                                                <button onClick={() => handleDelete(mfr.id)} className={`${styles.btnIcon} ${styles.delete}`}>
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {activeTab === 'lasers' && (
                <div>
                    <div className={styles.sectionHeader}>
                        <h2>Lasers</h2>
                        <button onClick={handleCreate} className={styles.btnAdd}>
                            <Plus size={16} /> Add Laser
                        </button>
                    </div>

                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Model</th>
                                    <th>Manufacturer</th>
                                    <th>Type</th>
                                    <th>Power (W)</th>
                                    <th>Mode</th>
                                    <th style={{ textAlign: 'right' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lasers.map((laser) => (
                                    <tr key={laser.id}>
                                        <td>{laser.id}</td>
                                        <td className={styles.fontMedium}>{laser.model_name}</td>
                                        <td className={styles.textSecondary}>{laser.manufacturer?.name || laser.manufacturer_id}</td>
                                        <td>
                                            <span className={`${styles.badge} ${styles.blue}`}>
                                                {laser.laser_type}
                                            </span>
                                        </td>
                                        <td>{laser.power_output_w}</td>
                                        <td>
                                            {laser.is_single_mode ? 'Single' : 'Multi'}
                                        </td>
                                        <td>
                                            <div className={styles.actionsCell}>
                                                <button onClick={() => handleEdit(laser)} className={styles.btnIcon}>
                                                    <Edit2 size={16} />
                                                </button>
                                                <button onClick={() => handleDelete(laser.id)} className={`${styles.btnIcon} ${styles.delete}`}>
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {activeTab === 'pending' && (
                <div>
                    <h2 className={styles.sectionHeader}>Pending Actions</h2>
                    <div className={styles.listContainer}>
                        {pendingActions.length === 0 ? (
                            <div className={styles.emptyState}>
                                No pending actions
                            </div>
                        ) : (
                            <div>
                                {pendingActions.map((action) => (
                                    <div key={action.id} className={styles.listItem}>
                                        <div className={styles.itemHeader}>
                                            <div className={styles.itemContent}>
                                                <div className={styles.badgeRow}>
                                                    <span className={`${styles.statusPill} ${getStatusClass(action.status)}`}>
                                                        {action.status}
                                                    </span>
                                                    <span className={`${styles.statusPill} ${styles.type}`}>
                                                        {action.action_type}
                                                    </span>
                                                </div>
                                                <div className={styles.itemDetails}>
                                                    <strong>Table:</strong> {action.target_table} {action.target_record_id && `(ID: ${action.target_record_id})`}
                                                </div>
                                                {action.reason && (
                                                    <div className={styles.itemReason}>
                                                        <strong>Reason:</strong> {action.reason}
                                                    </div>
                                                )}
                                                <div className={styles.itemDate}>
                                                    Created: {new Date(action.created_at).toLocaleString()}
                                                </div>
                                            </div>
                                            {action.status === 'pending' && (
                                                <div className={styles.actionButtons}>
                                                    <button onClick={() => handleApprove(action.id)} className={styles.btnApprove}>
                                                        <Check size={16} /> Approve
                                                    </button>
                                                    <button onClick={() => handleReject(action.id)} className={styles.btnReject}>
                                                        <X size={16} /> Reject
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {activeTab === 'audit' && (
                <div>
                    <h2 className={styles.sectionHeader}>Audit Log</h2>
                    <div className={styles.listContainer}>
                        {auditLogs.length === 0 ? (
                            <div className={styles.emptyState}>
                                No audit logs
                            </div>
                        ) : (
                            <div>
                                {auditLogs.map((log) => {
                                    const isExpanded = expandedLogs.has(log.id);
                                    return (
                                        <div key={log.id} className={styles.listItem}>
                                            <div className={styles.itemHeader}>
                                                <div className={styles.itemContent}>
                                                    <div className={styles.badgeRow}>
                                                        <button
                                                            onClick={() => toggleLogExpansion(log.id)}
                                                            className={styles.expandToggle}
                                                        >
                                                            {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                                                        </button>
                                                        <span className={`${styles.statusPill} ${getAuditClass(log.action)}`}>
                                                            {log.action}
                                                        </span>
                                                    </div>
                                                    <div style={{ marginLeft: '32px' }}>
                                                        <div className={styles.itemDetails}>
                                                            <strong>Table:</strong> {log.table_name} {log.record_id && `(ID: ${log.record_id})`}
                                                        </div>
                                                        <div className={styles.itemDate}>
                                                            {new Date(log.created_at).toLocaleString()}
                                                        </div>
                                                    </div>

                                                    {isExpanded && (
                                                        <div className={styles.diffContainer}>
                                                            {log.old_data && (
                                                                <div className={styles.diffBlock}>
                                                                    <div className={styles.diffLabel}>OLD DATA:</div>
                                                                    <pre className={styles.preBlock}>
                                                                        {JSON.stringify(log.old_data, null, 2)}
                                                                    </pre>
                                                                </div>
                                                            )}
                                                            {log.new_data && (
                                                                <div>
                                                                    <div className={styles.diffLabel}>NEW DATA:</div>
                                                                    <pre className={styles.preBlock}>
                                                                        {JSON.stringify(log.new_data, null, 2)}
                                                                    </pre>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                                {log.action !== 'DELETE' && (
                                                    <button onClick={() => handleRollback(log.id)} className={styles.btnRollback}>
                                                        <RotateCcw size={16} /> Rollback
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {showModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <h3>
                            {modalType === 'create' ? 'Create' : 'Edit'} {activeTab === 'manufacturers' ? 'Manufacturer' : 'Laser'}
                        </h3>

                        {activeTab === 'manufacturers' ? (
                            <div className={styles.formStack}>
                                <div className={styles.formGroup}>
                                    <label>Name *</label>
                                    <input
                                        type="text"
                                        className={styles.input}
                                        value={editingItem?.name || ''}
                                        onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Country</label>
                                    <select
                                        className={styles.input}
                                        value={editingItem?.country || ''}
                                        onChange={(e) => setEditingItem({ ...editingItem, country: e.target.value })}
                                    >
                                        <option value="">Select Country</option>
                                        {Object.entries(countryList).map(([code, name]) => (
                                            <option key={code} value={name}>
                                                {name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Website</label>
                                    <input
                                        type="url"
                                        className={styles.input}
                                        value={editingItem?.website || ''}
                                        onChange={(e) => setEditingItem({ ...editingItem, website: e.target.value })}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Contact Email</label>
                                    <input
                                        type="email"
                                        className={styles.input}
                                        value={editingItem?.contact_email || ''}
                                        onChange={(e) => setEditingItem({ ...editingItem, contact_email: e.target.value })}
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className={styles.formStack}>
                                <div className={styles.formGroup}>
                                    <label>Model Name *</label>
                                    <input
                                        type="text"
                                        className={styles.input}
                                        value={editingItem?.model_name || ''}
                                        onChange={(e) => setEditingItem({ ...editingItem, model_name: e.target.value })}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Manufacturer ID *</label>
                                    <input
                                        type="number"
                                        className={styles.input}
                                        value={editingItem?.manufacturer_id || ''}
                                        onChange={(e) => setEditingItem({ ...editingItem, manufacturer_id: parseInt(e.target.value) })}
                                    />
                                </div>
                                <div className={styles.formGrid}>
                                    <div className={styles.formGroup}>
                                        <label>Laser Type *</label>
                                        <input
                                            type="text"
                                            className={styles.input}
                                            value={editingItem?.laser_type || ''}
                                            onChange={(e) => setEditingItem({ ...editingItem, laser_type: e.target.value })}
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Power Output (W) *</label>
                                        <input
                                            type="number"
                                            step="0.01"
                                            className={styles.input}
                                            value={editingItem?.power_output_w || ''}
                                            onChange={(e) => setEditingItem({ ...editingItem, power_output_w: parseFloat(e.target.value) })}
                                        />
                                    </div>
                                </div>
                                <div className={styles.formGrid}>
                                    <div className={styles.formGroup}>
                                        <label>Modulation Type *</label>
                                        <input
                                            type="text"
                                            className={styles.input}
                                            value={editingItem?.modulation_type || ''}
                                            onChange={(e) => setEditingItem({ ...editingItem, modulation_type: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className={styles.checkboxLabel}>
                                            <input
                                                type="checkbox"
                                                checked={editingItem?.is_single_mode || false}
                                                onChange={(e) => setEditingItem({ ...editingItem, is_single_mode: e.target.checked })}
                                            />
                                            Single Mode
                                        </label>
                                    </div>
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Application</label>
                                    <input
                                        type="text"
                                        className={styles.input}
                                        value={editingItem?.application || ''}
                                        onChange={(e) => setEditingItem({ ...editingItem, application: e.target.value })}
                                    />
                                </div>
                                <div className={styles.formGrid}>
                                    <div className={styles.formGroup}>
                                        <label>Cooling Method</label>
                                        <input
                                            type="text"
                                            className={styles.input}
                                            value={editingItem?.cooling_method || ''}
                                            onChange={(e) => setEditingItem({ ...editingItem, cooling_method: e.target.value })}
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Power Consumption (W)</label>
                                        <input
                                            type="number"
                                            step="0.01"
                                            className={styles.input}
                                            value={editingItem?.power_consumption_w || ''}
                                            onChange={(e) => setEditingItem({ ...editingItem, power_consumption_w: parseFloat(e.target.value) })}
                                        />
                                    </div>
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Notes</label>
                                    <textarea
                                        className={styles.textarea}
                                        value={editingItem?.notes || ''}
                                        onChange={(e) => setEditingItem({ ...editingItem, notes: e.target.value })}
                                        rows={3}
                                    />
                                </div>
                            </div>
                        )}

                        <div className={styles.modalFooter}>
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    setEditingItem(null);
                                }}
                                className={styles.btnCancel}
                            >
                                Cancel
                            </button>
                            <button onClick={handleSave} className={styles.btnSave}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {loading && (
                <div className={styles.loadingOverlay}>
                    <div className={styles.loadingBox}>
                        Loading...
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;