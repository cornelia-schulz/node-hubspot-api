import chai from 'chai'
import api from './setup'

let expect = chai.expect

describe('Upload a file', () => {
    const file = 'data:image/png;base64,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'
    const files = {
        files: file,
        data: {
            folder_paths: '/attachments'
        }
    }
  
    it('Should upload file', () => {
      return api.files.uploadFile(files)
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.data).to.be.a('object')
          expect(response.data.properties).to.be.a('object')
        })
    })
  })