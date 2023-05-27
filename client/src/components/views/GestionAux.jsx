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
  Select,
  Option,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { AiFillEdit, AiFillDelete, AiFillEye } from "react-icons/ai";

//Head de la tablas
const TABLE_HEAD = [
  "Id",
  "Nombre",
  "Apellido",
  "Telefono",
  "Direccion",
  "Usuario",
  "",
];

export const GestionAux = () => {
  
  //View auxiliar
  const View = async (
    idA,
    nombreA,
    apellidoA,
    telefonoA,
    direccionA,
    cargoA,
    usuarioA,
    contraseñaA
  ) => {
    ObtenerDatos(
      idA,
      nombreA,
      apellidoA,
      telefonoA,
      direccionA,
      cargoA,
      usuarioA,
      contraseñaA
    );

    handleOpenV();
  };
  
  
  
  //Editar Auxiliar
  const Edit = async (
    idA,
    nombreA,
    apellidoA,
    telefonoA,
    direccionA,
    cargoA,
    usuarioA,
    contraseñaA
  ) => {
    ObtenerDatos(
      idA,
      nombreA,
      apellidoA,
      telefonoA,
      direccionA,
      cargoA,
      usuarioA,
      contraseñaA
    );

    handleOpenE();
  };

  const ObtenerDatos = async (
    idA,
    nombreA,
    apellidoA,
    telefonoA,
    direccionA,
    cargoA,
    usuarioA,
    contraseñaA
  ) => {
    setAux({
      id: idA,
      nombre: nombreA,
      apellido: apellidoA,
      telefono: telefonoA,
      direccion: direccionA,
      cargo: cargoA,
      usuario: usuarioA,
      contraseña: contraseñaA,
    });
  };

  const handleEdit = async (e) => {
    try {
      e.preventDefault();

      const res = await fetch("http://localhost:4000/api/persona", {
        method: "PUT",
        body: JSON.stringify(Aux),
        headers: { "Content-Type": "application/json" },
      });

      handleOpenE();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  //Crear Auxiliar
  const [Aux, setAux] = useState({
    id: "",
    nombre: "",
    apellido: "",
    telefono: "",
    direccion: "",
    cargo: "Auxiliar",
    usuario: "",
    contraseña: "",
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const res = await fetch("http://localhost:4000/api/persona", {
        method: "POST",
        body: JSON.stringify(Aux),
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
    setAux({ ...Aux, [e.target.name]: e.target.value });
  };

  //Eliminar Auxiliar
  const [eliminarAux, setEliminarAux] = useState(null);

  const Delete = async (id) => {
    setEliminarAux(id);
    handleOpenD();
  };

  const handleDelete = async () => {
    const res = await fetch(
      `http://localhost:4000/api/persona/${eliminarAux}`,
      {
        method: "DELETE",
      }
    );

    setEliminarAux(null);

    window.location.reload();
  };

  //Mostrar Aux en la tablas
  const [Auxiliares, setAuxiliares] = useState([]);
  const cargarAux = async () => {
    const response = await fetch("http://localhost:4000/api/persona");
    const data = await response.json();
    setAuxiliares(data);
  };

  useEffect(() => {
    cargarAux();
  }, []);

  //Estado - Crear Aux
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  //Estado - Eliminar Aux
  const [openD, setOpenD] = useState(false);
  const handleOpenD = () => setOpenD(!openD);

  //Estado - Editar Aux
  const [openE, setOpenE] = useState(false);
  const handleOpenE = () => setOpenE(!openE);

  //Estado - View Aux
  const [openV, setOpenV] = useState(false);
  const handleOpenV = () => setOpenV(!openV);

  return (
    <>
      <div className=" mt-3 ml-2">
        <h1 className="text-2xl font-bold">Gestion Auxiliares</h1>
      </div>
      <div className="flex justify-end mt-10 mr-5">
        <Button onClick={handleOpen}>Crear Auxiliar</Button>
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
            {Auxiliares.map(
              (
                {
                  id,
                  nombre,
                  apellido,
                  telefono,
                  direccion,
                  cargo,
                  usuario,
                  contraseña,
                },
                index
              ) => {
                const isLast = index === Auxiliares.length - 1;
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
                        {nombre}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {apellido}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {telefono}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {direccion}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {usuario}
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
                        <AiFillEye size={25} className="mr-2"  onClick={() =>
                            View(
                              id,
                              nombre,
                              apellido,
                              telefono,
                              direccion,
                              cargo,
                              usuario,
                              contraseña
                            )
                          }></AiFillEye>
                        <AiFillEdit
                          size={25}
                          className="mr-2"
                          onClick={() =>
                            Edit(
                              id,
                              nombre,
                              apellido,
                              telefono,
                              direccion,
                              cargo,
                              usuario,
                              contraseña
                            )
                          }
                        ></AiFillEdit>
                        <AiFillDelete
                          size={25}
                          onClick={() => Delete(id)}
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

      {/* Modal - View Aux       */}
      <Fragment>
        <Dialog open={openV} handler={handleOpenV}>
          <div className="flex items-center justify-between">
            <DialogHeader>Ver Auxiliar</DialogHeader>
            <XMarkIcon className="mr-3 h-5 w-5" onClick={handleOpenV} />
          </div>
          <DialogBody divider>
            <div className="grid gap-6">
              <Input
                label="Id"
                type="number"
                onChange={handleChange}
                name="id"
                value={Aux.id}
                disabled
              />
              <Input
                label="Nombre"
                type="text"
                value={Aux.nombre}
                onChange={handleChange}
                name="nombre"
                disabled
              />

              <Input
                label="Apellido"
                type="text"
                value={Aux.apellido}
                onChange={handleChange}
                name="apellido"
                disabled
              />
              <Input
                label="Telefono"
                type="number"
                value={Aux.telefono}
                onChange={handleChange}
                name="telefono"
                disabled
              />
              <Input
                label="Dirección"
                type="text"
                value={Aux.direccion}
                onChange={handleChange}
                name="direccion"
                disabled
              />

              <Input
                label="Cargo"
                type="text"
                value={Aux.cargo}
                onChange={handleChange}
                name="cargo"
                disabled
              />
              <Input
                label="Usuario"
                type="text"
                value={Aux.usuario}
                onChange={handleChange}
                name="usuario"
                disabled
              />

              <Input
                label="Contraseña"
                type="text"
                value={Aux.contraseña}
                onChange={handleChange}
                name="contraseña"
                disabled
              />
            </div>
          </DialogBody>
          {/* <DialogFooter className="space-x-2">
            <Button variant="outlined" color="red" onClick={handleOpenE}>
              Cancelar
            </Button>
            <Button variant="gradient" color="green" onClick={handleEdit}>
              Guardar
            </Button>
          </DialogFooter> */}
        </Dialog>
      </Fragment>

      {/* Modal - Crear Aux       */}
      <Fragment>
        <Dialog open={open} handler={handleOpen}>
          <div className="flex items-center justify-between">
            <DialogHeader>Crear Auxiliar</DialogHeader>
            <XMarkIcon className="mr-3 h-5 w-5" onClick={handleOpen} />
          </div>
          <DialogBody divider>
            <div className="grid gap-6">
              <Input
                label="Id"
                type="number"
                onChange={handleChange}
                name="id"
              />
              <Input
                label="Nombre"
                type="text"
                onChange={handleChange}
                name="nombre"
              />
              <Input
                label="Apellido"
                type="text"
                onChange={handleChange}
                name="apellido"
              />
              <Input
                label="Telefono"
                type="number"
                onChange={handleChange}
                name="telefono"
              />
              <Input
                label="Dirección"
                type="text"
                onChange={handleChange}
                name="direccion"
              />

              <Input
                label="Usuario"
                type="text"
                onChange={handleChange}
                name="usuario"
              />
              <Input
                label="Contraseña"
                type="text"
                onChange={handleChange}
                name="contraseña"
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

      {/* Modal - Edit Aux       */}
      <Fragment>
        <Dialog open={openE} handler={handleOpenE}>
          <div className="flex items-center justify-between">
            <DialogHeader>Editar Auxiliar</DialogHeader>
            <XMarkIcon className="mr-3 h-5 w-5" onClick={handleOpenE} />
          </div>
          <DialogBody divider>
            <div className="grid gap-6">
              <Input
                label="Id"
                type="number"
                onChange={handleChange}
                name="id"
                value={Aux.id}
                disabled
              />
              <Input
                label="Nombre"
                type="text"
                value={Aux.nombre}
                onChange={handleChange}
                name="nombre"
              />

              <Input
                label="Apellido"
                type="text"
                value={Aux.apellido}
                onChange={handleChange}
                name="apellido"
              />
              <Input
                label="Telefono"
                type="number"
                value={Aux.telefono}
                onChange={handleChange}
                name="telefono"
              />
              <Input
                label="Dirección"
                type="text"
                value={Aux.direccion}
                onChange={handleChange}
                name="direccion"
              />

              <Input
                label="Cargo"
                type="text"
                value={Aux.cargo}
                onChange={handleChange}
                name="cargo"
              />
              <Input
                label="Usuario"
                type="text"
                value={Aux.usuario}
                onChange={handleChange}
                name="usuario"
              />

              <Input
                label="Contraseña"
                type="text"
                value={Aux.contraseña}
                onChange={handleChange}
                name="contraseña"
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

      {/* Modal - Eliminar Aux       */}
      <Fragment>
        <Dialog open={openD} handler={handleOpenD}>
          <DialogHeader>Eliminar Auxiliar</DialogHeader>
          <DialogBody divider>
            Esta seguro que desea eliminar este Auxiliar?
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
