import React, { Component } from 'react';
import { Button } from 'antd'
import Ecer_img from '../../../img/ecer.jpg'
import { Containerreverse, Textreverse, Imgreverse} from '../../styled-component/style';
import './css/style.css'

class Ecer extends Component {
  render() {
    return (

      <div className="HomeContainer">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Containerreverse>
          <Textreverse>
            <div>
                <h3 className="text-topics">e-Cer & e-Slip 
                  <a target="_blank" rel='noopener noreferrer' href="https://ecer.thai.run/" >
                    <h5 className="link-fonthome">( ecer.thai.run )</h5>
                  </a>
                </h3>
              <div className="text-content" style={{paddingTop:'10px'}}>
                <strong>e-Slip</strong> คือ ระบบสรุปผลการวิ่งแบบอิเล็คทรอนิค โดยนักวิ่งจะได้รับผลการวิ่งหลังจากที่วิ่งผ่านเส้นชัยผลการวิ่งจส่งผ่านทาง SMS และ Email ที่นักวิ่งได้ลงทะเบียนไว้
                </div>
              <div className="text-content" style={{paddingTop:'10px', paddingBottom:'10px'}}>
                <strong>e-Cer</strong> คือ ระบบที่ทำการสร้างใบรับรองอัตโนมัติหลังจากที่นักวิ่งวิ่งจบสนามนั้นๆมาแล้วในรูปแบบอิเล็คทรอนิค ซึ่งนักวิ่งจะได้หลังจากที่แข่งขันเสร็จสิ้นแล้วผ่านทาง SMS และ Emaial ที่นักวิ่งได้ลงทะบียนไว้
              </div>
              <div>
                <a target="_blank" rel='noopener noreferrer' style={{fontWeight:"bold", fontSize:"20px"}} href="https://ecer.thai.run/">
                  <Button className="buttonhome">ค้นหา e-Cer และ e-Slip</Button>
                </a> 
                <a className='link' href="/ecer">
                  รายละเอียดเพิ่มเติม…
                </a>  
              </div>
            </div>  
          </Textreverse>
          <Imgreverse>
            <div>
              <img className="imges" src={Ecer_img} alt=""/>
            </div>  
          </Imgreverse> 
        </Containerreverse>
      </div>
      
    </div>
    );
  }
}


export default Ecer;