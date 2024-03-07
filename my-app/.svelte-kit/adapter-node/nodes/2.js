import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.C0Nm7Thr.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DZOlaerS.js"];
export const stylesheets = [];
export const fonts = [];
