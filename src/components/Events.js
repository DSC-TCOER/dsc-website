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
          <li className="card-list-item">
            <div className="card">
              <video
                style={{}}
                controls
                poster="./images/events/ideathon/poster.png"
              >
                <source
                  src="./images/events/ideathon/impact22.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video format or the video tag.
              </video>
              <h2 className="card-title">Impact 2022</h2>
              <p>
                Impact' 22 was an ideathon orgnized by Developer Student Club,
                TCOER. It was a pre-hackathon ideation challenge for the global
                hackathon hosted by Google Developers, 'Solution Challenge 22'.
              </p>
              <a
                className="know-more-btn"
                href="https://gdsc.community.dev/events/details/developer-student-clubs-trinity-college-of-engineering-and-research-pune-presents-impact-2022-ideathon/"
                target="nt"
              >
                {/* <button className="know-more-btn" role="button"> */}
                know more
                {/* </button> */}
              </a>
            </div>
          </li>

          {/* 16 */}
          <li className="card-list-item">
            <div className="card">
              <img alt="Event Poster" src="./images/events/16-ml3.jpg" />
              <h2 className="card-title">Intermediate ML</h2>
              <p>
                A hands-on workshop for using Kaggle and performing tasks like
                Handle missing values, non-numeric values, data leakage, and
                more.
              </p>
              <a
                className="know-more-btn"
                href="https://gdsc.community.dev/events/details/developer-student-clubs-trinity-college-of-engineering-and-research-pune-presents-ml-study-jam-session-3-deep-dive-into-ml/"
                target="nt"
              >
                {/* <button className="know-more-btn" role="button"> */}
                know more
                {/* </button> */}
              </a>
            </div>
          </li>

          {/* 15 */}
          <li className="card-list-item">
            <div className="card">
              <img alt="Event Poster" src="./images/events/15-ml2.jpg" />
              <h2 className="card-title">ML with Kaggle</h2>
              <p>
                A continuation to the ML Study Jam taking a deep dive into ML
                and introducing beginners to Kaggle carried out by our ML
                facilitator.
              </p>
              <a
                className="know-more-btn"
                href="https://gdsc.community.dev/events/details/developer-student-clubs-trinity-college-of-engineering-and-research-pune-presents-ml-study-jam-session-2-deep-dive-into-ml/"
                target="nt"
              >
                {/* <button className="know-more-btn" role="button"> */}
                know more
                {/* </button> */}
              </a>
            </div>
          </li>

          {/* 14 */}
          <li className="card-list-item">
            <div className="card">
              <img alt="Event Poster" src="./images/events/14-ml1.jpg" />
              <h2 className="card-title">Explore ML</h2>
              <p>
                An ML study jam providing a roadmap of Machine learning while
                introducing to the world of Data science, under the guidance of
                our ML facilitator, and our community lead, <b>Zahra Dehgan.</b>
              </p>
              <a
                className="know-more-btn"
                href="https://gdsc.community.dev/events/details/developer-student-clubs-trinity-college-of-engineering-and-research-pune-presents-explore-ml-with-crowdsource-intro-to-ml/"
                target="nt"
              >
                {/* <button className="know-more-btn" role="button"> */}
                know more
                {/* </button> */}
              </a>
            </div>
          </li>

          {/* 13 */}
          <li className="card-list-item">
            <div className="card">
              <img alt="Event Poster" src="./images/events/13-firebase.jpg" />
              <h2 className="card-title">Flutter Roadmap</h2>
              <p>
                Integration with Firebase is an event under the month-long
                Flutter Festival, conducted by <b>Mohammed Ali Inamdar</b>.
              </p>
              <a
                className="know-more-btn"
                href="https://gdsc.community.dev/events/details/developer-student-clubs-trinity-college-of-engineering-and-research-pune-presents-flutter-festival-tcoer-integration-with-firebase/"
                target="nt"
              >
                {/* <button className="know-more-btn" role="button"> */}
                know more
                {/* </button> */}
              </a>
            </div>
          </li>

          {/* 12 */}
          <li className="card-list-item">
            <div className="card">
              <img alt="Event Poster" src="./images/events/12-flutter3.jpg" />
              <h2 className="card-title">Flutter Roadmap</h2>
              <p>
                In this one,{" "}
                <b>
                  Mr. Vivek Yadav, a Google Developer Expert (Flutter and Dart),
                </b>
                gave us a road map to become a better Flutter Developer.
              </p>
              <a
                className="know-more-btn"
                href="https://gdsc.community.dev/events/details/developer-student-clubs-trinity-college-of-engineering-and-research-pune-presents-flutter-festival-tcoer-roadmap-to-become-a-flutter-developer-by-vivek-yadav-gde/"
                target="nt"
              >
                {/* <button className="know-more-btn" role="button"> */}
                know more
                {/* </button> */}
              </a>
            </div>
          </li>

          {/* 11 */}
          <li className="card-list-item">
            <div className="card">
              <img alt="Event Poster" src="./images/events/11-flutter2.jpg" />
              <h2 className="card-title">Dart Essentials</h2>
              <p>
                A live coding workshop organised under the Flutter Festivals by
                GDSC TCOER in collaboration with GDSC Cummins College of
                Engineering for Women, Nagpur and GDSC SRM Institute, Ghaziabad.
              </p>
              <a
                className="know-more-btn"
                href="https://gdsc.community.dev/events/details/developer-student-clubs-trinity-college-of-engineering-and-research-pune-presents-2022-solution-challenge-info-session/"
                target="nt"
              >
                {/* <button className="know-more-btn" role="button"> */}
                know more
                {/* </button> */}
              </a>
            </div>
          </li>

          {/* 10 */}
          <li className="card-list-item">
            <div className="card">
              <img alt="Event Poster" src="./images/events/10-flutter1.jpg" />
              <h2 className="card-title">Flutter Info</h2>
              <p>
                Info session for the Flutter Study Jams, where our flutter
                facilitator, <b>Raj Thakur</b> kick starts the application
                development journey using flutter.
              </p>
              <a
                className="know-more-btn"
                href="https://gdsc.community.dev/events/details/developer-student-clubs-trinity-college-of-engineering-and-research-pune-presents-flutter-festival-tcoer-info-session/"
                target="nt"
              >
                {/* <button className="know-more-btn" role="button"> */}
                know more
                {/* </button> */}
              </a>
            </div>
          </li>

          {/* 9 */}
          <li className="card-list-item">
            <div className="card">
              <img
                alt="Event Poster"
                src="./images/events/9-solutionChallengeInfo.png"
              />
              <h2 className="card-title">Solution Challenge</h2>
              <p>
                A kick-off session of the global hackathon, Solution Challenge
                2022.
              </p>
              <a
                className="know-more-btn"
                href="https://gdsc.community.dev/events/details/developer-student-clubs-trinity-college-of-engineering-and-research-pune-presents-2022-solution-challenge-info-session/"
                target="nt"
              >
                {/* <button className="know-more-btn" role="button"> */}
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
                className="know-more-btn"
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
                className="know-more-btn"
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
                className="know-more-btn"
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
                className="know-more-btn"
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
                className="know-more-btn"
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
                className="know-more-btn"
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
                className="know-more-btn"
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
                className="know-more-btn"
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
