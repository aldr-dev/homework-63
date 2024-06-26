import Header from '../../components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import PageNotFound from '../PageNotFound/PageNotFound';

const Pages = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="*" element={
            <PageNotFound />
          }/>
        </Routes>
      </main>
    </>
  );
};

export default Pages;