import React, { useEffect, useState, Fragment } from "react";
import {
  Card,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { AiFillEdit, AiFillDelete, AiFillEye } from "react-icons/ai";

//Head de la tablas
const TABLE_HEAD = [
  "Id",
  "Id Cliente",
  "Nombres cliente",
  "Telefono cliente",
  "Tipo indemnizacion",
  "Valor total",
  "",
];

export const GestionInd = () => {
  //View Indemnizacion
  const View = async (
    IdC,
    nombresC,
    telefonoC,
    direccionC,
    tipoI,
    valorRentaI,
    mesesI,
    interesI,
    valorTotalI
  ) => {
    ObtenerDatos(
      IdC,
      nombresC,
      telefonoC,
      direccionC,
      tipoI,
      valorRentaI,
      mesesI,
      interesI,
      valorTotalI
    );

    handleOpenV();
  };

  //Editar Indemnizacion
  const Edit = async (
    id,
    IdC,
    nombresC,
    telefonoC,
    direccionC,
    tipoI,
    valorRentaI,
    mesesI,
    interesI,
    valorTotalI
  ) => {
    setEditarIndemnizacion(id);
    ObtenerDatos(
      IdC,
      nombresC,
      telefonoC,
      direccionC,
      tipoI,
      valorRentaI,
      mesesI,
      interesI,
      valorTotalI
    );

    handleOpenE();
  };

  const ObtenerDatos = async (
    IdC,
    nombresC,
    telefonoC,
    direccionC,
    tipoI,
    valorRentaI,
    mesesI,
    interesI,
    valorTotalI
  ) => {
    setIndemnizacion({
      idCliente: IdC,
      nombresCliente: nombresC,
      telefonoCliente: telefonoC,
      direccionCliente: direccionC,
      tipo: tipoI,
      valorRenta: valorRentaI,
      meses: mesesI,
      interes: interesI,
      valorTotal: valorTotalI,
    });
  };

  const handleEdit = async (e) => {
    try {
      e.preventDefault();

      const res = await fetch(
        `http://localhost:4000/api/Indemnizacion/${editarIndemnizacion}`,
        {
          method: "PUT",
          body: JSON.stringify(Indemnizacion),
          headers: { "Content-Type": "application/json" },
        }
      );

      handleOpenE();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  //Crear Indemnizacion
  const [Indemnizacion, setIndemnizacion] = useState({
    idCliente: "",
    nombresCliente: "",
    telefonoCliente: "",
    direccionCliente: "",
    tipo: "",
    valorRenta: 0,
    meses: 0,
    interes: 0,
    valorTotal: 0,
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const indemnizacion = { ...Indemnizacion };

      let valorT =
        (Indemnizacion.valorRenta *
          (Math.pow(1 + Indemnizacion.interes, Indemnizacion.meses) - 1)) /
        Indemnizacion.interes;

      indemnizacion.valorTotal =
        indemnizacion.valorRenta * indemnizacion.interes;

      // Actualiza el estado con la copia modificada del JSON
      setIndemnizacion(indemnizacion);

      const res = await fetch("http://localhost:4000/api/indemnizacion", {
        method: "POST",
        body: JSON.stringify(indemnizacion),
        headers: { "Content-Type": "application/json" },
      });

      handleOpen();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();

    setIndemnizacion({ ...Indemnizacion, [e.target.name]: e.target.value });
  };

  //Eliminar Indemnizacion
  const [eliminarIndemnizacion, setEliminarIndemnizacion] = useState(null);
  //Eliminar Indemnizacion
  const [editarIndemnizacion, setEditarIndemnizacion] = useState(null);

  const Delete = async (
    id,
    IdC,
    nombresC,
    telefonoC,
    direccionC,
    tipoI,
    valorRentaI,
    mesesI,
    interesI,
    valorTotalI
  ) => {
    setEliminarIndemnizacion(id);
    ObtenerDatos(
      IdC,
      nombresC,
      telefonoC,
      direccionC,
      tipoI,
      valorRentaI,
      mesesI,
      interesI,
      valorTotalI
    );
    handleOpenD();
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `http://localhost:4000/api/Indemnizacion/${eliminarIndemnizacion}`,
      {
        method: "DELETE",
        body: JSON.stringify(Indemnizacion),
        headers: { "Content-Type": "application/json" },
      }
    );

    setEliminarIndemnizacion(null);

    window.location.reload();
  };

  //Mostrar Indemnizacion en la tablas
  const [Indemnizaciones, setIndemnizaciones] = useState([]);
  const cargarIndemnizacion = async () => {
    const response = await fetch("http://localhost:4000/api/indemnizacion");
    const data = await response.json();
    setIndemnizaciones(data);
  };

  useEffect(() => {
    cargarIndemnizacion();
  }, []);

  //Estado - Crear Indemnizacion
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  //Estado - Eliminar Indemnizacion
  const [openD, setOpenD] = useState(false);
  const handleOpenD = () => setOpenD(!openD);

  //Estado - Editar Indemnizacion
  const [openE, setOpenE] = useState(false);
  const handleOpenE = () => setOpenE(!openE);

  //Estado - View Indemnizacion
  const [openV, setOpenV] = useState(false);
  const handleOpenV = () => setOpenV(!openV);

  return (
    <>
      <div className=" mt-3 ml-2">
        <h1 className="text-2xl font-bold">Gestion Indemnizaciones</h1>
      </div>
      <div className="flex justify-end mt-10 mr-5">
        <Button onClick={handleOpen}>Crear Indemnizacion</Button>
      </div>
      <Card className="overflow-scroll  w-full mt-5">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Indemnizaciones.map(
              (
                {
                  id,
                  id_cliente,
                  nombres_cliente,
                  telefono_cliente,
                  direccion_cliente,
                  tipo,
                  valor_renta,
                  meses,
                  interes,
                  valorTotal,
                },
                index
              ) => {
                const isLast = index === Indemnizaciones.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={id}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {id}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {id_cliente}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {nombres_cliente}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {telefono_cliente}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {tipo}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {"$" + valorTotal}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue"
                        className="font-medium flex"
                      >
                        <AiFillEye
                          size={25}
                          className="mr-2"
                          onClick={() =>
                            View(
                              id_cliente,
                              nombres_cliente,
                              telefono_cliente,
                              direccion_cliente,
                              tipo,
                              valor_renta,
                              meses,
                              interes,
                              valorTotal
                            )
                          }
                        ></AiFillEye>
                        <AiFillEdit
                          size={25}
                          className="mr-2"
                          onClick={() =>
                            Edit(id,
                              id_cliente,
                              nombres_cliente,
                              telefono_cliente,
                              direccion_cliente,
                              tipo,
                              valor_renta,
                              meses,
                              interes,
                              valorTotal
                            )
                          }
                        ></AiFillEdit>
                        <AiFillDelete
                          size={25}
                          onClick={() =>
                            Delete(
                              id,
                              id_cliente,
                              nombres_cliente,
                              telefono_cliente,
                              direccion_cliente,
                              tipo,
                              valor_renta,
                              meses,
                              interes,
                              valorTotal
                            )
                          }
                        ></AiFillDelete>
                      </Typography>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </Card>

      {/* Modal - View Indemnizacion       */}
      <Fragment>
        <Dialog open={openV} handler={handleOpenV}>
          <div className="flex items-center justify-between">
            <DialogHeader>Ver Indemnizacion</DialogHeader>
            <XMarkIcon className="mr-3 h-5 w-5" onClick={handleOpenV} />
          </div>
          <DialogBody divider>
            <div className="grid gap-6">
              <Input
                label="Id"
                type="number"
                onChange={handleChange}
                name="id"
                value={Indemnizacion.idCliente}
                disabled
              />
              <Input
                label="Nombre"
                type="text"
                value={Indemnizacion.nombresCliente}
                onChange={handleChange}
                name="nombre"
                disabled
              />

              <Input
                label="Telefono"
                type="text"
                value={Indemnizacion.telefonoCliente}
                onChange={handleChange}
                name="apellido"
                disabled
              />
              <Input
                label="Dirrecion"
                type="number"
                value={Indemnizacion.direccionCliente}
                onChange={handleChange}
                name="telefono"
                disabled
              />
              <Input
                label="Tipo"
                type="text"
                value={Indemnizacion.tipo}
                onChange={handleChange}
                name="direccion"
                disabled
              />

              <Input
                label="Cargo"
                type="text"
                value={Indemnizacion.valorRenta}
                onChange={handleChange}
                name="cargo"
                disabled
              />
              <Input
                label="Usuario"
                type="text"
                value={Indemnizacion.meses}
                onChange={handleChange}
                name="usuario"
                disabled
              />

              <Input
                label="Contraseña"
                type="text"
                value={Indemnizacion.interes}
                onChange={handleChange}
                name="contraseña"
                disabled
              />

              <Input
                label="Contraseña"
                type="text"
                value={Indemnizacion.valorTotal}
                onChange={handleChange}
                name="contraseña"
                disabled
              />
            </div>
          </DialogBody>
        </Dialog>
      </Fragment>

      {/* Modal - Crear Indemnizacion       */}
      <Fragment>
        <Dialog open={open} handler={handleOpen}>
          <div className="flex items-center justify-between">
            <DialogHeader>Crear Indemnizacion</DialogHeader>
            <XMarkIcon className="mr-3 h-5 w-5" onClick={handleOpen} />
          </div>
          <DialogBody divider>
            <div className="grid gap-6">
              <Input
                label="Id cliente"
                type="number"
                onChange={handleChange}
                name="idCliente"
              />
              <Input
                label="Nombres cliente"
                type="text"
                onChange={handleChange}
                name="nombresCliente"
              />
              <Input
                label="Telefono"
                type="number"
                onChange={handleChange}
                name="telefonoCliente"
              />
              <Input
                label="Dirección"
                type="text"
                onChange={handleChange}
                name="direccionCliente"
              />
              <Input
                label="Tipo indemnización"
                type="text"
                onChange={handleChange}
                name="tipo"
              />

              <Input
                label="Valor renta"
                type="number"
                onChange={handleChange}
                name="valorRenta"
              />
              <Input
                label="Cantidad de meses"
                type="number"
                onChange={handleChange}
                name="meses"
              />

              <Input
                label="Interes"
                type="number"
                onChange={handleChange}
                name="interes"
              />
            </div>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="outlined" color="red" onClick={handleOpen}>
              Cancelar
            </Button>
            <Button variant="gradient" color="green" onClick={handleSubmit}>
              Crear
            </Button>
          </DialogFooter>
        </Dialog>
      </Fragment>

      {/* Modal - Edit Indemnizacion       */}
      <Fragment>
        <Dialog open={openE} handler={handleOpenE}>
          <div className="flex items-center justify-between">
            <DialogHeader>Editar Indemnizacion</DialogHeader>
            <XMarkIcon className="mr-3 h-5 w-5" onClick={handleOpenE} />
          </div>
          <DialogBody divider>
            <div className="grid gap-6">
              <Input
                label="Id cliente"
                type="number"
                onChange={handleChange}
                name="idCliente"
                value={Indemnizacion.idCliente}
                disabled
              />
              <Input
                label="Nombres"
                type="text"
                value={Indemnizacion.nombresCliente}
                onChange={handleChange}
                name="nombresCliente"
              />

              <Input
                label="Telefono"
                type="text"
                value={Indemnizacion.telefonoCliente}
                onChange={handleChange}
                name="telefonoCliente"
              />
              <Input
                label="Direccion"
                type="number"
                value={Indemnizacion.direccionCliente}
                onChange={handleChange}
                name="direccionCliente"
              />
              <Input
                label="Tipo indemnización"
                type="text"
                value={Indemnizacion.tipo}
                onChange={handleChange}
                name="tipo"
              />

              <Input
                label="Valor renta"
                type="text"
                value={Indemnizacion.valorRenta}
                onChange={handleChange}
                name="valorRenta"
              />
              <Input
                label="Cantidad meses"
                type="text"
                value={Indemnizacion.meses}
                onChange={handleChange}
                name="meses"
              />

              <Input
                label="Interes"
                type="text"
                value={Indemnizacion.interes}
                onChange={handleChange}
                name="interes"
              />
            </div>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="outlined" color="red" onClick={handleOpenE}>
              Cancelar
            </Button>
            <Button variant="gradient" color="green" onClick={handleEdit}>
              Guardar
            </Button>
          </DialogFooter>
        </Dialog>
      </Fragment>

      {/* Modal - Eliminar Indemnizacion       */}
      <Fragment>
        <Dialog open={openD} handler={handleOpenD}>
          <DialogHeader>Eliminar Indemnizacion</DialogHeader>
          <DialogBody divider>
            Esta seguro que desea eliminar este Indemnizacion?
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpenD}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={handleDelete}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </Fragment>
    </>
  );
};
