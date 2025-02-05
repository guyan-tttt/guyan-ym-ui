import slice from "./slice"

/**
 * 
 * @param array 数组
 * @param size 
 * * @return array
 */
export default function chunk(array: any[], size: number = 1) {
    // 1. 判断数组是否为空
    if(!array.length) return []
    // 2. 获取待一个整数size,且其值最小为1
    size = Math.max(parseInt(size.toString()), 1)
    // 3.初始化索引
    let index = 0
    let resIndex = 0
    const result = new Array(Math.ceil(array.length / size))
    while(index < array.length) {
        const result = slice(array, index, (index += size))
        result[resIndex] = result
        resIndex++
    }
    return result
}

console.log(chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
);

