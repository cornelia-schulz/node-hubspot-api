import chai from 'chai'
import NodeHubspotApi from '../src'

let expect = chai.expect

const api = new NodeHubspotApi('demo')

describe('Contacts', () => {

  describe('Get All contacts', () => {

    it('Should return all contacts', done => {

      api.contacts.getAll()
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.data).to.be.a('object')
          expect(response.data.contacts).to.be.a('array')
          done()
        })
        .catch(error => done(error))
    });
  });
})