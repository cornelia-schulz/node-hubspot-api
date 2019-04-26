const errorHandler = require('../helpers/errorHandler.js')
const responseHandler = require('../helpers/responseHandler.js')

const Tickets = (api = null) => {
  if (api === null) throw new Error('Request instance must be provided on constructor.')

  return {
    mapProperties(properties) {
      return Object.keys(properties).map(property => ({
        name: property,
        value: properties[property]
      }))
    },

    getAll(params) {
      const defaultParams = {
        offset: null,
        ...params
      }

      return api.get('crm-objects/v1/objects/tickets/paged', defaultParams)
        .then(response => responseHandler(response))
        .catch(error => errorHandler(error))
    },
    createTicket(properties) {
      // eslint-disable-next-line
      let mappedProperties = this.mapProperties(properties)

      return api.post2('crm-objects/v1/objects/tickets', mappedProperties)
        .then(response => {
          console.log('listening: ', response)
          responseHandler(response)
        })
        .catch(error => {
          console.log('error: ', error)
          errorHandler(error)
        })
    }
  }
}

module.exports = Tickets