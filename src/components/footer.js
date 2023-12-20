import "../styles/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const instaIcon = <FontAwesomeIcon icon={faInstagram} style={{color: '#ffffff',}} />;
const githubIcon = <FontAwesomeIcon icon={faGithub} style={{color: '#ffffff',}} />;


export default function Footer () {
    return (
        <div className="footer-box">
            <p><span>EMAIL ME</span> jensandage1@gmail.com <span>CALL ME</span> 610-719-7026 <span>CHECK OUT MY PAGES</span> {githubIcon}{instaIcon}</p>
        </div>
    )
}