import "./footer.css";
import {FaFacebookSquare} from "react-icons/fa";
import {BsGithub, BsTwitter, BsPhone} from "react-icons/bs";
import {MdAlternateEmail} from "react-icons/md";

const Footer = () => {
    return(
        <div className="footer_contact">
            <div style={{fontSize : "35px"}}>Let's Work Together...</div>
            <div className="social_media">
                <div>
                    <p><FaFacebookSquare/>Facebook</p>
                </div>
                <div>
                    <p><BsGithub/>GitHub</p>
                </div>
                <div>
                    <p><BsTwitter/>Twitter</p>
                </div>
                <div>
                    <p><MdAlternateEmail/>Email</p>
                </div>
                <div>
                    <p><BsPhone/>Call Me</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;