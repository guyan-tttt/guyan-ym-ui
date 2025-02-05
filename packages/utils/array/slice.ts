/**
 *
 * @param arr 数组
 * @param start
 * @param end
 */
export default function slice<T>(array: T[], start: number, end?: number): T[] {
  if (array.length < 0) {
    return [];
  }
  let index = start;
  let endIndex = end || array.length;
  let result = [];
  while (index < endIndex) {
    result.push(array[index]);
    index++;
  }
  return  result;
}
