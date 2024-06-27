import Header from '../../components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import PageNotFound from '../PageNotFound/PageNotFound';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import Add from '../Add/Add';
import Home from '../Home/Home';
import ReadMore from '../ReadMore/ReadMore';

const Pages = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={
            <Home />
          }/>
          <Route path="/posts" element={
            <Home />
          }/>
          <Route path="new-post" element={
            <Add />
          }/>
          <Route path="about" element={
            <About />
           }/>
          <Route path="contacts" element={
            <Contacts />
          }/>
          <Route path="/posts/:id" element={
            <ReadMore />
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