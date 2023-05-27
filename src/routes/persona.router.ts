import express from "express";
import * as controller from "../controller/persona.controller";
import { Persona } from "../model/persona";

const router = express.Router();

router.get("/", (_, res) => {
  controller
    .GetPersonas()
    .then((obj) => {
      res.json(obj);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  controller
    .AddPersona(req.body as Persona)
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
    .DeletePersona(id)
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
    .UpdatePersona(req.body as Persona)
    .then((f) => {
      if (f) res.status(201).send();
      else res.status(500).send();
    })
    .catch((e) => {
      res.status(500).json(e);
    });
});



export default router;
