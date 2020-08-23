import React, { Component } from 'react';
import { Button } from 'antd'
import Footer from '../totalpages/footer'
import ecer1 from '../../../img/ecer1.jpg'
import {Date, Img } from '../../styled-component/style'
import logo from '../../../img/logo.png'
import styled from 'styled-components'
import './css/style.css'

const HeaderContainer = styled.div`
  width: 90%
`
class Ecer extends Component {
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
          <h2 className="text-date">e-Cer & e-Slip </h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Date>
            <div className="text-content" style={{paddingTop:'10px'}}>
                <strong>e-Slip</strong> คือ ระบบสรุปผลการวิ่งแบบอิเล็คทรอนิค โดยนักวิ่งจะได้รับผลการวิ่งหลังจากที่วิ่งผ่านเส้นชัยผลการวิ่งจส่งผ่านทาง SMS และ Email ที่นักวิ่งได้ลงทะเบียนไว้
                </div>
              <div className="text-content" >
                <strong>e-Cer</strong> คือ ระบบที่ทำการสร้างใบรับรองอัตโนมัติหลังจากที่นักวิ่งวิ่งจบสนามนั้นๆมาแล้วในรูปแบบอิเล็คทรอนิค ซึ่งนักวิ่งจะได้หลังจากที่แข่งขันเสร็จสิ้นแล้วผ่านทาง SMS และ Emaial ที่นักวิ่งได้ลงทะบียนไว้
              </div>
              <Img>
                <img className="imges" src={ecer1} alt=""/>
              </Img>

              <div className="button-link">
                <a target="_blank" rel='noopener noreferrer' style={{fontWeight:"bold", fontSize:"25px"}} href="https://ECER.THAI.RUN/">
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

export default Ecer;