import React from 'react'
import Axios from 'axios';
import Review from './review.jsx';
import Mentions from './Mentions.jsx'
import Images from './Images.jsx'
import Star from './Star.jsx'
import styled from 'styled-components'
import WriteReview from './WriteReview.jsx'


const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;

 `
const ReviewComp = styled.div`

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-evenly;
  -webkit-transform:scale(0.8);
  -moz-transform:scale(0.5);
  -ms-transform:scale(0.5);
  transform:scale(0.8);
`

const StarComp = styled.div`
display: flex;
flex-direction: column;
border-bottom: 2px solid #e7e7e7;

`


const AmazonText = styled.h1`

font-family: 'Roboto', sans-serif;
font-size: 20px;

`



const Pagination = styled.div`
  display: inline-block;

  `

const InsideDiv = styled.div`
color: black;
float: left;
padding: 8px 16px;
text-decoration: none


`

const AmazonMore = styled.h1`

font-family: 'Roboto', sans-serif;
font-size: 15px;
font-weight: 500;
color: #007185;

`

const PagNum = styled.h1`

position: relative;
color: #007185;
font-family: 'Roboto', sans-serif;
float: left;
font-size: 15px;
padding: 8px 16px;
text-decoration: none;
cursor: grab;

`
const TestComp = styled.div`
display: flex;
flex-flow:row wrap;
flex-direction: column

`


const MetionsBlock = styled.div`
width:50rem;
display: flex;

`
const ImageFlex = styled.div`
display: flex;
flex-direction: column;


`

const Selector = styled.select`
width: 10%;

`

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      showingReviews: [],
      metionedReview: '',
      paginatedArray: [],
      currentSelector: 'top'

    }
  }

  // Nested arrays for pagination
  // Nest 5 reviews into a array.



  changeMetionedReview(query) {
    this.setState({
      metionedReview: query
    }
    )
  }

  componentDidMount() {
    Axios('/reviews').then(reviews => {
      if (this.state.currentSelector === 'top') {
        reviews.data.sort((a, b) => {
          return a.foundHelpful - b.foundHelpful
        });
        reviews.data.reverse()
      }

      this.setState({
        reviews: reviews.data
      })




      let paginatedArrays = []
      let currentArray = [];
      for (let i = 0; i < this.state.reviews.length; i++) {

        if (currentArray.length >= 4) {
          paginatedArrays.push(currentArray)
          currentArray = [];
        }
        currentArray.push(this.state.reviews[i])

      }

      if (currentArray.length !== 0) {
        paginatedArrays.push(currentArray)
      }
      this.setState({
        showingReviews: paginatedArrays[1]
      })

      this.setState({
        paginatedArray: paginatedArrays
      })
    })

    // Get 5 reviews by splicing.
    // Everytime load more is called slice from the array and push it into the showing array.
    // render pages by how many nested arrays are in the nested array.
    // make a variable that tracks what page is clicked


  }


  changePage(val) {

    this.setState({
      showingReviews: this.state.paginatedArray[val]
    })
  }







  changeValue(e) {
    console.log(e.target.value, 'FROM CHANGE VALUE');
    this.setState({
      currentSelector: e.target.value
    })
    this.componentDidMount();


  }



  render() {

    let doesInclude = this.state.metionedReview
    let pagNum = 0;
    let currNum = 0;
    return (
        <ReviewComp>

          <StarComp>
            <Star props={this.state.reviews} />
            <WriteReview />
          </StarComp>
          <TestComp>
            <ImageFlex>
              <AmazonText>Customer images</AmazonText>
              <Images />
              <AmazonMore>See all customer images</AmazonMore>
            </ImageFlex>
            <AmazonText>Read Reviews that mention</AmazonText>
            <MetionsBlock>
              <Mentions changeReview={this.changeMetionedReview.bind(this)} />
            </MetionsBlock>

            <AmazonText>Top reviews from the United States.</AmazonText>
            <Selector name="cars" id="cars" onChange={this.changeValue.bind(this)}>
              <option value="top">Top reviews</option>
              <option value='timed'>Most recent</option>
            </Selector>
            {this.state.showingReviews.map(item => {
              return item.review.includes(doesInclude) ? <Review props={item} /> : null
            })
            }

            <Pagination>
              {this.state.paginatedArray.map(item => {
                if (currNum === 0) {
                  pagNum = 0
                } else {
                  pagNum++;
                }
                currNum++;
                let AssignedVariable = pagNum
                return pagNum !== 0 ? <PagNum onClick={() => this.changePage(AssignedVariable)}>{pagNum}</PagNum> : null
                // onclick we change the showing to the paginated array clicked.
              })

              }
            </Pagination>
          </TestComp>
        </ReviewComp>
    )
  }


}


export default App;