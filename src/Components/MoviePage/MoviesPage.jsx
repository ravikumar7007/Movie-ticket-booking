import React, { useEffect, useLayoutEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Moviespage.module.css";

import { Rating } from "primereact/rating";
import { Link, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function MoviesPage() {
  const [rate, setRate] = useState(null);
  const [APIdata, setAPIdata] = useState([]);
  const [review,setreview]=useState([])
  const { movieid } = useParams();
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  useEffect(() => {
    if (movieid) {
      fetch("http://localhost:4000/api/movie/" + movieid)
        .then((res) => res.json())
        .then((res) => {
          setAPIdata(res);      
          setreview(res.userReviews)
        });
    }
  },[movieid]);

  return (
    <div>
      <Navbar />
      <div className={styles.banner}>
      </div>
      <div className={"container"}>
        <div className={"d-flex " + styles.detailtop}>
          <img
            className={"me-4 " + styles.detailimage}
            src={APIdata.posterUrl}
            alt="poster"
            height="400px"
            width="250px"
          />
          <div className={styles.bantext}>
            <h2 className="text-white">{APIdata.name}</h2>
            <div className="mt-3">{APIdata.languages && APIdata.languages.map((item,i)=>(<span key={i}>&nbsp;{item}</span>))}</div>
            <div className="d-flex">{APIdata.genre && APIdata.genre.map(i=><button  className="btn btn-outline-info me-2 mt-3" disabled>{i}</button>)}</div>
            <div className="d-flex mt-3">
              <div className="me-2">
                <i className="pi pi-calendar"></i>{APIdata.dateOfRelease}
              </div>
              <div>
                <i className="pi pi-clock"></i>{Math.floor(APIdata.duration/60)+"hrs "+Math.floor(APIdata.duration%60)+"minutes"}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.ratingside}>
        <div className="container text-white d-flex justify-content-around">
          <div className="me-4 text-center">
            <img
              src="https://pixner.net/boleto/demo/assets/images/movie/tomato2.png"
              height="20px"
              alt="t"
            />
            <span className="h5 ">&nbsp; {APIdata.rating}/10</span>
            <h4 className="mt-2">Tomatometer</h4>
          </div>
          <div className="me-4 text-center">
            <img
              src="https://pixner.net/boleto/demo/assets/images/movie/cake2.png"
              height="20px"
              alt="t"
            />
            <span className="h5">&nbsp; 88%</span>
            <h4 className="mt-2">Audience Score</h4>
          </div>

          <div className="me-4 d-flex flex-column align-items-center">
            <Rating value={4} readOnly cancel={false} />
            <h4 className="mt-3 text-center">Audience Score</h4>
          </div>

          <div className="me-4 d-flex flex-column align-items-center ">
            <div className={styles.userrating}>
              <Rating
                value={rate}
                onChange={(e) => setRate(e.value)}
                cancel={false}
              />
            </div>
            <h4 className="mt-3 text-center">Audience Score</h4>
          </div>

          <div>
            <Link to={"/cinema/"+movieid} className="btn btn-primary">
              <div className="d-flex align-self-center">BOOK NOW</div>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.filler}>
        <div className="container text-white">
          <div className="mb-5">
          <h3 className="text-white">SUMMARY</h3>
          <hr className="bg-primary" />
          <div className="mx-1">&emsp;&emsp;{APIdata.description}</div>
          </div>
          <div className={styles.review }>
          <div className="pb-5">
          <h3 className="text-white">USER REVIEW ({review.length})</h3>
          <hr className="bg-primary mb-2" />


          {review.map((item,i)=>(
            <div className="d-flex mt-5">
            <img src={item.userProfilePicUrl} height={"80px"} className={"rounded-circle "+ styles.reviewpic } alt="pro" />
            <div className="mx-5">
              <div className="fw-light text-info mt-1">{item.date}</div>
              <div className=" fw-bold mt-1">{item.name}</div>
              <div><i className="pi pi-check mt-1 fw-light" style={{ fontSize: '1rem' }}></i>{" Verified User"}</div>
            </div>
            <div className="me-2 w-75">
            <Rating value={item.rating/2} readOnly className="mt-1"  cancel={false} />
            <div className="mt-1">{item.comment}</div>
            </div>
          </div>

          ))}

          


</div>
          </div>
        </div>
      </div>
<Footer />
    </div>
  );
}
