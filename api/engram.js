export default async function handler(req, res) {

  const { event, impact, actor, source } = req.body;

  await fetch("https://vncmkxnzbzkhuhsgyeyxq.supabase.co/rest/v1/recursum_engrams", {
    method: "POST",
    headers: {
      "apikey": process.env.SUPABASE_SERVICE_KEY,
      "Authorization": `Bearer ${process.env.SUPABASE_SERVICE_KEY}`,
      "Content-Type": "application/json",
      "Prefer": "return=minimal"
    },
    body: JSON.stringify({
      event,
      impact,
      actor,
      source
    })
  });

  res.status(200).json({ status: "engram stored" });

}
