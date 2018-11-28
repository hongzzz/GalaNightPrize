export function addRandomNum(num, max, arr) {
    let result = [];
    for (let i = 0; i < num;) {
        let r = Math.ceil(Math.random() * max);
        if (arr.indexOf(r) < 0 && result.indexOf(r) < 0) {
            result.push(r);
            i++;
        }
    }
    return result;
}