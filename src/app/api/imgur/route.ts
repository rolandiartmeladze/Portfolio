import { fetchImgurImages } from "@/lib/imgur";
import { NextRequest, NextResponse } from "next/server";

const cache: Record<string, unknown> = {};
const lastFetch: Record<string, number> = {};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const albumHash = searchParams.get("album");

  if (!albumHash) {
    return new NextResponse(JSON.stringify({ error: "Missing album hash" }), {
      status: 400,
    });
  }

  const now = Date.now();
  const last = lastFetch[albumHash] || 0;

  if (cache[albumHash] && now - last < 5 * 60 * 1000) {
    return NextResponse.json(cache[albumHash]);
  }

  try {
    const images = await fetchImgurImages(albumHash);
    cache[albumHash] = images;
    lastFetch[albumHash] = now;

    return NextResponse.json(images);
  } catch (error) {
    const err = error as Error;
    return new NextResponse(
      JSON.stringify({ error: err.message || "Unknown error" }),
      { status: 500 },
    );
  }
}
