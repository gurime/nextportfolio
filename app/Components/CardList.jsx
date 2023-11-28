'use client'
import React, { useEffect, useState } from 'react'
import supabase from '../Config/supabase';





export default  function CardList() {
  const [fetchError, setFetchError] = useState(null);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orderBy, setOrderBy] = useState('created_at');
    
  useEffect(() => {
  const fetchblogs = async () => {
  try {
  const { data, error } = await supabase
  .from('cards')
  .select('*')
  .order(orderBy, { ascending: false });
    
  if (error) {
  setFetchError('Could not fetch blogs');
  } else {
  setCards(data || []);
  setFetchError(null);
  setLoading(false);
  }
  } catch (error) {
  console.error('Error fetching data:', error);
  setFetchError('An error occurred while fetching data');
  }
  };
    
  fetchblogs();
  }, [orderBy]);
    
  const formatCreatedAt = (dateString) => {
  const options = { day: 'numeric', year: 'numeric', month: 'long',  };
  return new Date(dateString).toLocaleDateString(undefined, options);
  };
    
return (
<>
<div className='btn-grid'>
<button className='edit-btn' onClick={() => setOrderBy('created_at')}>Time Created</button>
<button className='edit-btn' onClick={() => setOrderBy('title')}>Title</button>
</div>
<div className="card-grid">
{fetchError && <p>{fetchError}</p>}
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
{formatCreatedAt(card.created_at)}

</div>
))}
</div>
</>
)
}
