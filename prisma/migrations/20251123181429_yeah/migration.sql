/*
  Warnings:

  - You are about to alter the column `wavelength_min_nm` on the `lasers` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(6,2)`.
  - You are about to alter the column `wavelength_max_nm` on the `lasers` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(6,2)`.
  - You are about to alter the column `wavelength_nominal_nm` on the `lasers` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(6,2)`.
  - You are about to alter the column `power_mw` on the `lasers` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `pulse_width_ns` on the `lasers` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `rep_rate_hz` on the `lasers` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(12,3)`.
  - You are about to alter the column `beam_quality_m2` on the `lasers` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(5,3)`.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('viewer', 'editor', 'superuser');

-- CreateEnum
CREATE TYPE "AuditAction" AS ENUM ('INSERT', 'UPDATE', 'DELETE');

-- CreateEnum
CREATE TYPE "ActionType" AS ENUM ('DELETE', 'ROLLBACK', 'BULK_DELETE', 'BULK_UPDATE');

-- CreateEnum
CREATE TYPE "ActionStatus" AS ENUM ('pending', 'approved', 'rejected', 'completed', 'expired');

-- CreateEnum
CREATE TYPE "RollbackStatus" AS ENUM ('completed', 'failed');

-- AlterTable
ALTER TABLE "lasers" ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "wavelength_min_nm" SET DATA TYPE DECIMAL(6,2),
ALTER COLUMN "wavelength_max_nm" SET DATA TYPE DECIMAL(6,2),
ALTER COLUMN "wavelength_nominal_nm" SET DATA TYPE DECIMAL(6,2),
ALTER COLUMN "power_mw" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "pulse_width_ns" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "rep_rate_hz" SET DATA TYPE DECIMAL(12,3),
ALTER COLUMN "beam_quality_m2" SET DATA TYPE DECIMAL(5,3);

-- AlterTable
ALTER TABLE "manufacturers" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "application_categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "application_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "laser_applications" (
    "laser_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "laser_applications_pkey" PRIMARY KEY ("laser_id","category_id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_login" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "access_codes" (
    "id" SERIAL NOT NULL,
    "code_hash" TEXT NOT NULL,
    "color_code" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "created_by" INTEGER NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "max_uses" INTEGER NOT NULL DEFAULT 1,
    "current_uses" INTEGER NOT NULL DEFAULT 0,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "access_codes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audit_log" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "table_name" TEXT NOT NULL,
    "record_id" INTEGER NOT NULL,
    "action" "AuditAction" NOT NULL,
    "old_data" JSONB,
    "new_data" JSONB,
    "changed_fields" TEXT[],
    "ip_address" TEXT,
    "user_agent" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pending_actions" (
    "id" SERIAL NOT NULL,
    "action_type" "ActionType" NOT NULL,
    "initiated_by" INTEGER NOT NULL,
    "target_table" TEXT NOT NULL,
    "target_record_id" INTEGER,
    "action_data" JSONB NOT NULL,
    "reason" TEXT,
    "status" "ActionStatus" NOT NULL DEFAULT 'pending',
    "expires_at" TIMESTAMP(3) NOT NULL DEFAULT (NOW() + INTERVAL '24 hours'),
    "approved_by" INTEGER,
    "approved_at" TIMESTAMP(3),
    "completed_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pending_actions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rollback_history" (
    "id" SERIAL NOT NULL,
    "audit_log_id" INTEGER NOT NULL,
    "pending_action_id" INTEGER,
    "initiated_by" INTEGER NOT NULL,
    "approved_by" INTEGER,
    "status" "RollbackStatus" NOT NULL,
    "error_message" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rollback_history_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "application_categories_name_key" ON "application_categories"("name");

-- CreateIndex
CREATE INDEX "laser_applications_laser_id_idx" ON "laser_applications"("laser_id");

-- CreateIndex
CREATE INDEX "laser_applications_category_id_idx" ON "laser_applications"("category_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_role_is_active_idx" ON "users"("role", "is_active");

-- CreateIndex
CREATE UNIQUE INDEX "access_codes_code_hash_key" ON "access_codes"("code_hash");

-- CreateIndex
CREATE INDEX "access_codes_code_hash_idx" ON "access_codes"("code_hash");

-- CreateIndex
CREATE INDEX "access_codes_is_active_expires_at_idx" ON "access_codes"("is_active", "expires_at");

-- CreateIndex
CREATE INDEX "access_codes_created_by_idx" ON "access_codes"("created_by");

-- CreateIndex
CREATE INDEX "audit_log_user_id_idx" ON "audit_log"("user_id");

-- CreateIndex
CREATE INDEX "audit_log_table_name_record_id_idx" ON "audit_log"("table_name", "record_id");

-- CreateIndex
CREATE INDEX "audit_log_created_at_idx" ON "audit_log"("created_at" DESC);

-- CreateIndex
CREATE INDEX "audit_log_action_idx" ON "audit_log"("action");

-- CreateIndex
CREATE INDEX "pending_actions_status_expires_at_idx" ON "pending_actions"("status", "expires_at");

-- CreateIndex
CREATE INDEX "pending_actions_initiated_by_idx" ON "pending_actions"("initiated_by");

-- CreateIndex
CREATE INDEX "pending_actions_approved_by_idx" ON "pending_actions"("approved_by");

-- CreateIndex
CREATE INDEX "pending_actions_created_at_idx" ON "pending_actions"("created_at" DESC);

-- CreateIndex
CREATE INDEX "pending_actions_target_table_target_record_id_idx" ON "pending_actions"("target_table", "target_record_id");

-- CreateIndex
CREATE INDEX "rollback_history_audit_log_id_idx" ON "rollback_history"("audit_log_id");

-- CreateIndex
CREATE INDEX "rollback_history_pending_action_id_idx" ON "rollback_history"("pending_action_id");

-- CreateIndex
CREATE INDEX "rollback_history_initiated_by_idx" ON "rollback_history"("initiated_by");

-- CreateIndex
CREATE INDEX "rollback_history_created_at_idx" ON "rollback_history"("created_at" DESC);

-- CreateIndex
CREATE INDEX "lasers_manufacturer_id_idx" ON "lasers"("manufacturer_id");

-- CreateIndex
CREATE INDEX "lasers_wavelength_nominal_nm_idx" ON "lasers"("wavelength_nominal_nm");

-- CreateIndex
CREATE INDEX "lasers_power_mw_idx" ON "lasers"("power_mw");

-- CreateIndex
CREATE INDEX "lasers_model_name_idx" ON "lasers"("model_name");

-- CreateIndex
CREATE INDEX "manufacturers_name_idx" ON "manufacturers"("name");

-- AddForeignKey
ALTER TABLE "laser_applications" ADD CONSTRAINT "laser_applications_laser_id_fkey" FOREIGN KEY ("laser_id") REFERENCES "lasers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "laser_applications" ADD CONSTRAINT "laser_applications_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "application_categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "access_codes" ADD CONSTRAINT "access_codes_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audit_log" ADD CONSTRAINT "audit_log_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pending_actions" ADD CONSTRAINT "pending_actions_initiated_by_fkey" FOREIGN KEY ("initiated_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pending_actions" ADD CONSTRAINT "pending_actions_approved_by_fkey" FOREIGN KEY ("approved_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rollback_history" ADD CONSTRAINT "rollback_history_audit_log_id_fkey" FOREIGN KEY ("audit_log_id") REFERENCES "audit_log"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rollback_history" ADD CONSTRAINT "rollback_history_pending_action_id_fkey" FOREIGN KEY ("pending_action_id") REFERENCES "pending_actions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rollback_history" ADD CONSTRAINT "rollback_history_initiated_by_fkey" FOREIGN KEY ("initiated_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rollback_history" ADD CONSTRAINT "rollback_history_approved_by_fkey" FOREIGN KEY ("approved_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
