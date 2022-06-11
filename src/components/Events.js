import React from "react";
import "./events.css";

const Events = () => {
  return (
    <>
      <header className="hero">
        <img src="./images/events/events-hero.gif" alt="" />
        <h1 className="hero-heading">
          Our <span>Events</span>
        </h1>
      </header>

      <div className="bound">
        <ul style={{ padding: "0px" }} className="cards">
          {/* 9 */}
          <li className="card-list-item">
            <div className="card">
              <img
                alt="Event Poster"
                src="./images/events/9-solutionChallengeInfo.png"
              />
              <h2 className="card-title">Solution Challenge 2022</h2>
              <p>
                A kick-off session of the global hackathon, Solution Challenge.
              </p>
              <a
                className="my-btn-primary"
                href="https://gdsc.community.dev/events/details/developer-student-clubs-trinity-college-of-engineering-and-research-pune-presents-2022-solution-challenge-info-session/"
                target="nt"
              >
                {/* <button className="my-btn-primary" role="button"> */}
                know more
                {/* </button> */}
              </a>
            </div>
          </li>
          {/* 8 */}
          <li className="card-list-item">
            <div className="card">
              <img alt="Event Poster" src="./images/events/8-android3.png" />
              <h2 className="card-title">Android Study Jam</h2>
              <p>
                Third session for the Android Study Jams, a continued workshop
                of Kotlin.
              </p>
              <a
                href="https://gdsc.community.dev/events/details/developer-student-clubs-trinity-college-of-engineering-and-research-pune-presents-android-study-jam-session-3/"
                className="my-btn-primary"
                target="nt"
              >
                know more
              </a>
            </div>
          </li>
          {/* 7 */}
          <li className="card-list-item">
            <div className="card">
              <img alt="Event Poster" src="./images/events/7-android2.png" />
              <h2 className="card-title">Android Study Jam</h2>
              <p>
                Second Session for the Android Study Jams, in which the
                participants learn about Kotlin.
              </p>
              <a
                href="https://gdsc.community.dev/events/details/developer-student-clubs-trinity-college-of-engineering-and-research-pune-presents-android-study-jam-session-2/"
                className="my-btn-primary"
                target="nt"
              >
                know more
              </a>
            </div>
          </li>
          {/* 6 */}
          <li className="card-list-item">
            <div className="card">
              <img alt="Event Poster" src="./images/events/6-android1.png" />
              <h2 className="card-title">Android Study Jam</h2>
              <p>
                Info session for the Android Study Jams, where our android
                facilitator, <b>Mohammed Ali Inamdar</b> kick starts the android
                development journey.
              </p>
              <a
                href="https://gdsc.community.dev/events/details/developer-student-clubs-trinity-college-of-engineering-and-research-pune-presents-android-study-jam/"
                className="my-btn-primary"
                target="nt"
              >
                know more
              </a>
            </div>
          </li>
          {/* 5 */}
          <li className="card-list-item">
            <div className="card">
              <img alt="Event Poster" src="./images/events/5-WebSecurity.png" />
              <h2 className="card-title">Web Application Security</h2>
              <p>
                A technical event where the guest speaker <b>Umair Nehri</b>{" "}
                gives beginner guidelines in Cyber Security.
              </p>
              <a
                href="https://gdsc.community.dev/events/details/developer-student-clubs-trinity-college-of-engineering-and-research-pune-presents-getting-started-with-web-application-security/"
                className="my-btn-primary"
                target="nt"
              >
                know more
              </a>
            </div>
          </li>
          {/* 4 */}
          <li className="card-list-item">
            <div className="card">
              <img alt="Event Poster" src="./images/events/4-cloudInfo.jpg" />
              <h2 className="card-title">30 Days of Google Cloud</h2>
              <p>
                Deep Diving into Cloud Computing and the Google Cloud Platform,
                a technical workshop for closing the Cloud Study Jam.
              </p>
              <a
                href="https://gdsc.community.dev/events/details/developer-student-clubs-trinity-college-of-engineering-and-research-pune-presents-30-days-of-google-cloud-campaign-closure/"
                className="my-btn-primary"
                target="nt"
              >
                know more
              </a>
            </div>
          </li>
          {/* 3 */}
          <li className="card-list-item">
            <div className="card">
              <img alt="Event Poster" src="./images/events/3-cloudjam.jpg" />
              <h2 className="card-title">30 Days of Google Cloud</h2>
              <p>
                A kick off event for the Cloud Study Jams, 30 days of Google
                Cloud, under the guidance of our cloud facilitator,{" "}
                <b>Vedant Bhogawade</b>.
              </p>
              <a
                href="https://gdsc.community.dev/events/details/developer-student-clubs-trinity-college-of-engineering-and-research-pune-presents-introduction-to-30-days-of-google-cloud/"
                className="my-btn-primary"
                target="nt"
              >
                know more
              </a>
            </div>
          </li>
          {/* 2 */}
          <li className="card-list-item">
            <div className="card">
              <img alt="Event Poster" src="./images/events/2-jina.jpg" />
              <h2 className="card-title">Jina AI - Tech Talk </h2>
              <p>
                A tech talk session giving some insights on the open-source
                machine learning models of Jina AI, a neural network company.
              </p>
              <a
                href="https://gdsc.community.dev/events/details/developer-student-clubs-trinity-college-of-engineering-and-research-pune-presents-getting-into-open-source-with-jina-ai/"
                className="my-btn-primary"
                target="nt"
              >
                know more
              </a>
            </div>
          </li>
          {/* 1 */}
          <li className="card-list-item">
            <div className="card">
              <img alt="Event Poster" src="./images/events/1-inaugration.jpg" />
              <h2 className="card-title">Inauguration Event</h2>
              <p>
                Inauguration event for the Developer Students Club chapter of
                our college, describing the plans and introduction of our team.
              </p>
              <a
                href="https://gdsc.community.dev/events/details/developer-student-clubs-trinity-college-of-engineering-and-research-pune-presents-inauguration-event/"
                className="my-btn-primary"
                target="nt"
              >
                know more
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Events;
