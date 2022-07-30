import { serve } from "https://deno.land/std@0.150.0/http/server.ts";

function handler(_req: Request) {
  return new Response("Hello, World!");
}

serve(handler);
