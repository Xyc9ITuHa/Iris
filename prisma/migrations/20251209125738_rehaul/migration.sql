/*
  Warnings:

  - You are about to drop the column `changed_fields` on the `audit_log` table. All the data in the column will be lost.
  - You are about to drop the column `user_agent` on the `audit_log` table. All the data in the column will be lost.
  - You are about to drop the column `beam_quality_m2` on the `lasers` table. All the data in the column will be lost.
  - You are about to drop the column `cooling` on the `lasers` table. All the data in the column will be lost.
  - You are about to drop the column `diode_type` on the `lasers` table. All the data in the column will be lost.
  - You are about to drop the column `power_mw` on the `lasers` table. All the data in the column will be lost.
  - You are about to drop the column `pulse_type` on the `lasers` table. All the data in the column will be lost.
  - You are about to drop the column `pulse_width_ns` on the `lasers` table. All the data in the column will be lost.
  - You are about to drop the column `rep_rate_hz` on the `lasers` table. All the data in the column will be lost.
  - You are about to drop the column `wavelength_max_nm` on the `lasers` table. All the data in the column will be lost.
  - You are about to drop the column `wavelength_min_nm` on the `lasers` table. All the data in the column will be lost.
  - You are about to drop the column `wavelength_nominal_nm` on the `lasers` table. All the data in the column will be lost.
  - The `status` column on the `pending_actions` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `pending_action_id` on the `rollback_history` table. All the data in the column will be lost.
  - You are about to drop the `application_categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `laser_applications` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `role` on the `access_codes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `action` on the `audit_log` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `is_single_mode` to the `lasers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `laser_type` to the `lasers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modulation_type` to the `lasers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `power_output_w` to the `lasers` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `action_type` on the `pending_actions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `status` on the `rollback_history` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `role` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "audit_log" DROP CONSTRAINT "audit_log_user_id_fkey";

-- DropForeignKey
ALTER TABLE "laser_applications" DROP CONSTRAINT "laser_applications_category_id_fkey";

-- DropForeignKey
ALTER TABLE "laser_applications" DROP CONSTRAINT "laser_applications_laser_id_fkey";

-- DropForeignKey
ALTER TABLE "pending_actions" DROP CONSTRAINT "pending_actions_approved_by_fkey";

-- DropForeignKey
ALTER TABLE "rollback_history" DROP CONSTRAINT "rollback_history_approved_by_fkey";

-- DropForeignKey
ALTER TABLE "rollback_history" DROP CONSTRAINT "rollback_history_pending_action_id_fkey";

-- DropIndex
DROP INDEX "access_codes_code_hash_idx";

-- DropIndex
DROP INDEX "access_codes_code_hash_key";

-- DropIndex
DROP INDEX "access_codes_created_by_idx";

-- DropIndex
DROP INDEX "access_codes_is_active_expires_at_idx";

-- DropIndex
DROP INDEX "audit_log_action_idx";

-- DropIndex
DROP INDEX "audit_log_created_at_idx";

-- DropIndex
DROP INDEX "lasers_manufacturer_id_idx";

-- DropIndex
DROP INDEX "lasers_model_name_idx";

-- DropIndex
DROP INDEX "lasers_power_mw_idx";

-- DropIndex
DROP INDEX "lasers_wavelength_nominal_nm_idx";

-- DropIndex
DROP INDEX "manufacturers_name_idx";

-- DropIndex
DROP INDEX "manufacturers_name_key";

-- DropIndex
DROP INDEX "pending_actions_approved_by_idx";

-- DropIndex
DROP INDEX "pending_actions_created_at_idx";

-- DropIndex
DROP INDEX "pending_actions_initiated_by_idx";

-- DropIndex
DROP INDEX "pending_actions_status_expires_at_idx";

-- DropIndex
DROP INDEX "pending_actions_target_table_target_record_id_idx";

-- DropIndex
DROP INDEX "rollback_history_audit_log_id_idx";

-- DropIndex
DROP INDEX "rollback_history_created_at_idx";

-- DropIndex
DROP INDEX "rollback_history_initiated_by_idx";

-- DropIndex
DROP INDEX "rollback_history_pending_action_id_idx";

-- DropIndex
DROP INDEX "users_email_idx";

-- DropIndex
DROP INDEX "users_role_is_active_idx";

-- AlterTable
ALTER TABLE "access_codes" DROP COLUMN "role",
ADD COLUMN     "role" TEXT NOT NULL,
ALTER COLUMN "expires_at" DROP NOT NULL,
ALTER COLUMN "max_uses" DROP NOT NULL,
ALTER COLUMN "max_uses" DROP DEFAULT,
ALTER COLUMN "created_at" DROP NOT NULL,
ALTER COLUMN "created_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "audit_log" DROP COLUMN "changed_fields",
DROP COLUMN "user_agent",
ALTER COLUMN "user_id" DROP NOT NULL,
ALTER COLUMN "record_id" DROP NOT NULL,
DROP COLUMN "action",
ADD COLUMN     "action" TEXT NOT NULL,
ALTER COLUMN "created_at" DROP NOT NULL,
ALTER COLUMN "created_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "lasers" DROP COLUMN "beam_quality_m2",
DROP COLUMN "cooling",
DROP COLUMN "diode_type",
DROP COLUMN "power_mw",
DROP COLUMN "pulse_type",
DROP COLUMN "pulse_width_ns",
DROP COLUMN "rep_rate_hz",
DROP COLUMN "wavelength_max_nm",
DROP COLUMN "wavelength_min_nm",
DROP COLUMN "wavelength_nominal_nm",
ADD COLUMN     "application" TEXT,
ADD COLUMN     "cooling_method" TEXT,
ADD COLUMN     "is_single_mode" BOOLEAN NOT NULL,
ADD COLUMN     "laser_type" TEXT NOT NULL,
ADD COLUMN     "modulation_type" TEXT NOT NULL,
ADD COLUMN     "power_consumption_w" DECIMAL(65,30),
ADD COLUMN     "power_output_w" DECIMAL(65,30) NOT NULL,
ALTER COLUMN "created_at" DROP NOT NULL,
ALTER COLUMN "created_at" DROP DEFAULT,
ALTER COLUMN "updated_at" DROP NOT NULL,
ALTER COLUMN "updated_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "manufacturers" ADD COLUMN     "contact_email" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3),
ALTER COLUMN "created_at" DROP NOT NULL,
ALTER COLUMN "created_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "pending_actions" DROP COLUMN "action_type",
ADD COLUMN     "action_type" TEXT NOT NULL,
ALTER COLUMN "action_data" DROP NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'pending',
ALTER COLUMN "expires_at" DROP NOT NULL,
ALTER COLUMN "expires_at" DROP DEFAULT,
ALTER COLUMN "created_at" DROP NOT NULL,
ALTER COLUMN "created_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "rollback_history" DROP COLUMN "pending_action_id",
DROP COLUMN "status",
ADD COLUMN     "status" TEXT NOT NULL,
ALTER COLUMN "created_at" DROP NOT NULL,
ALTER COLUMN "created_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "role",
ADD COLUMN     "role" TEXT NOT NULL,
ALTER COLUMN "created_at" DROP NOT NULL,
ALTER COLUMN "created_at" DROP DEFAULT,
ALTER COLUMN "updated_at" DROP NOT NULL,
ALTER COLUMN "updated_at" DROP DEFAULT;

-- DropTable
DROP TABLE "application_categories";

-- DropTable
DROP TABLE "laser_applications";

-- DropEnum
DROP TYPE "ActionStatus";

-- DropEnum
DROP TYPE "ActionType";

-- DropEnum
DROP TYPE "AuditAction";

-- DropEnum
DROP TYPE "RollbackStatus";

-- DropEnum
DROP TYPE "UserRole";

-- CreateTable
CREATE TABLE "wavelength_specs" (
    "id" SERIAL NOT NULL,
    "laser_id" INTEGER NOT NULL,
    "wavelength_base_nm" DECIMAL(65,30) NOT NULL,
    "wavelength_tolerance_nm" DECIMAL(65,30),
    "bandwidth_nm" DECIMAL(65,30),
    "fwhm_nm" DECIMAL(65,30),
    "wavelength_stability_nm_per_c" DECIMAL(65,30),
    "wavelength_tuning_range" TEXT,
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "wavelength_specs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "optical_specs" (
    "id" SERIAL NOT NULL,
    "laser_id" INTEGER NOT NULL,
    "beam_divergence_mrad" DECIMAL(65,30),
    "beam_quality_m2" DECIMAL(65,30),
    "aperture_mm" DECIMAL(65,30),
    "numerical_aperture" DECIMAL(65,30),
    "polarization" TEXT,
    "polarization_ratio_db" DECIMAL(65,30),
    "created_at" TIMESTAMP(3),

    CONSTRAINT "optical_specs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stability_specs" (
    "id" SERIAL NOT NULL,
    "laser_id" INTEGER NOT NULL,
    "power_stability_percent" DECIMAL(65,30),
    "pointing_stability_urad" DECIMAL(65,30),
    "temperature_stability_c" DECIMAL(65,30),
    "warmup_time_min" DECIMAL(65,30),
    "created_at" TIMESTAMP(3),

    CONSTRAINT "stability_specs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "environmental_specs" (
    "id" SERIAL NOT NULL,
    "laser_id" INTEGER NOT NULL,
    "operating_temp_min_c" DECIMAL(65,30),
    "operating_temp_max_c" DECIMAL(65,30),
    "storage_temp_min_c" DECIMAL(65,30),
    "storage_temp_max_c" DECIMAL(65,30),
    "humidity_max_percent" DECIMAL(65,30),
    "protection_class" TEXT,
    "created_at" TIMESTAMP(3),

    CONSTRAINT "environmental_specs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pulse_specs" (
    "id" SERIAL NOT NULL,
    "laser_id" INTEGER NOT NULL,
    "pulse_width_ns" DECIMAL(65,30),
    "pulse_energy_j" DECIMAL(65,30),
    "rep_rate_hz" DECIMAL(65,30),
    "duty_cycle_percent" DECIMAL(65,30),
    "rise_time_ns" DECIMAL(65,30),
    "fall_time_ns" DECIMAL(65,30),
    "created_at" TIMESTAMP(3),

    CONSTRAINT "pulse_specs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "wavelength_specs_laser_id_key" ON "wavelength_specs"("laser_id");

-- CreateIndex
CREATE UNIQUE INDEX "optical_specs_laser_id_key" ON "optical_specs"("laser_id");

-- CreateIndex
CREATE UNIQUE INDEX "stability_specs_laser_id_key" ON "stability_specs"("laser_id");

-- CreateIndex
CREATE UNIQUE INDEX "environmental_specs_laser_id_key" ON "environmental_specs"("laser_id");

-- CreateIndex
CREATE UNIQUE INDEX "pulse_specs_laser_id_key" ON "pulse_specs"("laser_id");

-- CreateIndex
CREATE INDEX "audit_log_created_at_idx" ON "audit_log"("created_at");

-- AddForeignKey
ALTER TABLE "wavelength_specs" ADD CONSTRAINT "wavelength_specs_laser_id_fkey" FOREIGN KEY ("laser_id") REFERENCES "lasers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "optical_specs" ADD CONSTRAINT "optical_specs_laser_id_fkey" FOREIGN KEY ("laser_id") REFERENCES "lasers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stability_specs" ADD CONSTRAINT "stability_specs_laser_id_fkey" FOREIGN KEY ("laser_id") REFERENCES "lasers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "environmental_specs" ADD CONSTRAINT "environmental_specs_laser_id_fkey" FOREIGN KEY ("laser_id") REFERENCES "lasers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pulse_specs" ADD CONSTRAINT "pulse_specs_laser_id_fkey" FOREIGN KEY ("laser_id") REFERENCES "lasers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audit_log" ADD CONSTRAINT "audit_log_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pending_actions" ADD CONSTRAINT "pending_actions_approved_by_fkey" FOREIGN KEY ("approved_by") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rollback_history" ADD CONSTRAINT "rollback_history_approved_by_fkey" FOREIGN KEY ("approved_by") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
