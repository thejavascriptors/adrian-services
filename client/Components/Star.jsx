import React from 'react';
import styled from 'styled-components'


const BackgroundBar = styled.div`
width: 100%;
background-color: #F0F2F2;
border-radius: 10px;
box-shadow: inset 0 0 0 1px #E3E6E6;
margin: 10px 0px 30px 0px;
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


const AmazonRating = styled.h1`
color: #007185;
font-size: 15px;
font-family : 'Roboto', sans-serif;
font-weight : 500;
`

class Star extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className='customerRev'>Customer reviews</h1>
        <img src='star5.png' className='globalStarResize'></img>
        <h1 className='globalRating'>{this.props.props.length} global ratings</h1>
        <BackgroundBar>
          <Bar>91%</Bar>
        </BackgroundBar>
        <BackgroundBar>
          <Bar2>5%</Bar2>
        </BackgroundBar>
        <BackgroundBar>
          <Bar3>0%</Bar3>
        </BackgroundBar>
        <BackgroundBar>
          <Bar4>1%</Bar4>
        </BackgroundBar>
        <BackgroundBar>
          <Bar5>1%</Bar5>
        </BackgroundBar>
        <AmazonRating>How are ratings reviewed?</AmazonRating>
      </div>
    )

  }
}









export default Star;