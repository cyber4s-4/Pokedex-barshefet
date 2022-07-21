const axios = require('axios').default;

export const pokeList : any[] = [];
// { name: "Bar" }, { hobby: "surfing" }


// // export async function fetchData(howMany: number) {
// //     for(let i = 0; i < howMany; i++){
// //     let URL = `https://pokeapi.co/api/v2/pokemon/${i}`;
// //     const response = await axios.get(URL);
// //     const data = response.data;
// //     console.log(data)
// //     }
// //   }

export async function fetchData(howMany: number) {
        for(let i = 1; i < howMany; i++){
axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
  .then(function (response: any) {
pokeList.push(response.data)
// console.log(response.data)
  })
  .catch(function (error: Error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
    console.log('done fetching')
  });
        }
    }
