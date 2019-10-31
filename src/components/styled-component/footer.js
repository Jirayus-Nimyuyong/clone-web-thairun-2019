import styled from 'styled-components';
import { mediaIpad,  mediaIpadmini, mediaMobile } from '../styled-component/responsive.js';

export const FooterContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column-reverse;
  // background: red;
  ${ mediaIpadmini.Ipadmini`
    // flex-direction: column-reverse;
  ` }
  ${ mediaMobile.Mobile`
    // flex-direction: column-reverse;
  ` }
  ${ mediaIpad.Ipad`
    // flex-direction: column-reverse;
  ` }
`
export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  text-align: center;
  // background: red;
  ${ mediaIpadmini.Ipadmini`
    // width: 100%;
    // margin-top: 10px;
    // text-align: center;
  ` }
  ${ mediaMobile.Mobile`
    // width: 100%;
    // margin-top: 10px;
    // text-align: center;
  ` }
  ${ mediaIpad.Ipad`
    // width: 100%;
    // margin-top: 10px;
    // text-align: center;
    ` }

`
export const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  // background: red;
  ${ mediaIpadmini.Ipadmini`
    // width: 100%;
    // justify-content: center;
    ` }
  ${ mediaMobile.Mobile`
    // width: 100%;
    // justify-content: center;
  ` }
  ${ mediaIpad.Ipad`
    // width: 100%;
    // justify-content: center;
    ` }

`