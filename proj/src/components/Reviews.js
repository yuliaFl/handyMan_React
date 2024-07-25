import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://www.fixiths.ca/api/reviews');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <h2>Google Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <p><strong>{review.author_name}</strong></p>
            <p>{review.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
