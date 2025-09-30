import { NextResponse } from 'next/server';

export async function GET() {
  const GITHUB_API_URL = 'https://api.github.com/repos/SnP-Potato/Live-Peninsula-Release/releases/latest';
  try {
    const res = await fetch(GITHUB_API_URL);
    if (!res.ok) throw new Error('Failed to fetch release info');

    const releaseData = await res.json();

    const asset = releaseData.assets?.[0];
    if (!asset) throw new Error('No release assets found');

    const assetRes = await fetch(asset.browser_download_url);
    if (!assetRes.ok) throw new Error('Failed to download asset');

    const buffer = await assetRes.arrayBuffer();

    return new NextResponse(buffer, {
      headers: {
        'Content-Disposition': 'attachment; filename="Live Peninsula.dmg"',
        'Content-Type': 'application/x-apple-diskimage',
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}