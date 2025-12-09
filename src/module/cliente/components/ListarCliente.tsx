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
     <div className="mb-6">
          <h3 className="text-lg font-medium mb-3 text-gray-700">Clientes</h3>
          <div className="overflow-x-auto border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Seleccionar</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Código Cliente
                    <input type="text" placeholder="Buscar" className="mt-1 w-full p-1 border border-gray-300 rounded text-sm"/>
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                    CI
                    <input type="text" placeholder="Buscar" className="mt-1 w-full p-1 border border-gray-300 rounded text-sm"/>
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Nombre
                    <input type="text" placeholder="Buscar" className="mt-1 w-full p-1 border border-gray-300 rounded text-sm"/>
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Apellido Paterno
                    <input type="text" placeholder="Buscar" className="mt-1 w-full p-1 border border-gray-300 rounded text-sm"/>
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Apellido Materno
                    <input type="text" placeholder="Buscar" className="mt-1 w-full p-1 border border-gray-300 rounded text-sm"/>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-2">
                    <input type="radio" name="cliente" className="form-radio h-5 w-5 text-blue-600" />
                  </td>
                  <td className="px-4 py-2">C001</td>
                  <td className="px-4 py-2">12345678</td>
                  <td className="px-4 py-2">Juan</td>
                  <td className="px-4 py-2">Pérez</td>
                  <td className="px-4 py-2">Gómez</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    <input type="radio" name="cliente" className="form-radio h-5 w-5 text-blue-600" />
                  </td>
                  <td className="px-4 py-2">C002</td>
                  <td className="px-4 py-2">87654321</td>
                  <td className="px-4 py-2">María</td>
                  <td className="px-4 py-2">López</td>
                  <td className="px-4 py-2">Ramírez</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
   </>
  );
};
