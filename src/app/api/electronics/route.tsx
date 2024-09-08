"use server";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  try {
    const url = new URL(req.url);
    const brand = url.searchParams.get("brand");
    const model = url.searchParams.get("model");
    const limit = parseInt(url.searchParams.get("limit") || "10");
    const page = parseInt(url.searchParams.get("page") || "1");

    const skip = (page - 1) * limit;

    const filters: any = {};
    if (brand) filters.brand = { contains: brand, mode: "insensitive" };
    if (model) filters.model = { contains: model, mode: "insensitive" };

    const [total, data] = await Promise.all([
      prisma.electronics.count({
        where: filters,
      }),
      prisma.electronics.findMany({
        where: filters,
        skip,
        take: limit,
      }),
    ]);

    return NextResponse.json({
      success: true,
      result: {
        limit,
        page,
        totalPages: Math.ceil(total / limit),
        totalProducts: total,
        data,
      },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong",
      },
      { status: 500 }
    );
  }
};
