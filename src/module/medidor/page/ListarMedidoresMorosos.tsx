import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const data = [
  {
    codigoCliente: "C001",
    ci: "12345678",
    nombre: "Juan",
    apellidoPaterno: "Pérez",
    apellidoMaterno: "Gómez",
    direccion: "Av. Siempre Viva 123",
    numeroMedidor: "M001",
    tarifa: "Básica",
    estado: "moroso",
    cantidadLecturas: 5,
  },
  {
    codigoCliente: "C002",
    ci: "87654321",
    nombre: "María",
    apellidoPaterno: "López",
    apellidoMaterno: "Ramírez",
    direccion: "Calle Falsa 456",
    numeroMedidor: "M002",
    tarifa: "Premium",
    estado: "moroso",
    cantidadLecturas: 3,
  },
  {
    codigoCliente: "C003",
    ci: "11223344",
    nombre: "Carlos",
    apellidoPaterno: "Sánchez",
    apellidoMaterno: "Torres",
    direccion: "Av. Central 789",
    numeroMedidor: "M003",
    tarifa: "Industrial",
    estado: "moroso",
    cantidadLecturas: 7,
  },
];

export const ListarMedidoresMorosos = () => {
  const [medidores] = useState(data);

  return (
    <div className="w-full p-4 bg-gray-50 min-h-screen">
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
                    <TableCell>Cantidad Lecturas</TableCell>
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
                      <TableCell>{m.cantidadLecturas}</TableCell>
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
