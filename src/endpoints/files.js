import errorHandler from '../helpers/errorHandler'
import responseHandler from '../helpers/responseHandler'

/* files = {'files': open('/path/on/your/local-computer/report.xls', 'rb')}
r = requests.post(
    'http://api.hubapi.com/filemanager/api/v2/files?hapikey=demo', 
    data={
        "folder_paths": "folder-in-the-cos-file-manager/subfolder"
         },
    files=files)
    */

const Files = (api = null) => {

    if (api === null) throw new Error('Request instance must be provided on constructor.')
  
    return {

      uploadFile(properties) {
        return api.post3('filemanager/api/v2/files', properties)
        .then(response => responseHandler(response))
        .catch(error => {
            console.log('logging error', error.message, error)
            errorHandler(error)
        })
    }
  }
}

export default Files