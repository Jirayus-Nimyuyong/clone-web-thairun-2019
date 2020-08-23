import React, { Component } from 'react';
import { Button } from 'antd'
import Footer from '../totalpages/footer'
import race1 from '../../../img/race1.jpg'
import {Date, Img} from '../../styled-component/style'
import logo from '../../../img/logo.png'
import styled from 'styled-components'
import './css/style.css'

const HeaderContainer = styled.div`
  width: 90%
`


class Race extends Component {
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
          <h2 className="text-date">Race Registration</h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Date>
              <div className="text-title">
              แพลตฟอร์มที่สมบูรณ์สำหรับการลงทะเบียน:
              ระบบการลงทะเบียนออนไลน์เป็นแพลตฟอร์มอัตโนมัติแบบเต็มรูปแบบซึ่งผู้จัดงานสามารถสร้างกิจกรรมการวิ่งใหม่ได้อย่างง่ายดาย 
              เมื่อผู้จัดงานเผยแพร่กิจกรรมแล้วระบบจะเริ่มรับข้อมูลนักวิ่งและเก็บเงินค่าลงทะเบียน 
              ThaiRun คาดว่าจะมี 60 กิจกรรม (10% จาก 600 กิจกรรมทั่วประเทศ ~ 3,000 นักวิ่ง / เหตุการณ์) และนักวิ่ง 180,000 คน เราจะรวบรวมประวัตินักวิ่งทุกคนเข้าสู่ระบบ Race Register 
              ซึ่งทาง ThaiRun คาดว่านักวิ่งไม่ซ้ำกัน 100,000 รายที่ลงทะเบียนในระบบ จะเพิ่มขึ้นจาก 30,000 คนเมื่อปลายปี 2016 และ 150,000 ในยอด like เฟสบุ๊ค (เพิ่มขึ้นจาก 42,000 เมื่อสิ้นปี 2016)
              และระบบรับสมัครของเราสามารถจ่ายเงินผ่านช่องทางต่างๆได้มากกว่า 1 ช่องทางซึ่งส่วนนี้ช่วยอำนวยความสะดวกให้แกนักวิ่งและผู้จัดที่เข้ามาใช้ระบบ Race Register
              </div>
              <Img>
                <img className="imges" src={race1} alt=""/>
              </Img>

              <div className="button-link">
                <a target="_blank" rel='noopener noreferrer' style={{fontWeight:"bold", fontSize:"25px"}} href="https://RACE.THAI.RUN/">
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

export default Race;
