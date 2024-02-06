import React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import IconButton from '@mui/material/IconButton';



function SongsDisplay({ songs }) {
    const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      {songs.map((song, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3} >
          <Card style={{width:'200px' ,height:'200px',paddingTop:'30px',marginTop:'30px'}} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} >
            <CardContent>
              <img src={song.url} alt={song.alt} style={{ width: '100px' }} />
              <Typography variant="h6">{song.name}</Typography>
              <Typography variant="h6" style={{fontSize:'10px' }}>{song.description}</Typography>
                 {isHovered && (
                 <IconButton
                        sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1,
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        transition: 'opacity 0.3s ease-in',
                        }}
                        aria-label="play"
                 >
            <PlayCircleOutlineIcon sx={{ color: 'white' }} />
            
          </IconButton>)}
        </CardContent>
          </Card>
        </Grid>
      ))}
  </>
      );

}

export default SongsDisplay;
