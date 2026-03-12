export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const { event, impact, actor, source } = req.body || {};

  const response = await fetch(
    "https://vncmkxnzbzkhuhsgyeyxq.supabase.co/rest/v1/recursum_engrams",
    {
      method: "POST",
      headers: {
        apikey: process.env.SUPABASE_SERVICE_KEY,
        Authorization: `Bearer ${process.env.SUPABASE_SERVICE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal"
      },
      body: JSON.stringify({
        event,
        impact,
        actor,
        source
      })
    }
  );

  const text = await response.text();

  return res.status(200).json({
    status: "engram stored",
    supabase: text
  });

}
