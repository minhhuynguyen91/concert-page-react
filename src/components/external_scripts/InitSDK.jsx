import React, { useState, useEffect} from 'react'
import useScript from '../hooks/useScript'

const facebookSDK = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v4.0&appId=369648133723010&autoLogAppEvents=1'
// const facebookCustomerChat = './fbCustomerChat'

const googleSDK = 'https://www.googletagmanager.com/gtag/js?id=UA-148373553-1'

const InitSDK = () => {
  useScript(facebookSDK)
  useScript(googleSDK)
  return(<div> </div>)
}

export default InitSDK;