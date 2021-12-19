import React, { useState, useEffect } from 'react';
import './App.css';
import { Box, AppBar, CardActions, ImageListItemBar, ImageList, ImageListItem, CardMedia, IconButton, Toolbar, BottomNavigation, Typography, Button, Container, Stack, Paper, Card, CardContent, Menu, MenuItem, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './logo.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HouseIcon from '@mui/icons-material/House';
import HeartIcon from '@mui/icons-material/HeartBroken';
import CartIcon from '@mui/icons-material/ShoppingCart';
import InstaIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import InfoIcon from '@mui/icons-material/Info';

interface GithubRepositories {
    id: number;
    name: string;
    description: string;
}

const getData = async () => {
    return await fetch(`https://api.github.com/users/taurielke/repos`)
        .then(res => res.json())
        .then((res: GithubRepositories[]) => {
            console.log(res);
            return res
        })
};
 

function App() {
    const itemData = [
        {
            img: 'https://sun9-54.userapi.com/impg/Lgg3UNVFjTK-t25jQ-VzJ-FmgW6PQNmykTMovg/tb8rXNNsbXE.jpg?size=1440x1440&quality=96&sign=5275b513010c0ab97264230c7084596b&type=album',
            title: 'Tiger gurl',
            author: '45$',
            rows: 4,
            cols: 4,
        },
        {
            img: 'https://sun9-56.userapi.com/impg/BzUhDiUxy0bejDx_DQw7OqmDf9_NwhI4LaoiMw/tQMS_oBCdY0.jpg?size=1624x1624&quality=96&sign=1b3202b347991577b2507bae6b8dec47&type=album',
            title: 'BFF',
            author: '100$',
        },
        {
            img: 'https://sun9-85.userapi.com/impg/RTLlBMhxSVpu1GMIn3RfNpVG_I6T1sqoIgHbuw/QCSzY6SPQh4.jpg?size=750x781&quality=96&sign=3b9f877cf6b0683c09fb6fc51a291220&type=album',
            title: 'Yoda',
            author: 'a pic with which my bf decided to replace the one of me',
        },
        {
            img: 'https://sun9-58.userapi.com/impg/nxWsNYcuq0qDrq1soqH6sYg-PNKu7BTnaiZxjQ/vgZWQhIlTRw.jpg?size=1624x1624&quality=96&sign=6a9a29556d30d13db9d3cd3b71f48956&type=album',
            title: 'Elf with little horns',
            author: '23$',
            cols: 2,
        },
        {
            img: 'https://sun9-80.userapi.com/impg/rMJtyDEVqnGizte5ySwpwpuADmNF60lNtPF0vg/mUcRDzEnM9Y.jpg?size=400x225&quality=96&sign=1c0ab1c9a0b885a6c40c53abbb8130b1&type=album',
            title: 'Drog',
            author: 'hfjskfkkf',
            cols: 2,
        },
        {
            img: 'https://sun9-5.userapi.com/impg/llGHH2nIMpE11-1h5uMbH58H8dDk4wbOt06esA/2nW3WlM0n1o.jpg?size=474x474&quality=96&sign=705f762ef077f8c5fd49d551743c57f4&type=album',
            title: 'nomore.',
            author: 'i promise.',
            rows: 2,
            cols: 2,
        },
    ];
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [value, setValue] = React.useState(0);

    const [data, setData] = useState<GithubRepositories[]>([]);

    useEffect(() => {
        getData().then((res) => {
            setData(res);
        });
    }, []);
    return (
        <Box sx={{ my: 8}}>
            <div>
                <Button sx={{
                    margin: 10,
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center"
                }}
                    style={{ marginLeft: 525 }}
                    id="demo-customized-button"
                    aria-controls="demo-customized-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    variant="contained"
                    disableElevation
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                >
                    What are you looking for?
                </Button>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <MenuItem onClick={handleClose}>My designs</MenuItem>
                    <MenuItem onClick={handleClose}>Order a commission</MenuItem>
                    <MenuItem onClick={handleClose}>My inspiration</MenuItem>
                </Menu>
            </div>
            <AppBar>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        taurielke art shop
                    </Typography>
                    <HouseIcon sx={{ fontSize: 60 }} />
                    <HeartIcon sx={{ fontSize: 60 }} />
                    <CartIcon sx={{ fontSize: 60 }} />
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Sign up</Button>
                </Toolbar>
            </AppBar>



            <Grid style={{ marginTop: 100 }}
                id="cards"
                sx={{
                    margin: 5,
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center"
                }}>
                {data.map((item) => (
                    <Grid item xs={12}>
                        <Card key={item.id} sx={{
                            backgroundColor: "#E09F92",
                            color: "rgba(255, 255, 255, 255)",
                            height: 100,
                            margin: 1
                        }}>
                            <CardContent>
                                <Typography variant="h5" component="div" textAlign="center"> {item.name} </Typography>
                                <Typography variant="h6" color="rgba(255, 255, 255, 255)">
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}

            </Grid>


            


            <ImageList sx={{ width: 1300, height: 800, margin: 5 }}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.author}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                >
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            <Paper sx={{ position: 'absolute', left: 0, right: 0 }} elevation={3}>
                <Stack direction="row" spacing={2}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        if you have any questions, please contact me: taurielkee@yandex.ru
                    </Typography>
                    <InstaIcon sx={{ fontSize: 60 }} />
                    <TwitterIcon sx={{ fontSize: 60 }} />
                </Stack>
            </Paper>

        </Box>
    );
}

export default App;