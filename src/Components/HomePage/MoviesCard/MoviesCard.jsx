import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Movies.module.css";

export default function MoviesCard() {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/movie")
      .then((res) => res.json())
      .then((res) => {
        setmovie(res);
      });
  }, []);

  return (
    <div className={styles.topmargin}>
      <div className="container">
      <div className={"row row-cols-2 row-cols-lg-4 g-5 g-lg-3"}>
        {movie.map((item, i) => (
          <div className="col" key={item._id}>
          <div className={"card "+ styles.cardbg }>
            <Link to={"/movie/"+item._id}>
            <img src={item.posterUrl} className="card-img-top" alt="..." height="350px" width="150px" />
            </Link>
            <div className={"card-body "+styles.cardbodymd }>
              <div className={styles.cardtitle}>
              <h4 className="card-title text-center">{item.name} </h4>
              </div>
              <hr />
              <div className="d-flex justify-content-around ">
                <div>
                  <img
                    src="https://pixner.net/boleto/demo/assets/images/movie/tomato.png"
                    alt="tomato"
                  />
                  89%{" "}
                </div>
                <div>
                  <img
                    src="https://pixner.net/boleto/demo/assets/images/movie/cake.png"
                    alt="rating"
                  />
                  88%
                </div>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
