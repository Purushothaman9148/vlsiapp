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
        "type": "Weekend Online Course",
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
        "courseimg": "https://static.vecteezy.com/system/resources/previews/000/344/822/original/printed-circuit-board-vector-illustration.jpg",
        "price": "75000",
        "type": "Online course",
        "title": "Analog Circuit Design Online",
        "tutor": "Venkatesh",
        "rating": 16
    },
    // {
    //     "courseimg": "https://static.vecteezy.com/system/resources/previews/000/344/822/original/printed-circuit-board-vector-illustration.jpg",
    //     "price": "75000",
    //     "type": "Full time course",
    //     "title": "Analog Circuit Design",
    //     "tutor": "Venkatesh",
    //     "rating": 20
    // }
];

const Onlinecoursesection = () => {
    return (
        <div >
            <p className="Onlinecourse-header">Popular Online Courses</p>
            <div className="Onlinecourse-main-container">
                {coursedata.map(x => {
                    return (
                        <div className="onlinecourse-content">
                            <img className="onlinecourse-img" src={x.courseimg} alt={x.title} />
                            <div className="onlinecourse-type">
                                <button>{x.type}</button>
                                <button>{x.price}</button>
                            </div>
                            <div className="onlinecourse-text">
                                <h4>{x.title}</h4>
                                <p>{x.tutor}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Onlinecoursesection;