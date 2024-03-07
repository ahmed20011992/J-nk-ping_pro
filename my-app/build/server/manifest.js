const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.XrqTU6yO.js","app":"_app/immutable/entry/app.B9qI2Y8J.js","imports":["_app/immutable/entry/start.XrqTU6yO.js","_app/immutable/chunks/entry.I9tii7WU.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.B9qI2Y8J.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DZOlaerS.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-B5pVVDbk.js')),
			__memo(() => import('./chunks/1-DHTaoYk9.js')),
			__memo(() => import('./chunks/2-jnDtq3Iv.js')),
			__memo(() => import('./chunks/3-B9s40AYl.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/store",
				pattern: /^\/store\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
