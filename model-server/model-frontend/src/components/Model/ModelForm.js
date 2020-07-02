import React,{useState} from 'react'
// import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ImageUpload from './ImageUpload'
import useInput from '../../hooks/useInput';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    margin: {
      margin: theme.spacing(1),
    },
    textField: {
      width: '25ch',
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
  },
}));




function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default function ModelForm(props){
  const classes = useStyles();
  const [toast, setToast] = useState(false);
  const [imageData, setImageData] = useState([]);

  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: 'Name',
    weightRange: '',
    showPassword: false,
  });

  const [firstName , bindFirstName, resetFirstName] = useInput('');
  const [modelWare , bindmodelWare, resetmodelWare] = useInput('');
  const [height , bindHeight, resetHeight] = useInput('')
  const [bust , bindBust, resetBust] = useInput('')
  const [waist , bindWaist, resetWaist] = useInput('')
  const [highHip , bindHighHip, resetHighHip] = useInput('')
  const [lowHip , bindLowHip, resetLowHip] = useInput('')

  const handleToastClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setToast(false);
  };

  const submitHandler = (e) =>{
    e.preventDefault();
    const url = `http://3.128.213.23/models`
    console.log(imageData);
    axios.post(url, {
      'firstName': firstName,
      'modelWear': modelWare,
      'height':  height,
      'bust': bust,
      'waist':waist,
      'highHip':highHip,
      'lowHip':lowHip,
      'imageData':imageData
    })
        .then(res =>{
          console.log(res);
          // setItems(res.data)
          resetInputField();
          setToast(true);
        })
        .catch(err =>{
          console.log(err)
        })
  }

  const resetInputField = () =>{
      resetFirstName()
      resetmodelWare()
      resetHeight()
      resetBust()
      resetWaist()
      resetHighHip()
      resetLowHip()
  }

  const handleChange = (prop) => (event) => {
    console.log( event.target.value);
    console.log( prop);
    setValues({ ...values, [prop]: event.target.value });
  };

  const submitModel = () =>{
    console.log(values);
  }

    // submitPlayer = (event) =>{
    //     event.preventDefault();

    //     axios.post('http://localhost:4000/players',{
    //         firstName: this.refs.firstName.value,
    //         lastName: this.refs.lastName.value,
    //         phone: this.refs.phone.value,
    //         email: this.refs.email.value,

    //     }).then(Response =>{
    //         console.log(Response);
    //     }).catch(error =>{
    //         console.log(error);
    //     });
    // }

        return (
          < >
              <form className={classes.root}  style={{margin:'10px 10px 30px 10px'}} noValidate autoComplete="off">
              <Typography 
               className={classes.title}

                variant="h6" noWrap>
                Add a new Model
              </Typography>

              <TextField 
                {...bindFirstName}
                autoFocus = {true}
                required id="standard-required" 
                label="Name" 
                 />

              <TextField
                {...bindmodelWare}
                label="Model Wear"
                id="standard-start-Wear"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                }}/>

              <TextField
              {...bindHeight}
                label="Height"
                id="standard-start-Height"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                }}/>

              <TextField
              {...bindBust}
                label="Bust"
                id="standard-start-Bust"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                }}/>

              <TextField
              {...bindWaist}
                label="Waist"
                id="standard-start-Waist"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                }}/>

              <TextField
              {...bindHighHip}
                label="High Hip"
                id="standard-start-High-Hip"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                }}/>
              <TextField
              {...bindLowHip}
                label="Low Hip"
                id="standard-start-Low-Hip"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                }}/>

              

              </form>

              <div style={{ margin:"10px" }}>
              <ImageUpload  passChildData={setImageData} />
              </div>

              <Button style={{margin:'20px'}}
                variant="outlined" 
                size="medium" 
                color="inherit" 
                onClick={submitHandler}
                className={classes.margin}>
                ADD MODEL
              </Button>

                            {/* Alert */}
                <Snackbar open={toast} autoHideDuration={6000} onClose={handleToastClose}>
                  <Alert onClose={handleToastClose} severity="success">
                    Data added successfully.
                  </Alert>
                </Snackbar>

        {/* Alert */}

          </>
        )
    }

