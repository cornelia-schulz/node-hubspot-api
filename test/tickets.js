import chai from 'chai'
import api from './setup'

let expect = chai.expect

describe('Tickets', () => {
  describe('Gets tickets', () => {
    it('Should return all tickets', () => {
      return api.tickets.getAll()
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.data).to.be.a('object')
          expect(response.data.objects).to.be.a('array')
        })
    })
  })
})

describe('Create a ticket', () => {
  let ticketInfo = {
    subject: 'Example subject',
    content: 'All ticket details here',
    hs_pipeline: '0',
    hs_pipeline_stage: '1'
  }

  it('Should return new ticket entry', () => {
    return api.tickets.createTicket(ticketInfo)
      .then(response => {
        console.log('response: ', response)
        expect(response.status).to.equal(200)
      })
  })
})