import React, { Component } from 'react';
import './css/footer.css'
import {FooterContainer, TextContainer, IconContainer  }from '../../styled-component/footer'
import map from '../../../img/map.png'
import email from '../../../img/email1.png'
import Phone from '../../../img/phone.png'
import facebook from '../../../img/facebook.png'
import instagram from '../../../img/instagram.png'


class Shop extends Component {
  render() {
    return (

        <div className="footer">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <FooterContainer>
              <TextContainer>
                <div className="text-footer" > Copyright © 2018 บริษัท ไทยดอทรัน จำกัด </div> 
                <div className="text-footer"> 
                791, 793 โครงการ stadium One ซอย จุฬาลงกรณ์ 4 ถนน บรรทัดทองแขวง วังใหม่ เขต ประทุมวัน กรุงเทพฯ 10330
                </div>
              </TextContainer>
              <IconContainer>
                <a target="_blank" rel='noopener noreferrer' href='https://www.facebook.com/thaidotrun/' ><img style={{width: '30px', marginRight:'10px' }} src={facebook} alt="facebook"/></a>
                <a target="_blank" rel='noopener noreferrer' href='https://www.instagram.com/thai.run/' ><img style={{width: '30px', marginRight:'10px' }} src={instagram} alt="instagram"/></a>
                <a target="_blank" rel='noopener noreferrer' href='https://www.google.com/maps/place/Thaidotrun+Co.,+Ltd./@13.7466896,100.5218302,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x34d19b0abbdd3821!8m2!3d13.7466896!4d100.5240189?authuser=1' ><img style={{width: '30px', marginRight:'10px'}} src={map} alt="line"/></a>
                <a href='mailto:admin@thai.run' ><img style={{width: '30px', marginRight:'10px' }} src={email} alt="facebook"/></a>
                <a href='tel:026344919' ><img style={{width: '30px', marginRight:'10px' }} src={Phone} alt="facebook"/></a>
              </IconContainer>    
            </FooterContainer>
          </div>
          
        </div>
    );
  }
}

export default Shop;