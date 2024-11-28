import React from 'react';
import DigiBill from'../componant/DigiBill.png';
import SmartPose from '../componant/SmartPose.png';
import SmartMsg from '../componant/smartMsg.png';
import CocaCola from '../componant/CocaCola.png';
import InApp from '../componant/InApp.png'
import EBCM from '../componant/EBCM.png';
import V_Cart from '../componant/V_Cart.png';
import SmartCnt from '../componant/SmartCnt.png'
import mark from '../componant/+mark.png'

export default function Servises() {

const goDigiBill = () => window.location.href = '/DigiBill'
const goSmartPose = () => window.location.href = '/SmartPose'
const goSmartMsg = () => window.location.href = '/SmartMsg'
const goCocaCola = () => window.location.href = '/CocaCola'
const goInApp = () => window.location.href = '/InApp'
const goEBCM = () => window.location.href = '/EBCM'
const goVCard = () => window.location.href = '/VCard'
const goSmartCnt = () => window.location.href = '/SmartCnt'

  return (
    <div>
      <div id='main-Services'>
          <div id='line1-Server'>

                <div id='line1-single-Server-Digibill' onClick={goDigiBill}>
                    <img src={DigiBill} alt='' id='Server-DigiBill-Image'/>
                    <span id='Server-Text'>Digi Bill</span>
                </div>

                <div id='line1-single-Server' onClick={goSmartPose}>
                    <img src={SmartPose} alt='' id='Server-SmartPose-Image'/>
                    <span id='Server-Text'>Smart Pose</span>
                </div>

                <div id='line1-single-Server' onClick={goSmartMsg}>
                    <img src={SmartMsg} alt='' id='Server-SartMsg-Image'/>
                    <span id='Server-TextS'>Smart</span>
                    <span id='Server-TextS'>Messenger</span>
                </div>

                <div id='line1-single-Server' onClick={goCocaCola}>
                   <img src={CocaCola} alt='' id='Server-CocaCola-Image'/>
                   <span id='Server-TextS'>Coca Cola</span>
                   <span id='Server-TextS'>Management</span>
                </div>

          </div>


          <div id='line2-Server'>

              <div id='line1-single-Server' onClick={goInApp}>
                   <img src={InApp} alt='' id='Server-InnApp-Image'/>
                   <span id='Server-Text'>In App</span>
                </div>
                <div id='line1-single-Server' onClick={goEBCM}>
                   <img src={EBCM} alt='' id='Server-EBCM-Image'/>
                   <span id='Server-Text'>EBCM</span>
                </div>
                <div id='line1-single-Server' onClick={goVCard}>
                   <img src={V_Cart} alt='' id='Server-VCart-Image'/>
                   <span id='Server-Text'>V-Cart</span>
                </div>
                <div id='line1-single-Server' onClick={goSmartCnt}><br/><br/>
                   <img src={SmartCnt} alt='' id='Server-SmartCnt-Image'/>
                   <span id='Server-TextS'>Smart</span>
                   <span id='Server-TextS'>Connector</span>
                </div>

          </div>


          <div id='line3-Server'>
              <div id='line1-single-Server'><br/><br/><br/><br/><br/>
                      <img src={mark} alt='' id='Server-Add-Image'/>
                    </div>
              
          </div>
      </div>
    </div>
  )
}



