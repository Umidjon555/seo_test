import React from 'react'
import { Helmet } from 'react-helmet-async';

const EnglishPage = () => {
  return (
    <>
           <Helmet>
      <title>Enlish title</title>
      <meta name="description" content="this is english description" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="english url"/>
      <meta name="og:title" content={`this is English og title`} />
      <meta name="og:description" content={`this is English og decription`} />
    </Helmet>
    <div>EnglishPage</div>
    </>

  )
}

export default EnglishPage