import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import styles from "./SeatPage.module.css";
import Footer from "../Footer/Footer";
import { Link, useParams } from "react-router-dom";
import SeatPlan from "./SeatPlan/SeatPlan";

export default function SeatPage() {
  const [detail, setdetail] = useState([]);
  const { movieid } = useParams();
  useEffect(() => {
    if (movieid) {
      fetch("http://localhost:4000/api/movie/" + movieid)
        .then((res) => res.json())
        .then((res) => {
          setdetail(res);
        });
    }
  }, [movieid]);
  return (
    <div>
      <div className={styles.cinema}>
        <Navbar />
        <div className={styles.banner}>
          <h1 className="display-1 fw-bold">{detail.name}</h1>
          <div>
            {detail.languages &&
              detail.languages.map((item, i) => (
                <span key={i} className="h4">
                  &nbsp;{item}
                </span>
              ))}
          </div>
        </div>
      </div>
      <div className={styles.seatpbg}>
        <div className="container py-5">
          <div className="d-flex justify-content-center">
            <div className={"h3 " + styles.topictext}>SCREEN</div>
          </div>
          <div className="mt-5 d-flex justify-content-center ">
            <img
              src="https://pixner.net/boleto/demo/assets/images/movie/screen-thumb.png"
              alt="screen"
            />
          </div>
          <div className="d-flex justify-content-center m-5">
            <div className={"h3 text-success " + styles.topictext}>
              SILVER PLUS
            </div>
          </div>
          <SeatPlan />
        </div>
      </div>
      <Footer />
    </div>
  );
}
