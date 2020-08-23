import styled from 'styled-components';
import { mediaIpad,  mediaIpadmini, mediaMobile } from './responsive';

export const Container = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  // background: red;
  ${ mediaIpadmini.Ipadmini`
    flex-direction: column;  
  ` }
  ${ mediaMobile.Mobile`
    flex-direction: column;
  ` }
  ${ mediaIpad.Ipad`
    flex-direction: column;
  ` }
`  

export const TextContainer = styled.div`
  width: 40%;
  // background: green;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  ${ mediaIpadmini.Ipadmini`
      width: 100%;
  ` }
  ${ mediaMobile.Mobile`
      width: 100%;
  ` }
  ${ mediaIpad.Ipad`
      width: 100%;
  ` }
`
export const Textcolumn = styled.div`
  width: 40%;
  // background: green;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${ mediaIpadmini.Ipadmini`
      width: 100%;
      flex-direction: column;
  ` }
  ${ mediaMobile.Mobile`
      width: 100%;
      flex-direction: column;
  ` }
  ${ mediaIpad.Ipad`
      width: 100%;
      flex-direction: column;
  ` }
`

export const ImgContainer = styled.div`
  width: 60%;
  // background: blue;
  display: flex;
  justify-content: flex-start;
  ${ mediaIpadmini.Ipadmini`
    width: 100%;
  ` }
  ${ mediaMobile.Mobile`
    width: 100%;
  ` }
  ${ mediaIpad.Ipad`
    width: 100%;
  ` }
`  


export const Containerreverse = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  // background: red;
  ${ mediaIpadmini.Ipadmini`
    flex-direction: column-reverse;    
  ` }
  ${ mediaMobile.Mobile`
    flex-direction: column-reverse;
  ` }
  ${ mediaIpad.Ipad`
    flex-direction: column-reverse;
  ` }
`
export const Textreverse = styled.div`
  width: 60%;
  // background: blue;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  ${ mediaIpadmini.Ipadmini`
    width: 100%;
  ` }
  ${ mediaMobile.Mobile`
    width: 100%
    // flex-direction: column-reverse;
  ` }
  ${ mediaIpad.Ipad`
    width: 100%;
  ` }
`
export const Imgreverse = styled.div`
  width: 60%;
  // background: blue;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  ${ mediaIpadmini.Ipadmini`
    width: 100%;
  ` }
  ${ mediaMobile.Mobile`
    width: 100%
  // flex-direction: column-reverse;
  ` }
  ${ mediaIpad.Ipad`
    width: 100%;
  ` }
`
export const Img = styled.div`
  width: 70%;
  // background: blue;
  display: flex;
  margin-top: 30px;
  align-items: flex-start;
  justify-content: center;
  ${ mediaIpadmini.Ipadmini`
    width: 100%;
  ` }
  ${ mediaMobile.Mobile`
    width: 100%
  // flex-direction: column-reverse;
  ` }
  ${ mediaIpad.Ipad`
    width: 100%;
  ` }
`
export const Date = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;  
  // background: red;
  ${ mediaIpadmini.Ipadmini`
    flex-direction: column;  
  ` }
  ${ mediaMobile.Mobile`
    flex-direction: column;
  ` }
  ${ mediaIpad.Ipad`
    flex-direction: column;
  ` }
`  

export const Policy = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  align-items: center;
  flex-direction: column;  
  border: 20px solid #F7F6F2;
  padding: 10px;
  border-top: 40px solid #F7F6F2;
  // background: red;
  ${ mediaIpadmini.Ipadmini`
    flex-direction: column;  
  ` }
  ${ mediaMobile.Mobile`
    flex-direction: column;
  ` }
  ${ mediaIpad.Ipad`
    flex-direction: column;
  ` }
`