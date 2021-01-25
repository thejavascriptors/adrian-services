import React from 'react';
import moment from 'moment'
import Star from './Star.jsx'
import styled from 'styled-components'


const AmazonUser = styled.div`
position: relative;
font-family: 'Roboto', sans-serif;
font-size: 20px;
font-weight: 300;
top: 3.5rem;
left: 3.5rem;

`

const AmazonTitle = styled.h1`
position: relative;
top: 0.3rem;
left: 10rem;
font-family: 'Roboto', sans-serif;
font-size: 15px;

`
const AmazonReview = styled.h1`

font-family: 'Roboto', sans-serif;
font-size: 20px;
font-weight: 300;


`


const AmazonHelpful = styled.h1`
font-family: 'Roboto', sans-serif;
font-size: 20px;
color: grey;
font-weight: 300;

`


const BalanceReview = styled.div`
width: 40rem;
`


const AmazonAbuse = styled.h1`
position: relative;
left: 6rem;
top: -3rem;
font-size: 20px;
font-family: 'Roboto', sans-serif;
font-weight: 300;
color: grey;


`

const AmazonButton = styled.button`
width: 5rem;
height: 2.5rem;


`



function Review(props) {
   let currentStar = 'star.png'

   switch (props.props.stars) {
      case 1:
         currentStar = 'star.png'
         break;
      case 2:
         currentStar = 'star2.png'
         break;
      case 3:
         currentStar = 'star3.png'
         break;
      case 4:
         currentStar = 'star4.png'
         break;
      case 5:
         currentStar = 'star5.png'
         break;
   }




   return (
      <div>
         <AmazonUser>{props.props.username}</AmazonUser>
         <img src={currentStar} className='starResize'></img>
         <img src='logo.jpg' className='userImg'></img>
         <AmazonTitle>{props.props.title}</AmazonTitle>
         <AmazonHelpful>Reviewed in the United States on {moment(props.props.createdAt).format('MMMM do YYYY')}</AmazonHelpful>
         <BalanceReview>
            <AmazonReview>{props.props.review}</AmazonReview>
         </BalanceReview>
         <AmazonHelpful>{props.props.foundHelpful} found this helpful.</AmazonHelpful>
         <AmazonButton>Helpful</AmazonButton>
         <AmazonAbuse>| Report abuse</AmazonAbuse>
      </div>



   )


}





export default Review;