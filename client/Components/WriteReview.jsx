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
top: 68rem;
border-bottom: 2px solid #e7e7e7;
width: 20rem;

`



const TextStyle = styled.h1`
position: relative;
font-family: 'Roboto', sans-serif;
font-size: 15px;
font-weight 300;

`


const buttonAmazon = styled.button`
position: relative;
width: 100%;

`


function WriteReview () {

 return (

    <div>
      <Container>
     <ReviewText>Review this product.</ReviewText>
     <button className = 'btn-config'> Write a customer review</button>
      <TextStyle>Share your thoughts with other customers</TextStyle>
      </Container>

    </div>
 )


}



export default WriteReview;




