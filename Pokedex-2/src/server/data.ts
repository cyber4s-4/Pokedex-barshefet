const axios = require("axios").default;

export const pokeList: any[] = [];

export async function fetchData(howMany: number) {
  for (let i = 900; i < howMany; i++) {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(function (response: any) {
        let poke = {
          id: response.data.id,
          name: response.data.name,
          front_sprite: response.data.sprites.front_default,
          type: response.data.types[0].type.name,
          weight: response.data.weight,
          height: response.data.height,
        };

        pokeList.push(poke);
      })
      .catch(function (error: Error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed

        console.log("fetched one pokemon");
      });
  }
}
