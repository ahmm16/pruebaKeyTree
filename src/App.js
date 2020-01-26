import React, { Component } from "react"
import { Route, Switch } from "react-router"
import HomePage from './Pages/HomePage'
import Container from '@material-ui/core/Container';
import Header from './Components/Common/Header'
import Footer from './Components/Common/Footer'
import LeftBar from './Components/Common/LeftBar'
import Grid from '@material-ui/core/Grid';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Grid container spacing={3}>
                        <Header />
                        <LeftBar />
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route component={HomePage} />
                        </Switch>
                        <Footer />
                    </Grid>
                </Container>
            </React.Fragment>
        )
    }
}

export default App