import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function Player() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Artist Details */}
        <Box sx={{ position: 'absolute', top: 0, left: 0, p: 1 }}>
          <Typography variant="subtitle1" color="text.secondary">
            Mac Miller
          </Typography>
        </Box>

        {/* Song Name */}
        <CardContent sx={{ flex: '1 0 auto',marginBottom: '72px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <Typography component="div" variant="h5" sx={{ mb: 1 }}>
            Live From Space
          </Typography>
          
          {/* Music Controls */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton aria-label="previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
          </Box>
        </CardContent>
      </Box>

      {/* Album Cover */}
      <CardMedia
        component="img"
        sx={{ width: 100,height:100 }}
        image="https://cdn-icons-png.flaticon.com/128/663/663083.png"
        alt="Live from space album cover"
      />
    </Card>
  );
}
