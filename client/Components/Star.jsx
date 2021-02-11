import React from 'react';
import styled from 'styled-components'
import Axios from 'axios'

const BackgroundBar = styled.div`
width: 80%;
background-color: #F0F2F2;
border-radius: 10px;
box-shadow: inset 0 0 0 1px #E3E6E6;
margin: 1px 0px -50px 0px;
position: relative;
left: 2rem;
 &&:hover {
  outline: 2px solid #DE7921;
 }

`

const Bar = styled.div`
width: 92%;
height: 30px;
background-color: #FFA41C;
text-align: center;
line-height: 30px;
color: black;
border-radius: 10px;


`

const Bar2 = styled.div`
width: 5%;
height: 30px;
background-color: #FFA41C;
text-align: center;
line-height: 30px;
color: black;
border-radius: 10px;


`

const Bar3 = styled.div`
width: 1%;
height: 30px;
background-color: #FFA41C;
text-align: center;
line-height: 30px;
color: black;
border-radius: 10px;


`



const Bar4 = styled.div`
width: 10%;
height: 30px;
background-color: #FFA41C;
text-align: center;
line-height: 30px;
color: black;
border-radius: 10px;


`




const Bar5 = styled.div`
width: 1%;
height: 30px;
background-color: #FFA41C;
text-align: center;
line-height: 30px;
border-radius: 10px;
color: black;

`
const Lettering = styled.h1`
position: relative;
top: 1rem;
left: 19rem;
font-family : 'Roboto', sans-serif;
font-weight : 500;
color: #007185;
font-size: 18px;
`
const Lettering2 = styled.h1`
position: relative;
top: 1rem;
left: 19rem;
font-family : 'Roboto', sans-serif;
font-weight : 500;
color: #007185;
font-size: 18px;
`

const Lettering3 = styled.h1`
position: relative;
top: 1rem;
left: 19rem;
font-family : 'Roboto', sans-serif;
font-weight : 500;
color: #007185;
font-size: 18px;
`

const Lettering4 = styled.h1`
position: relative;
top: 1rem;
left: 19rem;
font-family : 'Roboto', sans-serif;
font-weight : 500;
color: #007185;
font-size: 18px;
`


const Lettering5 = styled.h1`
position: relative;
top: 1rem;
left: 19rem;
font-family : 'Roboto', sans-serif;
font-weight : 500;
color: #007185;
font-size: 18px;
`



const AmazonRating = styled.h1`
color: #007185;
position: relative;
left: 0.5rem;
font-size: 15px;
font-family : 'Roboto', sans-serif;
font-weight : 500;
cursor: grab;

 &&:hover {
  text-decoration: underline;
 }
`
const OutOf = styled.h1`
position: relative;
left: 10rem;

font-size: 25px;
font-family: 'Roboto', sans-serif;
font-weight: 300;

`

const Stars = styled.h1 `
 position: relative;
 top: -1.2rem;
 left: -1rem;
 color: #007185;
 font-size: 15px;
 font-family: 'Roboto', sans-serif;
 font-weight: 500;
`

const Caret = styled.p`
  position: relative;
  left: -10.5rem;
  top: -7.7rem;
  color: #007185;
  transform: rotate(-90deg);
`;


const CustomerRev =  styled.h1`

position: relative;
top: 4rem;
font-family: 'roboto', sans-serif;
font-size: 30px;
font-weight: 500;

`


const GlobalRating = styled.h1`
position: relative;
font-family: 'Roboto', sans-serif;
font-weight: 300;
color: #565959;
top: -1rem;
left: 0rem;
font-size: 15px;

`



const GlobalStarResize = styled.img`

position: relative;
width: 10rem;
top: 3rem;
left: -0.3rem;
height: 2rem;

`

class Star extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
       reviews: this.props.props,
       starRating: 0
    }
  }




  componentDidMount() {
    Axios('/reviews').then(reviews => {
       this.setState({
         reviews: reviews.data
       })
    }).then(() => {
      let stars = new Array(6).fill(0);
      let {reviews} = this.state;

      reviews.forEach(rev => stars[rev.stars]++);
      let pcts = stars.map(s => s / reviews.length * 100);

   // then divide
      let starAvg = 0;
      for (let i = 1; i <= 5; i++) {
        let cur = pcts[i];
        document.querySelector(`.star${i}_percent`).style.width = `${cur}%`;
        document.querySelector(`.star${i}`).innerHTML = `${~~cur}`;
        starAvg += i * stars[i];
      }

    document.querySelector('.totalScore').innerHTML = (starAvg / reviews.length).toFixed(2) + ' out of 5';


     this.setState({
       starRating: starAvg
     })

    })





     //




    }



  render() {
   let starImage = 'https://badgersnax.s3-us-west-2.amazonaws.com/hrr50-fec/AdrianPhotos/1rating.png'

   switch (Math.floor(this.state.starRating)) {
     case 1:
      starImage = 'https://badgersnax.s3-us-west-2.amazonaws.com/hrr50-fec/AdrianPhotos/1rating.png'
     break;
     case 2:
       starImage = 'https://badgersnax.s3-us-west-2.amazonaws.com/hrr50-fec/AdrianPhotos/2rating.png'
     break;
     case 3:
       starImage = 'https://badgersnax.s3-us-west-2.amazonaws.com/hrr50-fec/AdrianPhotos/3rating.png'
     break;
     case 4:
       starImage = 'https://badgersnax.s3-us-west-2.amazonaws.com/hrr50-fec/AdrianPhotos/5rating.png'
     break;
     case 5:
       starImage = 'https://badgersnax.s3-us-west-2.amazonaws.com/hrr50-fec/AdrianPhotos/boxback.jpg'
     break;
   }


    return (
      <div>
        <CustomerRev>Customer reviews</CustomerRev>
        <GlobalStarResize src={starImage}></GlobalStarResize>
        <OutOf className = 'totalScore'>4.9 out of 5</OutOf>
        <GlobalRating>{this.state.reviews.length} global ratings</GlobalRating>
        <BackgroundBar>
          <Bar className = 'star5_percent'></Bar>
        </BackgroundBar>
        <Lettering className = 'star_5'>0%</Lettering>
        <Stars>5 star</Stars>
        <BackgroundBar>
          <Bar2 className = 'star4_percent'></Bar2>
        </BackgroundBar>
        <Lettering2 className = 'star_4'></Lettering2>
        <Stars>4 star</Stars>
        <BackgroundBar>
          <Bar3 className = 'star3_percent'></Bar3>
        </BackgroundBar>
        <Lettering3 className = 'star_3'></Lettering3>
        <Stars>3 star</Stars>
        <BackgroundBar>
          <Bar4 className = 'star2_percent'></Bar4>
        </BackgroundBar>
        <Lettering4 className = 'star_2'>0%</Lettering4>
        <Stars>2 star</Stars>
        <BackgroundBar>
          <Bar5 className = 'star1_percent'></Bar5>
        </BackgroundBar>
        <Lettering5 className = 'star_1'>0%</Lettering5>
        <Stars>1 star</Stars>
        <AmazonRating> <Caret>&lsaquo;</Caret> How are ratings reviewed?</AmazonRating>
      </div>
    )

  }
}









export default Star;