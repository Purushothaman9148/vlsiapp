
const Icondata = [
    {
        "icon": "",
        "title": "Job Oriented Course Curriculum",
        "content": "Our VLSI course curriculum has been designed in line with the current requirements of the semidondutor industry. The courses are designed to provide extensive training in complete ASIC design flow. At the end of your course, you become specialized in innovative VLSI technology fields like Physical Design, Low Power Verification, Design for Test, Analog Mixed Signal Design."
    },
    {
        "icon": "",
        "title": "100% Placement Assistance",
        "content": "We provide placement support for all our students till they get selected by the client. We work with top-tier semiconductor companies and leverage job opportunities for our candidates who meet the requirements for placement. Our placement programs cut across many areas of the VLSI industry with a focus on ensuring that our students get job."
    },
    {
        "icon": "",
        "title": "Industry Expert Trainers",
        "content": "We work with the best trainers in the industry to provide specialized and up-to-date training for our students. Our trainers are passionate about VLSI technology and are willing to impart their knowledge to our students. All our professionals are experts in their field with over 12+ years’ hands-on experience."
    },
    {
        "icon": "",
        "title": "Affordable Fee",
        "content": "We offer state-of-the-art courses at very affordable prices. Our prices are very affordable and competitive with monthly EMI facility. We offer special discounts to students who are pursuing and having good percentage / CGPA."
    }
];


const Iconsection = () => {
    return (<div className="Iconsection-main-container">
        {
            Icondata.map(x => {
                return (
                    <div className="Iconsection-container">
                        <div className="Icon-img">
                            {x.icon}
                        </div>
                        <h3 className="Icon-title">
                            {x.title}
                        </h3>
                        <p className="Icon-content">
                            {x.content}
                        </p>
                    </div>
                )
            })
        }
    </div>);
}

export default Iconsection;