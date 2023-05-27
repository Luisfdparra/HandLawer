import GetConnection from "../conexion/conexion";
import { Auxiliar } from "../model/auxiliar";

export const ListaAuxiliares = async (): Promise<Auxiliar[]> => {
  try {
    let sql = "SELECT * FROM auxiliar;";
    const pool = await GetConnection();
    let rs = await pool.query<Auxiliar>(sql);

    if (rs != undefined) {
      return rs.recordset;
    }
    return [];
  } catch (error) {
    throw error;
  }
};

export async function CrearAuxiliar(p: Auxiliar): Promise<boolean> {
  try {
    let sql = `INSERT INTO auxiliar VALUES ('${p.id}' , '${p.nombre}', '${p.apellido}' , '${p.telefono}', '${p.direccion}', '${p.cargo}')`;
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

export async function EliminarAuxiliar(p: String): Promise<boolean> {
  try {
    let sql = `DELETE FROM auxiliar WHERE id = ('${p}')`;
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

export async function UpdateAuxiliar(p: Auxiliar): Promise<boolean> {
  try {
    let sql = `UPDATE auxiliar SET nombre = ('${p.nombre}'), apellido = ('${p.apellido}'), telefono = ('${p.telefono}'), direccion = ('${p.direccion}'), cargo = ('${p.cargo}')   WHERE id = ('${p.id}')`;
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
