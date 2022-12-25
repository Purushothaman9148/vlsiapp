
import MailIcon from '@mui/icons-material/Mail';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const footerdata = [
    {
        "name": "CONTACT",
        "content1": "test@gmail.com",
        "mailicon": <MailIcon />,
        "content2": "9876543210",
        "phoneicon": <PhoneIphoneIcon />,
        "whatsappicon": < WhatsAppIcon />,
        "content3": "Bengaluru, India.",
        "locationicon": <LocationOnIcon />,
        "content4": ""
    },
    {
        "name": "COMPANY",
        "content1": "About Us",
        "content2": "Why Upgrade VLSI",
        "content3": "Contact",
        "content4": "Become a Trainer"
    },
    {
        "name": "USEFUL LINKS",
        "content1": "All Courses",
        "content2": "Physical Design",
        "content3": "Analog Layout",
        "content4": "ASIC Verification"
    },
    {
        "name": "SUPPORT",
        "content1": "Free Demo Class",
        "content2": "Placements",
        "content3": "Corporate Training",
        "content4": "Blog"
    },
    {
        "name": "PRIVACY",
        "content1": "Privacy Policy",
        "content2": "Terms and Conditions",
        "content3": "Refund Policy",
        "content4": "FAQs"
    }
];

const Footer = () => {
    const newDate = new Date();
    const fullyear = newDate.getFullYear();
    return (
        <div>
            <div className='footer-main-container'>

                {footerdata.map(x => {
                    return (
                        <div className='footer-container'>
                            <h5>{x.name}</h5>
                            <p>{x.mailicon} {x.content1}</p>
                            <p>{x.phoneicon}{x.whatsappicon} {x.content2}</p>
                            <p>{x.locationicon} {x.content3}</p>
                            <p>{x.content4}</p>
                        </div>
                    )
                })}


            </div>
            <div className='media-icon-container'>
                <LinkedInIcon />
                <FacebookIcon />
                <InstagramIcon />
                <WhatsAppIcon />
                <TwitterIcon />
                <YouTubeIcon />
            </div>
            <div className='footer-rights-content'>
                <p>Copyright ©{fullyear} CI. All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;