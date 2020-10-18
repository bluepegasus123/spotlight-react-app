import React from 'react';
//import './App.css';
import './HomePage.css';
import diamondImg from '../sketchLogo.png';
import foodImage from './pictures/FoodCategory.png';
import entertainmentImage from './pictures/EntertainmentCategory.png';
import clothingImage from './pictures/ClothingCategory.png';
import petImage from './pictures/PetCategory.png';

class HomePage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            keyword: "",
            tags: []
        }
        this.searchBarChangeHandler = this.searchBarChangeHandler.bind(this)
    }
    searchBarChangeHandler(event) {
        
        //console.log("Going here")
        this.setState({ keyword: event.target.value }, () => console.log(this.state.keyword)) 
        //console.log(this.state.searchElementName)
        
    }

    render() {
        return (
            <div>
                <link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet'></link>
                <div id="hero">
                    <header>
                        <div id="nav">
                            <a href="index.html" id="submitABusiness">Submit a Business</a>
                        </div>
                    </header>
    
                    <div id="tagline">
                        <h1>Find Local Businesses Near You</h1>
                        <input onChange = {this.searchBarChangeHandler} type="text" id="searchTag" placeholder="Try searching for sushi.."/>
                        <div id="popular">
                            <p>Popular Categories:</p>
                            <a href="index.html">Food</a>
                            <a href="index.html">Entertainment</a>
                            <a href="index.html">Clothing</a>
                            <a href="index.html">Printing</a>
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
    
                    <a href="index.html">Food</a>
    
                    <p>Satisfy your cravings</p>
                    <a href="index.html">Entertainment</a>
    
                    <p>Take a break</p>
                    <a href="index.html">Clothing</a>
    
                    <p>Explore your true style</p>
    
                    <a href="index.html">Pets</a>
                    <p>Pamper your fur babies</p>
                </div>
    
                <div id="local">
                    <h2>Business Categories</h2>
    
                    <h3>Improve Local Economy</h3>
                    <p>Purchase at locally owned businesses allow more money to be kept in the community because
                        locally-owned businesses often purchase from other local businesses, service providers and
                        farms.</p>
    
                    <h3>Environmentally Friendly</h3>
                    <p>Compared to shopping malls, local businesses contributes less to sprawl, congestion, habitat loss and
                        pollution because of its community-centered location.</p>
    
                    <h3>Get Personalized Service</h3>
                    <p>When shopping local, you get to connect directly with shop-owners who are more likely to give better
                        service.</p>
    
                </div>
    
                <div id="spotlight">
                    <h3>Spotlight:</h3>
                    <h3>Business of the Day</h3>
    
                    <p>Seattle,WA</p>
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
                    <p>Women-owned</p>
                    <p>Minority-owned</p>
                    <p>Veteran-owned</p>
                    <p>Family-owned</p>
                </div>
    
                <div className="Rectangle">
                    <div className = "Made-Using">
                        Made Using:
    
                        <img src = {diamondImg} alt = {diamondImg} className = "Bitmap"/>
                    </div>
                </div>
    
    
                <div className = "Spotllight-2020">
                    ©Spotlight 2020
                </div>
            </div>
    
        );
    }
    
}

export default HomePage;