import * as universal from '../entries/pages/store/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/store/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/store/+page.js";
export const imports = ["_app/immutable/nodes/3.BohH2t-a.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DZOlaerS.js"];
export const stylesheets = [];
export const fonts = [];
