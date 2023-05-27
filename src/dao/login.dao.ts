import GetConnection from "../conexion/conexion";
import { Login } from "../model/login";
import { Persona } from "../model/persona";

export async function Ingresar(p: Login): Promise<Persona[]> {
  try {
    let sql = `SELECT * FROM persona WHERE usuario =  ('${p.username}') AND contraseña = ('${p.contraseña}');`;
    const pool = await GetConnection();
    let rs = await pool.query(sql);
    if (rs.recordset.length == 1) {
      return rs.recordset.at(0);
    }


    return JSON.parse('{"message": "Usuario incorrecto"}');
  } catch (error) {
    throw error;
  }
}
