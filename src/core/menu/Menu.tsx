import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Avatar,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ExpandLess,
  ExpandMore,
  Dashboard as DashboardIcon,
  AccountBalanceWallet as WalletIcon,
  Group as UsersIcon,
  Book as BookOpenIcon,
  Speed as GaugeIcon,
  Add as PlusIcon,
  List as ListIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";

import { CreditCard } from "lucide-react";
const drawerWidth = 220;
const mainColor = "#262442";
const iconColor = "#ffffff";

export const MenuComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false); // iniciar cerrado
  const [expandedMenus, setExpandedMenus] = useState({
    medidor: false,
    lecturas: false,
    gastos: false,
    pagos: false,
    tarifa: false,
  });

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const toggleSubmenu = (menu: "medidor" | "lecturas" | "gastos" | "pagos" | "tarifa") => {
    setExpandedMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const usuario = {
    nombre: "Juan Carlos Chocllu",
    rol: "Administrador",
  };

  return (
    <Box>
      <CssBaseline />

      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: mainColor }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer}
            sx={{
              mr: 2,
              bgcolor: "white",
              color: mainColor,
              "&:hover": { bgcolor: "#eee" },
              width: 36,
              height: 36,
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Typography variant="subtitle1" noWrap component="div" sx={{ ml: 2 }}>
            Sistema de Agua
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer con variant temporary para overlay */}
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={toggleDrawer} // cerrar al click fuera o esc
        ModalProps={{
          keepMounted: true, // mejora performance en móviles
        }}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            bgcolor: mainColor,
            color: iconColor,
          },
        }}
      >
        <Toolbar />

        {/* Panel de usuario */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 2,
            bgcolor: "#1f1b3a",
            mb: 1,
            borderRadius: 1,
            mx: 1,
          }}
        >
          <Avatar sx={{ bgcolor: "#1976d2", width: 36, height: 36, mr: 1 }}>
            {usuario.nombre.charAt(0)}
          </Avatar>
          <Box>
            <Typography
              sx={{ fontSize: 13, fontWeight: "bold", color: "#ffffff" }}
            >
              {usuario.nombre}
            </Typography>
            <Typography sx={{ fontSize: 11, color: "#cccccc" }}>
              {usuario.rol}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ overflow: "auto" }}>
          <List sx={{ p: 0 }}>
            {/* Dashboard */}
            <ListItemButton
              component={Link}
              to="/dashboard"
              sx={{ color: iconColor, py: 0.5 }}
            >
              <ListItemIcon sx={{ color: iconColor, minWidth: 32 }}>
                <DashboardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                slotProps={{ primary: { sx: { fontSize: 13 } } }}
              />
            </ListItemButton>

            {/* Medidor */}
            <ListItemButton
              onClick={() => toggleSubmenu("medidor")}
              sx={{ color: iconColor, py: 0.5 }}
            >
              <ListItemIcon sx={{ color: iconColor, minWidth: 32 }}>
                <GaugeIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Medidor"
                slotProps={{ primary: { sx: { fontSize: 13 } } }}
              />
              {expandedMenus.medidor ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedMenus.medidor} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4, py: 0.5 }}
                  component={Link}
                  to="/crea/medidor"
                >
                  <ListItemIcon sx={{ color: iconColor, minWidth: 32 }}>
                    <PlusIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Crear"
                    slotProps={{ primary: { sx: { fontSize: 12 } } }}
                  />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4, py: 0.5 }}
                  component={Link}
                  to="/listar/medidor"
                >
                  <ListItemIcon sx={{ color: iconColor, minWidth: 32 }}>
                    <ListIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Listar"
                    slotProps={{ primary: { sx: { fontSize: 12 } } }}
                  />
                </ListItemButton>

                <ListItemButton
                  sx={{ pl: 4, py: 0.5 }}
                  component={Link}
                  to="/listar/medidores/morosos"
                >
                  <ListItemIcon sx={{ color: iconColor, minWidth: 32 }}>
                    <ListIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Medidores morosos"
                    slotProps={{ primary: { sx: { fontSize: 12 } } }}
                  />
                </ListItemButton>
              </List>
            </Collapse>

            {/* Lecturas */}
            <ListItemButton
              onClick={() => toggleSubmenu("lecturas")}
              sx={{ color: iconColor, py: 0.5 }}
            >
              <ListItemIcon sx={{ color: iconColor, minWidth: 32 }}>
                <BookOpenIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Lecturas"
                slotProps={{ primary: { sx: { fontSize: 13 } } }}
              />
              {expandedMenus.lecturas ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedMenus.lecturas} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4, py: 0.5 }}
                  component={Link}
                  to="/crear/lectura"
                >
                  <ListItemIcon sx={{ color: iconColor, minWidth: 32 }}>
                    <PlusIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Crear"
                    slotProps={{ primary: { sx: { fontSize: 12 } } }}
                  />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4, py: 0.5 }}
                  component={Link}
                  to="/listar/lectura"
                >
                  <ListItemIcon sx={{ color: iconColor, minWidth: 32 }}>
                    <ListIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Listar"
                    slotProps={{ primary: { sx: { fontSize: 12 } } }}
                  />
                </ListItemButton>
              </List>
            </Collapse>


            <ListItemButton
              onClick={() => toggleSubmenu("tarifa")}
              sx={{ color: iconColor, py: 0.5 }}
            >
              <ListItemIcon sx={{ color: iconColor, minWidth: 32 }}>
                <CreditCard fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Tarifa"
                slotProps={{ primary: { sx: { fontSize: 13 } } }}
              />
              {expandedMenus.tarifa ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedMenus.tarifa} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4, py: 0.5 }}
                  component={Link}
                  to="/listar/tarifas"
                >
                  <ListItemIcon sx={{ color: iconColor, minWidth: 32 }}>
                    <PlusIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Listar tarifas"
                    slotProps={{ primary: { sx: { fontSize: 12 } } }}
                  />
                </ListItemButton>

              </List>
            </Collapse>


            {/* Gastos */}
            <ListItemButton
              onClick={() => toggleSubmenu("gastos")}
              sx={{ color: iconColor, py: 0.5 }}
            >
              <ListItemIcon sx={{ color: iconColor, minWidth: 32 }}>
                <WalletIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Gastos"
                slotProps={{ primary: { sx: { fontSize: 13 } } }}
              />
              {expandedMenus.gastos ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedMenus.gastos} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4, py: 0.5 }}
                  component={Link}
                  to="/gastos/crear"
                >
                  <ListItemIcon sx={{ color: iconColor, minWidth: 32 }}>
                    <PlusIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Registrar gasto"
                    slotProps={{ primary: { sx: { fontSize: 12 } } }}
                  />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4, py: 0.5 }}
                  component={Link}
                  to="/gastos/listar"
                >
                  <ListItemIcon sx={{ color: iconColor, minWidth: 32 }}>
                    <ListIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Listar gastos"
                    slotProps={{ primary: { sx: { fontSize: 12 } } }}
                  />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4, py: 0.5 }}
                  component={Link}
                  to="/gastos/categorias"
                >
                  <ListItemIcon sx={{ color: iconColor, minWidth: 32 }}>
                    <DashboardIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Categorías"
                    slotProps={{ primary: { sx: { fontSize: 12 } } }}
                  />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton
              onClick={() => toggleSubmenu("pagos")}
              sx={{ color: iconColor, py: 0.5 }}
            >
              <ListItemIcon sx={{ color: iconColor, minWidth: 32 }}>
                <CreditCard fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Pagos"
                slotProps={{ primary: { sx: { fontSize: 13 } } }}
              />
              {expandedMenus.pagos ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedMenus.pagos} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4, py: 0.5 }}
                  component={Link}
                  to="/realizar/pago"
                >
                  <ListItemIcon sx={{ color: iconColor, minWidth: 32 }}>
                    <PlusIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Realizar pagos"
                    slotProps={{ primary: { sx: { fontSize: 12 } } }}
                  />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4, py: 0.5 }}
                  component={Link}
                  to="/listar/pago"
                >
                  <ListItemIcon sx={{ color: iconColor, minWidth: 32 }}>
                    <ListIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Listar pagos"
                    slotProps={{ primary: { sx: { fontSize: 12 } } }}
                  />
                </ListItemButton>
              </List>
            </Collapse>



            {/* Usuarios */}
            <ListItemButton
              component={Link}
              to="/usuarios"
              sx={{ color: iconColor, py: 0.5 }}
            >
              <ListItemIcon sx={{ color: iconColor, minWidth: 32 }}>
                <UsersIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Usuarios"
                slotProps={{ primary: { sx: { fontSize: 13 } } }}
              />
            </ListItemButton>

            {/* Configuración */}
            <ListItemButton
              component={Link}
              to="/configuracion"
              sx={{ color: iconColor, py: 0.5 }}
            >
              <ListItemIcon sx={{ color: iconColor, minWidth: 32 }}>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Configuración"
                slotProps={{ primary: { sx: { fontSize: 13 } } }}
              />
            </ListItemButton>

            {/* Cerrar sesión */}
            <ListItemButton
              component={Link}
              to="/logout"
              sx={{ color: iconColor, py: 0.5 }}
            >
              <ListItemIcon sx={{ color: iconColor, minWidth: 32 }}>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Cerrar sesión"
                slotProps={{ primary: { sx: { fontSize: 13 } } }}
              />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>

      {/* Contenido principal sin margen ni cambio de tamaño */}
      <Box component="main" className="mt-20">
        <Outlet />
      </Box>
    </Box>
  );
};
