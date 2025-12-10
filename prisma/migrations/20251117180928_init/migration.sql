-- CreateTable
CREATE TABLE "manufacturers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT,
    "website" TEXT,

    CONSTRAINT "manufacturers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lasers" (
    "id" SERIAL NOT NULL,
    "model_name" TEXT NOT NULL,
    "manufacturer_id" INTEGER NOT NULL,
    "wavelength_min_nm" DECIMAL(65,30) NOT NULL,
    "wavelength_max_nm" DECIMAL(65,30) NOT NULL,
    "wavelength_nominal_nm" DECIMAL(65,30),
    "power_mw" DECIMAL(65,30),
    "pulse_type" TEXT,
    "pulse_width_ns" DECIMAL(65,30) NOT NULL,
    "rep_rate_hz" DECIMAL(65,30) NOT NULL,
    "beam_quality_m2" DECIMAL(65,30) NOT NULL,
    "diode_type" TEXT,
    "cooling" TEXT,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lasers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "manufacturers_name_key" ON "manufacturers"("name");

-- AddForeignKey
ALTER TABLE "lasers" ADD CONSTRAINT "lasers_manufacturer_id_fkey" FOREIGN KEY ("manufacturer_id") REFERENCES "manufacturers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
