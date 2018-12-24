/**
 * @file 数字转汉字
 * @author allen
 */

function num2hanzi(num) {
    const hanziNum = {0: '零', 1: '一', 2: '二', 3: '三', 4: '四', 5: '五', 6: '六', 7: '七', 8: '八', 9: '九'};
    const units = ['个', '万', '亿', '万亿', '兆'];
    const suffix = ['', '十', '百', '千'];
    let numString = num + '';
    if (/^\d+$/.test(numString)) {
        throw new Error('Not a number');
    }
    if (/^\d+$/.test(numString)) {
        throw new Error('Not a number');
    }
    let digitList = numString.split('');
    digitList.reverse();
    let splitNumList = [];
    let l = digitList.splice(0, 4);
    while (l.length) {
        splitNumList.push(l);
        l = digitList.splice(0, 4);
    }
    let hanzi = '';
    splitNumList.forEach((arr, i) => {
        let rst = '';
        arr.forEach((digit, j) => {
            rst = hanziNum[digit] + suffix[j] + rst;
        });
        rst += units[i % 6];
        hanzi = rst + hanzi;
    });
    suffix.forEach(item => (hanzi = hanzi.replace(new RegExp('零' + item, 'g'), '零')));
    for (let i = units.length - 1; i >= 0; --i) {
        let val = units[i];
        hanzi = hanzi.replace(new RegExp('(零+)' + val, 'g'), (match, $1) => ($1.length === 4 ? '' : val));
    }
    hanzi = hanzi.replace(/零+/g, '零');
    hanzi = hanzi.replace(/个/g, '');
    hanzi = hanzi.replace(/^一十/, '十');
    return hanzi;
}
