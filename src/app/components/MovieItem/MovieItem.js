import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Image, Detail } from './assets/styles';

const MovieItem = ({ image, name, year, i, id, selectedIndex, setMovieWidth }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    /**
     * To see why it's necessary to define setWidth function check the documentation:
     * https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies
     */
    const setWidth = () => {
      setMovieWidth(itemRef.current.offsetWidth);
    };
    setWidth();
  }, [setMovieWidth]);

  return (
    <Container ref={itemRef}>
      <Link to={`${id}`} className={i === selectedIndex ? 'selected' : ''}>
        <Detail>
          <h2>{name}</h2>
          <span>({year})</span>
        </Detail>
        <Image src={image} />
      </Link>
    </Container>
  );
};

MovieItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  year: PropTypes.number,
  selected: PropTypes.number,
};

export default MovieItem;
