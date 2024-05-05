import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Layout from "../src/components/layout";
import HomeContainer from './sections/home/home-container';
import Contact from './sections/contact/contact';
import Loading from './components/loading';
import About from './sections/about/about';
import PageNotFound from './components/pageNotFound';
// import Filler2 from './components/filler2';
import Specialities from './sections/specialities/specialities';
import Portfolio from './sections/projects/portfolio';
import Offers from './sections/offers/offers.js';
import PaymentPlan from './sections/paymentPlan/paymentPlan.js';
import ContactPage from './sections/contactPage/contactPage.js';

import './App.scss';
import './styles/scss/main.scss';

export const ThemeContext = React.createContext();

function App() {

  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <ThemeContext.Provider>
          <Layout>
            {/* A <Routes> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Layout>
        </ThemeContext.Provider>
      </Router>
    </Suspense>
  );
}

export default App;

const Home = () => {
  return (
    <>
      <main>

        <HomeContainer />
        <Specialities />
        <Offers />

        <Portfolio />
        <About />
        <PaymentPlan />
        <Contact />

      </main>
    </>
  )
}
