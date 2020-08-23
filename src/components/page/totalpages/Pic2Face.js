import React, { Component} from 'react';
import { Button } from 'antd'
import pic2face_img from '../../../img/pic2face.jpg'
import { Container, TextContainer, ImgContainer} from '../../styled-component/style'
import './css/style.css'

class Pic2Face extends Component {
  render() {
    return (
        <div className="HomeContainer">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Container>
              <ImgContainer>
                <div>
                  <img className="imges" src={pic2face_img} alt=""/>
                </div>  
              </ImgContainer>
              <TextContainer>
                <div>
                  <h3 className="text-topics">pic2face
                    <a target="_blank" rel='noopener noreferrer' href="https://followme.thai.run/" >
                      <h5 className="link-fonthome">( followme.thai.run )</h5>
                    </a>
                  </h3>
                  <div className="text-content" style={{paddingTop:'10px', paddingBottom:'10px'}}>
                    เป็น เว็บไซต์สำหรับการเผยแพร่ข่าวสารงานวิ่งที่เกิดขึ้นในรอบเดือน และรอบปีนั้นทั้งในเมืองไทยและต่างประเทศ เพื่อให้นักวิ่งได้ติดตามข่าวสารได้อย่างรวดเร็วและทันท่วงที
                  </div>
                  <div>
                    <a target="_blank" rel='noopener noreferrer' style={{fontWeight:"bold", fontSize:"20px"}} href="https://followme.thai.run/">
                      <Button className="buttonhome">ลงทะเบียน pic2face</Button>
                    </a> 
                    <a className='link' href="/pic2face">
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


export default Pic2Face;