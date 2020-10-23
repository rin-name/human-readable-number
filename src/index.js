module.exports = function toReadable (number) {
    const result = [];
    const objOfWords = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    };
    const arrOfNumber = [number].join().split('');
    switch(arrOfNumber.length){
        case 1:
            for (key in objOfWords) {
                if (number == key) {
                    result.push(objOfWords[key]);
                }
            }
            break;
        case 2:
            result.push(toTwoDigitNumber(objOfWords, arrOfNumber));
            break;
        case 3:
            if (arrOfNumber[1] === '0' && arrOfNumber[2] === '0') {
                result.push( toOneDigitNumber(objOfWords,arrOfNumber[0]) );
                result.push('hundred');
            } else {
                result.push( toOneDigitNumber(objOfWords,arrOfNumber[0]) );
                result.push('hundred');
                result.push( toTwoDigitNumber(objOfWords, arrOfNumber.slice(1)));
            }
            break;
        default:
    }

    return result.join(' ');
}

function toOneDigitNumber(obj,digit) {
    for (key in obj) {
        if (digit === key) {
            return obj[key];
        }
    }
}

function toTwoDigitNumber(obj,arr) {
    const result = [];
    switch(parseFloat(arr[0])) {
        case 0:
            result.push( toOneDigitNumber(obj,arr[1]) );
            break;
        case 1:
            result.push( toOneDigitNumber( obj,arr.join('').split().join() ) );
            break;
        case 2:
            result.push('twenty');
            if(arr[1] !== '0') result.push( toOneDigitNumber(obj,arr[1]) );
            break;
        case 3:
            result.push('thirty');
            if(arr[1] !== '0') result.push( toOneDigitNumber(obj,arr[1]) );
            break;
        case 4:
            result.push('forty');
            if(arr[1] !== '0') result.push( toOneDigitNumber(obj,arr[1]) );
            break;
        case 5:
            result.push('fifty');
            if(arr[1] !== '0') result.push( toOneDigitNumber(obj,arr[1]) );
            break;
        case 6:
            result.push('sixty');
            if(arr[1] !== '0') result.push( toOneDigitNumber(obj,arr[1]) );
            break;
        case 7:
            result.push('seventy');
            if(arr[1] !== '0') result.push( toOneDigitNumber(obj,arr[1]) );
            break;
        case 8:
            result.push('eighty');
            if(arr[1] !== '0') result.push( toOneDigitNumber(obj,arr[1]) );
            break;
        case 9:
            result.push('ninety');
            if(arr[1] !== '0') result.push( toOneDigitNumber(obj,arr[1]) );
            break;
        default:
    }
    return result.join(' ');

}
