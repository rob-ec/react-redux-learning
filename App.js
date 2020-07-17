class App extends React.Component {
    state = {
        name: 'Rob',
        age: 21
    };
    render() {
        return (
            <div className="app-content">
                <h1>Hello, World!</h1>
                <p>My name is {this.state.name} and I am {this.state.age}</p>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));