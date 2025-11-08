import { Hono } from 'https://deno.land/x/hono/mod.ts';
import { serveStatic } from 'https://deno.land/x/hono/middleware.ts';
import authRoutes from './routes/index.ts';
import { render } from './utils/render.ts';

const app = new Hono();

app.get('/', (c) => render(c, 'home', { title: 'Welcome' }));
app.route('/auth', authRoutes);
app.use('/static/*', serveStatic({ root: './public' }));

Deno.serve(app.fetch);
