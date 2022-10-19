import React from 'react'
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png"

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className='bodyPart-card'
      sx={
        bodyPart === item ? {
          borderTop: '4px solid #ff2625',
          backgroundColor: '#fff',

        } : ''
      }

    >
      <img src={Icon} alt="dumbbell" styles={{ height: "40px", width: "40px" }} />
    </Stack>
  )
}

export default BodyPart


// bodypart is selected bodypart
// bodyparts is all body parts(muscle groups) data fetched from api
// bodypart jo ye hai iski state declared hai home page per bcz global use karna hai and usko as a props
// scrollbar,searchexercises ma pass kia hua