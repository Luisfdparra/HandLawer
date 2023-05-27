import { Persona } from "../model/persona";
import * as DaoPersona from "../dao/persona.dao";

export const GetPersonas = async (): Promise<Persona[]> => {
    try {
        let p: Persona[] = await DaoPersona.ListaPersonas();
        return p;
    } catch (error) {
        throw error;
    }
}

export const AddPersona = async (P: Persona): Promise<boolean> => {
    try {
        return DaoPersona.CrearPersona(P);
    } catch (error) {
        throw error;
    }
}

export const DeletePersona = async (P: String): Promise<boolean> => {
    try {
        return DaoPersona.EliminarPersona(P);
    } catch (error) {
        throw error;
    }
}

export const UpdatePersona = async (P: Persona): Promise<boolean> => {
    try {
        return DaoPersona.UpdatePersona(P);
    } catch (error) {
        throw error;
    }
}

