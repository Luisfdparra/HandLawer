import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import axios from "axios";
export const Login = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    username: "",
    contraseña: "",
  });

  // const handleSubmit = async (e) => {
  //   try {
  //     e.preventDefault();

  //     const res = await fetch("http://localhost:4000/login", {
  //       method: "POST",
  //       body: JSON.stringify(login),
  //       headers: { "Content-Type": "application/json" },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data.fields[0]);
  //         // const jsonEstado = { encontrado: true };
  //         // const Data = JSON.stringify(data);
  //         // const Estado = JSON.stringify(jsonEstado);
  //         // if (Data == Estado) {
  //         //   navigate("/api");
  //         // }else{
  //         //     alert("Usuario incorrecto")
  //         // }
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();

      axios.post("http://localhost:4000/login", login).then((response) => {
        if (response.data.message) {
          alert("Credenciales incorrectas");
        } else {
          let user = response.data.cargo;

          if (user == "Administrador") {
            navigate("/api/admin");
          }
          if (user == "Auxiliar") {
            navigate("/api/aux");
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  return (
    <Card
      color="transparent"
      shadow={false}
      className="flex items-center mt-20"
    >
      <Typography variant="h4" color="blue-gray">
        Login
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Ingrese sus datos
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 flex flex-col gap-6">
          <Input
            size="lg"
            label="Username"
            onChange={handleChange}
            name="username"
          />
          <Input
            type="password"
            size="lg"
            label="Password"
            onChange={handleChange}
            name="contraseña"
          />
        </div>

        <Button type="submit" className="mt-6" fullWidth>
          Login
        </Button>
      </form>
    </Card>
  );
};
