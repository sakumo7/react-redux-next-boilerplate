const nextRoutes = require("next-routes");

const routes = nextRoutes();

routes.add("index")
routes.add("cart")
routes.add("orders")
module.exports = routes;
