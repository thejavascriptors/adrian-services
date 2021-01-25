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
  position: relative;
  display: inline-block;
  top: 10rem;
  left: 30rem;
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
    Axios('http://localhost:3000/reviews').then(reviews => {
      if (this.state.currentSelector === 'top') {
      reviews.data.sort( (a,b) => {
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

        if (i % 5 === 0) {
          paginatedArrays.push(currentArray)
          currentArray = [];
        }
        currentArray.push(this.state.reviews[i])

      }
      this.setState({
        showingReviews: paginatedArrays[1]
      })

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

    this.setState({
      showingReviews: this.state.paginatedArray[val]
    })
  }

  changeValue (e) {
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
          <select name="cars" id="cars" onChange = {this.changeValue.bind(this)}>
            <option value="top">Top reviews</option>
            <option value='timed'>Most recent</option>
          </select>
          <AmazonText>Top reviews from the United States.</AmazonText>
          {this.state.showingReviews.map(item => {
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