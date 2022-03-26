import React, { useState, useEffect } from "react";
import "./Home.css";
import v1 from "./Assets/back1.mp4";
import i1 from "./Assets/recycle.jpg";
import i2 from "./Assets/employ.jpg";

import EventCard from "./EventCard";
function Home() {
  return (
    <>
      <div className="container">
        <div className="container__video">
          <video autoPlay muted loop className="video">
            <source src={v1} type="video/mp4" />
          </video>

          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center p-4">
            <div className="flex-1 flex flex-col gap-4 text-white mx-auto max-w-6xl xl:p-0 sm:p-8 p-2 justify-center textsz">
              Donate For All
            </div>
          </div>
        </div>

        <div>
          <p className="text-donate">
            A lot of stuff at your Home which we throw away is not actually
            waste but it can be used to help some people, so lets do our part
            and donate for the good
          </p>

          <p className="card__container1">
            <div className="card__image__container1">
              <img
                src={i1}
                alt="hi"
                // layout="fill"
                className="card__image"
                onClick="/recycle"
              />
            </div>
            <div className="card__body">
              <p className="card__event__name">Recycle</p>
              <p className="card__event__desc">hi</p>
            </div>
          </p>

          <p className="card__container2">
            <div className="card__image__container2">
              <img
                src={i2}
                alt="hi"
                // layout="fill"
                className="card__image"
                onClick="/recycle"
              />
            </div>
            <div className="card__body">
              <p className="card__event__name">Get Hired !!</p>
              <p className="card__event__desc">hi</p>
            </div>
          </p>
        </div>
      </div>
    </>
  );
}
export default Home;
