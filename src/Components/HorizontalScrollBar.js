import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import BodyPart from './BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'

const LeftArrow = () => {
    const { ScrollPrev } = useContext(VisibilityContext);
    return (
        <Typography onClick={() => scrollPrev()} className="left-arrow" >
            <img src={LeftArrowIcon} alt="left-arrow" />
        </Typography>
    );
};
const RightArrow = () => {
    const { ScrollNext } = useContext(VisibilityContext);
    return (
        <Typography onClick={() => scrollNext()} className="right-arrow" >
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    );
};
const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
    return (
        // scroll menu is for changing columns to rows
        <ScrollMenu>
            {data.map((item) => (
                <Box key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                    m="0 40px">

                    {/* some properties passed through props */}
                    <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                </Box>
            )
            )
            }
        </ScrollMenu>

    )
}

export default HorizontalScrollBar