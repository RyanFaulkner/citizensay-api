import { addRoute } from "meteor/citizensay:core";
import { Swagger } from "./lib/swagger";

addRoute({
    path: "/api",
    component: Swagger
});