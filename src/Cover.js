import React, {Component} from 'react';

class Cover extends Component {
    render() {
        return (
            <div className={`cover ${this.props.show ? 'show' : 'hide'}`}>
                GALA NIGHT
            </div>
        );
    }
}

export default Cover;