import React from 'react';
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

[nodemon] watching path(s): *.*
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

const UserImg = styled.img`

position: relative;
left: -8rem;
border-radius: 50%;

`



const StarResize = styled.img`
   position: relative;
   width: 8rem;
   left: 1rem;
   top: 2.4rem;
   height: 1.8rem;

`

const mkStarUrl = (n) =>
   `https://badgersnax.s3-us-west-2.amazonaws.com/hrr50-fec/AdrianPhotos/${n}rating.png`;

const fmtDate = (date) => {
   let months = [ 'January'
                , 'February'
                , 'March'
                , 'April'
                , 'May'
                , 'June'
                , 'July'
                , 'August'
                , 'September'
                , 'October'
                , 'November'
                , 'December'
                ];
   let fmtSuffix = (n) => {
      switch(n % 10) {
         case 1:  return 'st';
         case 2:  return 'nd';
         case 3:  return 'rd';
         default: return 'th';
      }
   }

   let utcd = date.getDate();
   return `${months[date.getMonth()]} ${utcd}${fmtSuffix(utcd)} ${date.getFullYear()}`;
}

function Review(props) {
   let starImage = mkStarUrl(props.props.stars);

   let { username, title, review, foundHelpful, createdAt } = props.props;
   // not even gonna try refactoring this fully

   return (
      <div>
         <AmazonUser>{username}</AmazonUser>
         <StarResize src={starImage}></StarResize>
         <UserImg src='https://badgersnax.s3-us-west-2.amazonaws.com/hrr50-fec/AdrianPhotos/ninja.jpg'></UserImg>
         <AmazonTitle>{title}</AmazonTitle>
         <AmazonHelpful>Reviewed in the United States on {fmtDate(createdAt)}</AmazonHelpful>
         <BalanceReview>
            <AmazonReview>{review}</AmazonReview>
         </BalanceReview>
         <AmazonHelpful>{foundHelpful} found this helpful.</AmazonHelpful>
         <AmazonButton>Helpful</AmazonButton>
         <AmazonAbuse>| Report abuse</AmazonAbuse>
      </div>



   )


}





export default Review;