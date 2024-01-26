import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Avatar, Button, Grid, Stack } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const DrawerContent = ({toggleDrawer}) => {
 
    return (
        <div style={{ objectFit: "cover", overflow: "hidden", position: "relative" }}>
            <Toolbar />
            {/* <Divider /> */}
            <Stack >
                <List>
                    <ListItem sx={{ marginLeft: "10px" }}>
                        <Avatar role="presentation" onClick={toggleDrawer('left', false)}>
                            <ArrowBackIosIcon />
                        </Avatar>
                    </ListItem>
                    <ListItem sx={{ marginLeft: "10px" }}>
                        <Typography variant='h5'>
                            MAITREYA BUDDHA IN GESTURE OF FEARLESSNESS (ABHAYA MUDRA)
                        </Typography>
                    </ListItem>
                    <Stack direction="row" mt={2} mb={2}>
                        <Stack ml={3}>
                            <Avatar>
                                <FavoriteBorderIcon />
                            </Avatar>
                            <Typography ml={1}>34</Typography>
                        </Stack>
                        <Stack ml={3}>
                            <Avatar>
                                <ShareIcon />
                            </Avatar>
                            <Typography ml={1}>46</Typography>
                        </Stack>
                        <Stack ml={3}>
                            <Avatar>
                                <RemoveRedEyeIcon />
                            </Avatar>
                            <Typography ml={1}>434</Typography>
                        </Stack>
                    </Stack>

                    <Grid sx={{ marginLeft: "15px" }}>
                        <Typography >Dydasty : Ahichchhatra</Typography>
                        <Typography >Period : 200 CE</Typography>
                        <Typography >Material : SandStone</Typography>
                        <Typography >Location : National Museum</Typography>
                    </Grid>

                    {/* <List> */}
                    <Typography variant='h6' sx={{ marginLeft: "15px" }}>Description:</Typography>
                    <Typography sx={{ marginLeft: "15px" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                    </Typography>
                    <Grid mt={2}>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowForwardIcon style={{ color: "red" }} />
                            </ListItemIcon>
                            <ListItemText style={{ color: "red" }} color="pink.deep" primary="Read More"
                            />
                        </ListItem>
                        <Stack direction="row" ml={2} spacing={2} >
                            <Button variant='contained' color="error" >ADD TO COLLECTIONS</Button>
                            <Button variant='outlined' role="presentation" color="error">SOUVENIR</Button>
                        </Stack>
                    </Grid>
                </List>
                <Avatar onClick={toggleDrawer('left', false)} style={{ position: "absolute", left: 320 }}>
                    <KeyboardDoubleArrowLeftIcon />
                </Avatar>
            </Stack>
        </div>  
    )
}
export default DrawerContent