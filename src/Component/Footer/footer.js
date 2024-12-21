import React from 'react'
import './footer.css';
import amazonLogo from '../../Assets/amazonLogo.png';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerContent'>
            <div className='footerCont1'>
                <div className='contentFooterTitle'>Get to know Us</div>
                <div className='contentFooterSubTitleDiv'>
                    <div className='contentFooterSubTitleCont'>About US</div>
                    <div className='contentFooterSubTitleCont'>Careers</div>
                    <div className='contentFooterSubTitleCont'>Press Releases</div>
                    <div className='contentFooterSubTitleCont'>Amazon Science</div>
                </div>
            </div>

            <div className='footerCont2'>
                <div className='contentFooterTitle'>Connect With Us</div>
                <div className='contentFooterSubTitleDiv'>
                    <div className='contentFooterSubTitleCont'>Instagram</div>
                    <div className='contentFooterSubTitleCont'>Twitter</div>
                    <div className='contentFooterSubTitleCont'>Facebook</div>
                    
                </div>
            </div>


            <div className='footerCont3'>
                <div className='contentFooterTitle'>Make Money With Us</div>
                <div className='contentFooterSubTitleDiv'>
                    <div className='contentFooterSubTitleCont'>Sell on Amazon</div>
                    <div className='contentFooterSubTitleCont'>Sell under Amazon Accelerator</div>
                    <div className='contentFooterSubTitleCont'>Protect and Build Your Brand</div>
                    <div className='contentFooterSubTitleCont'>Amazon Global Selling</div>
                    <div className='contentFooterSubTitleCont'>Become an Affiliate</div>
                    <div className='contentFooterSubTitleCont'>Fulfilment by Amazon</div>
                </div>
            </div>


            <div className='footerCont4'>
                <div className='contentFooterTitle'>Let Us Help You</div>
                <div className='contentFooterSubTitleDiv'>
                    <div className='contentFooterSubTitleCont'>COVID-19 and Amazon</div>
                    <div className='contentFooterSubTitleCont'>Your Account</div>
                    <div className='contentFooterSubTitleCont'>Returns Center</div>
                    
                </div>
            </div>






        </div>

        <div className='amazonImg'>
            <img className='amazonImgFooter' src={amazonLogo} /> 
        </div>

    </div>
  )
}

export default Footer