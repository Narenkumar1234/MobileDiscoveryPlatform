import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import {useState} from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200 + theme.spacing(3) * 3,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
    margin: 2,
  },

  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);



export default function Range() {
  const classes = useStyles();
  const [value,setValue]= useState([10000,20000])


  
  
  const getValue=(e,val)=>(
    setValue(val) 
  )

  return (
    <>
    <div className="inline-block">
      <h1 className="text-black">₹ {value[0]}</h1>
    </div>
    <div className="lg:pt-10 lg:pl-74 lg:ml-36 md:ml-28 pl-32   inline-block">
      <h1 className="text-black">₹ {value[1]}</h1>
    </div>
    <div className="md:mx-auto md:text-center md:w-80 lg:w-96">
      <PrettoSlider 
      max={25000}
      min={8000}
      step={500}
      defaultValue={10000} 
      value={value}
      onChange={getValue}/>
    <div className="text-center">
     
    <Link  to={`/getMobilePhone/${value[0]}/${value[1]}`}>
    <button
    className="text-center lg:text-left lg:ml-0 my-5 transition duration-500 bg-transparent hover:bg-green text-green 
    font-semibold hover:text-white py-2 px-4 border border-green hover:border-transparent rounded inline-block">Search</button>
    </Link>
    </div>

      <div className={classes.margin} />
    </div>
    </>
  );
}
