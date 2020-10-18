import React from 'react';
//import './App.css';
import './HomePage.css';

function HomePage() {
    return (
        <div>
            <div id="hero">
                <header>
                    <div id="nav">
                        <a href="index.html" id="submitABusiness">Submit a Business</a>
                    </div>
                </header>

                <div id="tagline">
                    <input type="text" id="searchTag" placeholder="Try searching for sushi.."/>
                    <h1>Find Local Businesses Near You</h1>
                </div>


                <div id="popular">
                    <p>Popular Categories:</p>
                    <a href="index.html">Food</a>
                    <a href="index.html">Entertainment</a>
                    <a href="index.html">Clothing</a>
                    <a href="index.html">Printing</a>
                </div>
            </div>

            <div id="categories">
                <h2>Business Categories</h2>
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

            <div id="made">
                <h3>Made Using:</h3>
            </div>


            <footer>
                <p>©Spotlight 2020</p>
            </footer>
        </div>

    );
}

export default HomePage;
