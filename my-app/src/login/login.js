import React from 'react';
//import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAction } from '../actions/loginAction';
import PropTypes from 'prop-types';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L, { popup } from 'leaflet';
//import ReactMapGL,{Marker} from 'react-map-gl';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            email: '',
            pwd: '',
            flag: false,
            lat: 57.74,
            lng: 11.94,
            zoom: 13,
            viewport: {
                width: 1900,
                height: 400,
                latitude: 57.74,
                longitude: 11.94,
                zoom: 13
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    // async componentDidMount() {
    //     // Call API from serverless AWS Project Node.Js
    //     // let user = {
    //     //     name: 'John',
    //     //     surname: 'Smith'
    //     // };
    //     let response = await fetch('http://localhost:3000/getproduct', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json;charset=utf-8'
    //         },
    //         // body: JSON.stringify(user)
    //     })

    //     let result = await response.json();
    //     alert(JSON.stringify(result));

    // }
    handleSubmit = (e) => {
        e.preventDefault();
        var email = this.state.email;
        var password = this.state.pwd;

        this.props.loginAction(email, password, (res) => {
            // alert(res);
            this.setState({
                email: '',
                pwd: ''
            })
        });

    }
    render() {
        const position = [this.state.lat, this.state.lng];
        const myIcon = L.icon({
            iconUrl: require('leaflet/dist/images/marker-icon.png'),
            iconSize: [25, 41],
            iconAnchor: [25, 41]
        });

        return (
            <>
                <form method="post" class="sign-up-form" id="frmLogin" onSubmit={this.handleSubmit}>
                    <div class="card" style={{ marginTop: '10%', width: '50%', marginLeft: '23%' }}>
                        <div class="card-body">
                            <div class="container">
                                <label for="email">Email address:</label>
                                <input type="email" class="form-control" required name="email" id="email" value={this.state.email} onChange={this.handleChange} />
                                <label for="pwd">Password:</label>
                                <input type="password" class="form-control" required name="pwd" id="pwd" value={this.state.pwd} onChange={this.handleChange} />
                                <button type="submit" class="btn btn-primary" style={{ marginTop: '10px', float: 'right' }}>Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
                <Map center={position} zoom={this.state.zoom} style={{ marginTop: '10px' }} attributionControl={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    <Marker position={position} icon={myIcon} onclick={(e) => {
                        e.target.setPopupContent('Hello');                      
                    }}
                    >
                         <Popup>
                            
                        </Popup> 
                    </Marker>
                </Map>
                {/* <ReactMapGL style={{ marginTop: '10px' }}
                    {...this.state.viewport}
                    attributionControl={false}
                    mapStyle="mapbox://styles/alpesh119/ck7vo0wap0ron1inyrtze6qbz"
                    mapboxApiAccessToken={'pk.eyJ1IjoiYWxwZXNoMTE5IiwiYSI6ImNrN3ZrMGlhcTFkN2czc280enFod202M2YifQ.k-RA9z2EkBgtxRSHD3iSEw'}
                    onViewportChange={(viewport) => this.setState({ viewport })}
                >
                    <Marker latitude={this.state.lat} longitude={this.state.lng}>
                        <a><i class="fas fa-map-marker-alt" aria-hidden="true" style={{fontSize:'25px',color:'red'}}></i></a>
                    </Marker>
                </ReactMapGL> */}


            </>
        );

    }
}
Login.propTypes = {
    ldata: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
    ldata: state.user.logindata
})
export default connect(mapStateToProps, { loginAction })(Login);