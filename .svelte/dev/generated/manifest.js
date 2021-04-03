import * as layout from "../../../src/routes/$layout.svelte";

const components = [
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/products/index.svelte"),
	() => import("../../../src/routes/login.svelte")
];

const d = decodeURIComponent;
const empty = () => ({});

export const routes = [
	// src/routes/index.svelte
[/^\/$/, [components[0]]],

// src/routes/products/index.svelte
[/^\/products\/?$/, [components[1]]],

// src/routes/login.svelte
[/^\/login\/?$/, [components[2]]]
];

export { layout };