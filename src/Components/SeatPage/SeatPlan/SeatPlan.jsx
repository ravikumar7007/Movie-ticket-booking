import React, { useState } from "react";

export default function SeatPlan() {
  const [length4, setLength4] = useState([1, 1, 1, 1]);
  const [silverPlus, setSilverPlus] = useState(["G", "F"]);
  const availableSeats = [
    "F6",
    "F7",
    "F10",
    "F3",
    "F2",
    "G1",
    "G2",
    "G6",
    "G9",
    "G10",
  ];
  const [length6, setLength6] = useState([1, 1, 1, 1, 1, 1]);

  return (
    <div className="mt-5 ">
      <div className="row">
        <div className="col-md-10 mx-auto">
          {silverPlus.map((r) => (
            <div className="row mb-2">
              <div className="col-1 text-center">{r}</div>
              <div className="col-3">
                {length4.map((s) => (
                  <span>
                    <img
                      src="https://pixner.net/boleto/demo/assets/images/movie/seat01.png"
                      alt="seat"
                      height="30px"
                      className="mx-1"
                    />
                  </span>
                ))}
              </div>

              <div className="col-4">
                {length6.map((s) => (
                  <span>
                    <img
                      src="https://pixner.net/boleto/demo/assets/images/movie/seat01.png"
                      alt="seat"
                      height="30px"
                      className="mx-1"
                    />
                  </span>
                ))}
              </div>
              <div className="col-3">
                {length4.map((s) => (
                  <span>
                    <img
                      src="https://pixner.net/boleto/demo/assets/images/movie/seat01.png"
                      alt="seat"
                      height="30px"
                      className="mx-1"
                    />
                  </span>
                ))}
              </div>
              <div className="col-1 text-center">{r}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
