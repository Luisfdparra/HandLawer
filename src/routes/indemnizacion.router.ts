import express from "express";
import * as controller from "../controller/indemnizacion.controller";
import { Indemnizacion } from "../model/indemnizacion";

const router = express.Router();

router.get("/", (_, res) => {
  controller
    .GetIndemnizaciones()
    .then((obj) => {
      res.json(obj);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  controller
    .AddIndemnizacion(req.body as Indemnizacion)
    .then((f) => {
      if (f) res.status(201).send();
      else res.status(500).send();
    })
    .catch((e) => {
      res.status(500).json(e);
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  controller
    .DeleteIndemnizacion(id)
    .then((f) => {
      if (f) res.status(201).send();
      else res.status(500).send();
    })
    .catch((e) => {
      res.status(500).json(e);
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  controller
    .UpdateIndemnizacion(req.body as Indemnizacion, id)
    .then((f) => {
      if (f) res.status(201).send();
      else res.status(500).send();
    })
    .catch((e) => {
      res.status(500).json(e);
    });
});

export default router;
