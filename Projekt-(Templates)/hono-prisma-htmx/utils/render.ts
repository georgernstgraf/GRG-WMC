import { Context } from 'https://deno.land/x/hono/mod.ts';

export const render = (c: Context, view: string, data: object = {}) => {
  return c.html(\`<h1>\${view}</h1><pre>\${JSON.stringify(data, null, 2)}</pre>\`);
};
