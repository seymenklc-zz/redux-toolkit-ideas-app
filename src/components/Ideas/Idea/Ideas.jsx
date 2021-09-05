import React from 'react';

import moment from 'moment';

import { Divider, Card, CardHeader, CardContent, CardActions, Avatar, IconButton, Typography, Tooltip } from '@material-ui/core';
import { useStyles } from './styles';

import { AiOutlineStar, AiOutlineDelete, AiFillStar } from 'react-icons/ai';
import { BsCheckAll, BsCheck } from 'react-icons/bs';

import { useDispatch } from 'react-redux';
import { complete, important, remove } from '../../../features/ideaSlice';
import { green, red } from '@material-ui/core/colors';

const Ideas = ({ idea }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.root} elevation={3}>
            <CardHeader
                avatar={
                    <Avatar
                        aria-label="status"
                        style={{ backgroundColor: idea.completed === true ? green[500] : red[500] }}
                    >
                        {idea.completed === true ? 'C' : '!C'}
                    </Avatar>
                }
                title={idea.title}
                subheader={moment().fromNow()}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{idea.body}</Typography>
            </CardContent>
            <Divider />
            <CardActions disableSpacing>
                <Tooltip
                    aria-label='mark'
                    title={idea.importantStatus === 'regular' ? 'Mark as Important' : 'Unmark'}
                    arrow
                >
                    <IconButton
                        aria-label="add to important"
                        onClick={() => dispatch(important({ id: idea.id }))}
                    >
                        {idea.importantStatus === 'regular' ? <AiOutlineStar /> : <AiFillStar />}
                    </IconButton>
                </Tooltip>
                <Tooltip
                    aria-label='check'
                    title={idea.completed ? 'Check as Uncompleted' : 'Check as Completed'}
                    arrow
                >
                    <IconButton
                        aria-label="complete"
                        onClick={() => dispatch(complete({ id: idea.id }))}
                    >
                        {idea.completed === false ? <BsCheck /> : <BsCheckAll />}
                    </IconButton>
                </Tooltip>
                <Tooltip title='Delete' aria-label='delete' arrow>
                    <IconButton
                        className={classes.delete}
                        aria-label="delete"
                        onClick={() => dispatch(remove({ id: idea.id }))}
                    >
                        <AiOutlineDelete />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    );
};
export default Ideas;