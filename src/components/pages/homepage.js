import myGif from '../../assets/images/jen-gif.gif';
import '../../styles/homepage.css';

export default function Homepage(){
    return (
         <div className='flex-container'>
           <div className="col-4">
                <p className="left-col-text"><span>BEFORE </span> be an educator</p> 
                <p className="left-col-text"><span>NOW</span>have moved back to the Portland area and am looking for something new</p>
                <p className="left-col-text"><span>NEXT</span>find a position to stretch my creative legs</p>
            </div>
           <div className="col-2">
                <img className="jen-gif" src={myGif} />
                <h2 className="column-header">Look!</h2>
                <p className="right-col-text">Checkout my projects</p>
                <p className="right-col-text">View my resume</p>
                <p className="right-col-text">Want to see my art?</p>
                <p className="right-col-text">See how to reach me</p>
           </div>
             
         </div>
    )  
}