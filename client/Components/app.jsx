import React from 'react'
import Axios from 'axios';
import Review from './review.jsx';
import Mentions from './Mentions.jsx'
import Images from './Images.jsx'
import Star from './Star.jsx'
import styled from 'styled-components'
import WriteReview from './WriteReview.jsx'



const ReviewComp = styled.div`
position: relative;
left: 30rem;
top: 10rem;

`

const StarComp = styled.div`

position: relative;
left: -25rem;
top: 26.5rem;
width: 20rem;
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





class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      showingReviews: [],
      metionedReview: '',
      paginatedArray: []

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
    Axios('http://localhost:3000/reviews').then(reviews => {
      this.setState({
        reviews: reviews.data
      })
      this.setState({
        showingReviews: this.state.reviews.splice(0, 5)
      })

      let paginatedArrays = []
      let currentArray = [];
      for (let i = 0; i < this.state.reviews.length; i++) {

        if (i % 5 === 0) {
          paginatedArrays.push(currentArray)
          currentArray = [];
        }
        currentArray.push(this.state.reviews[i])

      }

      this.setState({
        paginatedArray: paginatedArrays
      })
      console.log(paginatedArrays, 'test')
    })

    // Get 5 reviews by splicing.
    // Everytime load more is called slice from the array and push it into the showing array.
    // render pages by how many nested arrays are in the nested array.
    // make a variable that tracks what page is clicked


  }


  changePage(val) {

    console.log(this.state.paginatedArray, 'test', val)
    this.setState({
      showingReviews: this.state.paginatedArray[val]
    })
  }



  render() {

    let doesInclude = this.state.metionedReview
    let pagNum = 0;
    let currNum = 0;
    return (
      <div>
        <ReviewComp>
          <WriteReview />
          <StarComp>
            <Star props={this.state.reviews} />
          </StarComp>
          <AmazonText>Customer images</AmazonText>
          <Images />
          <h1 className='amazonMore'>See all customer images</h1>
          <AmazonText>Read Reviews that mention</AmazonText>
          <Mentions changeReview={this.changeMetionedReview.bind(this)} />
          <select name="cars" id="cars">
            <option value="volvo">Top reviews</option>
            <option value="saab">Most recent</option>
          </select>
          <AmazonText>Top reviews from the United States.</AmazonText>
          {this.state.showingReviews.map(item => {
            console.log(item.review)
            return item.review.includes(doesInclude) ? <Review props={item} /> : null
          })
          }
        </ReviewComp>
        <Pagination>
          {this.state.paginatedArray.map(item => {
            if (currNum === 0) {
              pagNum = 0
            } else {
              pagNum++;
            }
            currNum++;
            let AssignedVariable = pagNum
            return <h1 className='pagNum' onClick={() => this.changePage(AssignedVariable)}>{pagNum}</h1>
            // onclick we change the showing to the paginated array clicked.
          })

          }
        </Pagination>
      </div>
    )
  }


}


export default App;