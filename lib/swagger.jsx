import React, { Component } from "react";

import { SwaggerUIBundle } from "swagger-ui-dist";
import "swagger-ui-dist/swagger-ui.css";

export class Swagger extends Component {
    componentDidMount() {
        SwaggerUIBundle({
           url: "https://petstore.swagger.io/v2/swagger.json",
           dom_id: "#swagger-ui"
        });
    }
    render() {
        return <div id="swagger-ui"/>;
    }
}