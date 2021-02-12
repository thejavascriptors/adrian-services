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
      <img src='https://badgersnax.s3-us-west-2.amazonaws.com/hrr50-fec/AdrianPhotos/boxback.jpg'></img>
      <img src='https://badgersnax.s3-us-west-2.amazonaws.com/hrr50-fec/AdrianPhotos/boxfront.jpg'></img>
      <img src='https://badgersnax.s3-us-west-2.amazonaws.com/hrr50-fec/AdrianPhotos/multiplecontrollers.jpg'></img>
      <img src='https://badgersnax.s3-us-west-2.amazonaws.com/hrr50-fec/AdrianPhotos/unboxed.jpg'></img>
    </ImageFormat>

  )

}
export default Images;