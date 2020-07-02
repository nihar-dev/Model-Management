import React , { useState, useEffect } from 'react'

import Navbar from '../Navbar/Navigation'
import SearchTemplate from './SearchTemplate'

// material-ui Component

import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// -----------------

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

function HomeTemplate(props) {
    const classes = useStyles();
    const [childData, setChildData] = useState([]);

    return (
      <div className={classes.root}>

        <Grid container spacing={3} style={{margin:'10px'}}>
  
        <Grid item xs={12} sm={3}>
            <Navbar keyword = {props.keyword} passChildData={setChildData} />
        </Grid>
        <Grid item xs={12} sm={9}>
              <SearchTemplate  data = {childData} />
        </Grid>
     
      </Grid>
       
      </div>
    );
  }

export default HomeTemplate
