import React from 'react'

async function getCards() {
  try {
    const res = await fetch('https://phillipbailey.vercel.app/_data/cards.json'); // Replace with the correct URL

    if (!res.ok) {
      // Handle errors, if any
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    // Handle errors, e.g., network issues
    console.error(error);
    throw error; // Rethrow the error or handle it accordingly
  }
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
