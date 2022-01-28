export class Pokemon {
  abilities: Array<any>|string;
  types: Array<any>|string;
  name: string;
  img: string;
  url: string;

  constructor(
    abilities: Array<any>,
    types: Array<any>,
    name: string,
    img: string,
    url: string
  ) {
    this.abilities = abilities;
    this.types = types;
    this.name = name;
    this.img = img;
    this.url = url;
  }
}
