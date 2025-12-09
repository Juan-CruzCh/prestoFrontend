import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, TextField, Button
} from '@mui/material';
import { CrearClienteModal } from '../modal/CrearClienteModal';

// Datos ficticios
const clientes = [
  { ci: '12345678', nombre: 'Juan', apellidoPaterno: 'Pérez', apellidoMaterno: 'Gómez', codigoCliente: 'C001' },
  { ci: '87654321', nombre: 'María', apellidoPaterno: 'López', apellidoMaterno: 'Ramírez', codigoCliente: 'C002' },
  { ci: '11223344', nombre: 'Carlos', apellidoPaterno: 'Sánchez', apellidoMaterno: 'Torres', codigoCliente: 'C003' },
  { ci: '44332211', nombre: 'Ana', apellidoPaterno: 'Martínez', apellidoMaterno: 'Díaz', codigoCliente: 'C004' }
];

export const ListarCliente = () => {
  const [filtros, setFiltros] = useState({
    ci: '',
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    codigoCliente: ''
  });

  const handleFiltroChange = (e: any) => {
    setFiltros({
      ...filtros,
      [e.target.name]: e.target.value
    });
  };

  // Filtrar los clientes según los filtros
  const clientesFiltrados = clientes.filter(cliente =>
    cliente.ci.includes(filtros.ci) &&
    cliente.nombre.toLowerCase().includes(filtros.nombre.toLowerCase()) &&
    cliente.apellidoPaterno.toLowerCase().includes(filtros.apellidoPaterno.toLowerCase()) &&
    cliente.apellidoMaterno.toLowerCase().includes(filtros.apellidoMaterno.toLowerCase()) &&
    cliente.codigoCliente.toLowerCase().includes(filtros.codigoCliente.toLowerCase())
  );

  return (
   <>
   <CrearClienteModal/>
    <TableContainer component={Paper} style={{ maxWidth: 900, margin: '20px auto' }}>
      <Table size="small"> {/* Hace que las filas sean más compactas */}
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: '0.75rem' }}>
              CI
              <TextField
                name="ci"
                value={filtros.ci}
                onChange={handleFiltroChange}
                size="small"
                placeholder="Buscar CI"
                sx={{ fontSize: '0.75rem', mt: 0.5 }}
              />
            </TableCell>
            <TableCell sx={{ fontSize: '0.75rem' }}>
              Nombre
              <TextField
                name="nombre"
                value={filtros.nombre}
                onChange={handleFiltroChange}
                size="small"
                placeholder="Buscar nombre"
                sx={{ fontSize: '0.75rem', mt: 0.5 }}
              />
            </TableCell>
            <TableCell sx={{ fontSize: '0.75rem' }}>
              Apellido Paterno
              <TextField
                name="apellidoPaterno"
                value={filtros.apellidoPaterno}
                onChange={handleFiltroChange}
                size="small"
                placeholder="Buscar apellido paterno"
                sx={{ fontSize: '0.75rem', mt: 0.5 }}
              />
            </TableCell>
            <TableCell sx={{ fontSize: '0.75rem' }}>
              Apellido Materno
              <TextField
                name="apellidoMaterno"
                value={filtros.apellidoMaterno}
                onChange={handleFiltroChange}
                size="small"
                placeholder="Buscar apellido materno"
                sx={{ fontSize: '0.75rem', mt: 0.5 }}
              />
            </TableCell>
            <TableCell sx={{ fontSize: '0.75rem' }}>
              Código Cliente
              <TextField
                name="codigoCliente"
                value={filtros.codigoCliente}
                onChange={handleFiltroChange}
                size="small"
                placeholder="Buscar código"
                sx={{ fontSize: '0.75rem', mt: 0.5 }}
              />
            </TableCell>
            <TableCell sx={{ fontSize: '0.75rem' }}>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clientesFiltrados.map((cliente, index) => (
            <TableRow key={index}>
              <TableCell sx={{ fontSize: '0.75rem' }}>{cliente.ci}</TableCell>
              <TableCell sx={{ fontSize: '0.75rem' }}>{cliente.nombre}</TableCell>
              <TableCell sx={{ fontSize: '0.75rem' }}>{cliente.apellidoPaterno}</TableCell>
              <TableCell sx={{ fontSize: '0.75rem' }}>{cliente.apellidoMaterno}</TableCell>
              <TableCell sx={{ fontSize: '0.75rem' }}>{cliente.codigoCliente}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" size="small">
                  Seleccionar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </>
  );
};
