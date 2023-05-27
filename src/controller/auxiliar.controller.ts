import { Auxiliar } from "../model/auxiliar";
import * as DaoAuxiliar from "../dao/auxiliar.dao";

export const GetAuxiliares = async (): Promise<Auxiliar[]> => {
    try {
        let p: Auxiliar[] = await DaoAuxiliar.ListaAuxiliares();
        return p;
    } catch (error) {
        throw error;
    }
}

export const AddAuxiliar = async (P: Auxiliar): Promise<boolean> => {
    try {
        return DaoAuxiliar.CrearAuxiliar(P);
    } catch (error) {
        throw error;
    }
}

export const DeleteAuxiliar = async (P: String): Promise<boolean> => {
    try {
        return DaoAuxiliar.EliminarAuxiliar(P);
    } catch (error) {
        throw error;
    }
}

export const UpdateAuxiliar = async (P: Auxiliar): Promise<boolean> => {
    try {
        return DaoAuxiliar.UpdateAuxiliar(P);
    } catch (error) {
        throw error;
    }
}

