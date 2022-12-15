import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TestPage from './pages/Test/TestPage';
import HomePage from './pages/Home/HomePage';
import ResultPage from './pages/Result/ResultPage';
import Types from './pages/Types/Types';
import SingleType from './pages/SingleType/SingleType';
import JobCart from './pages/JobCart/JobCart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route
            path = '/'
            element = {<HomePage/>}
          />

          <Route
            path = '/test'
            element = {<TestPage/>}
          />

          <Route
            path = '/test/:type'
            element = {<ResultPage/>}
          />

          <Route
            path = '/types'
            element = {<Types/>}
          />

          <Route
            path = '/types/:id'
            element = {<SingleType/>}
          />

          <Route
          path = '/types/:id/:career'
          element = {<SingleType/>}
          />

          <Route
          path = '/cart'
          element = {<JobCart/>}
          />
         
        </Routes>
        <a  className='resource' href="https://www.freepik.com/free-vector/mbti-concept-people-with-different-mindset-types_30538747.htm#query=mbti&position=33&from_view=search&track=sph">Image by upklyak on Freepik</a>
      </BrowserRouter>
    </div>
  );
}

export default App;