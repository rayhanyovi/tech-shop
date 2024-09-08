import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  try {
    // Fetch all brands
    const brands = await prisma.electronics.findMany({
      select: {
        brand: true,
      },
    });

    // Normalize case and get unique brands
    const normalizedBrands = new Set(
      brands.map((item) => item.brand?.toLowerCase()) // Normalize to lowercase
    );

    // Convert the Set to an array
    const uniqueBrands = Array.from(normalizedBrands);

    // If you need to return brands in original case, you should consider additional handling
    // For now, let's return the unique normalized brands
    return NextResponse.json({
      success: true,
      result: {
        data: uniqueBrands,
      },
    });
  } catch (error) {
    console.error("Error fetching brands:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong",
      },
      { status: 500 }
    );
  }
};
