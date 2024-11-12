import React from 'react'

export default function Newsitem({title,desc,url,urlImg,time,auth,source}) {
  return (
    <div className='my-3'>
      <div className="card" style={{width: "18rem"}}>
      <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
      <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:'90%'}}>{source}
      </span>
      </div>
            <img src={urlImg?urlImg:"https://img.etimg.com/thumb/width-1200,height-900,imgsize-347848,resizemode-75,msid-114405117/news/international/us/donald-trump-blasted-by-arnold-palmers-daughter-over-her-fathers-genitalia.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{desc}...</p>
                <p className="card-text"><small className="text-muted">By {auth} on {new Date(time).toGMTString()}</small></p>
                <a href={url} target='_blank' rel="noreferrer" className="btn btn sm btn-dark">Readmore</a>
            </div>
        </div>
    </div>
  )
}
