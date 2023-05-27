import express from "express";
import * as controller from "../controller/login.controller";
import { Login } from "../model/login";


const router = express.Router();

router.post("/", (req, res) => {
  controller
    .Ingresar(req.body as Login)
    .then((f) => {
      if (f) res.send(f);
      else res.status(404).send();
    })
    .catch((e) => {
      res.status(500).json(e);
    });
});

export default router;
