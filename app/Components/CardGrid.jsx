import Image from 'next/image'
import React from 'react'


async function getCards(id) {
    const res = await fetch(`http://localhost:8000/cards/${id}`, {
      next: {
        revalidate: 0
      }
    })
  
    return res.json()
  }
  


export default async function CardGrid({params}) {
    const card = await getCards(params.id)

return (
<>
<div className="card">
<Image src={card.cover_image} alt="" />
<h2 className="card-title">{card.title}</h2>
<div>
<p className="card-content">{card.content}</p>
</div>
<a target='_blank' href={card.buttonLink} className="card-button" >
{card.buttonText}
</a>
</div>
</>
)
}
