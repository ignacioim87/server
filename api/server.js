import express from "express";
import ProductRouter from "../routers/product.js";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3002;

// Config body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Config Header HTTP
// https://developer.mozilla.org/es/docs/Web/HTTP/Headers
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); //Indica si la respuesta puede ser compartida.
    res.header(
        "Access-Control-Allow-Headers", //Utilizado como respuesta a una solicitud de validación para indicár qué cabeceras HTTP pueden utilizarse a la hora de lanzar la petición.
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE"); //Especifica el método (o métodos) permitido al acceder al recurso, en respuesta a una petición de validación.
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE"); //Lista el rango de métodos de peticiones HTTP aceptadas por un servidor.
    next();
});

app.use(`/api/v1`, ProductRouter);

app.listen(port);


console.log(`Server started on port ${port}`);