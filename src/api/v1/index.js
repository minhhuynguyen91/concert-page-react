import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
})

export const getAllConcerts = () => api.get(`/concerts/index`)
export const getConcertById = id => api.get(`/concerts/${id}`)
export const getAllCommencedDates = () => api.get(`/commencedDates/index`)
export const getAllConcertNews = () => api.get(`/concertNews/index`)
export const getAllConcertNewsById = id => api.get(`/concertNews/${id}`)
export const getAllArtist = () => api.get(`/artists/index`)
export const getArtistById = id => api.get(`/artists/${id}`)

const apis = {
  getAllConcerts,
  getConcertById,
  getAllCommencedDates,
  getAllConcertNews,
  getAllConcertNewsById,
  getAllArtist,
  getArtistById
}

export default apis