import axios from "axios"

const key = 'ce9664f339644bb1aaec681a941f4aae'
const axiosCreate = axios.create({
    baseURL:"https://api.rawg.io/api"
})

const getGenreList = axiosCreate.get('/genres?key='+key)
const getAllGames = axiosCreate.get('/games?key='+key)

export default {
    getGenreList,
    getAllGames
}