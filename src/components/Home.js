import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../Images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
    return (  
        <div className='Home'>
            <div className='navBar'>
                 <motion.div className='logo'
                 initial={{x: -300, opacity: 0}}
                 animate={{x: 0, opacity: 1}}
                 transition={{ type: "spring", duration: 1.5}}>
                    <Link to="/"><img src={ Logo } alt="HotFood logo with plate" /></Link>
                </motion.div>
                <div className='navLinks'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="menu">Menu</NavLink>
                    <NavLink to="chefs">Chefs</NavLink>
                    <NavLink to="about">About</NavLink>
                </div>
                <div className='user-icons'>
                    <Link to="shoppingCart"><FontAwesomeIcon className='icon' icon={faCartShopping} /></Link>
                    <Link to="User"><FontAwesomeIcon className='icon' icon={faUser} /></Link>
                </div>
            </div>
            <motion.div className='intro'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.8, ease: "easeIn"}}>
                <div className="introText">
                   Hi!, how can we help you?
                </div>
                <center>
                    <motion.div className='searchBar'>
                        <input className='searchInput' type='search' placeholder='Search'/>
                        <button className='searchBtn'>Search</button>
                    </motion.div>
                    <div className='introBtn'>
                        <button>Learn More</button>
                        <button>Contact</button>
                    </div>
                </center>
                <div className='socialIcons'>
                    <li><FontAwesomeIcon icon={faFacebook}/></li>
                    <li><FontAwesomeIcon icon={faInstagram}/></li>
                    <li><FontAwesomeIcon icon={faTwitter}/></li>
                    <li><FontAwesomeIcon icon={faYoutube}/></li>
                </div>
            </motion.div>

        </div>
    );
}
 
export default Home;