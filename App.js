class App extends React.Component {
    state = {
        name: 'Rob',
        age: 21
    };

    handleClick = (e) => {
        this.setState({
            name: 'Robson'
        });
        console.log(this.state);
    }

    handleMouseHover = (e) => {
        console.log(e.target, e.pageX);
    }

    handleCopy = (e) => {
        console.log('Try being original for once');
    }

    render() {
        return (
            <div className="app-content">
                <header><h1>My React Lab!</h1></header>
                <div className='code-box'>> My name is {this.state.name} and I am {this.state.age}</div>
                <button onClick={this.handleClick}>Click Me</button>
                <div className='code-box'><p onCopy={this.handleCopy}>> What we think we become</p></div>
                <button onMouseOver={this.handleMouseHover}>Hover Me</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));