module.exports = function reverse (n) {
    let str = n.toString().split('');
    let resultStr = '';
    for(let i = str.length -1 ; i >= 0; i--)
    {
        resultStr += str[i];
    }
    return parseInt(resultStr);
}