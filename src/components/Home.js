import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';
import Logo from '../Images/logo.png';


const Home = () => {
    return (  
        <div className='Home'>
            <nav className='NavBar'>
                 <div className='logo'>
                    <img src={ Logo } alt="HotFood logo with plate" />
                </div>
            </nav>
        </div>
    );
}
 
export default Home;