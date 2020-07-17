class App extends React.Component {
    state = {
        name: 'Rob',
        age: 21
    };
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted', this.state.name)
    }
    render() {
        return (
            <div className="app-content">
                <header><h1>My React Lab!</h1></header>
                <div className='code-box'>> My name is {this.state.name} and I am {this.state.age}</div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));