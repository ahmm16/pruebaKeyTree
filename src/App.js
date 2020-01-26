import React, { Component } from "react"
import { Route, Switch } from "react-router"
import LoginPage from './Pages/LoginPage'
import Container from '@material-ui/core/Container';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Container component="main" maxWidth="xs">
                    <Switch>
                        <Route exact path="/" component={LoginPage} />
                    </Switch>
                </Container>
            </React.Fragment>
        )
    }
}

export default App