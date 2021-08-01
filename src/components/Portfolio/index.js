import React from 'react';
import EMDI from "./images/Employee-Directo.png";
import COPE from "./images/Budget Tracker.png";
import FLEX from "./images/Fitness Chart.png";
import Notebook from './images/Note Taker.png';
import Weather from './images/Weather Dashboar.png';
import COQU from "./images/Javascript Code .png";
import './style.css';

function Portfolio () {
    return (
      <section id="portfolio">
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="text-center mt-5 portfolio">Portfolio</h2>
            <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
              <div className="card">
                <img src={EMDI} className="card-img-top" alt="emdi" />
                <div className="card-body">
                  <h5 className="card-title">Employee-Directory</h5>
                  <p className="card-text">
                    This application allows for efficient tracking of persons within a back-end database. Additionally, you can sort the results by first and last name.
                  </p>
                  <a
                    href="https://bio-digitalpulse.github.io/Employee-Directory/"
                    target="blank"
                    className="btn btn-dark btn-outline-light"
                  >
                    Go to Application
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
              <div className="card">
                <img src={COPE} className="card-img-top" alt="cope" />
                <div className="card-body">
                  <h5 className="card-title">Counting Pennies</h5>
                  <p className="card-text">
                    As a user I need to track budgetary expenses in real time, and to have a visual representation of costs over time. This application allows for the addition and subtraction within a singular users budget, and stores input data for repeat traceability.
                  </p>
                  <a
                    href="https://dry-inlet-96336.herokuapp.com/"
                    target="blank"
                    className="btn btn-dark btn-outline-light"
                  >
                    Go to Application
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
              <div className="card">
                <img src={FLEX} className="card-img-top" alt="flex" />
                <div className="card-body">
                  <h5 className="card-title">Flex</h5>
                  <p className="card-text">
                    This application tracks varying workouts, stores specific information and populates visual charts to allow for easier representation.
                  </p>
                  <a
                    href="https://cryptic-atoll-63567.herokuapp.com/"
                    target="blank"
                    className="btn btn-dark btn-outline-light"
                  >
                    Go to Application
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
              <div className="card">
                <img src={Notebook} className="card-img-top" alt="notebook" />
                <div className="card-body">
                  <h5 className="card-title">Scribble</h5>
                  <p className="card-text">
                    This application is creating or deleting notes with using
                    node.js, and express.
                  </p>
                  <a
                    href="https://morning-escarpment-75110.herokuapp.com/"
                    target="blank"
                    className="btn btn-dark btn-outline-light"
                  >
                    Go to Application
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
              <div className="card">
                <img
                  src={Weather}
                  className="card-img-top"
                  alt="weatherdashboard"
                />
                <div className="card-body">
                  <h5 className="card-title">WeatherOnPlanetEarth</h5>
                  <p className="card-text">
                    Our goal is to retrieve weather data for cities, with using
                    third-party API's  to create interactive
                    weather forecast website.
                  </p>
                  <a
                    href="https://bio-digitalpulse.github.io/WeatherOnPLanetEarth/"
                    target="blank"
                    className="btn btn-dark btn-outline-light"
                  >
                    Go to Application
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
              <div className="card">
                <img
                  src={COQU}
                  className="card-img-top"
                  alt="coqu"
                />
                <div className="card-body">
                  <h5 className="card-title">Coding Quiz</h5>
                  <p className="card-text">
                    This application is a learning tool for new coders. A timed, multiple choice quiz with varying degrees of difficulty, which then stores and displays highscores for users to view.
                  </p>
                  <a
                    href="https://bio-digitalpulse.github.io/CodingQuiz_AKK/"
                    target="blank"
                    className="btn btn-dark btn-outline-light"
                  >
                    Go to Application
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Portfolio;