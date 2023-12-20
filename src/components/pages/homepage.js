import myGif from '../../assets/images/jen-gif.gif';
import '../../styles/homepage.css';

export default function Homepage(){
    return (
         <div>
             <img className="jen-gif" src={myGif} />
         </div>
    )  
}