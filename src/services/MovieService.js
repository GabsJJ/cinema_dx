/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import api from './api'
import { trackPromise } from 'react-promise-tracker'

export const getMovieByID = async (movieID) => {
  try {
    return await trackPromise(
      api.get(`/3/movie/${movieID}`).then((json) => json.data)
    )
  } catch (error) {
    throw error
  }
}
