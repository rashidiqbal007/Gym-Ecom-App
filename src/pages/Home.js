// inside pages bcz it will have more components
import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import Exercises from '../Components/Exercises'
import HeroBanner from '../Components/HeroBanner'
import SearchExercises from '../Components/SearchExercises'

const Home = () => {
  // reason we have these states in home is because we want state changes to reflect all across our app not just in our search
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setbodyPart] = useState("all");

  return (
    <Box>
      <HeroBanner />
      {/* shared states in both components Note: if same states had to be passed in multiple components we could use contextapi */}
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setbodyPart={setbodyPart} />
      <Exercises setExercises={setExercises} bodyPart={bodyPart} setbodyPart={setbodyPart} />
    </Box>
  )
}

export default Home