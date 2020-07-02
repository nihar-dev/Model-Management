import React , {useState,useEffect} from 'react'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

function ImageUpload(props) {
    const [imageData, setImageData] = useState([]);
  const [toast, setToast] = useState(false);

    useEffect(() => {

        props.passChildData(imageData);

      },[imageData])


    const getUploadParams = ({ meta }) => {
        const url = 'https://httpbin.org/post'
        return { url, meta: { fileUrl: `${url}/${encodeURIComponent(meta.name)}` } }
    }
    const handleToastClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
      
        setToast(false);
      };

    const handleChangeStatus = ({ meta }, status) => {
        console.log(status, meta)
        //  ? imageLink.push() : []
        if(status === "done"){
            setImageData([...imageData,meta.previewUrl])
            setToast(true);
        }
        else if(status === "removed"){
            console.log(imageData)
            
            setImageData(imageData.filter( data => data !== meta.previewUrl ))
            console.log(imageData)
            // setImageData()
        }
        
    }
    
    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }
      
        
    return (
        <>
        <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        // onSubmit={handleSubmit}
        accept="image/*,audio/*,video/*"
        inputContent={(files, extra) => (extra.reject ? 'Image files only' : 'Drag Files')}
        styles={{
           
            dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' },
            inputLabel: (files, extra) => (extra.reject ? { color: 'red' } : {}),
        }}
        />
                                    {/* Alert */}
                                    <Snackbar open={toast} autoHideDuration={6000} onClose={handleToastClose}>
                                    <Alert onClose={handleToastClose} severity="success">
                                      Image uploaded successfully.
                                    </Alert>
                                  </Snackbar>
                  
                          {/* Alert */}
                          </>
    )

    }

export default ImageUpload
