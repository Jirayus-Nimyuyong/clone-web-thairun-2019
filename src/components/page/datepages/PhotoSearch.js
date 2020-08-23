import React,{ Component } from 'react';
import photoImg1 from '../../../img/photo1.jpg'
import { Button } from 'antd'
import {Date, Img} from '../../styled-component/style'
import logo from '../../../img/logo.png'
import './css/style.css'
import styled from 'styled-components'
import Footer from '../totalpages/footer'

const HeaderContainer = styled.div`
  width: 90%
`

class PhotoSearch extends Component {
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
          <h2 className="text-date">Photo Search</h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Date>
              <div className="text-title">
              เป็นแพลตฟอร์มที่ช่วยอำนวยความสะดวกให้แก่ช่างภาพ โดยช่างภาพสามารถอัปโหลดรูปภาพจากงานวิ่งเข้าสู่ระบบ ระบบจะติดแท็กรูปโดยอัตโนมัติโดยรูปถ่ายที่มีหมายเลขหรือเบอร์นักวิ่งจะสามารถค้นหาภาพเหล่านี้ได้
              โดยระบบใช้การตรวจสอบ BIB อัตโนมัติของเราโดยใช้บาร์โค้ด 2D, ระบบยังสามารถทำการจดจำใบหน้าและการค้นหาภาพด้วยใบหน้า
              ในปัจจุบัน ThaiRun มีช่างภาพที่เป็นสมาชิกของระบบ 250 คน โดยที่ช่างภาพที่เป็นสมาชิกของระบบสามารถมาสร้างกิจกรรมงานวิ่งและสามารถอัพโหลดรูปภาพเข้าสู่กิจกรรมเมื่อนักวิ่งเข้าสู่เพจก็สามารถคนหาภาพและซื้อขายภาพได้ทันทีทันใด ซึ่งกิจกรรมการค้นหาในปัจจุบันระบบมีภาพถ่าย 3,000,000 ภาพในระบบ(เพิ่มขึ้นจาก 400,000 ภาพในปี พ. ศ. 2559)
              ThaiRun อำนวยความสะดวกในการซื้อขายภาพ และ การโอนเงินยอดขายภาพให้แก่ช่างภาพแต่ละท่านโดยการเปิดเกตเวย์การชำระเงินใหม่: การโอนเงินผ่านธนาคารออนไลน์และเครดิต
              (เพิ่มไปยัง Line Pay ปัจจุบัน) และ ThaiRun คาดว่ายอดขายภาพจะเพิ่มขึ้น 20% (เพิ่มขึ้นจาก 1%) ในปี พ.ศ.2561 นี้
              </div>
              <Img>
                <img className="imges" src={photoImg1} alt=""/>
              </Img>

              <div className="button-link">
                <a target="_blank" rel='noopener noreferrer' style={{fontWeight:"bold", fontSize:"25px"}} href="https://PHOTO.THAI.RUN/">
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

export default PhotoSearch;
