import express from "express";
import AutorController from "../controllers/autoresController.js";

const routes = express.Router();

routes.get("/autores", AutorController.listarAutores);
routes.post("/autores", AutorController.cadastrarAutor);
routes.get("/autores/:id", AutorController.listarAutorPorId);
routes.delete("/autores/:id", AutorController.excluirAutor);
routes.put("/autores/:id", AutorController.atualizarAutor);

export default routes;
