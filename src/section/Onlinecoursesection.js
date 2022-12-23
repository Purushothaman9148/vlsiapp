import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { teal, purple } from '@mui/material/colors';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import Badge from '@mui/material/Badge';
import { useState } from 'react';


const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: teal[500],
    '&:hover': {
        backgroundColor: teal[700],
    },
}));

const coursedata = [
    {
        "courseimg": "https://static.vecteezy.com/system/resources/previews/000/344/822/original/printed-circuit-board-vector-illustration.jpg",
        "price": "98000",
        "type": "Full Time Course",
        "title": "Physical Design",
        "tutor": "Sanjay",
        "rating": 20
    },
    {
        "courseimg": "https://static.vecteezy.com/system/resources/previews/000/344/822/original/printed-circuit-board-vector-illustration.jpg",
        "price": "88000",
        "type": "Weekend Course",
        "title": "Physical Design Weekend",
        "tutor": "Sanjay",
        "rating": 20
    },
    {
        "courseimg": "https://static.vecteezy.com/system/resources/previews/000/344/822/original/printed-circuit-board-vector-illustration.jpg",
        "price": "88000",
        "type": "Online  course",
        "title": "Physical Design",
        "tutor": "Sanjay",
        "rating": 20
    },
    {
        "courseimg": "https://assets.entrepreneur.com/providers/marketbeat/hero-image-marketbeat-433892.jpeg",
        "price": "75000",
        "type": "Online course",
        "title": "Analog Circuit Design Online",
        "tutor": "Venkatesh",
        "rating": 16
    }
];

const Onlinecoursesection = () => {
    const [value, setValue] = useState(2);
    return (
        <div >
            <p className="Onlinecourse-header">Popular Online Courses</p>
            <div className="Onlinecourse-main-container">
                {coursedata.map(x => {
                    return (
                        <div className="onlinecourse-content">
                            <img className="onlinecourse-img" src={x.courseimg} alt={x.title} />
                            <div className="onlinecourse-type">
                                <Button variant="text">{x.type}</Button>
                                <ColorButton variant="outlined"><CurrencyRupeeIcon style={{ height: 15 }} />{x.price}</ColorButton >
                            </div>
                            <div className="onlinecourse-text">
                                <h4>{x.title}</h4>
                                <p>{x.tutor}</p>
                            </div>
                            <div className="onlinecourse-rating">
                                <Rating name="read-only" value={value} readOnly />
                                <Badge badgeContent={x.rating}><PeopleOutlineOutlinedIcon /> </Badge>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Onlinecoursesection;