
import * as DaoIndemnizacion from "../dao/indemnizacion.dao";
import { Indemnizacion } from "../model/indemnizacion";

export const GetIndemnizaciones = async (): Promise<Indemnizacion[]> => {
    try {
        let p: Indemnizacion[] = await DaoIndemnizacion.ListaIndemnizacion();
        return p;
    } catch (error) {
        throw error;
    }
}

export const AddIndemnizacion = async (P: Indemnizacion): Promise<boolean> => {
    try {
        return DaoIndemnizacion.CrearIndemnizacion(P);
    } catch (error) {
        throw error;
    }
}

export const DeleteIndemnizacion = async (P: String): Promise<boolean> => {
    try {
        return DaoIndemnizacion.EliminarIndemnizacion(P);
    } catch (error) {
        throw error;
    }
}

export const UpdateIndemnizacion = async (P: Indemnizacion, id : String): Promise<boolean> => {
    try {
        return DaoIndemnizacion.UpdateIndemnizacion(P, id);
    } catch (error) {
        throw error;
    }
}

