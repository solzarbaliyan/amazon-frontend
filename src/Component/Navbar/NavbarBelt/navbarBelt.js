import React from 'react';
import './navbarBelt.css';
import amazonLogo from '../../../Assets/amazonLogo.png';
import India from '../../../Assets/India.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const NavbarBelt = () => {
  return (
    <div className='navbarBelt'>
        <div className='leftNavBelt'>
            <div className='leftNavBeltLogo'>
                <img className='amazonLogoNavbar' src={amazonLogo} alt='amazonLogo' />
                <span className='navbar_inLogo'>.in</span>
            </div>

            <div className='navbarBeltLocation'>
                <div className='navbarBeltLocationImg'>
                    <LocationOnOutlinedIcon className='navbarBeltLocationImgIcon' sx={{fontsize: "22px" }} /> 

                </div>

                <div className='navbarBeltLocationPlace'>
                    <div className='navbarBeltLocationTop'>Delivering to Pune 411032</div>
                    <div className='navbarBeltLocationBottom'>Update Location</div>
                </div>
            </div>

        </div>

        <div className='navbarBeltSearchBox'>
            <div className='navbarBeltSearchDiv'>
                <div className='navbarBeltSearchBoxAll'>
                    <div className='navbarBeltSearchBoxAllText'>All</div>
                    <ArrowDropDownOutlinedIcon sx={{fontSize: "20px" }} />
                </div>

                <input type='text' className='navbarBeltInputSearchBox' placeholder='Search Amazon.in' />

                <div className='searchIconNavbarBelt'>
                    <SearchOutlinedIcon sx={{fontSize: "26px"}} className='searchIconNavbarBeltIcon' />
                </div>
            
            </div>
            

        </div>

        <div className='rightSideNavbarBelt'>
            <div className='indianFlagCode'>
                <img src={India} className='indiaFlag' />
                <div className='indiaCodeNavbarBelt'>EN <ArrowDropDownOutlinedIcon sx={{fontSize: 16, marginTop:1, marginLeft:-0.4 }} className='indiaCodeNavbarBeltDrp' /></div>

            </div>

            <div className='helloSignInNavbarBelt'>
                <div className='helloTopNavbarBelt'>Hello, User</div>
                <div className='indiaCodeNavbarBelt'>Accounts & Lists</div>
            </div>

            <div className='helloSignInNavbarBelt'>
                <div className='helloTopNavbarBelt'>Returns</div>
                <div className='indiaCodeNavbarBelt'>& Orders</div>
            </div>

            <div className='helloSignInNavbarBelt'>
                <span className='cartItemNumberNavbarBelt'>2</span>
                <div className='helloTopNavbarBelt'><ShoppingCartOutlinedIcon /> <span className='cartTitle'>Cart</span></div>
            </div>

        </div>

    </div>
  )
}

export default NavbarBelt