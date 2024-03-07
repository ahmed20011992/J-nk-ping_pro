import { c as create_ssr_component, e as each, a as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let stores = [];
  return `  <div class="jumbotron jumbotron-fluid" data-svelte-h="svelte-1gfw1p3"><div class="container"><h1 class="display-4">Jönköping Marknad</h1> <a href="/" class="btn btn-ghost btn-xs"><i class="fa fa-home"></i>
          Home</a></div></div> <div class="divider"></div> <div class="w-full max-w-2xl mx-auto">${stores.length === 0 ? `<p data-svelte-h="svelte-qdsr2u">Loading...</p>` : `<table class="table"><thead data-svelte-h="svelte-2qhymi"><tr><th>Name</th> <th>District</th> <th>URL</th></tr></thead> <tbody> ${each(stores, (store) => {
    return `<tr class="hover"><td>${escape(store.name)}</td> <td>${escape(store.district || "N/A")}</td> <td><a href="${"https://" + escape(store.url, true)}" target="_blank">Visit Store</a></td> </tr>`;
  })}</tbody></table>`}</div>`;
});
export {
  Page as default
};
