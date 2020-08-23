import React, { Component } from 'react';
import Footer from '../totalpages/footer'
import {Policy} from '../../styled-component/style'
import logo from '.././../../img/logo.png'
import styled from 'styled-components'
import './css/style.css'

const HeaderContainer = styled.div`
  width: 90%
`

class Pricing extends Component {
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
          <div className="text-date"/>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Policy>
              <div className="text-Pricing">
                <h1 style={{ textAlign:'center', fontSize:'40px', fontWeight: '700' }}>Privacy Policy</h1>
                <p className="text-Pricing-center">Effective date: August 24, 2018</p>
                <p className="text-Pricing-center">Thaidotrun Co., LTd. ("us", "we", or "our") operates the https://www.thai.run website (the "Service").</p>
                <p style={{ paddingTop:'20px' }}>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. This Privacy Policy  for Thaidotrun Co., LTd. is powered by <a href="https://www.freeprivacypolicy.com/free-privacy-policy-generator.php">FreePrivacyPolicy.com</a>.</p>
                <p style={{ paddingTop:'15px' }}>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from https://www.thai.run</p>
              
              <h3 style={{ paddingTop:'20px' }}>Information Collection And Use</h3>
                <p style={{ paddingTop:'3px', paddingLeft:'20px' }}>We collect several different types of information for various purposes to provide and improve our Service to you.</p>

                <h4 style={{ paddingTop:'20px' }}>Types of Data Collected</h4>
                  <h5 style={{ paddingTop:'15px', paddingLeft:'20px' }}>Personal Data</h5>
                    <p style={{ paddingTop:'3px', paddingLeft:'40px'}}>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
                  <ul style={{ paddingTop:'3px', paddingLeft:'60px', listStyle:'unset' }}>
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Phone number</li>
                    <li>Address, State, Province, ZIP/Postal code, City</li>
                    <li>Cookies and Usage Data</li>
                  </ul>

                  <h5 style={{ paddingTop:'15px', paddingLeft:'20px' }}>Usage Data</h5>
                    <p style={{ paddingTop:'3px', paddingLeft:'40px' }}>We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>

                  <h5 style={{ paddingTop:'15px', paddingLeft:'20px' }}>Tracking & Cookies Data</h5>
                    <p style={{ paddingTop:'3px', paddingLeft:'40px' }}>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>
                    <p style={{ paddingTop:'15px', paddingLeft:'40px' }}>Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</p>
                    <p style={{ paddingTop:'15px', paddingLeft:'40px' }}>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
                    <p style={{ paddingTop:'15px', paddingLeft:'40px' }}>Examples of Cookies we use:</p>
                    <ul style={{ paddingTop:'3px', paddingLeft:'60px', listStyle:'unset' }}>
                        <li><strong>Session Cookies.</strong> We use Session Cookies to operate our Service.</li>
                        <li><strong>Preference Cookies.</strong> We use Preference Cookies to remember your preferences and various settings.</li>
                        <li><strong>Security Cookies.</strong> We use Security Cookies for security purposes.</li>
                    </ul>

                  <h3 style={{ paddingTop:'20px' }}>Use of Data</h3>   
                    <p style={{ paddingTop:'3px', paddingLeft:'20px' }}>Thaidotrun Co., LTd. uses the collected data for various purposes:</p>    
                    <ul style={{ paddingTop:'3px', paddingLeft:'40px', listStyle:'unset' }}>
                        <li>To provide and maintain the Service</li>
                        <li>To notify you about changes to our Service</li>
                        <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                        <li>To provide customer care and support</li>
                        <li>To provide analysis or valuable information so that we can improve the Service</li>
                        <li>To monitor the usage of the Service</li>
                        <li>To detect, prevent and address technical issues</li>
                    </ul>

                  <h3 style={{ paddingTop:'20px' }}>Transfer Of Data</h3>
                    <p style={{ paddingTop:'3px', paddingLeft:'20px' }}>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>
                    <p style={{ paddingTop:'15px', paddingLeft:'20px' }}>If you are located outside Thailand and choose to provide information to us, please note that we transfer the data, including Personal Data, to Thailand and process it there.</p>
                    <p style={{ paddingTop:'15px', paddingLeft:'20px' }}>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
                    <p style={{ paddingTop:'15px', paddingLeft:'20px' }}>Thaidotrun Co., LTd. will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>

                  <h3 style={{ paddingTop:'20px' }}>Disclosure Of Data</h3>
                    <h4 style={{ paddingTop:'15px', paddingLeft:'20px'}}>Legal Requirements</h4>
                      <p style={{ paddingTop:'3px', paddingLeft:'40px'}}>Thaidotrun Co., LTd. may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
                      <ul style={{ paddingTop:'3px', paddingLeft:'60px', listStyle:'unset' }}>
                          <li>To comply with a legal obligation</li>
                          <li>To protect and defend the rights or property of Thaidotrun Co., LTd.</li>
                          <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                          <li>To protect the personal safety of users of the Service or the public</li>
                          <li>To protect against legal liability</li>
                      </ul>

                  <h3 style={{ paddingTop:'20px' }}>Security Of Data</h3>
                    <p style={{ paddingTop:'3px', paddingLeft:'20px' }}>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

                  <h3 style={{ paddingTop:'20px' }}>Service Providers</h3>
                    <p style={{ paddingTop:'3px', paddingLeft:'20px' }}>We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>
                    <p style={{ paddingTop:'15px', paddingLeft:'20px' }}>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

                    <h3 style={{ paddingTop:'20px' }}>Analytics</h3>
                      <p style={{ paddingTop:'3px', paddingLeft:'20px' }}>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>    
                      <ul style={{ paddingTop:'3px', paddingLeft:'40px', listStyle:'unset' }}>
                        <li>
                          <p><strong>Google Analytics</strong></p>
                          <p style={{ paddingTop:'3px' }}>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.</p>
                          <p style={{ paddingTop:'15px' }}>You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity.</p>                
                          <p style={{ paddingTop:'15px' }}>For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: <a href="https://policies.google.com/privacy?hl=en">https://policies.google.com/privacy?hl=en</a></p>
                        </li>
                      </ul>

                  <h3 style={{ paddingTop:'20px' }}>Links To Other Sites</h3>
                    <p style={{ paddingTop:'3px', paddingLeft:'20px' }}>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
                    <p style={{ paddingTop:'15px', paddingLeft:'20px' }}>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>

                  <h3 style={{ paddingTop:'20px' }}>Children's Privacy</h3>
                    <p style={{ paddingTop:'3px', paddingLeft:'20px' }}>Our Service does not address anyone under the age of 18 ("Children").</p>
                    <p style={{ paddingTop:'15px', paddingLeft:'20px' }}>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>

                  <h3 style={{ paddingTop:'20px' }}>Changes To This Privacy Policy</h3>
                    <p style={{ paddingTop:'3px', paddingLeft:'20px' }}>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                    <p style={{ paddingTop:'15px', paddingLeft:'20px' }}>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</p>
                    <p style={{ paddingTop:'15px', paddingLeft:'20px' }}>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

                  <h3 style={{ paddingTop:'20px' }}>Contact Us</h3>
                    <p style={{ paddingTop:'3px', paddingLeft:'20px' }}>If you have any questions about this Privacy Policy, please contact us:</p>
                    <ul style={{ paddingTop:'3px', paddingLeft:'40px', listStyle:'unset', paddingBottom:'30px' }}>
                      <li>By email: admin@thai.run</li>
                    </ul>
              </div>
             
            </Policy>
          </div>
          <Footer />
        </div>
    );
  }
}

export default Pricing;
