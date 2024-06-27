import React from 'react';
import './Card.css';
import {Link} from 'react-router-dom';
import {MutationPosts} from '../../types';
import DateFormat from '../DateFormat/DateFormat';

interface Props {
  post: MutationPosts;
}

const Card: React.FC<Props> = ({post}) => {
  return (
    <div className="card">
      <span className="card-date">Created on: {<DateFormat data={post.datetime} />}</span>
      <strong className="card-title">{post.title}</strong>
      <Link to={'/posts/' + post.id} className="card-more-btn">Read more...</Link>
    </div>
  );
};

export default Card;