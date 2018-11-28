import React, {Component} from 'react';
import Number from './Number';
import {addRandomNum} from './utils';

const maxValue = 3000; // 号码范围
const randomNum = 4; // 每次抽取个数

class RandomBoard extends Component {
    timer = null;
    state = {
        nums: [],
        fakeNums: Array(randomNum).fill(0),
        loading: false
    };

    componentDidMount() {
        document.addEventListener('keyup', this.handleKeyup);
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this.handleKeyup);
    }

    handleKeyup = (e) => {
        if (e.keyCode !== 13 && e.keyCode !== 32) return;
        const {nums, loading} = this.state;

        if (loading) {
            let tempNums = [ ...nums, ...addRandomNum(randomNum, maxValue, nums) ];
            console.log(tempNums);
            this.setState({
                nums: tempNums,
                loading: false
            });
            clearInterval(this.timer);
        } else {
            this.setState({
                loading: true
            });
            this.timer = setInterval(() => {
                this.setState({
                    fakeNums: addRandomNum(randomNum, maxValue, nums)
                });
            }, 80);
        }
    }

    render() {
        const {nums, fakeNums, loading} = this.state;
        let showNums = loading ? fakeNums : nums.slice(-randomNum);
        return (
            <div className={`random-board ${this.props.show ? 'show' : 'hide'}`}>
                {
                    showNums.map((item, index) =>
                        <Number loading={loading} maxValue={maxValue} key={index} value={item}/>)
                }
            </div>
        );
    }
}

export default RandomBoard;