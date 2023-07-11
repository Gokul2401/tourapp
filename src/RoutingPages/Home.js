import { Grid, Typography,Box,Button } from '@mui/material'
import React from 'react'
import Appbar from '../components/AppBar/AppBar'
import Chip from '@mui/material/Chip';

export default function Home() {
  return (
    <Grid sx={{width:'100%',height:'100vh',display:'flex'}} >
        <Appbar />
        <Grid  container>
            <Grid sx={{width:'50%',display:'flex',justifyContent:'center',flexDirection:'column',paddingTop:'30px'}} >
              <Typography variant='h4' sx={{fontFamily:'ExBold',py:2}} > Travel makes one modest. You see what a tiny place you occupy in the world. </Typography>
              <Typography sx={{fontFamily:'Regular',textAlign:'justify',py:2}} >
                An AI-powered tour guide is a smart, technology-driven solution that uses artificial intelligence to enhance the experience of tourists and travelers.It leverages AI algorithms and techniques to provide personalized recommendations, real-time information, and interactive assistance throughout a journey.
              </Typography>
              <Grid>
                  <Typography sx={{mb:2}} >Features</Typography>
                  <Chip label="AI powered Near by Searches" />
                  <Chip label="Voice Based Strangers Communication" />
                  <Chip label="Currency Converter" />
                  <Chip label="Efficient Traveling" sx={{mt:2}} />
                  <Chip label="Helps to Go Green" sx={{mt:2,ml:2}} />
              </Grid>        
          </Grid>
            <Grid sx={{width:'50%',display:'flex',justifyContent:'center',alignItems:"center"}} >
                <img style={{width:'95%'}} src={require('../assets/container.png')} />
            </Grid>
        </Grid>
    </Grid>
  )
}
