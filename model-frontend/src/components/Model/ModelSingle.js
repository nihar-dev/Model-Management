import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import MuiAlert from '@material-ui/lab/Alert';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import axios from 'axios';


const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 100,
    paddingTop: '56.25%', // 16:9
  },
});
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function ModelSingle(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [toast, setToast] = React.useState(false);

  const [value,setValue] = useState({
      'firstName': props.items.firstName,
      'modelWear': props.items.modelWare ,
      'height': props.items.height  ,
      'bust': props.items.bust  ,
      'waist': props.items.waist ,
      'highHip':props.items.highHip ,
      'lowHip':props.items.lowHip 
    });



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleToastClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setToast(false);
  };

  const submitHandler = (e) =>{
    e.preventDefault();
    console.log(props.items._id,value);
    const url = `http://localhost:4002/models/${props.items._id}`
    
    axios.put(url, value)
        .then(res =>{
          console.log(res);
          setToast(true);
          // setItems(res.data)
          // resetInputField();
        })
        .catch(err =>{
          console.log(err)
        })
  }
 
  return (
    <>
    <Card className={classes.root} style={{marginBottom:'10px'}} key = {props.items._id}>
      <CardActionArea>

        <CardContent>
        <Grid container spacing={3} style={{margin:'10px'}}>
  
            <Grid item xs={12} sm={3}>
            {/* <img src="../../img-1.jpg" alt="card data" /> */}
            <CardMedia
                image= {! props.items.imageData.length > 0 ? require('../../placeholder.jpg') : props.items.imageData[0]}

                className={classes.media}
                title="Paella dish"
            />
            </Grid>
            <Grid  item xs={12} sm={9}   >
            <Button size="small" 
            onClick={handleClickOpen}
            startIcon={<EditIcon />} 
            color="primary">
           Edit
          </Button>

            <Typography style={{marginLeft:"15px"}}variant="subtitle1"  gutterBottom>
              NAME :  {props.items.firstName && props.items.firstName.toUpperCase()}
              </Typography>
      
            <Grid container>
            
            <Grid item xs={4} >
            <ListItem>
                    <ListItemText primary="MODEL WEAR" secondary={props.items.modelWear.toUpperCase()} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="WAIST" secondary={`${props.items.waist} cm`}/>
                </ListItem>
            </Grid>
            <Grid item xs={4}>
            <ListItem>
                    <ListItemText primary="HEIGHT" secondary={`${props.items.height} cm`} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="HIGH HIP" secondary={`${props.items.highHip} cm`} />
                </ListItem>
            </Grid>
            <Grid item xs={4}>
            <ListItem>
                    <ListItemText primary="BUST" secondary={`${props.items.bust} cm`} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="LOW HIP" secondary={`${props.items.lowHip} cm`} />
                </ListItem>
            </Grid>
            </Grid>
                
            </Grid>

            </Grid>
        </CardContent>
      </CardActionArea>

    </Card>

          {/* Dialog */}
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Update data</DialogTitle>
          <DialogContent>

              <TextField 
                defaultValue={props.items.firstName}
                onChange ={ e =>{
                  setValue({...value,firstName:e.target.value})
                }}
                required id="standard-required" 
                label="Name" 
                fullWidth
                InputProps={{
                  startAdornment: <InputAdornment position="start"></InputAdornment>,
                }}
                 />

              <TextField
                label="Model Wear"
                id="standard-start-Wear"
                defaultValue={props.items.modelWear}
                onChange ={ e =>{
                  setValue({...value,modelWear:e.target.value})
                }}
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                }}
                fullWidth
                />

              <TextField
                fullWidth
                defaultValue={props.items.height}
                onChange ={ e =>{
                  setValue({...value,height:parseInt(e.target.value)})
                }}
                label="Height"
                id="standard-start-Height"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                }}/>

              <TextField
              fullWidth
              defaultValue={props.items.bust}
              onChange ={ e =>{
                setValue({...value,bust:parseInt(e.target.value)})
              }}
                label="Bust"
                id="standard-start-Bust"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                }}/>

              <TextField
              fullWidth
                label="Waist"
                defaultValue={props.items.waist}
                onChange ={ e =>{
                  setValue({...value,waist:parseInt(e.target.value)})
                }}                id="standard-start-Waist"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                }}/>

              <TextField
              fullWidth
              defaultValue={props.items.highHip}
              onChange ={ e =>{
                setValue({...value,highHip:parseInt(e.target.value)})
              }}                label="High Hip"
                id="standard-start-High-Hip"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                }}/>
              <TextField
              fullWidth
              defaultValue={props.items.lowHip}
              onChange ={ e =>{
                setValue({...value,lowHip:parseInt(e.target.value)})
              }}                label="Low Hip"
                id="standard-start-Low-Hip"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                }}/>

            
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose}
              onClick={submitHandler}
              color="primary">
                Update
              </Button>
            </DialogActions>

          </Dialog>
            {/* Dialog */}
              {/* Alert */}
              <Snackbar open={toast} autoHideDuration={6000} onClose={handleToastClose}>
                <Alert onClose={handleToastClose} severity="success">
                  Data updated successfully.
                </Alert>
               </Snackbar>

        {/* Alert */}

        </>
  );
}




