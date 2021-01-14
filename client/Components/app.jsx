import React from 'react'
import Axios from 'axios';







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
     <h1>Running React</h1>
    )
  }


}


export default App;