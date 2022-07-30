import { serve } from "https://deno.land/std@0.150.0/http/server.ts";

const BOOK_ROUTE = new URLPattern({ pathname: "/books/:id" });

function handler(req: Request): Response {
  const match = BOOK_ROUTE.exec(req.url);
  if (match) {
    const id = match.pathname.groups.id;
    return new Response(`Book ${id}`);
  }

  return new Response("Not found", {
    status: 404,
  });
}

serve(handler);
