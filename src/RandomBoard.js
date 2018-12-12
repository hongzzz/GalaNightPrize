import React, {Component} from 'react';
import Number from './Number';
import {addRandomNum, getQuery} from './utils';

const maxValue = 1800; // 号码范围
let randomNum = parseInt(getQuery('number')) || 3; // 每次抽取个数

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

    // 随机生成数，产生动态效果
    startLoading = () => {
        const {nums} = this.state;

        this.setState({
            loading: true,
            fakeNums: addRandomNum(randomNum, maxValue, nums)
        });

        this.timer = setInterval(() => {
            this.setState({
                fakeNums: addRandomNum(randomNum, maxValue, nums)
            });
        }, 80);
    }

    // 生成中奖名单
    stopLoading = () => {
        const {nums} = this.state;

        let tempNums = [...nums, ...addRandomNum(randomNum, maxValue, nums)];
        this.setState({
            nums: tempNums,
            loading: false
        });

        console.log(tempNums);
        clearInterval(this.timer);
    }

    handleKeyup = (e) => {
        if (e.keyCode !== 13 && e.keyCode !== 32) return;

        const {loading} = this.state;

        if (loading) {
            this.stopLoading();
        } else {
            this.startLoading();
        }
    }

    // 计算显示的数组
    get showNums() {
        const {nums, fakeNums, loading} = this.state;
        return loading ? fakeNums : nums.slice(-randomNum);
    }

    render() {
        const {loading} = this.state;
        return (
            <div className={`random-board ${this.props.show ? 'show' : 'hide'}`}>
                {
                    this.showNums.map((item, index) =>
                        <Number loading={loading} maxValue={maxValue} key={index} value={item}/>)
                }
            </div>
        );
    }
}

export default RandomBoard;