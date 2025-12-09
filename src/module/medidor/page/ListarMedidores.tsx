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

// Datos iniciales de ejemplo
const medidoresIniciales = [
  {
    codigoCliente: 'C001',
    ci: '12345678',
    nombre: 'Juan',
    apellidoPaterno: 'Pérez',
    apellidoMaterno: 'Gómez',
    numeroMedidor: 'M001',
    tarifa: 'Básica',
    direccion: 'Av. Siempre Viva 123',
     estado: 'activo',
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
     estado: 'activo',
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
     estado: 'activo',
  },
];

export const ListarMedidores = () => {
  const [medidores, setMedidores] = useState(medidoresIniciales);

  // Función para eliminar un medidor
  const handleEliminar = (index: number) => {
    if (window.confirm('¿Está seguro de eliminar este medidor?')) {
      const nuevosMedidores = [...medidores];
      nuevosMedidores.splice(index, 1);
      setMedidores(nuevosMedidores);
    }
  };

  // Función para editar un medidor (aquí solo mostramos un ejemplo con prompt)
  const handleEditar = (index: number) => {
    const medidor = medidores[index];
    const nuevoNombre = window.prompt('Editar nombre', medidor.nombre);
    if (nuevoNombre !== null && nuevoNombre.trim() !== '') {
      const nuevosMedidores = [...medidores];
      nuevosMedidores[index] = { ...medidor, nombre: nuevoNombre };
      setMedidores(nuevosMedidores);
    }
  };

  return (
    <TableContainer  component={Paper}   style={{ margin: '20px auto', maxWidth: '95%', overflowX: 'auto' }}>
      <Table size="small">
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
            <TableCell>Acciones</TableCell>
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
              <TableCell>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  sx={{ mr: 1 }}
                 
                >
                  Editar
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="error"
                 
                >
                  Eliminar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
