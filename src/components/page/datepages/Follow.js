import React, { Component } from 'react';
import { Button } from 'antd'
import Footer from '../totalpages/footer'
import follow1 from '../../../img/follow1.jpg'
import {Date, Img} from '../../styled-component/style'
import logo from '../../../img/logo.png'
import styled from 'styled-components'
import './css/style.css'

const HeaderContainer = styled.div`
  width: 90%
`

class Follow extends Component {
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
          <h2 className="text-date">Follow Me</h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Date>
              <div className="text-title">
                ระบบติดตามนักวิ่งตามจุด Check Point เมื่อนักวิ่งวิ่งผ่านจุดCheckPoint ระบบจะทำการโพส CheckPoint และ เวลาที่วิ่งได้ ในรูปแบบรูปภาพไปที่ Facebook ของนักวิ่งที่มาลงทะเบียนไว้ในช่วงเวลาก่อนการแข่งขัน   
              </div>
              <Img>
                <img className="imges" src={follow1} alt=""/>
              </Img>

              <div className="button-link">
                <a target="_blank" rel='noopener noreferrer' style={{fontWeight:"bold", fontSize:"25px"}} href="https://FOLLOWME.THAI.RUN/">
                  <Button className="buttondate">more info</Button>
                </a>  
              </div>
            </Date>
          </div>
          <Footer />
        </div>
    );
  }
}

export default Follow
