import React ,{Component}from 'react'
import PropTypes from 'prop-types';
import {
    Avatar,
    FontIcon,
    AccessibleFakeButton,
    IconSeparator,
    DropdownMenu,
  } from 'react-md';
import firebaseApp from '../firebase/config'
import firebase from 'firebase'
import './dashboard.css'

class Homepage extends Component{

    constructor(){
        super()
        this.state={
            userEmailLabel:'something@gmail.com',
            userImgUrl:'',
        }
        this.auth = firebaseApp.auth()
        this.user = firebaseApp.auth().currentUser
        this.userIconStorageRef = firebaseApp.database().ref().child(this.user +'/profilePicture/');

        this.handleLogout = this.handleLogout.bind(this)
    }

    componentWillMount(){
        
    }
    
    handleLogout(){
        this.auth.signOut()
    }

    render(){
        const UserIcon = e =>{
            if(this.state.userImgUrl === ''){
                return(<Avatar random>S</Avatar>)
            }else{
                return(<Avatar src={this.state.userImgUrl} role="presentation"/>)
            }
        };
        
        const AccountMenu = ({ simplifiedMenu }) => (
            <div>
                <div className='UserIcon'>
                    <DropdownMenu
                    id={`${!simplifiedMenu ? 'smart-' : ''}avatar-dropdown-menu`}
                    menuItems={['Preferences', 'About', { divider: true }, <div role="button" className="md-fake-btn md-pointer--hover md-fake-btn--no-outline md-list-tile md-text Hovered" onClick={this.handleLogout}>logout</div>]}
                    anchor={{
                        x: DropdownMenu.HorizontalAnchors.CENTER,
                        y: DropdownMenu.VerticalAnchors.OVERLAP,
                    }}
                    position={DropdownMenu.Positions.TOP_RIGHT}
                    animationPosition="below"
                    sameWidth
                    simplifiedMenu={simplifiedMenu}
                    >
                    <AccessibleFakeButton
                        component={IconSeparator}
                        iconBefore
                        label={
                        <IconSeparator label={this.state.userEmailLabel}>
                            <FontIcon>arrow_drop_down</FontIcon>
                        </IconSeparator>
                        }
                    >
                        <UserIcon/>
                    </AccessibleFakeButton>
                    </DropdownMenu>
                </div>
            </div>
          );
          
          AccountMenu.propTypes = {
            simplifiedMenu: PropTypes.bool,
          };
        return(
            <AccountMenu/>
        );
    }


}

export default Homepage