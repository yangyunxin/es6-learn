function unique(array) {
    if (!array instanceof Array) return array
    let result = []
    for (let i = 0; i < array.length; i++) {
        let value = array[i]
        if (String.prototype.indexOf.call(result, value) === -1) {
            result.push(value)
        }
    }
    return result
}

function unique(array) {
    if (!array instanceof Array) return array
    let result = []
    let obj = {}
    for (let i = 0; i < array.length; i++) {
        let value = array[i]

        // if (String.prototype.indexOf.call(result, value) === -1) {
        //     result.push(value)
        // }
    }
    return result
}

// 根据传入一个数组和一个数字，判断数组中是否具有两个数字相加等于传入的数字，如果有就输出数组中的两个元素，没有输出false


// [1,2,3,4,5,6]
function justAdd(arr, num) { 
    let low = 0;
    let high = arr.length - 1;
    let mid = (low + high) / 2

    let result
    while(high - low > 1) {
        if (num == arr[low] + arr[high]) { result = [arr[low], arr[high]]; return [arr[low], arr[high]] }
        if (num > arr[low] + arr[high]) { low++ }
        if (num < arr[low] + arr[high]) { high++ }
    }
    return result === 'undefined' && false
}