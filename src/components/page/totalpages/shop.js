import React,{ Component } from 'react';
import { Button } from 'antd'
import shopImg from '../../../img/shop.jpg'
import { Containerreverse, Textreverse, Imgreverse} from '../../styled-component/style'
import './css/style.css'

class Shop extends Component {
  render() {
    return (

        <div className="HomeContainer">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Containerreverse>
              <Textreverse>
                <div>
                  <h3 className="text-topics">ThaiRun Shop
                    <a target="_blank" rel='noopener noreferrer' href="https://shop.thai.run/" >
                      <h5 className="link-fonthome">( shop.thai.run )</h5>
                    </a>
                  </h3>
                  <div className="text-content" style={{paddingTop:'10px', paddingBottom:'10px'}}>
                  เว็บร้านค้า shop.thai.run เป็นร้านค้าออนไลน์
                  ที่ขายเสื้อวิ่งและผลิตภัณฑ์อื่นๆ จากพันธมิตรของเรา นี่ไม่ใช่ธุรกิจหลักของเรา
                  ระบบนี้จะพัฒนาเป็นแพลตฟอร์มทั่วไปและตลาดสำหรับการทำงาน
                  ผลิตภัณฑ์ ผู้ขายรายอื่นสามารถเปิดร้านค้าในระบบของเราและใช้ประโยชน์จากชุมชนขนาดใหญ่ของเราได้
                  นักวิ่งที่ชำระเงิน
                  </div>
                  <div style={{marginBottom: '10px'}}>
                    <a target="_blank" rel='noopener noreferrer' style={{fontWeight:"bold", fontSize:"20px"}} href="https://shop.thai.run/">
                      <Button className="buttonhome">เลือกซื้อสินค้า</Button>
                    </a> 
                    <a className='link' href="/shop">
                      รายละเอียดเพิ่มเติม…
                    </a>  
                  </div>
                </div>  
              </Textreverse>
              <Imgreverse>
                <div>
                  <img className="imges" src={shopImg} alt=""/>
                </div>  
              </Imgreverse> 
            </Containerreverse>
          </div>  
        </div>
    );
  }
}

export default Shop;