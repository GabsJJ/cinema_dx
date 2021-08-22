/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import useSWR from 'swr'
import api from '../services/api'

export function useFetch<Data>(url: string) {
  const { data, error } = useSWR<Data>(url, async (url) => {
    const response = await api.get(url)

    return response.data
  })

  return { data, error }
}
