import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
function App() {
  let pagesize=10;
  const apiKey=process.env.REACT_APP_API;
  const [progress,setProgress]=useState();
  return (
    <>
    <Router>
    <Navbar/>
    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
      <Route exact path='/' element={<News apiKey={apiKey} pagesize={pagesize} category={'general'} setProgress={setProgress}/>}/>
      <Route exact path='/business' element={<News apiKey={apiKey}  pagesize={pagesize} category={'business'} setProgress={setProgress}/>}/>
      <Route exact path='/entertainment' element={<News apiKey={apiKey} pagesize={pagesize} category={'entertainment'} setProgress={setProgress}/>}/>
      <Route exact path='/health' element={<News apiKey={apiKey} pagesize={pagesize} category={'health'} setProgress={setProgress}/>}/>
      <Route exact path='/science' element={<News apiKey={apiKey} pagesize={pagesize} category={'science'} setProgress={setProgress}/>}/>
      <Route exact path='/sports' element={<News apiKey={apiKey} pagesize={pagesize} category={'sports'} setProgress={setProgress}/>}/>
      <Route exact path='/technology' element={<News apiKey={apiKey} pagesize={pagesize} category={'technology'} setProgress={setProgress}/>}/>

      </Routes>
      </Router>
    </>
    
  );
}

export default App;
