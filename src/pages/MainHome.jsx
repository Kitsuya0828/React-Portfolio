import { useTheme } from '@mui/material';
import React from 'react'

function MainHome() {
  const theme = useTheme();
  return (
    <div>
      <p>{theme.palette.background.paper}</p>
      <p>{"Azuma Kitsuya"}</p>
    </div>
  )
}


export default MainHome
