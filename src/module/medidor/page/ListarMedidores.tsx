import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

// Datos iniciales de ejemplo
const medidoresIniciales = [
  {
    codigoCliente: "C001",
    ci: "12345678",
    nombre: "Juan",
    apellidoPaterno: "Pérez",
    apellidoMaterno: "Gómez",
    numeroMedidor: "M001",
    tarifa: "Básica",
    direccion: "Av. Siempre Viva 123",
    estado: "activo",
  },
  {
    codigoCliente: "C002",
    ci: "87654321",
    nombre: "María",
    apellidoPaterno: "López",
    apellidoMaterno: "Ramírez",
    numeroMedidor: "M002",
    tarifa: "Premium",
    direccion: "Calle Falsa 456",
    estado: "activo",
  },
  {
    codigoCliente: "C003",
    ci: "11223344",
    nombre: "Carlos",
    apellidoPaterno: "Sánchez",
    apellidoMaterno: "Torres",
    numeroMedidor: "M003",
    tarifa: "Industrial",
    direccion: "Av. Central 789",
    estado: "activo",
  },
];

export const ListarMedidores = () => {
  const [medidores, setMedidores] = useState(medidoresIniciales);

  // Función para eliminar un medidor
  const handleEliminar = (index: number) => {
    if (window.confirm("¿Está seguro de eliminar este medidor?")) {
      const nuevosMedidores = [...medidores];
      nuevosMedidores.splice(index, 1);
      setMedidores(nuevosMedidores);
    }
  };

  // Función para editar un medidor (aquí solo mostramos un ejemplo con prompt)
  const handleEditar = (index: number) => {
    const medidor = medidores[index];
    const nuevoNombre = window.prompt("Editar nombre", medidor.nombre);
    if (nuevoNombre !== null && nuevoNombre.trim() !== "") {
      const nuevosMedidores = [...medidores];
      nuevosMedidores[index] = { ...medidor, nombre: nuevoNombre };
      setMedidores(nuevosMedidores);
    }
  };

  return (
    <div className="w-full p-4 min-h-screen">
         <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 ms:grid-cols-12 gap-4">
             <div className="md:col-span-8 order-1">
               <TableContainer
                 component={Paper}
                 sx={{ width: "100%", overflowX: "auto" }}
               >
                 <Table
                   sx={{ minWidth: 650 }}
                   size="small"
                   aria-label="tabla responsive"
                 >
                   <TableHead>
                     <TableRow>
                       <TableCell>Código Cliente</TableCell>
                       <TableCell>CI</TableCell>
                       <TableCell>Nombre</TableCell>
                       <TableCell>Apellido Paterno</TableCell>
                       <TableCell>Apellido Materno</TableCell>
                       <TableCell>Dirección</TableCell>
                       <TableCell>Número de Medidor</TableCell>
                       <TableCell>Tarifa</TableCell>
                       <TableCell>Estado</TableCell>
                         <TableCell>Accion</TableCell>
                      
                     </TableRow>
                   </TableHead>
                   <TableBody>
                     {medidores.map((m, idx) => (
                       <TableRow key={idx}>
                         <TableCell>{m.codigoCliente}</TableCell>
                         <TableCell>{m.ci}</TableCell>
                         <TableCell>{m.nombre}</TableCell>
                         <TableCell>{m.apellidoPaterno}</TableCell>
                         <TableCell>{m.apellidoMaterno}</TableCell>
                         <TableCell>{m.direccion}</TableCell>
                         <TableCell>{m.numeroMedidor}</TableCell>
                         <TableCell>{m.tarifa}</TableCell>
                         <TableCell>{m.estado}</TableCell>
                          <TableCell>{m.estado}</TableCell>
                         
                       </TableRow>
                     ))}
                   </TableBody>
                 </Table>
               </TableContainer>
             </div>
           </div>
         </div>
       </div>
  );
};
