import React from 'react'
import { ContextProvider, useContextGlobal } from './utils/global.context';


const Footer = () => {

  const {state} = useContextGlobal();


  return (
    <footer>
      <div className='primerFooter'>

      </div>
      <div className='segundoFooter'>
        <div>
          <p style={{color:state.theme.color}}>Powered by</p>
          <img src="./images/DH.png" alt='DH-logo' style={{color:state.theme.color}} />
          </div>
          <div >
          <a href="www.facebook.com"><img src="./images/facebook.png" alt="DH-facebook"/></a>
          <a href="www.instagram.com"><img src="./images/instagram.png" alt="DH-instagram"/></a>
          <a href="www.tiktok.com"><img src="./images/tik-tok.png" alt="DH-tiktok"/></a>
          <a href="www.whatsapp.com"><img src="./images/whatsapp.png" alt="DH-whatsapp"/></a>
          </div>
      </div>
    </footer>
  )
}

export default Footer
