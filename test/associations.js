import chai from 'chai'
import api from './setup'

let expect = chai.expect

describe('Association', () => {
  describe('Create association', () => {
    let linkInfo = {
      // contact to ticket definitionId = 15, ticket to contact definitionId = 26, use VID for contact
      "fromObjectId": 496346,
      "toObjectId": 177769,
      "category": "HUBSPOT_DEFINED",
      "definitionId": 26
    }
    it('Should create a CRM association', () => {
      return api.associations.createAssociation(linkInfo)
        .then(response => {
          expect(response.status).to.equal(204)
        })
    })
  })
})