import React from 'react';





function Mentions (props) {


   return (

      <div className = 'amazonMentions'>
         <h1 className = 'mentionBlock' onClick = { () => props.changeReview('next gen')}>next gen</h1>
         <h1 className = 'mentionBlock' onClick = {() => props.changeReview('haptic feedback')}>haptic feedback</h1>
         <h1 className = 'mentionBlock' onClick = {() => props.changeReview('adaptive triggers')}>adaptive triggers</h1>
         <h1 className = 'mentionBlock' onClick = {() => props.changeReview('charging cable')}>charging cable</h1>
         <h1 className = 'mentionBlock' onClick = {() => props.changeReview('bad')}>bad</h1>
         <h1 className = 'mentionBlock' onClick = {() => props.changeReview('battery life')}>battery life</h1>
         <h1 className = 'mentionBlock' onClick = {() => props.changeReview('best controller')}>best controller</h1>
         <h1 className = 'mentionBlock' onClick = {() => props.changeReview('feels great')}>feels great</h1>
         <h1 className = 'mentionBlock' onClick = {() => props.changeReview('controller ever')}>controller ever</h1>
         <h1 className = 'mentionBlock' onClick = {() => props.changeReview('controller feels')}>controller feels</h1>
         <h1 className = 'mentionBlock' onClick = {() => props.changeReview('great controller')}>great controller</h1>
         <h1 className = 'mentionBlock' onClick = {() => props.changeReview('seems like')}>seems like</h1>
         <h1 className = 'mentionBlock' onClick = {() => props.changeReview('face buttons')}>face buttons</h1>
         <h1 className = 'mentionBlock' onClick = {() => props.changeReview('button')}>button</h1>
         <h1 className = 'mentionBlock' onClick = {() => props.changeReview('computer')}>computer</h1>
         <h1 className = 'mentionBlock' onClick = {() => props.changeReview('expensive controller')}>expensive controller</h1>
         <h1 className = 'mentionBlock' onClick = {() => props.changeReview('bad battery')}>bad battery</h1>
      </div>
   )



}











export default Mentions