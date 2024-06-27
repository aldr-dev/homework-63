import Header from '../../components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import PageNotFound from '../PageNotFound/PageNotFound';
import PostAndEditForm from '../../components/PostAndEditForm/PostAndEditForm';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';

const Pages = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="new-post" element={
            <PostAndEditForm />
          }/>
          <Route path="about" element={
            <About />
           }/>
          <Route path="contacts" element={
            <Contacts />
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