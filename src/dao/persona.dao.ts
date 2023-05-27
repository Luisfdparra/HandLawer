import GetConnection from "../conexion/conexion";
import { Persona } from "../model/persona";

export const ListaPersonas = async (): Promise<Persona[]> => {
    try {
        let sql = "SELECT * FROM Persona WHERE cargo = 'Auxiliar';";
        const pool = await GetConnection();
        let rs = await pool.query<Persona>(sql);

        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export async function CrearPersona(p: Persona): Promise<boolean> {
    try {
        let sql = `INSERT INTO persona VALUES ('${p.id}' , '${p.nombre}', '${p.apellido}' , '${p.telefono}', '${p.direccion}', '${p.cargo}', '${p.usuario}','${p.contraseña}')`;
        const pool = await GetConnection();
        let rs = await pool.query(sql);
        if (rs != undefined) {
            return rs.rowsAffected.length == 2;
        }
        return false;
    } catch (error) {

        console.log("error")
        throw error;
    }
}

export async function EliminarPersona(p: String): Promise<boolean> {
    try {
        let sql = `DELETE FROM persona WHERE id = ('${p}')`;
        const pool = await GetConnection();
        let rs = await pool.query(sql);
        if (rs != undefined) {
            return rs.rowsAffected.length == 2;
        }
        return false;
    } catch (error) {
        throw error;
    }
}

export async function UpdatePersona(p: Persona): Promise<boolean> {
    try {

        
        let sql = `UPDATE persona SET nombre = ('${p.nombre}'), apellido = ('${p.apellido}'), telefono = ('${p.telefono}'), direccion = ('${p.direccion}'), cargo = ('${p.cargo}')   WHERE id = ('${p.id}')`;
        const pool = await GetConnection();
        let rs = await pool.query(sql);
        if (rs != undefined) {
            return rs.rowsAffected.length == 2;
        }
        return false;
    } catch (error) {
        throw error;
    }
}