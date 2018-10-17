import { api as config } from '../config'

const PARAMS_BASE = {
    APPID: process.env.REACT_APP_OPENWEATHERMAP_APPID
}

export const queryString = params => {
    return Object.keys(params)
        .map(key => key + '=' + params[key])
        .join('&')
}

export const searchLocations = async params => {
    const query = queryString({
        ...PARAMS_BASE,
        ...params,
        type: 'like'
    })

    const url = `${config.url}find?${query}`

    return await apiCall(url)
}

const apiCall = async url => {
    let response = await fetch(url)
    if (response.ok) return await response.json()
    throw new Error(response.status)
}
