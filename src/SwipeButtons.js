import React from 'react'
import "./SwipeButtons.css"
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';

function SwipeButtons() {
  return (
    <div className='swipeButtons'>
      <IconButton  className="swiperButtons__repeat">
        <ReplayIcon fontSize='large' />
      </IconButton>
      <IconButton   className="swiperButtons__left">
        <CloseIcon  fontSize='large'/>
      </IconButton>
      <IconButton  className="swiperButtons__star">
        <StarRateIcon  fontSize='large'/>
      </IconButton>
      <IconButton className="swiperButtons__right">
        <FavoriteIcon  fontSize='large'/>
      </IconButton>
      <IconButton   className="swiperButtons__lightning">
        <FlashOnIcon fontSize='large'/>
      </IconButton>
    </div>
  )
}

export default SwipeButtons