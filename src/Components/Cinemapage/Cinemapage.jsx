import React, { useEffect, useState } from 'react'
import { Navbar } from '../Navbar/Navbar';
import styles from "./Cinemapage.module.css";
import  Footer  from '../Footer/Footer'
import { Link, useParams } from 'react-router-dom';

export default function Cinemapage() {
  const[cinema,setcinema]=useState([])
  const[detail,setdetail]=useState([])
  const {movieid} =useParams()
  useEffect(()=>{
    if(movieid){
      fetch("http://localhost:4000/api/movie/cinema/" + movieid)
      .then(res=>res.json())
      .then(res=>{
        setcinema(res)
        
      })
      fetch("http://localhost:4000/api/movie/" + movieid)
      .then(res=>res.json())
      .then(res=>{
        setdetail(res)
      })
    }
  },[movieid])
  return (
    <div className={styles.cinema}>
    <Navbar />
      <div className={styles.banner}>
        <h1 className='display-1 fw-bold'>{detail.name}</h1>
        <div>{detail.languages && detail.languages.map((item,i)=>(<span key={i} className="h4">&nbsp;{item}</span>))}</div>
      </div>

    <div className='container d-flex'>
    <div className={'table-responsive w-75 me-5'}>
    <table className="table mt-5  table-bordered">
  
  <tbody >
    {cinema.map((item,i)=>(
      
      <tr key={item._id}  className={styles.cinematable +" "}>
       <th scope="row" className='w-50 h6 '><Link to={"/seat/"+movieid} className='text-decoration-none'>{item.name}, {item.city}</Link></th>
      
       <td ><div className='d-flex justify-content-around'>{item.timings.map((tim)=>(<Link><div className='btn btn-outline-info'>{tim.time}</div></Link>))}</div></td>
       
     </tr>
    
    ))}
    </tbody>
</table>
</div>
<div className='mt-5 w-25'>
  <img src="https://pixner.net/boleto/demo/assets/images/sidebar/banner/banner03.jpg" height="425px" alt="ad" />
  <img src="https://pixner.net/boleto/demo/assets/images/sidebar/banner/banner03.jpg" height="425px" alt="ad" className='mt-5' />
</div>
    </div>
<Footer />
    </div>
  )
}
