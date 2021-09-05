import React, { useState } from 'react';

import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { useStyles } from './styles';

import { BiMenuAltLeft } from 'react-icons/bi';

import DrawerMenu from '../Drawer/Drawer';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const classes = useStyles();

    return (
        <nav>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            className={classes.menuButton}
                            onClick={() => setIsOpen(true)}
                        >
                            <BiMenuAltLeft />
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Ideas App
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            {/* Drawer Component */}
            <DrawerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </nav>
    );
};

export default Navbar;