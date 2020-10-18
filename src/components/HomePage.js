import React from 'react';
//import './App.css';
import './HomePage.css';
import diamondImg from '../sketchLogo.png';
import foodImage from './pictures/FoodCategory.png';
import entertainmentImage from './pictures/EntertainmentCategory.png';
import clothingImage from './pictures/ClothingCategory.png';
import petImage from './pictures/PetCategory.png';
import iconFamily from './pictures/IconFamily.png';
import iconMinority from './pictures/IconMinority.png';
import iconVeteran from './pictures/IconVeteran.png';
import iconWomen from './pictures/IconWomen.png';
import heroMap from './pictures/HeroMap.png';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: "",
            tags: [],
            data: []
        }
        this.searchBarChangeHandler = this.searchBarChangeHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    searchBarChangeHandler(event) {

        //console.log("Going here")
        this.setState({keyword: event.target.value}, () => console.log(this.state.keyword))
        //console.log(this.state.searchElementName)

    }

    onClickHandler() {


        fetch("http://localhost:8080/businesses/getAllBusinesses")
        .then(response => response.json())
        .then(result => this.setState({data: result}, () => {
            console.log(this.state.data)
            this.props.history.push(
                {
                    pathname: "/search",
                    state: {
                        bus_data: this.state.data,
                        search_key: this.state.keyword
                    }
                })
        }))
            // const linkParams = {
            //     pathname: "/search",
            //     data: this.state.data
            // }




        // fetch("http://localhost:8080/businesses/searchBusinesses" + new URLSearchParams({
        //     searchKey: this.state.keyword,
        //     tags: this.state.tags
        // }))
    }

    render() {
        return (
            <div>
                <link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet'></link>
                <div id="hero">
                    <header>
                        <div id="nav">
                            {/* <Link to "/contact"id="submitABusiness">Submit a Business </Link> */}
                            <Link id = "submitABusiness" to ='/submission' >Submit a Business</Link>

                        </div>
                    </header>

                    <div id="tagline">
                        <img src={heroMap} alt="Map" className="headerMap"/>
                        <h1>Find Local Businesses <br/> Near You</h1>
                        <input onChange = {this.searchBarChangeHandler} type="text" id="searchTag" placeholder="Try searching for sushi.."/>
                        <button onClick = {this.onClickHandler}>Search Businesses</button>
                        <div id="popular">
                            <p>Popular Categories:</p>
                            <a href="index.html" className="popularCategory">Food</a>
                            <a href="index.html" className="popularCategory">Entertainment</a>
                            <a href="index.html" className="popularCategory">Clothing</a>
                            <a href="index.html" className="popularCategory">Printing</a>
                        </div>
                    </div>

                </div>

                <div id="categories">
                    <h2>Business Categories</h2>
                    <div className="row row-centered">
                        <div className="column">
                            <div className="container">
                                <img src={foodImage} alt="Food" id="categoryPhoto"/>
                                <div className="bottomleft">Food</div>
                                <div className="bottomleftcaption">Satisfy your cravings</div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="container">
                                <img src={entertainmentImage} alt="Entertainment" id="categoryPhoto"/>
                                <div className="bottomleft">Entertainment</div>
                                <div className="bottomleftcaption">Take a break</div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="container">
                                <img src={clothingImage} alt="Clothing" id="categoryPhoto"/>
                                <div className="bottomleft">Clothing</div>
                                <div className="bottomleftcaption">Explore your true style</div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="container">
                                <img src={petImage} alt="Pet" id="categoryPhoto"/>
                                <div className="bottomleft">Pets</div>
                                <div className="bottomleftcaption">Pamper your fur babies</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="local">
                    <h2>Why Shop Local</h2>

                    <div className="row row-centered">
                        <div className="column">
                            <h3>IMPROVE LOCAL ECONOMY</h3>
                            <p>Purchase at locally owned businesses allow more money to be kept in the community because
                                locally-owned businesses often purchase from other local businesses, service providers
                                and
                                farms.</p>
                        </div>

                        <div className="column">
                            <h3>ENVIRONMENTALLY FRIENDLY</h3>
                            <p>Compared to shopping malls, local businesses contributes less to sprawl, congestion,
                                habitat loss and
                                pollution because of its community-centered location.</p>
                        </div>

                        <div className="column">
                            <h3>GET PERSONALIZED SERVICE</h3>
                            <p>When shopping local, you get to connect directly with shop-owners who are more likely to
                                give better
                                service.</p>
                        </div>
                    </div>

                </div>

                <div className="nd-BG">

                    <div id="spotlight">
                        <h1>Spotlight: Business of the Day</h1>
                        <img src={petImage} alt="Pet" id="categoryPhoto"/>
                        <h3>Seattle,WA</h3>
                        <p>“We opened our doors in the city of Seattle in February of 2008. We use all natural ingredients in
                            our food and make our own secret recipe hot sauces for your dinning delight. Enjoy our complete
                            Breakfast, Lunch, and Dinner Menus 24 hours a day. Don’t Forget to ask about our complete kid’s
                            menu. Come down anytime to enjoy the best of the Northwest’s Authentic Mexican cuisine at Memo’s
                            Mexican Food Restaurant.”</p>
                        <p>-Memo Murillo</p>
                        <p>Minority-Owner</p>

                    </div>

                    <div id="owners">
                        <h2>Owners We Support</h2>

                        <div className="row2">
                            <div className="column">
                                <div className="container">
                                    <img src={iconWomen} alt="Food" id="ownersPhoto"/>
                                    <div className="caption">Women-owned</div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="container">
                                    <img src={iconMinority} alt="Entertainment" id="ownersPhoto"/>
                                    <div className="caption">Minority-owned</div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="container">
                                    <img src={iconVeteran} alt="Clothing" id="ownersPhoto"/>
                                    <div className="caption">Veteran-owned</div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="container">
                                    <img src={iconFamily} alt="Pet" id="ownersPhoto"/>
                                    <div className="caption">Family-owned</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Rectangle">
                        <div className="Made-Using"> Made Using:</div>
                        <img src={diamondImg} alt={diamondImg} className="Bitmap"/>
                    </div>

                    <div className="Spotllight-2020">
                        ©Spotlight 2020
                    </div>

                </div>

            </div>

        );
    }

}

export default HomePage;