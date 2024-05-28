import { Router } from "express";
import {
  renderUsuariosForm,
  createNewUsuarios,
  renderUsuarios,
  renderEditUsuarios,
  renderVisualizarUsuarios,
  imprimirUsuarios
} from "../controllers/usuarios.controllers.js";

import { isAuthenticated } from "../helpers/auth.js";
const router = Router();
// New Usuario
router.get("/usuarios/add", isAuthenticated, renderUsuariosForm);
router.post("/usuarios/new-usuarios", isAuthenticated, createNewUsuarios);
// Get All usuarios
router.get("/usuarios", isAuthenticated, renderUsuarios);
// visualizar Usuarios
router.get("/usuarios/visualizar/:id", isAuthenticated, renderVisualizarUsuarios);

//router.put("/usuarios/visualizar-usuarios/:id", isAuthenticated, visualizarUsuarios);

// imprimir Usuarios
router.get("/usuarios/imprimir", isAuthenticated, imprimirUsuarios);

export default router;
