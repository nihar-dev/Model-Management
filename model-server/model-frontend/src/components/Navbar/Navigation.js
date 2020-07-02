import React,{useState,useEffect}  from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import useInput from '../../hooks/useInput';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '20ch',
  },
}));


export default function Navigation(props) {
  const classes = useStyles();


  // const [filterData,setFilterData] = useState({})
  
  const [modelWare , bindmodelWare, resetmodelWare] = useInput('');
  const [height , bindHeight, resetHeight] = useInput('')
  const [bust , bindBust, resetBust] = useInput('')
  const [waist , bindWaist, resetWaist] = useInput('')
  const [highHip , bindHighHip, resetHighHip] = useInput('')
  const [lowHip , bindLowHip, resetLowHip] = useInput('')
  const [items,setItems] = useState([])

  useEffect(() => {

    const url = `http://3.128.213.23/modelSearch/${props.keyword}`
    console.log(props.keywords)
    axios.get(url)
        .then(res =>{
          props.passChildData(res.data);
        })
        .catch(err =>{
          console.log(err)
        })
    
  
  },[props.keyword])

  const removeEmpty = (obj) => {
    Object.entries(obj).forEach(([key, val])  =>
      (val && typeof val === 'object') && removeEmpty(val) ||
      (val === null || val === "") && delete obj[key]
    );
    return obj;
  };
  const submitHandler = (e) =>{
    e.preventDefault();
        const url = `http://3.128.213.23/modelSearch/${props.keyword}`
    let params =  {
      'firstName': props.keyword,
      'modelWear': modelWare,
      'height':  height,
      'bust': bust,
      'waist':waist,
      'highHip':highHip,
      'lowHip':lowHip

    }
    const filteredValue = removeEmpty(params);
    

    axios.get(url, {
      params: filteredValue })
        .then(res =>{
          console.log(res);
          // setItems(res.data)
          props.passChildData(res.data);
        })
        .catch(err =>{
          console.log(err)
        })

    // resetmodelWare()
    // resetHeight()
    // resetBust()
    // resetWaist()
    // resetHighHip()
    // resetLowHip()
  }
 

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

        <Grid item xs={12}>
 
          <Paper className={classes.paper}>
          <Typography variant="h6"  gutterBottom>
            Filters
          </Typography>
            <hr/>
          <TextField
            style={{marginTop:"10px"}}
            className={clsx(classes.margin, classes.textField)}
            id="outlined-start-adornment"
            label="MODEL WARE"
            name="modelWear"
            defaultValue="M"
            variant="outlined"
            {...bindmodelWare}
        />

          <TextField
            label="HEIGHT"
            id="outlined-start-adornment"
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: <InputAdornment position="start">cm</InputAdornment>,
            }}
            variant="outlined"
            {...bindHeight}
          />
          <TextField
            label="BUST"
            id="outlined-start-adornment"
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: <InputAdornment position="start">cm</InputAdornment>,
            }}
            variant="outlined"
            {...bindBust}
          />
          <TextField
            label="WAIST"
            id="outlined-start-adornment"
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: <InputAdornment position="start">cm</InputAdornment>,
            }}
            variant="outlined"
            {...bindWaist}
          />
          <TextField
            label="HIGH HIP"
            id="outlined-start-adornment"
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: <InputAdornment position="start">cm</InputAdornment>,
            }}
            variant="outlined"
            {...bindHighHip}

          />
          <TextField
            label="LOW HIP"
            id="outlined-start-adornment"
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: <InputAdornment position="start">cm</InputAdornment>,
            }}
            variant="outlined"
            {...bindLowHip}
          />
          <Button 
            variant="outlined" 
            size="medium" 
            color="inherit" 
            onClick={submitHandler}
            className={classes.margin}>
            APPLY
          </Button>
          </Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}