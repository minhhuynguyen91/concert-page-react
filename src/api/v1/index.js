import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
})

export const getAllConcerts = () => api.get(`/concerts/index`)
export const getConcertById = id => api.get(`/concerts/${id}`)
export const getAllCommencedDates = () => api.get(`/commencedDates/index`)

const apis = {
  getAllConcerts,
  getConcertById,
  getAllCommencedDates
}

export default apis