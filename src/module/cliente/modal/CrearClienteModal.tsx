import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button
} from '@mui/material';

export const CrearClienteModal = () => {
  const [open, setOpen] = useState(false); // Estado interno para abrir/cerrar modal
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = (data: any) => {
    console.log("Cliente creado:", data);
    reset();
    handleClose();
  };

  return (
    <div>
      {/* Botón para abrir el modal */}
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Crear Cliente
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2" mb={2}>
            Crear Cliente
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* CI */}
            <TextField
              label="CI"
              fullWidth
              margin="normal"
              {...register("ci", { required: "El CI es obligatorio" })}
              error={!!errors.ci}
              helperText={errors.ci?.message}
            />

            {/* Nombre */}
            <TextField
              label="Nombre"
              fullWidth
              margin="normal"
              {...register("nombre", { required: "El nombre es obligatorio" })}
              error={!!errors.nombre}
              helperText={errors.nombre?.message}
            />

            {/* Apellido Paterno */}
            <TextField
              label="Apellido Paterno"
              fullWidth
              margin="normal"
              {...register("apellidoPaterno", { required: "El apellido paterno es obligatorio" })}
              error={!!errors.apellidoPaterno}
              helperText={errors.apellidoPaterno?.message}
            />

            {/* Apellido Materno */}
            <TextField
              label="Apellido Materno"
              fullWidth
              margin="normal"
              {...register("apellidoMaterno", { required: "El apellido materno es obligatorio" })}
              error={!!errors.apellidoMaterno}
              helperText={errors.apellidoMaterno?.message}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Crear Cliente
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
