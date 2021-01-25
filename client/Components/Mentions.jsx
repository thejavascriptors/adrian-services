import React from 'react';


import styled from 'styled-components'

const AmazonMentions = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 49rem;

`

const mentionBlock = styled.h1`

  font-family :'Roboto', sans-serif;
  font-size: 15px;
  display: inline-block;
  font-weight:300;
  height: 2rem;
  opacity: 0.9;
  padding: 0px 14px;
  line-height: 29px;
  color: #111111;
  border-bottom: solid 1px #969696;
  background-color: #D7E8EA;
  margin: 0px 10px 14px 0px;
  cursor: grab;


`

function Mentions(props) {


   return (
      <AmazonMentions>
         <h1 className='mentionBlock' onClick={() => props.changeReview('next gen')}>next gen</h1>
         <h1 className='mentionBlock' onClick={() => props.changeReview('haptic feedback')}>haptic feedback</h1>
         <h1 className='mentionBlock' onClick={() => props.changeReview('adaptive triggers')}>adaptive triggers</h1>
         <h1 className='mentionBlock' onClick={() => props.changeReview('charging cable')}>charging cable</h1>
         <h1 className='mentionBlock' onClick={() => props.changeReview('bad')}>bad</h1>
         <h1 className='mentionBlock' onClick={() => props.changeReview('battery life')}>battery life</h1>
         <h1 className='mentionBlock' onClick={() => props.changeReview('best controller')}>best controller</h1>
         <h1 className='mentionBlock' onClick={() => props.changeReview('feels great')}>feels great</h1>
         <h1 className='mentionBlock' onClick={() => props.changeReview('controller ever')}>controller ever</h1>
         <h1 className='mentionBlock' onClick={() => props.changeReview('controller feels')}>controller feels</h1>
         <h1 className='mentionBlock' onClick={() => props.changeReview('great controller')}>great controller</h1>
         <h1 className='mentionBlock' onClick={() => props.changeReview('seems like')}>seems like</h1>
         <h1 className='mentionBlock' onClick={() => props.changeReview('face buttons')}>face buttons</h1>
         <h1 className='mentionBlock' onClick={() => props.changeReview('button')}>button</h1>
         <h1 className='mentionBlock' onClick={() => props.changeReview('computer')}>computer</h1>
         <h1 className='mentionBlock' onClick={() => props.changeReview('expensive controller')}>expensive controller</h1>
         <h1 className='mentionBlock' onClick={() => props.changeReview('bad battery')}>bad battery</h1>
         <h1 className='mentionBlock' onClick={() => props.changeReview('')}>All</h1>
      </AmazonMentions>
   )



}











export default Mentions