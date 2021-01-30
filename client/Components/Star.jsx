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
       console.log(reviews.data)
       this.setState({
         reviews: reviews.data
       })
    }).then(() => {
      let star1 = 0;
      let star2 = 0;
      let star3 = 0;
      let star4 = 0;
      let star5 = 0;



      //

      for (let i = 0; i < this.state.reviews.length; i++) {
        if (this.state.reviews[i].stars === 1) {
          star1++;
        } else if (this.state.reviews[i].stars === 2) {
          star2++;
        } else if (this.state.reviews[i].stars === 3) {
          star3++;
        } else if (this.state.reviews[i].stars === 4) {
          star4++;
        } else if (this.state.reviews[i].stars === 5) {
          star5++;
        }


      }

   // then divide

   let star1Value = (star1 / this.state.reviews.length) * 100
   let star2Value = (star2 / this.state.reviews.length) * 100
   let star3Value = (star3 / this.state.reviews.length) * 100
   let star4Value = (star4 / this.state.reviews.length) * 100
   let star5Value = (star5 / this.state.reviews.length) * 100
   console.log(star5Value)
    document.querySelector('.star5_percent').style.width = `${star5Value}%`
    document.querySelector('.star4_percent').style.width = `${star4Value}%`
    document.querySelector('.star3_percent').style.width = `${star3Value}%`
    document.querySelector('.star2_percent').style.width = `${star2Value}%`
    document.querySelector('.star1_percent').style.width = `${star1Value}%`



    document.querySelector('.star_5').innerHTML = `${Math.floor(star5Value)}%`
    document.querySelector('.star_4').innerHTML = `${Math.floor(star4Value)}%`
    document.querySelector('.star_3').innerHTML = `${Math.floor(star3Value)}%`
    document.querySelector('.star_2').innerHTML = `${Math.floor(star2Value)}%`
    document.querySelector('.star_1').innerHTML = `${Math.floor(star1Value)}%`

    let starAvg = (5 * star5 + 4 * star4 + 3 *star3 + 2 *star2 + 1 * star1) / (star5 + star4 + star3 + star2 + star1)

    document.querySelector('.totalScore').innerHTML = starAvg.toFixed(2) + ' out of 5';


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