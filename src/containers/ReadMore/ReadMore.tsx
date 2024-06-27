import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import axiosApi from '../../axiosApi';
import DateFormat from '../../components/DateFormat/DateFormat';
import {Posts} from '../../types';
import ErrorStatus from '../../components/ErrorStatus/ErrorStatus';
import Preloader from '../../components/Preloader/Preloader';

const ReadMore = () => {
  const {id} = useParams();
  const [post, setPost] = useState<Posts>();
  const navigate = useNavigate();
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleError = (status: boolean) => {
    setIsError(status);
  };

  useEffect(() => {
    const data = async () => {
      try {
          setIsLoader(true);
          const response = await axiosApi.get<Posts>('/posts/' + id + '.json');
          setIsLoader(false);

          if (response.status !== 200) {
            setIsError(true);
            throw new Error('An error occurred while trying to process the request ' + response.status);
          }
          setPost(response.data);
      } catch (error) {
        setIsError(true);
        setIsLoader(false);
        console.error('An error occurred while trying to process the request ' + error);
      }
    };
    void data();
  }, [id]);

  const deletePost = async () => {
      try {
        setIsLoader(true);
        const response = await axiosApi.delete<Posts>('/posts/' + id + '.json');
        setIsLoader(false);

        if (response.status !== 200) {
          setIsError(true);
          throw new Error('An error occurred while trying to process the request ' + response.status);
        }
      } catch (error) {
        setIsError(true);
        setIsLoader(false);
        console.error('An error occurred while trying to process the request ' + error);
      } finally {
        navigate('/');
      }
  };

  return (
    <>
      <Preloader preloader={isLoader} />
      <ErrorStatus
        error={isError}
        handleError={handleError}>
        An error occurred while trying to process the request.
      </ErrorStatus>
      {post && (
        <>
          <div className="card">
            <strong className="card-title">{post.data.title}</strong>
            <span className="card-date">Created on: {<DateFormat data={post.data.datetime}/>}</span>
            <p className="card-desc">{post.data.description}</p>
            <div className="btn-inner">
              <button className="card-btn-delete" disabled={isLoader} type="button" onClick={deletePost}>
                <div className={isLoader ? 'spinner' : ''}>
                  {isLoader ? '' : 'Delete'}
                </div>
              </button>
              <Link className="card-btn-edit" to={'/posts/' + id + '/edit'}>Edit</Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ReadMore;