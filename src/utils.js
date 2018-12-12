/**
 * 生成随机数
 * @param num - 生成数组的长度
 * @param max - 生成数的范围
 * @param arr - 之前中奖的数组，用来排除重复中奖
 * @returns {Array} - 新中奖数组
 */
export function addRandomNum(num, max, arr) {
    let result = [];
    for (let i = 0; i < num;) {
        let r = Math.ceil(Math.random() * max);
        if (arr.indexOf(r) < 0 && result.indexOf(r) < 0) { // 排除已中奖的
            result.push(r);
            i++;
        }
    }
    return result;
}

/**
 * url query 获取
 * @param name 键
 * @returns {*} 对应值
 */
export function getQuery(name) {
    let query = window.location.search.substring(1);
    let arr = query.split("&");
    for (let i = 0; i < arr.length; i++) {
        let pair = arr[i].split("=");
        if (pair[0] === name) return pair[1];
    }
    return undefined;
}