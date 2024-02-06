import React from 'react';
import SearchAppBar from './Layout';
import LeftPositionedTimeline from './Sidebar';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import { SongsList } from './SongsList'; // Assuming SongsList.js is in the same directory
import SongsDisplay from './SongsDisplay';
import Player from './Player';

function App() {
  const songs = SongsList; // You can directly access SongsList here

  return (
    <>
      <Grid container spacing={3} style={{ position: 'relative', minHeight: '100vh' }}>
        <Grid item xs={2} md={2}>
          <LeftPositionedTimeline />
        </Grid>
        <Grid item xs={10} md={10}>
          <SearchAppBar />
          <Grid container spacing={4}>
            <SongsDisplay songs={songs} />
          </Grid>
        </Grid>
        <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 999,height:'100px',marginBottom: '0px',paddingTop:'20px' }}>
          <Player />
        </div>
      </Grid>
    </>
  );
}

export default App;
