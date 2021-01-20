import React from 'react'
import Axios from 'axios';
import Review from './review.jsx';
import Mentions from './Mentions.jsx'
import Images from './Images.jsx'
import Star from './Star.jsx'



class App extends React.Component  {

  constructor(props) {
    super(props)
    this.state = {
        reviews: [],
        showingReviews: [],
        metionedReview: ''
    }
  }




   addFiveMore() {
     let newReviews = this.state.reviews
      let fiveReviews = this.state.reviews.splice(0,5)
     let shoppingReview = this.state.showingReviews
     for (let i = 0; i < fiveReviews.length; i++) {
      shoppingReview.push(fiveReviews[i])
     }

     console.log(shoppingReview)
     this.setState({
       reviews: newReviews,
       showingReviews: shoppingReview
     })
   }


  changeMetionedReview (query) {
    console.log('the state has changed.')
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

   })

// Get 5 reviews by splicing.
// Everytime load more is called slice from the array and push it into the showing array.

  }




  render () {

    let doesInclude = this.state.metionedReview
    return (
      <div>
        <div className = 'reviewComp'>
          <div className = 'starComp'>
        <Star props = {this.state.reviews}/>
        </div>
          <h1 className = 'amazonText'>Customer images</h1>
          <Images/>
          <h1 className = 'amazonMore'>See all customer images</h1>
          <h1 className = 'amazonText'>Read Reviews that mention</h1>
          <Mentions changeReview = {this.changeMetionedReview.bind(this)}/>
          <select name="cars" id="cars">
    <option value="volvo">Top reviews</option>
    <option value="saab">Most recent</option>
  </select>
     <h1 className = 'amazonText'>Top reviews from the United States.</h1>
     { this.state.showingReviews.map(item => {
       console.log(item.review)
      return item.review.includes(doesInclude) ? <Review props = {item}/> : null
     })
     }
     <button onClick = {this.addFiveMore.bind(this)}>Load more</button>
     </div>
     </div>
    )
  }


}


export default App;