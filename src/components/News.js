import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem.js'
import Loading from './Loading.js'
import { useLocation } from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
export default function News({apiKey,pagesize,category,setProgress}) {
  const [data,setData]=useState([]);
  const [page,setPage]=useState(1);
  const [extra,setExtra]=useState([0]);
  const location=useLocation();
  const capitalizeFirst=(str)=>{
     return str.charAt(0).toUpperCase()+str.slice(1);
  }
  // const handlePrevious=async()=>{
  //   setPage(pageno-1);
  //   updateNews();
  // }
  // const handleNext=async()=>{
  //   setPage(pageno+1);
  //   updateNews();
  // }
   const fetchMoreData=async()=>{
    console.log(page);
     const url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&page=${page+1}&pagesize=${pagesize}`;
    await fetch(url).then(res=>res.json()).then(obj=>{setData(data.concat(obj.articles));setExtra(obj.articles);});
    console.log(data);
    // setData(filterData(data));
    setPage(page+1);
     setProgress(100);
   }
  

  useEffect(()=>{
     console.log('route has been changed',location.pathname);
     setData([]);
    setProgress(10);
    const updateNews=async()=>{
      try{
        console.log(page);
        const url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&page=1&pagesize=${pagesize}`;
        await fetch(url).then(res=>res.json()).then(obj=>{console.log(obj.totalResults);setData(obj.articles);setExtra(obj.articles);});
      }
        catch(error){
          console.log("Error fetching data:", error);
        }
    };
    setPage(1);
    console.log(page);
    document.title=`NewsWeb-${capitalizeFirst(category)}`
    setProgress(100);
    updateNews();
    // eslint-disable-next-line
  },[location.pathname]);
  return (
    <div className='container mx-3 my-3'>
        <h1 className='text-center'>{`This is top ${capitalizeFirst(category)} news`}</h1>
        {/* { load && <Loading/> } */}
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={extra.length!==0}
          loader={<Loading/>}>
        <div className='container'>
        <div className='row my-5 mx-5'>
          {data.filter(d=>d.url!=="https://removed.com").map((ele)=>{
             return(
              <div className='col-md-4' key={ele.url}>
              <Newsitem title={ele.title?ele.title.slice(0,45):""} url={ele.url} urlImg={ele.urlToImage} desc={ele.description?ele.description.slice(0,80):""} time={ele.publishedAt} auth={ele.author?ele.author:"Anyonymous"} source={ele.source.name}/>
            </div>)
          }) }
         </div>
         </div>
         </InfiniteScroll>
        
        {/* <div className="d-flex justify-content-between">
          <button disabled={pageno<=1} className="btn btn-dark"  onClick={handlePrevious}>&larr; Previous</button>
          <button disabled={pageno+1>Math.ceil(totResults/pagesize)} className="btn btn-dark"  onClick={handleNext}>Next &rarr;</button>
        </div> */}
    </div>
  )
}

