let pokemons: string[]

const binarySearch = (pokemon: string, start: number, end:number) => {
    if(start > end){
        return `Didn't find ${pokemon}`
    }
    
    let middle = Math.floor((start + end) / 2);
    
    if(pokemon === pokemons[middle]){
    
        return `found ${pokemon} at index ${middle}`
    
    }else if(pokemon > pokemons[middle]){
    
        let start = middle + 1
        return binarySearch(pokemon, start, end)
    
    }else{
        let end = middle -1
        return binarySearch(pokemon, start, end)
    }
    }