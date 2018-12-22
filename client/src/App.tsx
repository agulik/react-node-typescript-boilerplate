import * as React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import "./App.css"
import Home from "./containers/home"

class App extends React.Component {
  render() {
    return (
      <main>
        <Router>
          <Switch>
            <Route exact={true} path="/" component={Home} />
          </Switch>
        </Router>
      </main>
    )
  }
}

export default App
