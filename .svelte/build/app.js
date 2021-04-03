import { ssr } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.ico\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

set_paths({"base":"","assets":"/."});

// allow paths to be overridden in svelte-kit start
export function init({ paths, prerendering }) {
	set_paths(paths);
	set_prerendering(prerendering);
}

const d = decodeURIComponent;
const empty = () => ({});

const components = [
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/products/index.svelte"),
	() => import("../../src/routes/login.svelte")
];



const client_component_lookup = {".svelte/build/runtime/internal/start.js":"start-627bc389.js","src/routes/index.svelte":"pages/index.svelte-b4bd57b2.js","src/routes/products/index.svelte":"pages/products/index.svelte-84184d73.js","src/routes/login.svelte":"pages/login.svelte-7a613608.js"};

const manifest = {
	assets: [{"file":"favicon.ico","size":1150,"type":"image/vnd.microsoft.icon"},{"file":"robots.txt","size":67,"type":"text/plain"}],
	layout: () => import("../../src/routes/$layout.svelte"),
	error: () => import("./components/error.svelte"),
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						parts: [{ id: "src/routes/index.svelte", load: components[0] }],
						css: ["assets/start-b131da15.css", "assets/pages/index.svelte-f0b0126f.css"],
						js: ["start-627bc389.js", "chunks/vendor-6af81d39.js", "chunks/auth.store-5022b676.js", "pages/index.svelte-b4bd57b2.js"]
					},
		{
						type: 'page',
						pattern: /^\/products\/?$/,
						params: empty,
						parts: [{ id: "src/routes/products/index.svelte", load: components[1] }],
						css: ["assets/start-b131da15.css"],
						js: ["start-627bc389.js", "chunks/vendor-6af81d39.js", "chunks/auth.store-5022b676.js", "pages/products/index.svelte-84184d73.js"]
					},
		{
						type: 'page',
						pattern: /^\/login\/?$/,
						params: empty,
						parts: [{ id: "src/routes/login.svelte", load: components[2] }],
						css: ["assets/start-b131da15.css", "assets/pages/login.svelte-43a88675.css"],
						js: ["start-627bc389.js", "chunks/vendor-6af81d39.js", "chunks/auth.store-5022b676.js", "pages/login.svelte-7a613608.js"]
					}
	]
};

const get_hooks = hooks => ({
	getContext: hooks.getContext || (() => ({})),
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || ((request, render) => render(request))
});

const hooks = get_hooks(user_hooks);

export function render(request, {
	paths = {"base":"","assets":"/."},
	local = false,
	only_render_prerenderable_pages = false,
	get_static_file
} = {}) {
	return ssr({
		...request,
		host: request.headers["host"]
	}, {
		paths,
		local,
		template,
		manifest,
		target: "#svelte",
		entry: "/./_app/start-627bc389.js",
		root,
		hooks,
		dev: false,
		amp: false,
		only_render_prerenderable_pages,
		app_dir: "_app",
		get_component_path: id => "/./_app/" + client_component_lookup[id],
		get_stack: error => error.stack,
		get_static_file,
		get_amp_css: dep => amp_css_lookup[dep],
		ssr: true,
		router: true,
		hydrate: true
	});
}