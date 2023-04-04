import React from "react";
import styles from "./Searchpanel.module.css";

export default function Searchpanel() {
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
 
  return (
    <div className={styles.searchmargin}>
      <div className={styles.searchbox}>
        <div className={styles.searchbg}>
          <div className="text-white ">
            <p className=" h5">WELCOME TO BOLETO</p>
            <h2 className="fw-bold">WHAT ARE YOU LOOKING FOR</h2>
          </div>

          <div className={styles.searchlayer}>
            <div>
              <span className="p-input-icon-right">
                <input
                  type="search"
                  className={styles.inputstyle}
                  placeholder="Search for Movies"
                />

                <i
                  className="pi pi-search"
                  style={{ color: "rgb(137,153,211)" }}
                />
              </span>
            </div>

            <div className={styles.searchOption}>
              <img
                src="http://pixner.net/boleto/demo/assets/images/ticket/city.png"
                alt="null"
              ></img>
              &nbsp;
              <label className={styles.label}>City</label>&nbsp;
              <select
                className={"form-select w-75 " + styles.select}
                aria-label="Default select example"
                defaultValue={cities[0].name}
              >
                {cities.map((item, i) => (
                  <option value={item.code} key={i} className={styles.option}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.searchOption}>
              <img
                src="http://pixner.net/boleto/demo/assets/images/ticket/date.png"
                alt=""
              />
              &nbsp;
              <label className={styles.label}>Date</label>&nbsp;
              <select
                className={"form-select w-75 " + styles.select}
                aria-label="Default select example"
                defaultValue={"19/03/23"}
              >
                <option selected className={styles.option}>
                  {"19/03/23"}
                </option>
                <option value={"20/03/23"} className={styles.option}>
                  {"20/03/23"}
                </option>
                <option value={"21/03/23"} className={styles.option}>
                  {"21/03/23"}
                </option>
                <option value={"22/03/23"} className={styles.option}>
                  {"22/03/23"}
                </option>
                <option value={"23/03/23"} className={styles.option}>
                  {"23/03/23"}
                </option>
              </select>
            </div>

            <div className={styles.searchOption}>
              <img
                src="http://pixner.net/boleto/demo/assets/images/ticket/cinema.png"
                alt=""
              />
              &nbsp;
              <label className={styles.label}>Cinema</label>&nbsp;
              <select
                className={"form-select w-75 " + styles.select}
                aria-label="Default select example"
                defaultValue={"PVR Plaza"}
              >
                <option selected className={styles.option}>
                  PVR Plaza
                </option>
                <option value="1Carnival Cinemas" className={styles.option}>
                  Carnival Cinemas
                </option>
                <option value="2PVR Rivoli" className={styles.option}>
                  PVR Rivoli
                </option>
                <option value="3Nova Cinemaz" className={styles.option}>
                  Nova Cinemaz
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
