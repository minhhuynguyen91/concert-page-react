import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
})

export const getAllMovies = () => api.get(`/concerts/index`)
export const getMovieById = id => api.get(`/concerts/${id}`)

const apis = {
  getAllConcerts,
  getConcertById
}

export default apis