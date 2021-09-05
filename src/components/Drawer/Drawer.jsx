import React from 'react';
import { useHistory } from 'react-router-dom';

import { Typography, IconButton, SwipeableDrawer } from '@material-ui/core';

import { HiOutlineChevronLeft } from 'react-icons/hi';
import { AiOutlineHome, AiOutlineStar } from 'react-icons/ai';

import { useStyles } from './styles';

const icons = [AiOutlineHome, AiOutlineStar];

const DrawerMenu = ({ setIsOpen, isOpen }) => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div>
            <SwipeableDrawer
                anchor='left'
                className={classes.drawer}
                open={isOpen}
                onClose={() => setIsOpen(false)}
                onOpen={() => setIsOpen(true)}
            >
                <IconButton
                    className={classes.iconButton}
                    onClick={() => setIsOpen(false)}
                >
                    <HiOutlineChevronLeft />
                </IconButton>
                <div>
                    {['home', 'ideas',].map((option, idx) => {
                        const Icon = icons[idx];
                        return (
                            <div className={classes.options} key={option}>
                                <IconButton
                                    color='primary'
                                    className={classes.option}
                                    onClick={() => history.push(`/${option}`)}
                                >
                                    <Icon className={classes.icon} />
                                    <Typography>
                                        {option.toUpperCase()}
                                    </Typography>
                                </IconButton>
                            </div>
                        );
                    })}
                </div>
            </SwipeableDrawer>
        </div >
    );
};

export default DrawerMenu;