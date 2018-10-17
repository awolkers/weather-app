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

    const url = `${config.url}weather?${query}`

    return await apiCall(url)
}

export const getLocations = async params => {
    const query = queryString({
        ...PARAMS_BASE,
        ...params
    })

    const url = `${config.url}group?${query}`

    return await apiCall(url)
}

const apiCall = url => {
    return fetch(url).then(response => response.json())
}
