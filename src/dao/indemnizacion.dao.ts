import GetConnection from "../conexion/conexion";
import { Indemnizacion } from "../model/indemnizacion";

export const ListaIndemnizacion = async (): Promise<Indemnizacion[]> => {
  try {
    let sql = "SELECT * FROM indemnizacion;";
    const pool = await GetConnection();
    let rs = await pool.query<Indemnizacion>(sql);

    if (rs != undefined) {
      return rs.recordset;
    }
    return [];
  } catch (error) {
    throw error;
  }
};

export async function CrearIndemnizacion(p: Indemnizacion): Promise<boolean> {
  try {
    let sql = `INSERT INTO indemnizacion VALUES ('${p.idCliente}' , '${p.nombresCliente}', '${p.telefonoCliente}' , '${p.direccionCliente}', '${p.tipo}' ,'${p.valorRenta}', '${p.meses}', '${p.interes}','${p.valorTotal}')`;
    const pool = await GetConnection();
    let rs = await pool.query(sql);

    console.log(p);
    if (rs != undefined) {
      return rs.rowsAffected.length == 2;
    }
    return false;
  } catch (error) {
    console.log(p);
    throw error;
  }
}

export async function EliminarIndemnizacion(p: String): Promise<boolean> {
  try {
    let sql = `DELETE FROM indemnizacion WHERE id = ('${p}')`;
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

export async function UpdateIndemnizacion(
  p: Indemnizacion,
  id: String
): Promise<boolean> {
  try {
    let sql = `UPDATE indemnizacion SET nombres_cliente = ('${p.nombresCliente}') WHERE id = ('${id}')`;
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
