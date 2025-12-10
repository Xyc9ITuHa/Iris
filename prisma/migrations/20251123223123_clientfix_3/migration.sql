-- AlterTable
ALTER TABLE "pending_actions" ALTER COLUMN "expires_at" SET DEFAULT (NOW() + INTERVAL '24 hours');
