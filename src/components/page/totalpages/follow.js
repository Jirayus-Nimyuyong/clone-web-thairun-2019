import React, { Component } from 'react';
import { Button } from 'antd'
import styled from 'styled-components'
import followImg from '../../../img/follow.jpg'
import { Container, TextContainer,  ImgContainer} from '../../styled-component/style';
import './css/style.css'

const FollowText = styled.div`
  width: 100%
  display: flex
  align+items: center
  justify-content: flex-start
`

class Follow extends Component {
  render() {
    return (

        <div className="HomeContainer">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Container>
              <ImgContainer>
                <div>
                  <img className="imges" src={followImg} alt=""/>
                </div>  
              </ImgContainer>
              <TextContainer>
                <FollowText>
                  <div>
                    <h3 className="text-topics">Follow Me
                      <a target="_blank" rel='noopener noreferrer' href="https://followme.thai.run/" >
                        <h5 className="link-fonthome">( followme.thai.run )</h5>
                      </a>
                    </h3>
                    <div className="text-content" style={{paddingTop:'10px', paddingBottom:'10px'}}>
                      ระบบติดตามนักวิ่งตามจุด Check Point เมื่อนักวิ่งวิ่งผ่านจุดCheckPoint ระบบจะทำการโพส CheckPoint และ เวลาที่วิ่งได้ ในรูปแบบรูปภาพไปที่ Facebook ของนักวิ่งที่มาลงทะเบียนไว้ในช่วงเวลาก่อนการแข่งขัน   
                    </div>
                    <div>
                      <a target="_blank" rel='noopener noreferrer' style={{fontWeight:"bold", fontSize:"20px"}} href="https://followme.thai.run/">
                        <Button className="buttonhome">ลงทะเบียน FollowMe</Button>
                      </a> 
                      <a className='link' href="/followme">
                        รายละเอียดเพิ่มเติม…
                      </a>  
                    </div>
                  </div>  
                </FollowText>
              </TextContainer>
            </Container>
          </div>
        </div>
    );
  }
}


export default Follow;