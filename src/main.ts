console.log('sending data..')
console.log(121)
console.log(125671)

const button = document.querySelector('button')!;
button.addEventListener('click', () => {
  console.log('clicked')
});
let set = new Set()

interface Rect {
  readonly id: string,
  size: number,
  color?: string
}

let rect1 = {
  id: 'f',
  size: 12
} as Rect

interface Rect2 extends Rect {
  area: () => number;
}

let rect3: Rect2 = {
  id: '45',
  size: 20,
  area(): number {
    return Math.pow(this.size, 2)
  }
}
class Rectus implements Rect2 {
  id:string = '4343'
  size:number = 123
  area(): number{
    return this.size * 2
  }



}
const getter = <T>(data: T): T => data;
const getter2 = (data: any) => data;

getter('121212').length
getter(13).length
