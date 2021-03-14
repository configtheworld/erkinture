import React, { useEffect, useCallback, useState } from 'react';
import './styles/cardcarousel.css';

const cardItems = [
  {
    id: 1,
    author: 'Doğukan Okçu',
    title: 'Software Developer',
    copy: 'Today is a good day to startup a bussiness with you.',
  },
  {
    id: 2,
    author: 'Vural Mert Dilaver',
    title: 'Chemical Engineer',
    copy:
      "One of the best team members I've ever had. I hope we can work together in the future!",
  },
  {
    id: 3,
    author: 'Charoun Kara Tsompan Impram',
    title: 'Computer Engineer',
    copy: 'It was nice to team up with you.',
  },
  {
    id: 4,
    author: 'Can Burak Taş',
    title: 'Ybt Parking',
    copy: 'Liderlik ve çalışma hevesin hiç bozulmadan böyle devam etsin',
  },
];

function determineClasses(indexes, cardIndex) {
  if (indexes.currentIndex === cardIndex) {
    return 'active';
  } else if (indexes.nextIndex === cardIndex) {
    return 'next';
  } else if (indexes.previousIndex === cardIndex) {
    return 'prev';
  }
  return 'inactive';
}

const CardCarousel = () => {
  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1,
  });

  const handleCardTransition = useCallback(() => {
    // If we've reached the end, start again from the first card,
    // but carry previous value over
    if (indexes.currentIndex >= cardItems.length - 1) {
      setIndexes({
        previousIndex: cardItems.length - 1,
        currentIndex: 0,
        nextIndex: 1,
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === cardItems.length
            ? 0
            : prevState.currentIndex + 2,
      }));
    }
  }, [indexes.currentIndex]);

  useEffect(() => {
    const transitionInterval = setInterval(() => {
      handleCardTransition();
    }, 4000);

    return () => clearInterval(transitionInterval);
  }, [handleCardTransition, indexes]);

  return (
    <div className='container'>
      <ul className='card-carousel'>
        {cardItems.map((card, index) => (
          <li
            key={card.id}
            className={`card ${determineClasses(indexes, index)}`}
          >
            <h2 style={{ color: '#f0f0f0' }}>{card.author}</h2>
            <em>{card.title}</em>
            <p style={{ color: '#f0f0f0' }}>{card.copy}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardCarousel;
