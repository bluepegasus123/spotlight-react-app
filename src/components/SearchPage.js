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
        return <div className='searchResult' key={business.name + index} onClick={()=>this.changeSelectedBusiness(business)}>
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
                    return <img src={picture} key={picture} alt=''/>
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
        if (this.props.location.state && this.props.location.state.bus_data?.length > 0) {
            this.setState({
                items: this.props.location.state.bus_data,
                searchKey: `Showing Results for "${this.props.location.state.search_key}"`,
                selectedBusiness: this.props.location.state.bus_data[0],
                isLoaded: true,
            })
        } else {
            fetch("http://localhost:8080//businesses/getAllBusinesses")
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            items: result,
                            selectedBusiness: result[0],
                            // if search key rendered no results, show all businesses. If user jumps to search page, searchKey empty string
                            searchKey: this.props.location.state?.state?.searchKey ? `Sorry, no businesses found for ${this.props.location.state?.state?.searchKey}, here are all the businesses` : '',
                        });
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
        }
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
