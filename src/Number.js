import React, {Component} from 'react';

class Number extends Component {
    render() {
        let {value} = this.props;
        value = '00000' + value;
        value = value.substr(value.length - 4);
        return (
            <div className="number">
                {value}
            </div>
        );
    }
}

export default Number;