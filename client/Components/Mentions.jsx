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

let MetionBlock = styled.h1`
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
         <MetionBlock onClick={() => props.changeReview('next gen')}>next gen</MetionBlock>
         <MetionBlock onClick={() => props.changeReview('haptic feedback')}>haptic feedback</MetionBlock>
         <MetionBlock onClick={() => props.changeReview('adaptive triggers')}>adaptive triggers</MetionBlock>
         <MetionBlock onClick={() => props.changeReview('charging cable')}>charging cable</MetionBlock>
         <MetionBlock  onClick={() => props.changeReview('bad')}>bad</MetionBlock>
         <MetionBlock  onClick={() => props.changeReview('battery life')}>battery life</MetionBlock>
         <MetionBlock  onClick={() => props.changeReview('best controller')}>best controller</MetionBlock>
         <MetionBlock  onClick={() => props.changeReview('feels great')}>feels great</MetionBlock>
         <MetionBlock  onClick={() => props.changeReview('controller ever')}>controller ever</MetionBlock>
         <MetionBlock  onClick={() => props.changeReview('controller feels')}>controller feels</MetionBlock>
         <MetionBlock  onClick={() => props.changeReview('great controller')}>great controller</MetionBlock>
         <MetionBlock  onClick={() => props.changeReview('seems like')}>seems like</MetionBlock>
         <MetionBlock  onClick={() => props.changeReview('face buttons')}>face buttons</MetionBlock>
         <MetionBlock  onClick={() => props.changeReview('button')}>button</MetionBlock>
         <MetionBlock onClick={() => props.changeReview('computer')}>computer</MetionBlock>
         <MetionBlock onClick={() => props.changeReview('expensive controller')}>expensive controller</MetionBlock>
         <MetionBlock  onClick={() => props.changeReview('bad battery')}>bad battery</MetionBlock>
         <MetionBlock  onClick={() => props.changeReview('')}>All</MetionBlock>
      </AmazonMentions>
   )



}











export default Mentions