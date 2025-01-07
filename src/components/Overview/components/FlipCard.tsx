'use client'

import { useState } from 'react'
import { Card, CardContent } from "./Card"
import '../styles.css'

export default function FlipCard({title, content}:{title: string, content:string}) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className="w-64 h-80 perspective-1000 cursor-pointer glow-card"
      onMouseEnter={() => setIsFlipped(!isFlipped)}
      onMouseLeave={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-all duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of the card */}
        <Card className="absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-900 to-purple-800 border-none">
          <CardContent className="flex items-center justify-center h-full">
            <h2 className="nilor-text font-bold text-white w-full text-center">{title}</h2>
          </CardContent>
        </Card>

        {/* Back of the card */}
        <Card className="absolute w-full h-full backface-hidden bg-transparent rotate-y-180 border-none">
          <CardContent className="flex items-center justify-center h-full p-6">
            <p className="text-lg text-white text-center">
              {content}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

