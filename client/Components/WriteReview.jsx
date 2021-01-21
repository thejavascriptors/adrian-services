import React from 'react';


import styled from 'styled-components'



const ReviewText = styled.h1`
position: relative;
font-family: 'Roboto', sans-serif;
font-size: 25px;
font-weight 500

`


const Container = styled.div`

position: relative;
left: -25rem;
top: 64rem;
border-bottom: 2px solid #e7e7e7;

`



const TextStyle = styled.h1`
position: relative;
font-family: 'Roboto', sans-serif;
font-size: 15px;
font-weight 300

`


function WriteReview () {

 return (

    <div>
      <Container>
     <ReviewText>Review this product.</ReviewText>
      <TextStyle>Share your thoughts with other customers</TextStyle>
      </Container>

    </div>
 )


}



export default WriteReview;




