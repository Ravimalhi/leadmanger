import React, { component } from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{
render(){
    return <h1>React is here!</h1>
}
}

ReactDOM.render(<App />, document.getElementById("app"));