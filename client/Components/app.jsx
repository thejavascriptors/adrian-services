import React from 'react'
import Axios from 'axios';
import Review from './review.jsx';






class App extends React.Component  {

  constructor(props) {
    super(props)
    this.state = {
        reviews: []
    }
  }







  componentDidMount() {
   Axios('http://localhost:3000/reviews').then(reviews => {
      this.setState({
        reviews: reviews.data
      })
   })



  }




  render () {
    return (
      <div>
        <div className = 'reviewComp'>
          <h1 className = 'amazonText'>Customer images</h1>
          <h1 className = 'amazonText'>Read Reviews that metion</h1>
     <h1 className = 'amazonText'>Top reviews from the United States.</h1>
     <Review/>
     </div>
     </div>
    )
  }


}


export default App;