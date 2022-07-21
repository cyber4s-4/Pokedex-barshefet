// class for the pokemon characteristics
export class characteristics{
  name: string;
  type: string;
  pokeImg: string;
  weight: number;
  height: number;
  constructor(n:string, p:string, w:number, h:number, t:string){
    this.name = n;
    this.pokeImg = p;
    this.weight = w;
    this.height = h;
    this.type = t;
  }
}
