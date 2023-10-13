import React from 'react'

async function getCards() {
 
  
  const res = await fetch('http://localhost:8000/cards', {
    next: {
      revalidate: 0 
    }
  })

  return res.json()
}




export default async function CardList() {
    const cards = await getCards()

return (
<>
<div className="card-grid">
{cards.map((card,index) => (
<div key={index} className="card">
<img  src={card.cover_image} alt="" />
<h2 className="card-title">{card.title}</h2>
<div>
<p className="card-content">{card.content}</p>
</div>
<a target='_blank' href={card.buttonLink} className="card-button" >
{card.buttonText}
</a>
</div>
))}
</div>
</>
)
}
