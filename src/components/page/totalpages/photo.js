import React, { Component } from 'react';
import photoImg from '../../../img/photo.jpg'
import { Button } from 'antd'
import { Container, TextContainer, ImgContainer} from '../../styled-component/style'
import './css/style.css'

class Photo extends Component {
  render() {
    return (
        <div className="HomeContainer">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Container>
              <ImgContainer>
                <div>
                  <img className="imges" src={photoImg} alt=""/>
                </div>  
              </ImgContainer>
              <TextContainer>
                <div>
                  <h3 className="text-topics">Photo Search 
                    <a target="_blank" rel='noopener noreferrer' href="https://photo.thai.run/" >
                      <h5 className="link-fonthome">( photo.thai.run )</h5>
                    </a>
                  </h3>
                  <div className="text-content" style={{paddingTop:'10px', paddingBottom:'10px'}}>
                  เป็นแพลตฟอร์มที่ช่วยอำนวยความสะดวกให้แก่ช่างภาพ โดยช่างภาพสามารถอัปโหลดรูปภาพจากงานวิ่งเข้าสู่ระบบ ระบบจะติดแท็กรูปโดยอัตโนมัติโดยรูปถ่ายที่มีหมายเลขหรือเบอร์นักวิ่งจะสามารถค้นหาภาพเหล่านี้ได้
                  โดยระบบใช้การตรวจสอบ BIB อัตโนมัติของเราโดยใช้บาร์โค้ด 2D, ระบบยังสามารถทำการจดจำใบหน้าและการค้นหาภาพด้วยใบหน้า
                  ในปัจจุบัน ThaiRun มีช่างภาพที่เป็นสมาชิกของระบบ 250 คน โดยที่ช่างภาพที่เป็นสมาชิกของระบบสามารถมาสร้างกิจกรรมงานวิ่งและสามารถอัพโหลดรูปภาพเข้าสู่กิจกรรมเมื่อนักวิ่งเข้าสู่เพจก็สามารถคนหาภาพและซื้อขายภาพได้ทันทีทันใด ซึ่งกิจกรรมการค้นหาในปัจจุบันระบบมีภาพถ่าย 3,000,000 ภาพในระบบ(เพิ่มขึ้นจาก 400,000 ภาพในปี พ. ศ. 2559)
                  ThaiRun อำนวยความสะดวกในการซื้อขายภาพ และ การโอนเงินยอดขายภาพให้แก่ช่างภาพแต่ละท่านโดยการเปิดเกตเวย์การชำระเงินใหม่: การโอนเงินผ่านธนาคารออนไลน์และเครดิต
                  (เพิ่มไปยัง Line Pay ปัจจุบัน) และ ThaiRun คาดว่ายอดขายภาพจะเพิ่มขึ้น 20% (เพิ่มขึ้นจาก 1%) ในปี พ.ศ.2561 นี้
                  </div>
                  <div>
                    <a target="_blank" rel='noopener noreferrer' style={{fontWeight:"bold", fontSize:"20px"}} href="https://PHOTO.THAI.RUN/">
                      <Button className="buttonhome">ค้นหาภาพถ่าย</Button>
                    </a>  
                    <a className='link' href="/photo">
                      รายละเอียดเพิ่มเติม…
                    </a>  
                  </div>
                </div>  
              </TextContainer> 
            </Container>
          </div>
        </div>
    );
  }
}


export default Photo;