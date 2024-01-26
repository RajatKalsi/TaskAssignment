import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Avatar, Button, Grid, Stack } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import statueImg from "../assests/images/statue.png"
import bgImg from "../assests/images/grey.jpeg"
import DrawerContent from './drawer';
const drawerWidth = 340;


export default function ResponsiveDrawer(props) {
    const [isOpen, setOpenStatus] = React.useState(false);

    const toggleDrawer =
        (anchor, open) =>
            (event) => {
                if (
                    event.type === 'keydown' &&
                    ((event).key === 'Tab' ||
                        (event).key === 'Shift')
                ) {
                    return;
                }
                setOpenStatus(open);
            };

    return (
        <Box
            component="div"
            sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundImage: `url(${bgImg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            <Avatar onClick={toggleDrawer('left', true)} style={{ position: "absolute", top: 12, left: 12 }}>
                <KeyboardDoubleArrowLeftIcon />
            </Avatar>
            <Box
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    anchor={"left"}
                    open={isOpen}
                    sx={{
                        display: { xs: 'block', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                  <DrawerContent toggleDrawer={toggleDrawer}/>
                </Drawer>

            </Box>
            <Stack
                direction="row"
                height={'100vh'}
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    component="img"
                    sx={{
                        height: 300,
                        width: 300,
                    }}
                    src={statueImg}
                />
            </Stack>
        </Box>
    );
}