import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../Images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { faCartShopping, faClose, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Openbanner from '../Images/open.png'
import Closebanner from '../Images/close.png'


const Home = () => {
    let date = new Date();
    let dateHour = date.getHours();
    let dateDay = date.getDay();
    console.log(dateHour)
    const [display, setDisplay] = useState("none");
    const toggleBanner = () =>{
        if(display === "none"){
            setDisplay("block");
        }else {
            setDisplay("none")
        }
    }
    
    return (
        <>
            <div id='openCloseBody' style={{
                display:`${display}`
            }}>
                <div className='openClose'>
                    <FontAwesomeIcon className='closeBtn' onClick={toggleBanner}  icon={faClose}/>
                    <table>
                        <th colSpan={2}>
                            <h2><span
                            style={{color: 'white'}}>Hot</span>
                            <span
                            style={{color: 'rgb(254,192,87)'}}>Food</span></h2>
                            <p className='contactInfo'><FontAwesomeIcon icon={faPhone}/>+233 59 959 9317 | name@mail.com</p>
                            <h2 className='openTitle'><center>OPENING TIMES</center></h2>
                        </th>
                        <tr>
                            <td>Monday</td>
                            <td>9:00AM - 9:00PM</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>9:00AM - 9:00PM</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>9:00AM - 9:00PM</td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td>9:00AM - 9:00PM</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>9:00AM - 9:00PM</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>9:00AM - 9:00PM</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <center>
                                <td rowSpan={2}>CLOSED</td>
                            </center>
                        </tr>
                    </table>
                </div>
            </div>    
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
                <motion.div className='openCloseBanner'
                initial={{x: 200}}
                animate={{x:0}}
                transition={{duration:0.6, delay: 1.2, type: 'spring'}}>
                    {dateDay > 0 && dateHour >= 9 && dateHour <= 21 ? <img src={Openbanner} onClick={toggleBanner}  className='banner' alt="open banner"/>
                        :
                    <img src={Closebanner} onClick={toggleBanner}  className='banner' alt='close banner'/>
                    }
                </motion.div>
            </div>
        </>
    );
}
 
export default Home;