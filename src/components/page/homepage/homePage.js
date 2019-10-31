import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import {Row, Col, Icon, Menu, Dropdown, Button} from 'antd'
import './homepages.css'
import styled from 'styled-components'
import logo from '../../../img/logo.png'
import icon from '../../../img/thairun-man-lg.svg'
import Photos from '../totalpages/photo'
import Race from '../totalpages/race'
import Pic2Face from '../totalpages/Pic2Face'
import Shop from '../totalpages/shop'
import Follow from '../totalpages/follow'
import Footer from '../totalpages/footer'
import Ecer from '../totalpages/Ecer'

const HeaderContainer = styled.div`
  width: 80%;
  height: 100vh;
`

const menu = (
  <Menu>
    <Menu.Item>
      <a rel="noopener noreferrer" href="#Photo">Photo</a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="#Race">Race</a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="#Follow">Follow</a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="#Ecer">e-Cer & e-Slip</a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="#Pic2Face">Pic 2 Face</a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="#Shop">Shop</a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="Privacy-Policy">Privacy Policy</a>
    </Menu.Item>
  </Menu>
)

class Homepage extends Component {
  render() {
    return ( 
      <div className="wrap">
      <a href="#Photo" className="scroll"> SCROLL <Icon type="down-circle" style={{ fontSize: 40, color: '#fff',paddingTop:'5px' }}/> </a>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
            <HeaderContainer>
                  <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-start' }}>
                    <img src={logo} className="logo" alt="logo" />

                    <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end', alignItems:'center' }}>
                      <a href='/pricing' ><Button className="buttoncolor text-content ">Pricing</Button></a>
                      <Dropdown overlay={menu} >
                        <a href className="ant-dropdown-link" style={{ zIndex:'1', color:'#fff' , paddingLeft:'15px' }}>
                          <i className="fa fa-bars fa-2x"/>
                        </a>
                      </Dropdown>
                    </div>
                  </div>
                  <Row>
                    <Col lg={{ span: 10 }} xs={{ span: 23 , offset: 1}} style={{paddingTop:'15%'}} >
                      <h1 className="text">ThaiRun</h1>
                      <h2 className="text1">Happy Hub for Runners </h2>
                      <div className="button-home">
                      </div>
                    </Col>
                    <Col lg={{ span: 13 }} >
                      <img alt="example" width="100%" className="icon" src={icon} />
                    </Col>
                  </Row>
            </HeaderContainer>
          </div>
            <ScrollableAnchor id={'Photo'}>
              <Photos />
            </ScrollableAnchor>  
            <div id="Race" className="between">
              <Race />
            </div>
            <div id="Follow" className="between">
              <Follow />
            </div>
            <div id="Ecer" className="between">
              <Ecer />
            </div>  
            <div id="Pic2Face" className="between">
              <Pic2Face />
            </div>
            <div id="Shop" className="between">
              <Shop />
            </div> 
            <Footer />
          </div>
    );
  }
}

export default Homepage

