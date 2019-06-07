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

      uploadFile(data, files) {
        return api.post3('filemanager/api/v2/files', data, files)
        .then(response => responseHandler(response))
        .catch(error => {
            console.log(error)
            errorHandler(error)
        })
    }
  }
}

export default Files