import React, {Component} from 'react';
import './SearchPage.css';
import location_pin from './pictures/location_pin.png'
import logo from './pictures/logo_colored.png'
import call from './pictures/Call.png'
import site from './pictures/Site.png'
import mail from './pictures/Mail.png'
import GoogleMapReact from 'google-map-react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const resultData = [
    {
        "name": "Fat Ducks Deli and Bakery",
        "owner_name": "Jaclyn Roth",
        "owner_email": "jaclynroth@yahoo.com",
        "phone_number": "(206) 257-4798",
        "address": "5509 University Way NE, Seattle, WA 98105",
        "site": "http://fatducksdeli.com/",
        "description": "Fat Ducks is an independently owned deli and bakery that is located in the University District neighborhood of Seattle, Washington. We've been here a while. Things have really changed. I mean, really changed. Looking out at the Ave from our windowshop leads us to believe that it must be ages since we first opened. When did those apartment complexes get built?",
        "story": "Fat Ducks is run by a very small team. A very, very small team. However, we do not mess around when it comes to food. Taste is the only candidate on our menu.Serving great food is really our only source of pride. We tried to be hip, but it didn't work, because none of us around here have very good aesthetic taste. The only thing we're good at is making our food.But worry not: as Ron Swanson once said, \"Don't half-ass two things. Whole-ass one thing.\" And truly, when it comes to food, we whole-ass it.",
        "profile_picture": "https://drive.google.com/file/d/15czaJzdH7kLe3A0gO6lszrFc5WPdMTN1/view?usp=sharing",
        "remaining_pictures": [
            "https://drive.google.com/file/d/1zhM0TEF65FefhpIkpka8Gtf53w6lYSxX/view?usp=sharing",
            "https://drive.google.com/file/d/1koZjEkm68WpkMcteRGlvka_fnQLMKnbq/view?usp=sharing",
            "https://drive.google.com/file/d/1ijw0in0ESgJAMa7PqUqEoJSX4x9Pacbh/view?usp=sharing",
            "https://drive.google.com/file/d/1dg5xGrdxFUIV-3MhD-gMoevbL1bonThX/view?usp=sharing",
            "https://drive.google.com/file/d/1TtuSjJ3uCuJoKOscXF7iNFkP1yu4J0n7/view?usp=sharing",
            "https://drive.google.com/file/d/1ZIzN2tlsJghHb9Lp20J-E2_b3-YFFDES/view?usp=sharing"
        ],
        "tags": [
            "Food"
        ],
        "latitude": "",
        "longitude": ""
    },
    {
        "name": "Memo's Mexican Food Restaurant",
        "owner_name": "Memo Murillo",
        "owner_email": "memos_mexican@gmail.com",
        "phone_number": "(206) 729-5071",
        "address": "4743 University Way NE, Seattle, WA 98105",
        "site": "http://memosmexicanfood.com/",
        "description": "Enjoy Our Authentic Mexican Cuisine. The best the Northwest has to offer!",
        "story": "We opened our doors in the city of Seattle in February of 2008. We use all natural ingredients in our food and make our own secret recipe hot sauces for your dinning delight. Enjoy our complete Breakfast, Lunch, and Dinner Menus 24 hours a day. Don’t Forget to ask about our complete kid’s menu. Come down anytime to enjoy the best of the Northwest’s Authentic Mexican cuisine at Memo’s Mexican Food Restaurant.",
        "profile_picture": "https://drive.google.com/file/d/15l3NaSaXoeWDXdn4QipsOnYyQqEwuFou/view?usp=sharing",
        "remaining_pictures": [
            "https://drive.google.com/file/d/1uqxMXmz6VRV9FSxTCRfYikkyB_d1gs4O/view?usp=sharing",
            "https://drive.google.com/file/d/15lqdttu40DmDDU2k2lJG1RC4Z80qB273/view?usp=sharing",
            "https://drive.google.com/file/d/13G8KFXTPKpCBxDGigWoLFbpncpXRNZGV/view?usp=sharing",
            "https://drive.google.com/file/d/1-n656jf2Q7zngrwsPwkKEOfL0sLNOaSU/view?usp=sharing",
            "https://drive.google.com/file/d/1CBaSm-A_qE5dL8nOCEPELrlBQjaEw9hN/view?usp=sharing",
            "https://drive.google.com/file/d/1vPq4GV7HFZW4tT7YQQlo80gv4h5kRJHp/view?usp=sharing"
        ],
        "tags": [
            "Food"
        ],
        "latitude": "",
        "longitude": ""
    },
    {
        "name": "Mod Pizza",
        "owner_name": "Scott & Ally Svenson",
        "owner_email": "charlottew@modpizza",
        "phone_number": "(206) 632-7111",
        "address": "1414 NE 42nd St, Seattle, WA 98105",
        "site": "https://modpizza.com/locations/u-district/",
        "description": "MOD is the original superfast pizza experience – a pioneering fast-casual concept that puts you in the driver’s seat. Artisan-style pizzas and salads are individually sized, made on demand, and ready in just minutes. Choose from over 30 toppings – the price stays the same no matter what you pick. At its heart, however, MOD is a platform for doing good. The idea? If we take care of our employees, they’ll take care of you, and our business will take care of itself. We call it Spreading MODness, and after opening stores across the U.S., we think it’s working.",
        "story": "MOD was founded in 2008 by husband and wife, Scott and Ally Svenson, in their hometown of Seattle. Inspired by their own search for quick, affordable, wholesome restaurant options for their growing family, they started to wonder if there were a better way of doing pizza – and business. The last thing the world needed was another pizza place, but maybe this one could be different. What if everyone could get exactly what they wanted, made fresh on demand, for as little as possible? And what if employees were paid as much as possible and given real opportunities for growth, even second chances? It all started sounding pretty great, and soon Scott and Ally were opening the first MOD Pizza in downtown Seattle.",
        "profile_picture": "https://drive.google.com/file/d/1JXUahkDV6OuTIBxSRVHhTodRzw1yJq_G/view?usp=sharing",
        "remaining_pictures": [
            "https://drive.google.com/file/d/1kokhL6MpQanDGF0q9FefYO3tIwXdseCE/view?usp=sharing",
            "https://drive.google.com/file/d/1Nx0K3WbVPOUN8npeg7QT5RD-46A8PGAP/view?usp=sharing",
            "https://drive.google.com/file/d/1JXPn-quZvFvaebeT5x1DkeCCb5vwqIGp/view?usp=sharing",
            "https://drive.google.com/file/d/1p7Rxq5kOdmfLsjpuJJxG5samAjaNG6SV/view?usp=sharing",
            "https://drive.google.com/file/d/1AsCRE7Jtc2MynFnQuv_918F9SabxG6xz/view?usp=sharing"
        ],
        "tags": [
            "Food"
        ],
        "latitude": "",
        "longitude": ""
    },
    {
        "name": "Morsel",
        "owner_name": "Kekoa Chin-Hidanocan",
        "owner_email": "morselseattle@gmail.com",
        "phone_number": "(206) 268-0154",
        "address": "4754 University Way NE, Seattle, WA 98105",
        "site": "http://www.morselseattle.com/",
        "description": "Homey cafe with sofas, board games & quiet corners for gourmet coffee & craft biscuit sandwiches.",
        "story": "Prior to 2013, the Morsel location on The Ave was a place called Nook, which as also revered for it’s biscuits. It was actually featured on an Anthony Bourdain show. It surprisingly closed down and that’s when Morsel was born and took over the space.",
        "profile_picture": "https://drive.google.com/file/d/1gkmmPNHcJQQZhSkjWB8TqAsi76dY3J-g/view?usp=sharing",
        "remaining_pictures": [
            "https://drive.google.com/file/d/10ahPEY70IcdnAiXoNMu-5TvoYxHJNYwO/view?usp=sharing",
            "https://drive.google.com/file/d/1ujgARuIDdFi0Wmohghl12Oe53eItQOZh/view?usp=sharing",
            "https://drive.google.com/file/d/1AAb-95sQvZlwg08Gw05pyZCtZQTagqSR/view?usp=sharing",
            "https://drive.google.com/file/d/1WFJBka26B3SeGEvUkPXJZd0DpvKsh5MU/view?usp=sharing",
            "https://drive.google.com/file/d/1XEw88CZL27-CiO-OR67FEOnBZQNd3nHb/view?usp=sharing"
        ],
        "tags": [
            "Food",
            "Entertainment"
        ],
        "latitude": "",
        "longitude": ""
    },
    {
        "name": "Araya's Place",
        "owner_name": "Cheri Kim",
        "owner_email": "arayasplace@gmail.com",
        "phone_number": "(206) 524-4332",
        "address": "5240 University Way NE, Seattle, WA 98105",
        "site": "https://www.arayasplace.com/",
        "description": "Araya’s Place is the 1st vegan-Thai restaurant in the northwest. We’ve been open since 1987 and are family-owned and operated, providing vegetarian food while supporting our local farms. Every dish is prepared fresh to order. This means we can accommodate to everyone’s needs, including dietary and allergy restrictions.",
        "story": "Araya’s Place is named after our mother. In her days of being young and adventurous, Araya spent time traveling the world and developing a passion for good food. What she learned from her world-wide travels is not only how important the right ingredients and herbs are to food, but how the right company makes good food great. This is a lesson she instilled in her children. In our family, eating is one of the most important activities in life. In this fast-paced world, the dinner table is the only time we get to spend together. During our meals, we share the everyday experiences that season our life. We eat, we laugh, we share. Come and enjoy life as our family does, one moment and one meal at a time.",
        "profile_picture": "https://drive.google.com/file/d/1mKmwgcPmYqMwJZ_XghwuuewALbR-OX2O/view?usp=sharing",
        "remaining_pictures": [
            "https://drive.google.com/file/d/1yHaLvv2IJaVyt7lAlnRQIyS0rz5oDpO-/view?usp=sharing",
            "https://drive.google.com/file/d/1RpQKyLy_mbAMTPmP3AuudNkFnfmxKIL9/view?usp=sharing",
            "https://drive.google.com/file/d/1Nye2URUD_AjBqGlJQYxEHDvBTBgQkm6J/view?usp=sharing",
            "https://drive.google.com/file/d/1bFUZphmYj1lhxGAbK6rIwGi7gQu40n9_/view?usp=sharing",
            "https://drive.google.com/file/d/1WyZv0-0ikbUjeZF4KxVP2q5hm9PHkhyw/view?usp=sharing"
        ],
        "tags": [
            "Food"
        ],
        "latitude": "",
        "longitude": ""
    },
    {
        "name": "\nChili's South Indian Cuisine",
        "owner_name": "Vairavasamy (Sam) Arumugan",
        "owner_email": "av_sam@yahoo.com",
        "phone_number": "(206) 633-1458",
        "address": "4220 University Way NE, Seattle, WA 98105",
        "site": "http://chilissouthindianrestaurant.com/",
        "description": "\"All our food is made with hands, human hands,\" says Swamy. \"Hands, body, heart—that is what goes into Chili's.\" One reason Chili's customers come running back through the doors is because its Southern Indian menu is a rarity in Seattle. Most Indian restaurants in the city are dominated by northern curries such as palak paneer and breads such as naan and roti. Here, rice is the main starch instead of bread, and it's served with piquant stews and a spicy broth called sambar. Coconut, which grows more commonly in the south of India than the north, shows up in a number of dishes.",
        "story": "In 1993, a nuclear scientist from Kerala, India, opened a dollar store in the University District at the intersection of University Way and 50th Street. At the time, Vairavasamy (\"Sam\") Arumugan never expected that his business, then called 99+ Emporium, would one day grow into a beloved restaurant serving the food of his home state. While Chili's is growing, it remains Seattle's only Southern Indian restaurant. Swamy believes that's because the dishes are more difficult to make, especially dosas. Every day she begins to make the next day's dosa batter by soaking the rice and lentils, grinding them, and letting them ferment overnight.",
        "profile_picture": "https://drive.google.com/file/d/1SghFD1HPJ7PCph-44yRUkNa-crAs_luU/view?usp=sharing",
        "remaining_pictures": [
            "https://drive.google.com/file/d/1iLRwB4tCcIJe7l9GFL0bQ8LkzpMw9qLt/view?usp=sharing",
            "https://drive.google.com/file/d/1jpuR1ndOl__egDpDFo-LQ38ZIM67nxkW/view?usp=sharing",
            "https://drive.google.com/file/d/1u7RNVrEXyBaq0mqWa3WglMDp96ifRUUH/view?usp=sharing",
            "https://drive.google.com/file/d/1QvTuxUzx4wLO13KqjDwv3b4Fis8DJ4Zd/view?usp=sharing",
            "https://drive.google.com/file/d/1RFrDJHRg9WWy63uNdjyFqbcycfjW_8Q6/view?usp=sharing"
        ],
        "tags": [
            "Food"
        ],
        "latitude": "",
        "longitude": ""
    },
    {
        "name": "China First",
        "owner_name": "Jason L.",
        "owner_email": "jason_l@gmail.com",
        "phone_number": "(206) 634-3553",
        "address": "4237 University Way NE, Seattle, WA 98105",
        "site": "https://www.chinafirstwa.com/",
        "description": "You’ll love our delicious Chinese dishes. We use the finest and freshest ingredients. Try one of our dishes here at China First such as Kung Pao Prawns, Sesame Chicken, and Moo Goo Gai Pan. We also serve Shanghai Won Ton Soup, Fresh Ginger Beef, and Shanghai Chow Mein. We're right by the University of Washington by Parrington Lawn. Ravenna and Cowen Park are only a few blocks away. Order online for carryout or delivery!",
        "story": "China First offers delicious dining and takeout to Seattle, WA. China First is a cornerstone in the Seattle community and has been recognized for its outstanding Chinese cuisine, excellent service and friendly staff. Our Chinese restaurant is known for its modern interpretation of classic dishes and its insistence on only using high quality fresh ingredients.",
        "profile_picture": "https://drive.google.com/file/d/16iL9fBWpDuoKm4k3E0QPhGNGy6tQR28W/view?usp=sharing",
        "remaining_pictures": [
            "https://drive.google.com/file/d/1ZYaezjeYJo3zJxSVj0TeRdUZM-pGpid9/view?usp=sharing",
            "https://drive.google.com/file/d/1Zjjsb4zqwdb-4pyppEHC7rIJPCxk_Dcd/view?usp=sharing",
            "https://drive.google.com/file/d/1FwkQA-S7dQzefKmwhowU6XXWltfjV2kL/view?usp=sharing",
            "https://drive.google.com/file/d/1pvlettBXEVvVSH3VA_bhHLL8Eu6-3wrG/view?usp=sharing",
            "https://drive.google.com/file/d/1qxorOPVEK-pGDUuXeJHEMNTQOS9ZQXjh/view?usp=sharing"
        ],
        "tags": [
            "Food"
        ],
        "latitude": "",
        "longitude": ""
    },
    {
        "name": "Portage Bay Cafe",
        "owner_name": "John & Amy Gunnar",
        "owner_email": "questions@portagebaycafe.com",
        "phone_number": "(206) 547-8230",
        "address": "4130 Roosevelt Way NE, Seattle, WA 98105",
        "site": "https://www.portagebaycafe.com/",
        "description": "We serve local, organic, sustainable breakfast, lunch & brunch in four Seattle neighborhoods. We also offer to-go orders for corporate events and private parties, as well as hosting private dinner events in our bright, open cafes.",
        "story": "Since the beginning, Portage Bay Cafe has focused on local, organic, and sustainable practices, and has consistently been named one of the best restaurants in Seattle. When the Gunnars purchased Portage Bay on Roosevelt, it was a no-frills, diner-esque eatery that was mostly enjoyed by hotel guests. It wasn’t making a lot of money, and the original owner wasn’t very attached to it. The first days of Portage Bay hardly resemble the way the restaurant looks now. At first, the restaurant served dinner: Fish ‘n’ chips, burgers, club sandwiches and other items were sold; salads were also popular. The Gunnars were still doing a lot of the cooking and dishwashing themselves. To eat like you “give a damn” has long been a key part of the Portage Bay brand. But the Gunnars think it’s important to extend this sort of care to the surrounding community, too. ",
        "profile_picture": "https://drive.google.com/file/d/1ET-hOYjuEN9JlkbKBbVR2XqaeiFxByVm/view?usp=sharing",
        "remaining_pictures": [
            "https://drive.google.com/file/d/1kCU-LY4inoIpT3RpD95zSElXGxwgITw3/view?usp=sharing",
            "https://drive.google.com/file/d/1Y3SCGUENds5yV8ZKJ5RpnTrHhVPXWhzK/view?usp=sharing",
            "https://drive.google.com/file/d/1ymxl1OmMKUPE9xVvB9QcHVqf6EvPRyU7/view?usp=sharing",
            "https://drive.google.com/file/d/1YoRiKJ4NNs972RFrLOd4gQFuT-hdYiKX/view?usp=sharing",
            "https://drive.google.com/file/d/1Ej4mCmEb2zA5tAY_NVu8N0-zicmOgXSm/view?usp=sharing"
        ],
        "tags": [
            "Food"
        ],
        "latitude": "",
        "longitude": ""
    },
    {
        "name": "Red Light Vintage Clothing",
        "owner_name": "Ed Chalfa",
        "owner_email": "ed_chafla@gmail.com",
        "phone_number": "(206) 545-4044",
        "address": "4560 University Way NE, Seattle, WA 98105",
        "site": "http://redlightvintage.com/",
        "description": "Seattle’s biggest vintage clothing shop since 1996. Clothing from every era for the past 100 years. New items daily. Fun inclusive space.",
        "story": "Since 1996, Red Light Vintage & Costume has remained one of Seattle’s premier vintage shopping locations year after year. From 1930’s formal ensembles, including shoes & accessories, to vintage Levi’s & shirts from obscure metal bands, we’re sure you’ll find your new favorite clothes at our location! As a locally owned small business, Red Light is proud to support and collaborate with the city’s vast community of artists, musicians, and organizers. We’ve sponsored floats in Pride Parades, shared clothing and coupons for events at EMP, been one of the locations in Macklemore’s “Thrift Shop” video (yes, really!), and been the go-to location for costumers and stylists working in the Northwest.",
        "profile_picture": "https://drive.google.com/file/d/1TMmDUzuaP9m3Oqcu1NSQZTRCg1k8x2rI/view?usp=sharing",
        "remaining_pictures": [
            "https://drive.google.com/file/d/1c95LOMjXr5YcNS60L2iUehgaH8xupGFB/view?usp=sharing",
            "https://drive.google.com/file/d/1hxSm5CzfxK5k_wY4lrqHOTAnll5KSHhM/view?usp=sharing",
            "https://drive.google.com/file/d/1NXEhJVQStUZ4qiUgK1Lw3U9PklyFMPvM/view?usp=sharing",
            "https://drive.google.com/file/d/1z5id7I6xErYieONjj26-0h9rWqUOSaQ-/view?usp=sharing",
            "https://drive.google.com/file/d/1iU9GHSeb9KVMH_c1e77RJNOpkDA9vg4A/view?usp=sharing"
        ],
        "tags": [
            "Clothing",
            "Lifestyle"
        ],
        "latitude": "",
        "longitude": ""
    },
    {
        "name": "Shultzy's Bar & Grill",
        "owner_name": "Shultzy",
        "owner_email": "shultzys@yahoo.ca",
        "phone_number": "(206) 548-9461",
        "address": "4114 University Way NE, Seattle, WA 98105",
        "site": "https://www.shultzys.com/",
        "description": "We’ve been making sausage with top-quality ingredients, no fillers, and no preservatives since 1988. And we love our beer.",
        "story": "Founded in 2989, there are really only two words you need to know about Shultzy's – beer and sausages. The most obvious common denominator between the two is 'German' and it's true, there are good German beers and bratwurst here; but this is also the kind of place you can get a Cajun sausage burger or a chili cheese dog. Rotating draft beers complement the menu and there's chicken and veggie burgers for those not overly enamored with sausages.",
        "profile_picture": "https://drive.google.com/file/d/1XyRHrmf_IUeyEO8wuh23VN-LEm9qiWKj/view?usp=sharing",
        "remaining_pictures": [
            "https://drive.google.com/file/d/1UCOhUXxlSapqLhAxgaiGVCC9SKppmh57/view?usp=sharing",
            "https://drive.google.com/file/d/1CuFa2EA-a7SOq_RqP8RR4FJ_UAIlywTG/view?usp=sharing",
            "https://drive.google.com/file/d/1oZyohIXgHQmQ6NwO1sO7gXTnUgfwlSC8/view?usp=sharing",
            "https://drive.google.com/file/d/1RoNJcYtyGg1uNa0FqqJV-SAqHUPyI5Iz/view?usp=sharing",
            "https://drive.google.com/file/d/1BaTDSFvu90y3XK-iui9mAy3aMZc0KB7D/view?usp=sharing"
        ],
        "tags": [
            "Food",
            "Entertainment"
        ],
        "latitude": "",
        "longitude": ""
    },
    {
        "name": "Samurai Noodle",
        "owner_name": "Ryo Izawa",
        "owner_email": "ryo_izawa@yahoo.ca",
        "phone_number": "(206) 547-1774",
        "address": "4138 University Way NE, Seattle WA 98105",
        "site": "http://www.samurainoodle.com/",
        "description": "Samurai Noodle is the ﬁrst restaurant in Seattle to specialize in authentic Japanese ramen. We take pride in specializing in our famous Tonkotsu ramen (Pork broth), while oﬀering other delicious options.",
        "story": "The International District store is Samurai Noodle's first and\nORIGINAL store, founded by Ryo Izawa in 2006. Operating\nfor over a decade, we now have 6 stores in 3 states!!\n\nBroth is freshly prepared with absolutely ZERO premade\nconcentrated soup ingredients. Look out for the giant pots\n of pork broth and chicken broth!",
        "profile_picture": "https://drive.google.com/file/d/1s2svWviVv8W_xjYwBJRZ-5-tw6Ds3DA5/view?usp=sharing",
        "remaining_pictures": [
            "https://drive.google.com/file/d/1jHttUo7Z8NvSMieDbVjABi3zwQdV623K/view?usp=sharing",
            "https://drive.google.com/file/d/1ctzpHwRVLlnwGa2ExPcGaBFu8M_eUeQW/view?usp=sharing",
            "https://drive.google.com/file/d/16ay_Z-7AbEO-i0CaOkLRqWmeKDk3cF9p/view?usp=sharing",
            "https://drive.google.com/file/d/1ac6zMObovgfni11M5xiyA7N2rc0pVnvf/view?usp=sharing"
        ],
        "tags": [
            "Food"
        ],
        "latitude": "",
        "longitude": ""
    },
    {
        "name": "Scarecrow Video",
        "owner_name": "",
        "owner_email": "scarecrow@scarecrow.com",
        "phone_number": "(206) 524-8554",
        "address": "5030 Roosevelt Way NE, Seattle, WA 98105",
        "site": "scarecrow.com",
        "description": "Scarecrow Video has over 130,000 titles in our library, including rare, noncommercial, hard-to-find and out of print titles, and complete collections otherwise inaccessible to the general public.",
        "story": "From its passionate founder George Latsios and former owners Carl Tostevin & Mickey McDonough to its new status as a non-profit archive, Scarecrow has existed with one vision: to bring people and film together. It began with a few hundred tapes in the back of a record store, and for more than 28 years its devoted caretakers have gradually accumulated the largest independently owned video and physical media library in the country, currently boasting over 127,000 titles. We have also been a hub in the local film scene, providing a knowledgeable and passionate staff to offer all who visit Scarecrow a unique experience. This passion for film has rippled out into the greater Puget Sound community as Scarecrow devotedly supports local film organizations, promotes film screenings, and brings filmmakers from all walks of life into town.\n\nThe internet, video-on-demand, and high-definition formats have changed the landscape, offering greater access to all forms of entertainment. Our focus is to complement those changes in ways only we can by providing access to not only what is available from mainstream sources, but to rare, out-of-print, and foreign and independent films, many of which are available nowhere else. As Scarecrow moves forward into its next chapter, we are developing new and innovative ways to engage with the community and continue to be a vital part of Seattle.",
        "profile_picture": "https://drive.google.com/file/d/1nuvSPjDC54fKhOQe0r6FhnqSpMFbJRWg/view?usp=sharing",
        "remaining_pictures": [
            "https://drive.google.com/file/d/1juJdINQ6eT3xb50ajiIpkMVRmv2JaLok/view?usp=sharing",
            "https://drive.google.com/file/d/1pa0rhkNo3X0p6DnzyVlKCJdLpSq3oWJk/view?usp=sharing",
            "https://drive.google.com/file/d/1sKXcD1jOC63ChjksKOhbyKa5cQoIgVeg/view?usp=sharing",
            "https://drive.google.com/file/d/13wCy-YrNqy0QWiHru5vEpx85FRItWTwh/view?usp=sharing"
        ],
        "tags": [
            "Entertainment"
        ],
        "latitude": "",
        "longitude": ""
    },
    {
        "name": "Al's Music, Video & Games",
        "owner_name": "",
        "owner_email": "alsmusicandgames@gmail.com",
        "phone_number": "(206) 547-3870",
        "address": "4547 University Way NE, Seattle, WA 98105",
        "site": "https://www.facebook.com/AlsMusicandGames/",
        "description": "We love all video games. Everything from Atari to NES to PS3, Xbox360 and everything in between! We also sell CD's, vinyl, cassettes and 8 tracks. We also have a huge selection of VHS, DVD's, laser discs and Blu-rays. We take all of these in for trade or cash too!\nWe carry a wide range of turntables, speakers, stereo amplifiers, guitars and other musical equipment. We have tested ipods and digital cameras as well!\nWe have specials on video games, VHS, DVD's and CD's everyday.",
        "story": "",
        "profile_picture": "https://drive.google.com/file/d/1bAy2PldWda27Svy6sMVxWLdZaaOD5h_5/view?usp=sharing",
        "remaining_pictures": [
            "https://drive.google.com/file/d/1oruklfCj7vvYCwi8ElxHIBcwHmK0WJh9/view?usp=sharing",
            "https://drive.google.com/file/d/1C6JLLbX_Gdw5ZEcuXpNzui35zK4pian1/view?usp=sharing",
            "https://drive.google.com/file/d/1obDQTG7NstIgeZ0mzd9CQd9O_d20ty1-/view?usp=sharing",
            "https://drive.google.com/file/d/1sYUS0JKKkQYWHVmnpSAnmMWBy-xHiFbT/view?usp=sharing",
            "https://drive.google.com/file/d/1c8AqiDJAHpkA-Kvv3v1Kio4eHOsVUiuI/view?usp=sharing"
        ],
        "tags": [
            "Entertainment"
        ],
        "latitude": "",
        "longitude": ""
    },
    {
        "name": "Bulldog News",
        "owner_name": "Doug Campbell & Gloria Seborg",
        "owner_email": "doughcampbell@gmail.com",
        "phone_number": "(206) 632-NEWS",
        "address": "4208 University Way NE, Seattle, WA 98105",
        "site": "http://bulldognews.com/",
        "description": "Bulldog News is dedicated to the creation of public space. Public Space is not a physical locale. It is the sense of place created when a community-based dialogue transforms ideas and experiences into shared meaning and common purpose. At the Bulldog, we champion the possibility of this dialogue without cynicism. Our stores create an open and welcoming environment where all points of view are engaged. Implicit in our approach is the assertion that an inclusive community has the right and power to define its destiny. By providing a comprehensive selection of periodicals and a gathering place for coffee and conversation, Bulldog News encourages a convening of perspectives. We hope we act in support of the community as it creates for itself a unique identity based upon something more than individual or collective “interests.” When the public space is illuminated by our shared values, we become visible to one another as individuals, rather than potential antagonists or allies. We also gain both the opportunity and the obligation to be our best selves. This is why we ask you to help make Bulldog News the place...“where your neighborhood meets the world.”",
        "story": "Bulldog News was founded in 1983 by Doug Campbell and Gloria Seborg.  \"Where your neighborhood meets the world.\" You can still run into them in the store, Doug dashing about as the store trouble shooter, able to do everything and anything with his years of experience.  You usually can chat with Gloria on weekend mornings.  In between her avid gardening and painting, she selects our fabulous card selection, your favorites from Nouvelle Images, Inkognito, Sierra Club, Urubbu, and others.  She also is always adding to our selection of local artists like Nikki McClure and Mimi Williams, Ed Newbold and those excellent cards from Great Dog publishing. Early in our history, we moved one block north to our current location at 4208 University Way NE.  The magazine and newspaper business has undergone many changes in the last 29 years, but we are always updating and adapting.   Gone are the days when newspapers came in the mail from around the world, but we now have a Print On Demand system that allows us to print today's paper today from over 1000 newspapers around the world.  Some countries are well represented (Australia, and the UK), some not so well represented.  Newspapers like Corriere della Sera no longer come a week late through the post, but we can print you any or all Corriere della Sera from the last week,  along with news from Lagos, Die Frankfurter Allgemeine, Le Monde, El Pais, Mainichi Shimbun and so many more. ",
        "profile_picture": "https://drive.google.com/file/d/1sRpnITdzadkApgPQPvON7-FAUwmSNpUb/view?usp=sharing",
        "remaining_pictures": [
            "https://drive.google.com/file/d/1H8Dpi49Yds65TCZNi5DATCcjEX_q3QoM/view?usp=sharing",
            "https://drive.google.com/file/d/1OzpKak40WPHUTsdJr549EMGrDRHrCGBl/view?usp=sharing",
            "https://drive.google.com/file/d/1ZNiAZXa29iIVPeycJ4RzBrSA286t9EqC/view?usp=sharing",
            "https://drive.google.com/file/d/1A2jJDI3gIfpprfOO94mrrmpH2U8GpX0r/view?usp=sharing",
            "https://drive.google.com/file/d/1UqPsZJtSJoSTFdJ3wVdBUCilHyXDwNo7/view?usp=sharing"
        ],
        "tags": [
            "Food",
            "Entertainment"
        ],
        "latitude": "",
        "longitude": ""
    },
    {
        "name": "Davis Optical",
        "owner_name": "Ronald O. Davis",
        "owner_email": "",
        "phone_number": "(206) 633-1081",
        "address": "4323 University Way NE, Seattle, WA 98105",
        "site": "https://davisoptical.com/",
        "description": "Davis Optical Xpress hand crafts most prescription lenses while you wait and expertly fits your frames for the best comfort and vision quality.",
        "story": "In 1955, Davis Optical first opened its doors. Ronald O. Davis, O.D., a graduate of the University of Washington and the Illinois College of Optometry, realized his dream of opening his own independent practice of optometry in the heart of the University District. He personally hand selected every frame, and examined the eyes of each and every patient. Through the many years, he earned a loyal following which eventually led to generations of patients returning to Davis Optical for high quality eyecare and eyewear.",
        "profile_picture": "https://drive.google.com/file/d/1AzcqxQJLMoVoBdVEOhxUkkM_4q8NyYWg/view?usp=sharing",
        "remaining_pictures": [
            "https://drive.google.com/file/d/1EmUInf36n8rRGhFv2eHsxo-Jq4t9H-1t/view?usp=sharing",
            "https://drive.google.com/file/d/1gpls-1vtHDiwO9U5_blOTy7j_pV6uehW/view?usp=sharing",
            "https://drive.google.com/file/d/1nuwJGPkAdpq3QAeUbt6oRBtolPGAEBaF/view?usp=sharing"
        ],
        "tags": [
            "Lifestyle"
        ],
        "latitude": "",
        "longitude": ""
    },
    {
        "name": "Cafe Allegro",
        "owner_name": "Dave Olsen",
        "owner_email": "dave_olsen@gmail.com",
        "phone_number": "(206) 633-3030",
        "address": "4214 University Way NE, Seattle, WA 98105",
        "site": "seattleallegro.com",
        "description": "Seattle's Oldest Espresso Bar Est. 1975. For over 40 years Cafe Allegro has been the touchstone for Seattle coffeehouses. With a timeless brick interior, weathered dark wood and ample seating, Cafe Allegro has been the home way from home for thousands of folks around the world. Featuring Seattle style coffees, bold blends that warm you up like a well worn flannel on a drizzly day, that can be enjoyed as a special brew or your everyday joe. Small batch roasted in our University District cafe, our coffees are directly imported from small family farms around the world. Visit our Seattle cafe and upstairs coffee roastery, located in the alleyway of 4214 University Way NE.Whether you've never stepped foot in Seattle or have warmed the cafe seats for years you can have a piece of Seattle coffee history delivered to your door.",
        "story": "The Seattle coffee scene had to start somewhere. Many would agree that place was Cafe Allegro. Café Allegro has been pulling coffee shots for Seattleites for nearly 40 years. In fact, opening in 1975, it has the proud distinction of being Seattle’s oldest coffee-espresso bar. Allegro's founder, Dave Olsen, is credited with creating a space so uncommon at the time, that a small, but ambitious company named Starbucks used the café to inspire their vision of what their coffeehouses should look like. Over the years, Allegro has opened its doors to regulars and strangers alike, as well as host countless community groups that have utilized the space to bring people together.",
        "profile_picture": "https://drive.google.com/file/d/1om3kA1NUaZ5r9U-E6ypw32dfgPt7ExNh/view?usp=sharing",
        "remaining_pictures": [
            "https://drive.google.com/file/d/1GGw4hFTvcYd2pS5kvkpyx6oryXSOixAn/view?usp=sharing",
            "https://drive.google.com/file/d/12V49sBoLVJIRXNAsmFTHIN1FzuAfmCod/view?usp=sharing",
            "https://drive.google.com/file/d/1QLBcajjD4kbg70hxJjBpLAnKhYVwL00T/view?usp=sharing",
            "https://drive.google.com/file/d/1WW32wWf5nBuWXTrRCPtH-6ag2JI9Kr0G/view?usp=sharing",
            "https://drive.google.com/file/d/1w_b_ub5jZj86XaG_0bB2OxIA9naC1M94/view?usp=sharing"
        ],
        "tags": [
            "Food"
        ],
        "latitude": "",
        "longitude": ""
    },
    {
        "name": "Big Time Brewery",
        "owner_name": "Rick McLaughlin",
        "owner_email": "sales@bigtimebrewery.com",
        "phone_number": "(206) 545-4509",
        "address": "4133 University Way NE, Seattle, WA 98105",
        "site": "http://bigtimebrewery.com/",
        "description": "Big Time usually has at least 10 ales on tap, plus a featured cask-conditioned \"real ale\" on the hand pump. Our standard brews are: Scarlet Fire IPA, Atlas Amber Ale, Coal Creek Porter, and Bhagwan's Best IPA which are on tap at all times. The other three taps and the cask conditioned pump rotate from week to week with some of the many specialty beers we produce over the year. The brewery is a 14 barrel JV Northwest system consisting of a gas fired brew kettle, an infusion mash tun with mixer, a hot liquor back, a wort cooler, (5) 14 barrel fermenters, a bright beer tank, and (20) 7 bbl serving tanks. The kitchen features pizza, sandwiches, salads and tasty snacks. We serve generous portions at very reasonable prices. Food is available until 11:00pm. The pub is open from 11:30am to 12:30am seven days a week and brewery tours are available Monday through Friday during the day, or by appointment.",
        "story": "Big Time Brewery opened its doors in December 8th, 1988 and we have been brewing and serving craft beer ever since. We are Seattle's original brew pub. A classic American Alehouse located in an brick building with high ceilings and lots of stained wood. The pub has an antique bar.",
        "profile_picture": "https://drive.google.com/file/d/11LclT7nPrfny8NyuzbbqT_mivDdVzdMF/view?usp=sharing",
        "remaining_pictures": [
            "https://drive.google.com/file/d/1gagdtyTlimyp_1fvRlHEF4QGut_Fj_BV/view?usp=sharing",
            "https://drive.google.com/file/d/1MudyJbYNAlzA7GDGooeV1Cf6tCund00A/view?usp=sharing",
            "https://drive.google.com/file/d/11p7p_pfv7gRGHsQkjTsvBsUOlarAfV7S/view?usp=sharing",
            "https://drive.google.com/file/d/1IDaxBr5hhZhljzGG3e4toCM6INF3d4-t/view?usp=sharing",
            "https://drive.google.com/file/d/1xQL5V5UFAM7EEhb2tHtf4A5WGTyeyyTD/view?usp=sharing"
        ],
        "tags": [
            "Food",
            "Entertainment"
        ],
        "latitude": "",
        "longitude": ""
    },
    {
        "name": "U:DON",
        "owner_name": "Tak Kurachi",
        "owner_email": "info@freshudon.com",
        "phone_number": "(206) 453-3788",
        "address": "4515 University Way NE, Seattle, WA 98105",
        "site": "https://freshudon.com/",
        "description": "At U:Don Fresh Japanese Noodle Station (pronounced “You-Don”), we want you, our valued guest, to experience the superior taste and texture of freshly made Sanuki-style udon noodles, as if you were eating them in an udon shop in Japan. We take the time and effort to prepare our udon noodles and accompanying soups and sauces from scratch, using traditional procedures and techniques, with all natural ingredients.",
        "story": "",
        "profile_picture": "https://drive.google.com/file/d/1AMuX2MYtg5Uuodsd9Qhpe6BiMuT8nzcz/view?usp=sharing",
        "remaining_pictures": [
            "https://drive.google.com/file/d/15mg6QPbAVjw0FA-68kVcW-KOWc81JDz6/view?usp=sharing",
            "https://drive.google.com/file/d/1z89IOufzsSWKDLDynKYgHsuxIUg69sPn/view?usp=sharing",
            "https://drive.google.com/file/d/1iWx3pA336YnA-sLFWqtzzqHQVh1T3093/view?usp=sharing",
            "https://drive.google.com/file/d/1VrolverBtZgGzIIbHaObUy1ybGAOIwhW/view?usp=sharing"
        ],
        "tags": [
            "Food"
        ],
        "latitude": "",
        "longitude": ""
    },
    {
        "name": "Gargoyles Statuary",
        "owner_name": "",
        "owner_email": "",
        "phone_number": "(206) 632-4940",
        "address": "4550 University Way NE, Seattle, WA 98105",
        "site": "gargoylestatuary.com",
        "description": "Welcome to Gargoyles Statuary Seattle's source for Gargoyles and Gothic Statuary. We have tried to preserve some of the atmosphere of our Seattle location with our site. Explore, enjoy, and check back for updates and new features.",
        "story": "The word gargoyle is derived from the old French 'gargouille' meaning throat. Gargoyles came into gothic architecture in the early 13th century to keep corrosive rain water off the cathedrals in France and western Europe. During that time, the Catholic Church was attempting to bring lots of Celtic pagan folks into the fold. Since pagan themes and deities had a powerful history with the people, the Church deemed it necessary to use the often coarse imagery to help make the transition into a new religion more palatable.\n\nAlso, many people were illiterate, so images were a great way to convey Church doctrines. As medieval stone masons received more creative license, gargoyles metamorphosed in form into elaborate statuary. The gargoyles found here are replicas and creative interpretations of carvings that can still be found high up on ceilings and naves, hidden in dark crypts and chapels, or adorning the outside of the cathedrals some so worn from the elements that they are barely recognizable.",
        "profile_picture": "https://drive.google.com/file/d/13R0CX_Xyq0uUO4S759vgCK0ICI8x0kB8/view?usp=sharing",
        "remaining_pictures": [
            "https://drive.google.com/file/d/1gLNmebvaOAojUCJNRBKm8JvfDYp-eH-O/view?usp=sharing",
            "https://drive.google.com/file/d/10IrIz3bzt5ytqSEA9yewoA0oisif0cHi/view?usp=sharing",
            "https://drive.google.com/file/d/1G2ig7E4rkDR8tB7_GST_jv_8y0aIpiWm/view?usp=sharing",
            "https://drive.google.com/file/d/10rhIwA5xtqjZnXwi4uVNYnuq0ebzoZgO/view?usp=sharing"
        ],
        "tags": [
            "Entertainment"
        ],
        "latitude": "",
        "longitude": ""
    },
    {
        "name": "Magus Books",
        "owner_name": "",
        "owner_email": "info@magusbooksseattle.com",
        "phone_number": "(206) 633-1800",
        "address": "1408 NE 42nd Street, Seattle, WA 98105",
        "site": "www.magusbooksseattle.com",
        "description": "We are one of the oldest used book stores in the University District, buying and selling used books since 1978.\n",
        "story": "Housed in a 1903 brick building, covered with ivy, Magus has been a mainstay of the Univeristy District for almost 40 years.  We pride ourselves on discerning book taste which appeals to UW students and faculty, local poets and musicians, tourists and local families alike.\n\n",
        "profile_picture": "https://drive.google.com/file/d/1Fjscx940rTmncF0KIO7RiQbAN_7CjKjw/view?usp=sharing",
        "remaining_pictures": [
            "https://drive.google.com/file/d/1Dr9wM9psBQhx8Tfuj5GXfvqs0JNmc3H_/view?usp=sharing",
            "https://drive.google.com/file/d/1BDnuoahKQDcbMAtpshjytgElqdPnlisL/view?usp=sharing",
            "https://drive.google.com/file/d/1vdSxockP_ZsG0NYq89_OOUvTgurvGd8d/view?usp=sharing",
            "https://drive.google.com/file/d/1ve3NCkKsXQ_459HlbQN0Nmsi4NdR1ljq/view?usp=sharing"
        ],
        "tags": [
            "Printing",
            "Lifestyle"
        ],
        "latitude": "",
        "longitude": ""
    },
    {
        "name": "EZ Copy n Print",
        "owner_name": "Amer",
        "owner_email": "print@ezcopy.net",
        "phone_number": "(206) 632-2523",
        "address": "4336 University Ave NE, Seattle, WA 98105",
        "site": "http://www.ezcopy.net/",
        "description": "EZ Copy n Print is the one stop shop for all your designing, printing and copying needs. We offer Copying service (Color and Black and White), Digital Printing, Fax Service, Passport Photos, Posters & Banners, Bindery Services, Scanning, Graphic Design, Course Material, Customized Stationary, and much more.",
        "story": "EZ Copy and Print is a family owned business. Amer has over 25 years of experience working in the local printing industry. After multiple years of hard work, Amer was finally able to open his own print and copy shop in 2015. He is very passionate about taking care of his customer’s needs. Initially, Amer was managing the business with the help of his family. In 2016, Amer hired Cully, who has over 18 years of printing experience, to work for EZ Copy and Print. Cully and Amer work as a team to provide excellent service to their customers. A majority of the customers are either students, alumni, or professors from University of Washington.",
        "profile_picture": "https://drive.google.com/file/d/1_3L0GUHQRHxJAe62ujq3LITuIIdKD4Wu/view?usp=sharing",
        "remaining_pictures": [
            "https://drive.google.com/file/d/1eMrPl9vKyPf0o9aB94Qgf036re76e8Fu/view?usp=sharing"
        ],
        "tags": [
            "Printing"
        ],
        "latitude": "",
        "longitude": ""
    }
];
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            searchKey: String,
            selectedBusiness: Object,
        };

        this.changeSelectedBusiness = this.changeSelectedBusiness.bind(this);
        this.createSelectedBusinessDiv = this.createSelectedBusinessDiv.bind(this);
    }

    createSearchResultDiv(business, index) {
        return <div className='searchResult' onClick={()=>this.changeSelectedBusiness(business)}>
            <p className='business-title'>{index+1}. {business.name}</p>
            <div className='address-description-div'>
                <div className='address-location-div'>
                    <img className='location-pin' src={location_pin}  alt=""/>
                    <p className='address'>{business.address}</p>
                </div>
                <p className='description'>{business.description}</p>
            </div>
        </div>
    }

    changeSelectedBusiness(business) {
        this.setState(prevState => ({
            ...prevState,
            selectedBusiness: business,
        }))
    }

    createSelectedBusinessDiv() {
        const {selectedBusiness} = this.state;
        return <div className='column-right'>
            <Carousel className='s-carousel' showStatus={false}>
                <img src={selectedBusiness.profile_picture} alt=''/>
                {selectedBusiness.remaining_pictures.map((picture)=> {
                    return <img src={picture} alt=''/>
                })}
            </Carousel>

            <p className='s-name'>{selectedBusiness.name}</p>
            <div className='s-address-location-div'>
                <img className='s-location-pin' src={location_pin}  alt=""/>
                <p className='s-address'>{selectedBusiness.address}</p>
            </div>
            <div className='s-row'>
                <div className='s-col'>
                    <a href={"tel:" + selectedBusiness.phone_number}>
                        <img className='s-icon-img' src={call} alt=''/>
                    </a>
                    <p className='s-icon-label'>Call</p>
                </div>
                <div className='s-col'>
                    <a href={selectedBusiness.site} target="_blank">
                        <img className='s-icon-img' src={site} alt=''/>
                    </a>
                    <p className='s-icon-label'>Visit Website</p>
                </div>
                <div className='s-col'>
                    <a href={"mailto: " + selectedBusiness.owner_email}>
                        <img className='s-icon-img' src={mail} alt=''/>
                    </a>
                    <p className='s-icon-label'>Email</p>
                </div>
            </div>
            <p className='s-story-title'>Our Story</p>
            <p className='s-story'>{selectedBusiness.story}</p>
            <div className='mapId'>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAi6Ve6OAZ73VpsciDfNRTg5sBp3XJoL84'}}
                    defaultCenter={{lat: 47.6628, lng: -122.3139}} //TODO: set center same as selectedBusiness.lat, lon
                    defaultZoom={11}
                >
                    <AnyReactComponent
                        lat={47.6628}
                        lng={-122.3139}
                        text={selectedBusiness.name}
                    />
                </GoogleMapReact>
            </div>
        </div>
    }

    componentDidMount() {
        this.setState({
            items: this.props.location.state ? this.props.location.state.bus_data : resultData,
            searchKey: this.props.location.state ? (`Showing Results for ${this.props.location.state.search_key}`) : "",
            selectedBusiness: this.props.location.state ? this.props.location.state.bus_data[0] : resultData[0],
            isLoaded: true,
        })
    }

    render() {
        const { error, isLoaded, items, searchKey } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else if (items.length === 0) {
            return <div>Sorry, try another search query</div>
        }
        return <div className='Search-Page'>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>
            {/*<img src={items[0].profile_picture} alt="image"/>*/}

            <div className='menu'>
                <img className='menu-logo' src={logo}  alt="" onClick={()=>window.location.href='/'}/>
                <a href="/submission" className='submit'>Submit a Business</a>
            </div>
            <p className="Showing-Results-for"> {searchKey} </p>

            <div className='outer'>
                <div className='column-left'>
                    {items.map((business, index)=> {
                        return this.createSearchResultDiv(business, index);
                    })}
                </div>
                {this.createSelectedBusinessDiv()}
            </div>
        </div>
    }


}

export default SearchPage;
