import { loadMinistriesFromCSV } from "../../lib/loadMinistries";

export async function GET() {
  const ministries = await loadMinistriesFromCSV();
  return new Response(JSON.stringify(ministries), {
    headers: { "Content-Type": "application/json" },
  });
}
