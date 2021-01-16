import React from 'react';



class Star extends React.Component {


 constructor (props) {
   super(props);
 }

  render () {
    return (
      <div>
        <h1 className = 'customerRev'>Customer reviews</h1>
        <img src = 'star5.png' className = 'globalStarResize'></img>
        <h1 className = 'globalRating'>{this.props.props.length} global ratings</h1>
      </div>
    )

  }
}









export default Star;