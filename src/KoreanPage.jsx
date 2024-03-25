import React from 'react'
import { Helmet } from 'react-helmet-async';

const KoreanPage = () => {
  return (
    <>
        <Helmet>
      <title>한국 title</title>
      <meta name="description" content="this is 한국 description" />
      <meta property="og:type" content="한국" />
      <meta property="og:url" content="한국 url"/>
      <meta name="og:title" content={`this is 한국 og title`} />
      <meta name="og:description" content={`this is 한국 og decription`} />
    </Helmet>
     <div>KoreanPage</div>
    </>
   
  )
}

export default KoreanPage