import React from 'react';

import styled from 'styled-components'

const ImageFormat = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 60rem;


`



function Images() {

  return (

    <ImageFormat>
      <img src='ps1.jpg'></img>
      <img src='ps2.jpg'></img>
      <img src='ps3.jpg'></img>
      <img src='ps4.jpg'></img>
    </ImageFormat>

  )

}





export default Images