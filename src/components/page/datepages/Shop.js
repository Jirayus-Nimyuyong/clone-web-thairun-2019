import React, { Component } from 'react'
import { Button } from 'antd'
import Footer from '../totalpages/footer'
import shop1 from '../../../img/shop1.jpg'
import {Date, Img} from '../../styled-component/style'
import logo from '../../../img/logo.png'
import styled from 'styled-components'
import './css/style.css'

const HeaderContainer = styled.div`
  width: 90%
`

class Shop extends Component {
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
          <h2 className="text-date">ThaiRun Shop</h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Date>
              <div className="text-title">
              เว็บร้านค้า shop.thai.run เป็นร้านค้าออนไลน์
              ที่ขายเสื้อวิ่งและผลิตภัณฑ์อื่นๆ จากพันธมิตรของเรา นี่ไม่ใช่ธุรกิจหลักของเรา
              ระบบนี้จะพัฒนาเป็นแพลตฟอร์มทั่วไปและตลาดสำหรับการทำงาน
              ผลิตภัณฑ์ ผู้ขายรายอื่นสามารถเปิดร้านค้าในระบบของเราและใช้ประโยชน์จากชุมชนขนาดใหญ่ของเราได้
              นักวิ่งที่ชำระเงิน</div>
              <Img>
                <img className="imges" src={shop1} alt=""/>
              </Img>

              <div className="button-link">
                <a target="_blank" rel='noopener noreferrer' style={{fontWeight:"bold", fontSize:"25px"}} href="https://SHOP.THAI.RUN/">
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

export default Shop;
