import React from 'react';

import { Container } from '@material-ui/core';
import { useStyles } from './styles';

import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
import AddIdeas from './components/AddIdeas/AddIdeas';
import IdeaList from './components/Ideas/IdeaList/IdeaList';

const App = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Navbar />
            <Container className={classes.container}>
                <Switch>
                    <Route exact path='/home' component={AddIdeas} />
                    <Route exact path='/ideas' component={IdeaList} />
                </Switch>
            </Container>
            <Redirect to='/home' />
        </React.Fragment>
    );
};

export default App;
