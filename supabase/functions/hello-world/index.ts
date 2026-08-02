const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve((request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  return Response.json(
    {
      message: "Hello from Supabase Edge Functions!",
      timestamp: new Date().toISOString(),
    },
    { headers: corsHeaders }
  );
});
