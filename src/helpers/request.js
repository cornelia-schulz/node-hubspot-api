import axios from 'axios'

const API_ENDPOINT = 'https://api.hubapi.com'

class Request {

  constructor(apiKey = null) {

    if (apiKey === null) throw new Error('You must provide the HubSpot API key.')

    this.apiKey = apiKey
    this.apiInstance = axios.create({
      baseURL: `${API_ENDPOINT}`,
      timeout: 600000, // 10 minutes
    })
  }

  normalizeParams(params) {
    return { hapikey: this.apiKey, ...params }
  }

  serializeProperties({ properties = {}, property = {} }) {

    let objParam = Object.keys(properties).length === 0
      ? property
      : properties

    let paramName = Object.keys(properties).length === 0
      ? 'property'
      : 'properties'

    return Object.keys(objParam).map(key =>
      `${paramName}=${encodeURIComponent(objParam[key])}`
    ).join('&')
  }

  get(endPoint, params = {}) {

    let serializedProperties = this.serializeProperties(params)

    if (params.hasOwnProperty('properties'))
      delete params.properties

    if (params.hasOwnProperty('property'))
      delete params.property

    return this.apiInstance.get(`${endPoint}?${serializedProperties}`, {
      params: this.normalizeParams(params),
    })
  }

  // TODO
  post(endPoint, params = {}) {
    return this.apiInstance.post(`${endPoint}?hapikey=${this.apiKey}`, this.normalizeParams(params))
  }

  post2(endPoint, params = {}) {
    return this.apiInstance.post(`${endPoint}?hapikey=${this.apiKey}`, params)
  }

  post3(endPoint, params) {
    console.log('params: ', params)
    const config = { headers: { 'Content-Type': 'multipart/form-data' }, files: params.files }
    return this.apiInstance.post(`${endPoint}?hapikey=${this.apiKey}`, params.data, config)
  }

  // TODO
  put(endPoint, params = {}) {
    return this.apiInstance.put(`${endPoint}?hapikey=${this.apiKey}`)
  }

  // TODO
  delete() {

  }
}

export default Request
