import errorHandler from '../helpers/errorHandler'
import responseHandler from '../helpers/responseHandler'

const Association = (api = null) => {
  if (api === null) throw new Error('Request instance must be provided on constructor.')

  return {
    // https://developers.hubspot.com/docs/methods/crm-associations/associate-objects
    createAssociation(properties) {
      return api.put('crm-associations/v1/associations', properties)
        .then(response => {
          console.log('association response: ', response)
          responseHandler(response)
        })
        .catch(error => {
          console.log('error: ', error)
          errorHandler(error)
        })
    }
  }
  
}

export default Association
