import express from "express";
import * as controller from "../controller/auxiliar.controller";
import { Auxiliar } from "../model/auxiliar";

const router = express.Router();

router.get("/", (_, res) => {
  controller
    .GetAuxiliares()
    .then((obj) => {
      res.json(obj);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  controller
    .AddAuxiliar(req.body as Auxiliar)
    .then((f) => {
      if (f) res.send();
      else res.status(500).send();
    })
    .catch((e) => {
      res.status(500).json(e);
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  controller
    .DeleteAuxiliar(id)
    .then((f) => {
      if (f) res.status(201).send();
      else res.status(500).send();
    })
    .catch((e) => {
      res.status(500).json(e);
    });
});

router.put("/", (req, res) => {
  controller
    .UpdateAuxiliar(req.body as Auxiliar)
    .then((f) => {
      if (f) res.status(201).send();
      else res.status(500).send();
    })
    .catch((e) => {
      res.status(500).json(e);
    });
});



export default router;
