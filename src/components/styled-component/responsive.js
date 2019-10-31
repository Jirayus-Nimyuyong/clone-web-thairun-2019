import { css } from 'styled-components'
import styled from 'styled-components';

export const mediaIpad = {
  Ipad: (...args) => css`
    @media (max-width: 1024px) {
      ${ css(...args) }
    }
  `
}

export const mediaIpadmini = {
  Ipadmini: (...args) => css`
      @media (max-width: 768px) {
        ${ css(...args) }
      }
    `
  }

export const mediaMobile = {
    Mobile: (...args) => css`
      @media (max-width: 425px) {
        ${ css(...args) }
      }
    `
  }  

export const Container = styled.div`
  width: 90%;
  display: flex;
  // background: red;
  ${ mediaIpadmini.Ipadmini`
      // width: 100%;
  ` }
  ${ mediaMobile.Mobile`
    flex-direction: column;
  ` }
  ${ mediaIpad.Ipad`
      // width: 100%;
  ` }
`  
export const Containerone = styled.div`
  width: 90%;
  display: flex;
  // background: red;
  ${ mediaIpadmini.Ipadmini`
      // width: 100%;
  ` }
  ${ mediaMobile.Mobile`
    flex-direction: column-reverse;
  ` }
  ${ mediaIpad.Ipad`
      // width: 100%;
  ` }
`  