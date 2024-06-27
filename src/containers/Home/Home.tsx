import React, {useEffect, useState} from 'react';
import Card from '../../components/Card/Card';
import {MutationPosts, Posts} from '../../types';
import axiosApi from '../../axiosApi';
import ErrorStatus from '../../components/ErrorStatus/ErrorStatus';
import Preloader from '../../components/Preloader/Preloader';

const Home = () => {
  const [posts, setPosts] = useState<MutationPosts[]>([]);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleError = (status: boolean) => {
    setIsError(status);
  };

  useEffect(() => {
    const data = async () => {
      try {
        setIsLoader(true);
        const response = await axiosApi.get<Posts>('/posts.json');
        setIsLoader(false);

        if (response.status !== 200) {
          setIsError(true);
          throw new Error('An error occurred while receiving data. ' + response.status);
        }
        const dataArray: MutationPosts[] = Object.entries(response.data).map(([id, item]) => ({
          id,
          ...item.data
        }));
        setPosts(dataArray);
      } catch (error) {
        setIsError(true);
        setIsLoader(false);
        console.log('An error occurred while receiving data. ' + error);
      }
    };
    void data();
  }, []);

  return (
    <>
      <Preloader preloader={isLoader} />
      <ErrorStatus
        error={isError}
        handleError={handleError}>
        An error occurred while receiving data.
      </ErrorStatus>
      {posts.map((post) => (
        <Card key={post.id} post={post}/>
      ))}
    </>
  );
};

export default Home;