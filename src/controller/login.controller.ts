import * as DaoLogin from "../dao/login.dao";
import { Persona } from "../model/persona";
import { Login } from "../model/login";

export const Ingresar = async (P: Login): Promise<Persona[]> => {
  try {
    return DaoLogin.Ingresar(P);
  } catch (error) {
    throw error;
  }
};
