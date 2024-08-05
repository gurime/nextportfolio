'use client'
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'
import { RiseLoader } from 'react-spinners';

export default function Shortener() {
    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
          const response = await axios.post('/api/shorten', { url }, {
            headers: {
              'Content-Type': 'application/json',
            },
            timeout: 10000, // 10 seconds timeout
          });
      
          const { data } = response;
      
          if (data.success) {
            setShortUrl(`${window.location.origin}/${data.shortCode}`);
            setUrl('');
          } else {
            throw new Error(data.error || 'Failed to shorten the URL');
          }
        } catch (err) {
          console.error('Error shortening URL:', err);
          setError(err.response?.data?.error || err.message || 'An error occurred while shortening the URL');
        } finally {
          setLoading(false);
        }
      };
      
return (
<>
<h1 className='password-title'>Url Shortener</h1>
<div style={{
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   height: '70svh',
   width: '100%'
}}>
  <form onSubmit={handleSubmit} style={{
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       width: '100%',
       maxWidth: '400px',
       gap: '1rem'
  }}>
    <input
      type="url"
      value={url}
      onChange={(e) => setUrl(e.target.value)}
      placeholder="Enter a long URL"
      required
      pattern="https?://.*"
      title="Please enter a valid URL starting with http:// or https://"
      style={{
        padding: '0.5rem 1rem',
        border: '1px solid #d1d5db',
        borderRadius: '0.375rem',
        outline: 'none',
        transition: 'box-shadow 0.2s',
        backgroundColor: 'var(--input-bg, white)',
        color: 'var(--text-color, black)',
        width:'92%'
      }}
    />
    <button
     className='hero-button'
      type="submit"

      disabled={loading}
    >
      {loading ? (
        <span style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <RiseLoader color={"#ffffff"} loading={loading} size={10} />
        </span>
      ) : (
        'Shorten URL'
      )}
    </button>
    {error && <p style={{ color: 'red' }}>{error}</p>}
  </form>

  {error && (
    <div style={{
      marginTop: '1rem',
      padding: '1rem',
      backgroundColor: 'var(--error-bg, #fee2e2)',
      color: 'var(--error-text, #b91c1c)',
      borderRadius: '0.5rem'
    }} aria-live="assertive">
      {error}
    </div>
  )}

  {shortUrl && (
    <div style={{
      marginTop: '1.5rem',
      padding: '1rem',
      backgroundColor: 'var(--success-bg, #f3f4f6)',
      borderRadius: '0.5rem'
    }} aria-live="polite">
      <p style={{
        fontSize: '0.875rem',
        color: 'var(--text-muted, #4b5563)',
        marginBottom: '0.5rem'
      }}>Shortened URL:</p>
      <Link
        href={shortUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: 'var(--link-color, #2563eb)',
          wordBreak: 'break-all',
          textDecoration: 'none'
        }}
      >
        {shortUrl}
      </Link>
    </div>
  )}
</div>

</>
)
}
