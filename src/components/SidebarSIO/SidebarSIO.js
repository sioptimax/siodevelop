import { Box } from "@mui/system"
import { Divider, List, ListItem, ListItemIcon, ListItemText, ListItemButton } from "@mui/material"


const SidebarSIO = ({ navArrayLinks, NavLink, setOpen }) => {

    return (
        <Box sx={{ width: 250 }}>
            <img
            alt="OptimaxLogo"
            >
            </img>
            <Divider />
            <List>
                {
                    navArrayLinks.map(item =>(
                        <ListItem 
                        disablePadding
                        key={item.title}
                        >
                            <ListItemButton 
                            component={NavLink}
                            to={item.path}
                            onClick={() => setOpen(false)}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText>{item.title}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    )
}

export default SidebarSIO