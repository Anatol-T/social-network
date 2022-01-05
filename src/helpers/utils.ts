export const range = (start:number, end: number): Array<number> => {
    const len = end - start < 1? 1: end - start;
    const arr = Array.from(Array(len).keys())
  return [...arr].map(el => el + start)
}