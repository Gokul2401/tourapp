import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { Grid, Typography } from '@mui/material';
import LocationCard from '../LocationCard/LocationCard'


export default function Places() {

  
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const [op, setOp] = useState([])

  const [data,setData] = useState([])

  const handleChange = async (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);

    // Call the Geoapify Places Autocomplete API
    try {
      const response = await axios.get(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${inputValue}&apiKey=63e02a6c7fee40da9747a8c828a3614a`
      );

      setResults(response.data.features);

      const data = results.map((result) => result.properties.formatted);
      setOp(data)
    } catch (error) {
      console.error('Error fetching autocomplete results:', error);
    }
  };

  const getLocations = async(response) =>{
    const result = await axios.get(`https://api.geoapify.com/v2/places?categories=tourism&filter=rect:${response.data.features[0].bbox[0]},${response.data.features[0].bbox[1]},${response.data.features[0].bbox[2]},${response.data.features[0].bbox[3]}&limit=20&apiKey=63e02a6c7fee40da9747a8c828a3614a`)
    setData(result.data.features)
    console.log(result)
  }

  const getCords = async(e,value) =>{
    try {

    
      const response = await axios.get(`https://api.geoapify.com/v1/geocode/search?text=${value}&apiKey=63e02a6c7fee40da9747a8c828a3614a`)
      getLocations(response)

    } catch (error) {
      console.error('Error fetching autocomplete results:', error);
    }
  }

  return (
    <Grid container >
        <Grid container sx={{display:'flex',minHeight:100,justifyContent:'center'}} >
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={op}
            onChange={getCords}
            sx={{ width: 400 }}
            renderInput={(params) => <TextField {...params} variant='standard' label="Find Your Fav Place" onChange={handleChange} />}
          />
        </Grid>
        <Typography variant='h6' >Classification List</Typography>
        <Grid sx={{display:'flex',flexWrap:'wrap'}} >
            {
              data.map((item,idx)=><LocationCard key={idx} name={item.properties.name} img={item.properties.datasource.raw.image} />)
            }
        </Grid>
    </Grid>
  )
}
