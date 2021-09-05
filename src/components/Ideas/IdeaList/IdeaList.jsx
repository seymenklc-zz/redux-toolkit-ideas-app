import React from 'react';

import { Link } from 'react-router-dom';

import { Fab, Grid, Paper, Tooltip, Typography } from '@material-ui/core';
import { useStyles } from './styles';

import { useSelector } from 'react-redux';

import { TiPlus } from 'react-icons/ti';

import Ideas from '../Idea/Ideas';

const IdeaList = () => {
    const classes = useStyles();

    const state = useSelector(state => state.ideas);

    if (state.length === 10) return <Typography variant='h5' color='textSecondary'>
        To add new ideas, please complete or delete your existing ideas.
    </Typography>;

    if (state.length === 0) {
        return (
            <div>
                <Typography variant='h4' color='textSecondary' align='center'>
                    There is no idea.
                </Typography>
                <Link to='/home' className={classes.link}>
                    <Typography variant='h6' align='center' color='primary'>
                        Go back to home
                    </Typography>
                </Link>
            </div>
        );
    }

    return (
        <div>
            <Paper elevation={5} className={classes.paper}>
                <Grid direction="row" container spacing={2}>
                    {state.map(idea => (
                        <Grid item key={idea.id} xs={12} md={4} lg={4}>
                            <Ideas idea={idea} />
                        </Grid>
                    ))}

                </Grid>

            </Paper>
            <Tooltip title='New Idea' aria-label='new idea' arrow>
                <Fab href='/home' className={classes.fab} color="primary" aria-label="add">
                    <TiPlus />
                </Fab>
            </Tooltip>
        </div>
    );
};

export default IdeaList;
