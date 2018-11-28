import React, {Component} from 'react';
import Cover from './Cover';
import RandomBoard from './RandomBoard';
import './App.scss';


class App extends Component {
    state = {
        status: 0
    };

    componentDidMount() {
        console.log('press enter');
        document.addEventListener('keyup', this.handleKeyup);
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this.handleKeyup);
    }

    handleKeyup = (e) => {
        if (e.keyCode !== 13 && e.keyCode !== 32) return;
        this.increaseStatus();
    }

    increaseStatus = () => {
        const {status} = this.state;
        if (status === 0) {
            this.setState({
                status: 1
            });
        } else {
        }
    }

    render() {
        const {status} = this.state;

        return (
            <div className="app">
                <Cover show={status === 0}/>
                <RandomBoard show={status !== 0}/>
            </div>
        );
    }
}

export default App;
