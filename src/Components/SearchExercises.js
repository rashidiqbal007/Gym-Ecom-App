import React from 'react'
import { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollBar from './HorizontalScrollBar';

// bodypart isliye mngwa rhe because initial state is "all" whereas Exercises ki initialstate arrayempty hai
const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  // this is function for fetching body part categories
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    }
    // call function as soon as the app loads
    fetchExercisesData();
  }, []);

  // async means this will take some time also most cases it is fetching data from the API.
  const handleSearch = async () => {
    if (search) {

      // exerciseoptions parameter will enable users to fetch exercises from the API in fetchdata.js
      const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
      console.log(exercisesData);

      // making our search stronger by using filter method
      const searchedExercises = exercisesData.filter((exercise) =>
        exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)


      );
      // once were done with the search we are gonna clear the search.
      setSearch('');
      setExercises(searchedExercises);
      // until here weve searched & fetched the exercisesdata but next we have to show it somewhere on frontend
    }
  }



  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p='20px'>

      <Typography fontWeight={700} sx={{ fontSize: { lg: "44px", xs: "30px" } }} mb="50px" textAlign="center">
        Awesome Workouts You <br />
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          height="76px"
          // initial state of search i.e empty string
          value={search}
          // setstate value on change
          onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
          placeholder="Search for exercises"
          type="text"
        />
        <Button className="search-btn"
          sx={{
            bgcolor: '#ff2625',
            color: "#fff",
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: "56px",
            // so that btn comes to right side of the screen!
            position: 'absolute',
            right: '0',
          }}
          // onclick function to handle search created above.
          onClick={handleSearch} >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: "20px" }}>
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isbodyParts/>
      </Box>

    </Stack>
  )
}

export default SearchExercises