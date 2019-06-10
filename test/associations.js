import chai from 'chai'
import api from './setup'

let expect = chai.expect

describe('Association', () => {
  describe('Create association', () => {
    let linkInfo = {
      // contact to ticket definitionId = 15, ticket to contact definitionId = 16, use VID for contact
      "fromObjectId": 28093037,
      "toObjectId": 9278824,
      "category": "HUBSPOT_DEFINED",
      "definitionId": 16
    }
    it('Should create a CRM association', () => {
      return api.associations.createAssociation(linkInfo)
        .then(response => {
          expect(response.status).to.equal(204)
        })
    })
  })
})