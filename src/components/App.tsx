import * as React from "react";
import { hot } from "react-hot-loader";
import "./../assets/scss/App.scss";

const reactLogo = require("./../assets/img/react_logo.svg");

export interface AppProps {
}

class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <div className="app">
                <h1>Hello World!</h1>
                <p>Foo to the barz</p>
                <img src={reactLogo} height="480"/>
            </div>
        );
    }
}
export default hot(module)(App);