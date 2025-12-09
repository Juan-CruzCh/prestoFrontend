import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';

// Datos de ejemplo incluyendo la cantidad de lecturas
const medidoresMorososIniciales = [
  {
    codigoCliente: 'C001',
    ci: '12345678',
    nombre: 'Juan',
    apellidoPaterno: 'Pérez',
    apellidoMaterno: 'Gómez',
    numeroMedidor: 'M001',
    tarifa: 'Básica',
    direccion: 'Av. Siempre Viva 123',
    estado: 'moroso',
    cantidadLecturas: 5,
  },
  {
    codigoCliente: 'C002',
    ci: '87654321',
    nombre: 'María',
    apellidoPaterno: 'López',
    apellidoMaterno: 'Ramírez',
    numeroMedidor: 'M002',
    tarifa: 'Premium',
    direccion: 'Calle Falsa 456',
    estado: 'moroso',
    cantidadLecturas: 3,
  },
  {
    codigoCliente: 'C003',
    ci: '11223344',
    nombre: 'Carlos',
    apellidoPaterno: 'Sánchez',
    apellidoMaterno: 'Torres',
    numeroMedidor: 'M003',
    tarifa: 'Industrial',
    direccion: 'Av. Central 789',
    estado: 'moroso',
    cantidadLecturas: 7,
  },
];

export const ListarMedidoresMorosos = () => {
  const [medidores, setMedidores] = useState(medidoresMorososIniciales);

 
  return (
    <TableContainer
      component={Paper}
      style={{ margin: '20px auto', maxWidth: '95%', overflowX: 'auto' }}
    >
      <Table size="small" sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Codigo Cliente</TableCell>
            <TableCell>CI</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido Paterno</TableCell>
            <TableCell>Apellido Materno</TableCell>
            <TableCell>Dirección</TableCell>
            <TableCell>Número de Medidor</TableCell>
            <TableCell>Tarifa</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Cantidad de Lecturas</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {medidores.map((medidor, index) => (
            <TableRow key={index}>
              <TableCell>{medidor.codigoCliente}</TableCell>
              <TableCell>{medidor.ci}</TableCell>
              <TableCell>{medidor.nombre}</TableCell>
              <TableCell>{medidor.apellidoPaterno}</TableCell>
              <TableCell>{medidor.apellidoMaterno}</TableCell>
              <TableCell>{medidor.direccion}</TableCell>
              <TableCell>{medidor.numeroMedidor}</TableCell>
              <TableCell>{medidor.tarifa}</TableCell>
              <TableCell>{medidor.estado}</TableCell>
              <TableCell>{medidor.cantidadLecturas}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
