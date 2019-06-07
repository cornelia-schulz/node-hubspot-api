import chai from 'chai'
import api from './setup'

let expect = chai.expect

describe('Upload a file', () => {
    let fileInfo = {
        data: {
            folder_paths: '/attachments'
        },
        files: ''
    }
  
    it('Should upload file', () => {
      return api.files.uploadFile(fileInfo.data, fileInfo.files)
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.data).to.be.a('object')
          expect(response.data.properties).to.be.a('object')
        })
    })
  })