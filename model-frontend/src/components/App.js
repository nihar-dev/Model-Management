import React ,{useState} from 'react';
import './App.css';

import HomeTemplate from './Template/HomeTemplate'
import AddModelTemplate from './Template/AddModelTemplate'



// material-ui Component
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));


const  App = () => {

  const classes = useStyles();
  const [values, setValues] = useState({
    Models:[],
    currentModel:{},
    initialScreen: true,

  });
  const [keyword,setKeyword] = useState('d')
   


    return (
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography 
          onClick={() => setValues({...values,initialScreen:true})}
          className={classes.title} variant="h6" noWrap>
          Model Management
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon
              
              />
            </div>
            <InputBase
              placeholder="Search…"
              onChange={e => setKeyword(e.target.value)}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Button
              variant="contained"
              className={classes.button}
              startIcon={<AddIcon />}
              onClick={() => setValues({...values,initialScreen:false})}
          >
              Add New Model
          </Button>
        </Toolbar>
      </AppBar>
      {values.initialScreen ? <HomeTemplate keyword={keyword} /> : <AddModelTemplate/>}

     
    </div>

    );
  }


export default App;
