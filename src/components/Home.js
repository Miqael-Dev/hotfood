import { useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import { faCartShopping, faClose, faPhone, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Badge, InputLabel, NativeSelect, FormControl, Rating } from '@mui/material';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
    let date = new Date();
    let dateHour = date.getHours();
    let dateDay = date.getDay();
    const [data, setData] = useState([]);
    const sliceData = data.slice(0, 12);
    const [loading, setLoading] = useState(true) 
    const [display, setDisplay] = useState("none");
    const [bannerEase, setBannerEase] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const handleChange = e => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    const handleClick = (a) => {
        console.log(a.target.innerText)
    }


         const filter = data.filter((meal) => (
             meal.name.toLowerCase().match(searchInput.toLocaleLowerCase())
         ));

    
    const toggleBanner = () =>{
        if(display === "none"){
            setDisplay("block");
            setBannerEase("bannerEase 0.5s")
        }else {
            setDisplay("none")
        }
    }

    function meals() {
        fetch("http://database4002.herokuapp.com/meals")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }
    useEffect(()=> {
        meals()
    },[])
    
    console.log(data)
    
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
            {loading ? 
                <div className='loading'>
                    <img src='./Images/loading.png' alt='bowl with vapour'/>
                </div> 
                :
                <div className='Home'>
                    <section className='sectionOne'>
                        <div className='navBar'>
                            <motion.div className='logo'
                            initial={{x: -300}}
                            animate={{x: 0}}
                            transition={{ type: "spring", duration: 1.5, delay: 0.5}}>
                                <Link to="/">
                                    <img src={"https://i.ibb.co/DR78PSz/logo-min.png"} alt="HotFood logo with plate" />
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
                            <div className='introContent'>
                                <motion.div className='pizzaSlice'
                                initial={{x: 0}}
                                animate={{x: -100}}
                                transition={{duration: 1, delay: 0.6, type: "spring", stiffness: 100}}>
                                    <img src={'https://i.ibb.co/dgBr7qw/pizza-slice-min.png'} alt="pizza slice" />
                                </motion.div>
                                <div className="pizzaSliceTwo">
                                    <img src={'https://i.ibb.co/jg97GSm/pizza-slice2-min.png'} alt='pizza'/>
                                </div>
                                    <div className="socialIcons">
                                        <li><FontAwesomeIcon icon={faFacebook} /></li>
                                        <li><FontAwesomeIcon icon={faInstagram} /></li>
                                        <li><FontAwesomeIcon icon={faTwitter} /></li>
                                        <li><FontAwesomeIcon icon={faYoutube} /></li>
                                    </div>
                                    <motion.div
                                        className="introSearch"
                                        initial={{ opacity: 0, scale: 0.7 }}
                                        animate={{ opacity: 1, scale: 1 }} 
                                        transition={{ duration: 0.7, ease: "easeIn" }}
                                        >
                                        <div className="introText">
                                            <span className="introOne">Are you hungry?</span><br/>
                                            <span className="introTwo">Don't wait!</span><br/>
                                            <span className="introThree">Order you food now</span>
                                        </div>
                                            <div className="searchBar">
                                                <FontAwesomeIcon icon={faSearch} className="searchBtn" />
                                                <input className="searchInput" value={searchInput} onChange={handleChange} type={"text"} placeholder="Search"/>
                                            </div>
                                            <div>
                                                <div className='searchDropdown'>
                                                    { 
                                                        searchInput.length > 0 ? filter.map((names) => (
                                                            <div className='dropdownItem' key={names.name} onClick={handleClick}>
                                                                <img className="dropdownImage" src={names.image}  alt={names.name}/> 
                                                                    <div className='dropdownInfo'>
                                                                        <div className='dropdownName'>{names.name}</div>
                                                                        <Rating 
                                                                            name="read-only" 
                                                                            value={names.rating} 
                                                                            readOnly 
                                                                            sx={{
                                                                                fontSize: '0.8rem',
                                                                            }}/>
                                                                            <span className="dropdownPrice">{names.price}</span>
                                                                    </div>
                                                                </div>
                                                            )) : null 
                                                    }
                                                </div>
                                            </div>
                                            <div className="introBtn">
                                                <button>Order now</button>
                                                <button>explore &#8594;</button>
                                            </div>
                                    </motion.div>
                            
                            </div>     
                            <motion.div
                                className="openCloseBanner"
                                initial={{ x: -200 }}
                                animate={{ x: 0 }}
                                transition={{duration: 0.6, delay: 1.2, type: "spring", stiffness: 120,}
                            }
                            >
                                {
                                dateDay > 0 && dateHour >= 9 && dateHour < 21 ? 
                                (
                                    <div className='banner openBanner' onClick={toggleBanner}>
                                        We're Open
                                    </div>
                                ) : 
                                (
                                    <div className='banner closeBanner' onClick={toggleBanner}>
                                        We're Close
                                    </div>
                                )
                                }
                            </motion.div>
                        </div>
                    </section>
                    <section className="sectionTwo">
                        <div className="menuSection">
                            <div className="menuTitle">MENU</div>
                                <FormControl>
                                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                        Categories
                                    </InputLabel>
                                    <NativeSelect
                                        defaultValue={10}
                                        inputProps={{
                                        name: "categories",
                                        id: "uncontrolled-native",
                                        }}
                                        sx={{fontSize: '0.9rem', width: '200px'}}
                                        >
                                        <option value={10}>All</option>
                                        <option value={20}>Burger</option>
                                        <option value={30}>Pizza</option>
                                        <option value={40}>Fries</option>
                                        <option value={50}>Chicken</option>
                                    </NativeSelect>
                                </FormControl>
                            <div className="menuSearchOption">
                                {sliceData.map((meal) => (
                                    <div className="mealCard" key={meal.id}>
                                    <img src={meal.image} alt={meal.name} />
                                    <span className="mealName">{meal.name}</span>
                                    <Rating 
                                    name="read-only" 
                                    value={meal.rating} 
                                    readOnly 
                                    sx={{
                                        fontSize: '1.5rem',
                                    }}/>
                                    <span className="mealPrice">{meal.price}</span>
                                    <div className="cartBtnContainer">
                                        <button className="addCartBtn">Add to cart</button>
                                    </div>
                                    </div>
                                ))}
                            </div>
                        <div className='slider'>
                           <div className='sliderOne'></div>
                           <div className='sliderTwo'></div>
                           <div className='sliderThree'></div>
                           <div className='sliderFour'></div>
                        </div>
                        </div>
                    </section>
                    <section className="sectionThree">
                        <div className='chefSection'>
                            <div className='chefSectionTitle'>Meet Our Chefs</div>
                            <div className='chefs'>
                                {/* <div className='chefOne'>
                                    <img src="./Images/chef1.jpg"  alt='chef cooking' />
                                    <h2>Name</h2>
                                </div>        */}
                            </div>
                        </div>
                    </section>
                </div>
            }
        </>
  );
};

export const mealsloader = async () => {
    const res = await fetch("http://database4002.herokuapp.com/meals");
    return res.json();
};

export default Home;
