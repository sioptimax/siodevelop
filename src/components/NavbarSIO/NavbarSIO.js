import { useState } from "react";
import { NavLink } from "react-router-dom";

import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import SidebarSIO from "../SidebarSIO/SidebarSIO";

import MenuIcon from "@mui/icons-material/Menu"
import InboxIcon from "@mui/icons-material/Inbox"
import DraftsIcon from "@mui/icons-material/Drafts"

const navArrayLinks = [
  {
    title: "Inicio",
    path: "/"
  },
  {
    title: "Pacientes",
    path: "/patientdata",
    icon: <InboxIcon />
  },
  {
    title: "Historias Clinicas",
    path: "/patienthistory",
    icon: <DraftsIcon />
  },
]

const NavbarSIO = () => {

  const [open, setOpen] = useState(false)

  return (
    <>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          size="large"
          onClick={() => setOpen(true)}
          sx={{ display: {xs: "flex", sm: "none" }}}
          edge="start"
        >
        <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{flexGrow: 1}}>Sistema Integrado Optimax S.A.S.</Typography>
        <Box sx={{ display: { xs: "none", sm:"block" }}}>
          {
            navArrayLinks.map(item => (
              <Button 
              color="inherit" 
              key={item.title}
              component={NavLink}
              to={item.path}
              >{item.title}
              </Button>
            ))
          }
        </Box>
      </Toolbar>
    </AppBar>
    <Drawer
      open={open}
      anchor="left"
      onClose={() => setOpen(false)}
      sx={{ display: {xs: "flex", sm: "none" }}}
    >
      <SidebarSIO 
      navArrayLinks={navArrayLinks} 
      NavLink={NavLink}
      setOpen={setOpen}
      />
    </Drawer>
    
    </>
  )
}
export default NavbarSIO;
