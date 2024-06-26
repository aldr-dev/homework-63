import Header from '../../components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import PageNotFound from '../PageNotFound/PageNotFound';
import PostAndEditForm from '../../components/PostAndEditForm/PostAndEditForm';

const Pages = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="new-post" element={
            <PostAndEditForm />
          }/>
          <Route path="*" element={
            <PageNotFound />
          }/>
        </Routes>
      </main>
    </>
  );
};

export default Pages;