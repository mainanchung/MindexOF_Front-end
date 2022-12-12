import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TestPage from './pages/Test/TestPage';
import HomePage from './pages/Home/HomePage';
import ResultPage from './pages/Result/ResultPage';

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
            element = {<typesPage/>}
          />

          <Route
            path = '/types/:id'
            element = {<typesPage/>}
          />
         
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;