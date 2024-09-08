-- CreateTable
CREATE TABLE "electronics" (
    "id" SERIAL NOT NULL,
    "brand" VARCHAR(100),
    "model" VARCHAR(255),
    "screen_size" VARCHAR(50),
    "color" VARCHAR(50),
    "harddisk" VARCHAR(50),
    "cpu" VARCHAR(100),
    "ram" VARCHAR(50),
    "os" VARCHAR(100),
    "special_features" TEXT,
    "graphics" VARCHAR(100),
    "graphics_coprocessor" VARCHAR(100),
    "cpu_speed" VARCHAR(50),
    "rating" DECIMAL(2,1),
    "price" VARCHAR(50),

    CONSTRAINT "electronics_pkey" PRIMARY KEY ("id")
);
