import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../Images/logo.png';
import { useLoaderData } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import { faCartShopping, faClose, faPhone, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Badge, InputLabel, NativeSelect, FormControl, Rating } from '@mui/material';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Openbanner from '../Images/open.png';
import Closebanner from '../Images/close.png';

const Home = () => {
    let date = new Date();
    let dateHour = date.getHours();
    let dateDay = date.getDay(); 
    console.log(dateHour)
    const meals = useLoaderData();
    const sliceMeals = meals.slice(0, 12)
    const [display, setDisplay] = useState("none");
    const [bannerEase, setBannerEase] = useState('')
    const toggleBanner = () =>{
        if(display === "none"){
            setDisplay("block");
            setBannerEase("bannerEase 0.5s")
        }else {
            setDisplay("none")
        }
    }
    
    return (
        <>
            <div id='openCloseBody' style={{
                    display:`${display}`,
                    animation:`${bannerEase}`
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
                <section className='sectionOne'>
                    <div className='navBar'>
                        <motion.div className='logo'
                        initial={{x: -300}}
                        animate={{x: 0}}
                        transition={{ type: "spring", duration: 1.5, delay: 0.5}}>
                            <Link to="/">
                                <img src={ Logo } alt="HotFood logo with plate" />
                            </Link>
                        </motion.div>
                        <div className='navLinks'>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="menu">Menu</NavLink>
                            <NavLink to="chefs">Chefs</NavLink>
                            <NavLink to="about">About</NavLink>
                        </div>
                        <div className="user-icons">
                            <Badge badgeContent={0} showZero color="error">
                                <Link to="shoppingCart">
                                    <FontAwesomeIcon className="icon" icon={faCartShopping} />
                                </Link>
                            </Badge>
                            <Link to="User">
                                <FontAwesomeIcon className="icon" icon={faUser} />
                            </Link>
                        </div>
                    </div>
                    <div className='intro'>     
                        <motion.div
                            className="introSearch"
                            initial={{ opacity: 0, scale: 0.1 }}
                            animate={{ opacity: 1, scale: 1 }} 
                            transition={{ duration: 1, delay: 0.3, ease: "easeIn" }}
                            >
                            <div className="introText">Hi!, how can we help you?</div>
                            <center>
                                <div className="searchBar">
                                    <FontAwesomeIcon icon={faSearch} className="searchBtn" />
                                    <input className="searchInput" type={"text"} placeholder="Search"/>
                                </div>
                                    {/* <div className='searchDropdown'>
                                                    <div>Name</div>
                                                    <div>Name</div>
                                                    <div>Name</div>
                                                    <div>Name</div>
                                                    <div>Name</div>
                                                    <div>Name</div>
                                                    <div>Name</div>
                                                    <div>Name</div>
                                                    <div>Name</div>
                                                    <div>Name</div>
                                                </div> */}
                                <div className="introBtn">
                                    <button>Learn More</button>
                                    <button>Contact</button>
                                </div>
                            </center>
                            <div className="socialIcons">
                                <li><FontAwesomeIcon icon={faFacebook} /></li>
                                <li><FontAwesomeIcon icon={faInstagram} /></li>
                                <li><FontAwesomeIcon icon={faTwitter} /></li>
                                <li><FontAwesomeIcon icon={faYoutube} /></li>
                            </div>
                        </motion.div>
                        <motion.div
                            className="openCloseBanner"
                            initial={{ x: 200 }}
                            animate={{ x: 0 }}
                            transition={{duration: 0.6, delay: 1.2, type: "spring", stiffness: 120,}}
                        >
                            {
                            dateDay > 0 && dateHour >= 9 && dateHour < 21 ? (<img src={Openbanner} onClick={toggleBanner} className="banner" alt="open banner" />) : (<img src={Closebanner} onClick={toggleBanner} className="banner" alt="close banner"/>)
                            }
                        </motion.div>
                    </div>
                </section>
                <section className="sectionTwo">
                    <div className="menuSection">
                        <div className="menuTitle">MENU</div>
                            <FormControl fullWidth>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                    Categories
                                </InputLabel>
                                <NativeSelect
                                    defaultValue={10}
                                    inputProps={{
                                    name: "categories",
                                    id: "uncontrolled-native",
                                    }}
                                >
                                    <option value={10}>All</option>
                                    <option value={20}>Burger</option>
                                    <option value={30}>Pizza</option>
                                    <option value={40}>Fries</option>
                                    <option value={50}>Chicken</option>
                                </NativeSelect>
                            </FormControl>
                        <div className="menuSearchOption">
                        {sliceMeals.map((meal) => (
                            <div className="mealCard" key={meal.id}>
                            <img src={meal.image} alt={meal.name} />
                            <span className="mealName">{meal.name}</span>
                            <Rating name="read-only" value={3} readOnly />
                            <span className="mealPrice">{meal.price}</span>
                            <button className="addCartBtn">Add to cart</button>
                            </div>
                        ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
  );
};

export const mealsloader = async () => {
  const res = await fetch("http://database4002.herokuapp.com/meals");
  return res.json();
};

export default Home;
