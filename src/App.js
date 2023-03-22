import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {  useState } from 'react';
import TestPage from './pages/Test/TestPage';
import HomePage from './pages/Home/HomePage';
import ResultPage from './pages/Result/ResultPage';
import Types from './pages/Types/Types';
import SingleType from './pages/SingleType/SingleType';
import JobCart from './pages/JobCart/JobCart';



const getJobCartFromLocalStorage = JSON.parse(localStorage.getItem("cart")|| "[]")

function App() {
 const [jobCart, setJobCart] = useState(getJobCartFromLocalStorage);

  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route
            path = '/'
            element = {<HomePage
              jobCart={jobCart}/>}
          />

          <Route
            path = '/test'
            element = {<TestPage
              jobCart={jobCart}
              setJobCart={setJobCart}/>}
          />

          <Route
            path = '/test/:type'
            element = {<ResultPage/>}
          />

          <Route
            path = '/types'
            element = {<Types
              jobCart={jobCart}
              setJobCart={setJobCart}/>}
          />

          <Route
            path = '/types/:id'
            element = {<SingleType
              jobCart={jobCart}
              setJobCart={setJobCart}/>}
          />

          <Route
          path = '/cart'
          element = {<JobCart
            jobCart={jobCart}
            setJobCart={setJobCart}
          />}
          />


        </Routes>
        <a  className='resource' href="https://www.freepik.com/free-vector/mbti-concept-people-with-different-mindset-types_30538747.htm#query=mbti&position=33&from_view=search&track=sph">Image by upklyak on Freepik</a>
      </BrowserRouter>
    </div>
  );
}

export default App;