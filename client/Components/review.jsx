import React from 'react';
import moment from 'moment'



function Review (props) {
  let currentStar = 'star.png'

  switch (props.props.stars) {
     case 1:
       currentStar = 'star.png'
       break;
     case 2:
        currentStar = 'star2.png'
        break;
     case 3:
        currentStar = 'star3.png'
        break;
     case 4:
        currentStar = 'star4.png'
        break;
     case 5:
        currentStar = 'star5.png'
        break;
  }



   console.log('from reviews', props)
   return (
    <div>
      <h1 className = 'amazonUser'>{props.props.username}</h1>
      <img src = {currentStar} className = 'starResize'></img>
      <img src = 'logo.jpg' className = 'userImg'></img>
       <h1 className = 'amazonTitle'>{props.props.title}</h1>
       <h1 className = 'amazonHelpful'>Reviewed in the United States on {moment(props.props.createdAt).format('MMMM do YYYY')}</h1>
       <div className = 'BalanceReview'>
       <h1 className = 'amazonReview'>{props.props.review}</h1>
       </div>
       <h1 className = 'amazonHelpful'>{props.props.stars} found this helpful.</h1>
       <button className = 'amazonButton'>Helpful</button>
       <h1 className = 'amazonAbuse'>| Report abuse</h1>
    </div>



   )


}





export default Review;