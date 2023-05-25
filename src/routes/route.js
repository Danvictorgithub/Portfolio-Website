import Home from "../views/Home/Home.svelte";
import NotFound from "../views/404/404.svelte";
const routes = {
	'/':Home,
	'*':NotFound,
}
export default routes;