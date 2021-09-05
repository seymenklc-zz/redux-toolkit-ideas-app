import React, { useState } from 'react';

import { Button, Container, TextField, RadioGroup, Radio, FormControlLabel, Paper, Typography, FormLabel } from '@material-ui/core';
import { useStyles } from './styles';

import { MdKeyboardArrowRight } from 'react-icons/md';

import { useHistory } from 'react-router';

import { useDispatch } from 'react-redux';
import { add } from '../../features/ideaSlice';

const AddIdeas = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isImportant, setIsImportant] = useState('');

    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(add({ title, body, isImportant }));

        setTitle('');
        setBody('');
        setIsImportant('');
    };

    return (
        <Container maxWidth='sm'>
            <Paper elevation={10} className={classes.paper}>
                <Typography variant='h5' color='primary'>
                    Add Idea
                </Typography>
                <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                    <TextField
                        label='Idea Title'
                        variant='outlined'
                        placeholder='Time Travel'
                        className={classes.textfield}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField
                        label='Idea'
                        variant='outlined'
                        placeholder='discover time travel!'
                        className={classes.textfield}
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        rows={4}
                        fullWidth
                        multiline
                        required
                    />
                    <FormLabel>Mark As:</FormLabel>
                    <RadioGroup
                        value={isImportant}
                        onChange={(e) => setIsImportant(e.target.value)}
                    >
                        <FormControlLabel
                            label='Important'
                            value='important'
                            control={<Radio color='primary' />}
                        />
                        <FormControlLabel
                            label='Regular'
                            value='regular'
                            control={<Radio color='primary' />}
                        />
                    </RadioGroup>
                    <Button
                        type='submit'
                        color='primary'
                        variant='contained'
                        className={classes.button}
                        endIcon={<MdKeyboardArrowRight />}
                        disabled={!title || !body || !isImportant}
                        onClick={() => setTimeout(() => history.push('/ideas'), 1000)}
                        disableElevation
                    >
                        Save
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default AddIdeas;
