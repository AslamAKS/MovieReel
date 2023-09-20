export const API_KEY = "41121d24676fc2903448d3e70a475871"

export const BASE_URL = 'https://api.themoviedb.org/3'
export const IMAGE_URL= 'https://image.tmdb.org/t/p/w500'

export const TRENDING = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
export const TOP_RATED = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
export const POPULAR = `${BASE_URL}/movie/popular?api_key=${API_KEY}`
export const UPCOMING = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`


export const ON_THE_AIR = `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}`
export const TOP_RATED_TV = `${BASE_URL}/tv/top_rated?api_key=${API_KEY}`
export const AIRING_TODAY = `${BASE_URL}/tv/airing_today?api_key=${API_KEY}`
export const TODAY_TRENDING = `${BASE_URL}/trending/tv/day?api_key=${API_KEY}`