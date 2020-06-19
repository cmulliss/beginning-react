import axios from 'axios'

export default axios.create({
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'
})

// preconfig instance of axios client