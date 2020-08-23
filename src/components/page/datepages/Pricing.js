import React, {Component} from 'react';
import Footer from '../totalpages/footer'
import Pricing1 from '../../../img/Pricing.jpg'
import {Date, Img} from '../../styled-component/style'
import logo from '../../../img/logo.png'
import styled from 'styled-components'
import './css/style.css'

const HeaderContainer = styled.div`
  width: 90%
`

class Pricing extends Component {
  render() {
    return (
      <div className="HomeContainer">
          <div className="header">
            <HeaderContainer>
              <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-start'}}>
                <a href="/">
                  <img src={logo} className="logodate" alt="logo" />
                </a>
              </div> 
            </HeaderContainer>   
          </div>         
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Date>
              <Img>
                <img className="imges" src={Pricing1} alt=""/>
              </Img>
            </Date>
          </div>
          <Footer />
        </div>
    );
  }
}

export default Pricing;