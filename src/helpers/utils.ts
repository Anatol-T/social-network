export const range = (start:number, end: number): Array<number> => {
    const arr = Array.from(Array(end).keys())
  return [...arr].map(el => el + start)
}