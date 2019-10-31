import React, {Component} from 'react';
import styled from 'styled-components'
import { Button } from 'antd'
import whereImg from '../../../img/race.jpg'
import { Containerreverse, Textreverse, Imgreverse} from '../../styled-component/style.js';

const RecesText = styled.div`
  width: 100%
  display: flex
  align-items: flex-end
  justify-content: center
`
class Where extends Component {
  render() {
    return (

        <div className="HomeContainer">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Containerreverse>
              <Textreverse>
                <RecesText>
                  <div>
                    <h3 className="text-topics">Race Registration
                      <a target="_blank" rel='noopener noreferrer' href="https://race.thai.run/" >
                        <h5 className="link-fonthome">( race.thai.run )</h5>
                      </a>
                    </h3>
                    <div className="text-content" style={{paddingTop:'10px', paddingBottom:'10px'}}>
                    แพลตฟอร์มที่สมบูรณ์สำหรับการลงทะเบียน:
                    ระบบการลงทะเบียนออนไลน์เป็นแพลตฟอร์มอัตโนมัติแบบเต็มรูปแบบซึ่งผู้จัดงานสามารถสร้างกิจกรรมการวิ่งใหม่ได้อย่างง่ายดาย 
                    เมื่อผู้จัดงานเผยแพร่กิจกรรมแล้วระบบจะเริ่มรับข้อมูลนักวิ่งและเก็บเงินค่าลงทะเบียน 
                    ThaiRun คาดว่าจะมี 60 กิจกรรม (10% จาก 600 กิจกรรมทั่วประเทศ ~ 3,000 นักวิ่ง / เหตุการณ์) และนักวิ่ง 180,000 คน เราจะรวบรวมประวัตินักวิ่งทุกคนเข้าสู่ระบบ Race Register 
                    ซึ่งทาง ThaiRun คาดว่านักวิ่งไม่ซ้ำกัน 100,000 รายที่ลงทะเบียนในระบบ จะเพิ่มขึ้นจาก 30,000 คนเมื่อปลายปี 2016 และ 150,000 ในยอด like เฟสบุ๊ค (เพิ่มขึ้นจาก 42,000 เมื่อสิ้นปี 2016)
                    และระบบรับสมัครของเราสามารถจ่ายเงินผ่านช่องทางต่างๆได้มากกว่า 1 ช่องทางซึ่งส่วนนี้ช่วยอำนวยความสะดวกให้แกนักวิ่งและผู้จัดที่เข้ามาใช้ระบบ Race Register
                    </div>
                    <div>
                      <a target="_blank" rel='noopener noreferrer' style={{fontWeight:"bold", fontSize:"20px"}} href="https://race.thai.run/">
                        <Button className="buttonhome">ลงทะเบียนสมัครวิ่ง</Button>
                      </a> 
                      <a className='link' href="/race">
                        รายละเอียดเพิ่มเติม…
                      </a>  
                    </div>
                  </div>  
                </RecesText>
              </Textreverse>
              <Imgreverse>
                <div>
                  <img className="imges" src={whereImg} alt=""/>
                </div>  
              </Imgreverse> 
            </Containerreverse>
          </div>
        </div>
    );
  }
}
export default Where;