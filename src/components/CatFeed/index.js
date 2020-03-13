import React from 'react'
import Card from '../Card'
import { Anchor } from './styles'

export default function CatFeed() {

  const subjects = [
    'How to find the purrrfect pet',
    'What to do with your new cat',
    'How to potty-train your cat',
    'Raw food diets for cats',
    'Homemade treat recipes',
    'Our favorite litter brands',
    'Are cat breeds a thing?',
    'Our favorite caturday activities',
    'How to travel with your cat',
    'How to manage multiple cats',
    'The best cat memes, ranked'
  ]

  return (
    <Card 
      title="Cat Feed"
      width="30%"
      maxHeight="calc(100vh - 150px)"
    >
      {subjects && subjects.map( subject => (
        <Anchor
          href={`https://www.youtube.com/results?search_query=${subject}`} 
          target="_blank"
        >
          {subject}
        </Anchor>
        ))}      
    </Card>
  )
}
