export const corsHeaders = {
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Origin': '*',
};
export const jsonHeaders = {
  ...corsHeaders,
  'Content-Type': 'application/json',
};

export const authError = (message: string) => {
  const data = JSON.stringify({ error: message });
  return new Response(data, { status: 401, headers: jsonHeaders });
};
