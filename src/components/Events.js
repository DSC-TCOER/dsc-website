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
                <a href="https://impact22.netlify.app/" target="nt">
                  See leaderboard
                </a>
                <br />
                An <b>Ideathon</b> organized to encourage our campus students to
                participate in the <b>2022 Solution Challenge</b> and help them
                get started with brainstorming ideas to solve a problem for at
                least one of the 17 United Nations Sustainable Development Goals
                (SDGs) using Google technology. A total of 44 Teams participated
                in the first round, out of which Top 6 Teams were shortlisted
                for the Finals. These teams presented their Ideas in front of
                the Judges in the FINAL ROUND and TOP 3 teams were declared as
                winners.
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
              <h2 className="card-title">
                Intermediate ML and Feature Engineering
              </h2>
              <p>
                This was the 3rd session conducted under ML Study Jams. The
                session focused on various topics based on Intermediate ML and
                Feature Engineering.Concepts covered during the session include:
                Handling missing values, non-numeric values, data leakage and
                discovering how to get the most out of the data we have.
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
              <h2 className="card-title">Deep Dive into ML with Kaggle</h2>
              <p>
                The second workshop under ML Study Jams where we started with
                learning core ideas in ML, basic concepts of <b>Pandas</b> and
                moved on to build our First Machine Learning Model .We also
                explored different concepts like model validation, underfitting,
                overfitting, Random Forests and also talked about Machine
                Learning competitions at the end which would help participants
                improve their data science skills and evaluate their progress.
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
              <h2 className="card-title">Explore ML with Crowdsource</h2>
              <p>
                Explore ML with Crowdsource workshop was a live session where
                participants learnt theoretical concepts of ML and performed
                hands-on exercises using <b>Crowdsource app</b>. We covered the
                Beginner Track as most of the attendees were new to ML.
                <br />
                Beginner Track included:
                <br /> {"  ->"} Modules on key ML Concepts
                <br /> {"  ->"} Crowdsource Task Illustrations
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

          {/* 17 */}
          <li className="card-list-item">
            <div className="card">
              <img alt="Event Poster" src="./images/events/17-gdscWow.jpg" />
              <h2 className="card-title">GDSC WOW Event</h2>
              <p>
                <b>GDSC WOW (Wonder Of Wonders)</b> was a 3-day long virtual
                event consisting of various Speaker Sessions, Live Coding, Open
                Source Projects, Webinars and Discussions covering various
                topics of latest technologies and a Treasure Hunt game “Treasure
                to WOW” throughout the three days.
                <br />
                Highlights of the event:
                <br />
                <b>110k+</b> Live Engagements on YouTube
                <br />
                <b>15k+</b> followers on social media
                <br />
                <b>60k+</b> website clicks
                <br />
                <b>19k+</b> Registrations
                <br />
                <b>200+</b> GDSCs Collaborated
              </p>
              <a
                className="know-more-btn"
                href="https://gdsc.community.dev/events/details/developer-student-clubs-trinity-college-of-engineering-and-research-pune-presents-gdsc-wow-wonder-of-wonders/"
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
              <h2 className="card-title">
                Integration of Firebase with Flutter
              </h2>
              <p>
                A session on Introduction to Firebase followed by a demo on how
                to integrate Firebase products to our Flutter app, for seamless
                frontend and backend mobile app development.
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
              <h2 className="card-title">
                Roadmap to Become a Flutter Developer
              </h2>
              <p>
                We were very excited to host{" "}
                <b>Mr. Vivek Yadav, Google Developer Expert</b> (Flutter and
                Dart) for this event. He guided all the club members with a
                roadmap to become a better Flutter Developer and also answered
                all our queries.
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
              <h2 className="card-title">Dart Essentials 101</h2>
              <p>
                This event was an attempt to introduce club members to Dart, a
                client-optimised, multi-platform programming language aimed at
                developing fast applications for Web, Mobile and Desktop.
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
              <h2 className="card-title">Intro to the Flutter Festivals</h2>
              <p>
                Introduction to Flutter Festivals- A month long community led
                event series where student developers joined to learn the
                fundamentals of Google technologies featuring Flutter, Firebase
                and Google.
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
              <h2 className="card-title">Solution Challenge '22</h2>
              <p>
                Solution challenge is an annual contest presented by Google that
                invites students to develop solutions for local community
                problems using one or more Google products or platforms.
                <br />
                At our club we held an info session to make all our members
                aware about this contest and encouraged them to participate in
                it. We also organised a college level IDEATHON along the lines
                of the Solution Challenge to implant a sense of team building
                and boost their morale so that they can keep their spirits high
                during the Solution Challenge and come up with amazing solutions
                to contribute towards the United Nations sustainable development
                goals.
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
              <h2 className="card-title">Android Study Jam - Session 3</h2>
              <p>
                ASJ 3 was the final workshop under Android Study Jams. Our aim
                for this session was to teach the students enough about Android
                Development so that they can independently build a fully
                functional Application.
                <br />
                Keeping that in mind we covered Activity, intent, fragmentation
                and RecyclerView Components.
                <br />
                At the end of the workshop we were able to build applications by
                implementing whatever we were learning from the hands-on
                sessions.
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
              <h2 className="card-title">Android Study Jam - Session 2</h2>
              <p>
                The second session in a series of several workshops organised by
                GDSC TCOER for the students and developers of our community. In
                this workshop we talked about various data types, functions
                using <b>Kotlin Playground</b>.
                <br />
                We also helped them in setting up <b>Android Studio</b>, getting
                started with their first Android project and covering basic
                components like Views, Buttons, toast, images etc.
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
              <h2 className="card-title">Android Study Jam - Session 1</h2>
              <p>
                Android Study Jam was a month-long workshop which was aimed at
                helping students of our community transform from an extreme
                beginner to a confident Android Developer.
                <br />
                In the first session we introduced the students to Android
                Development, the career prospects, pay scale and the ease of
                development using a plethora of widely available resources. We
                used kotlin, which is an easy to understand programming language
                and is being widely used by developers around the world.
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
                A technical session conducted to help participants know more
                about the information security domain and specifically the field
                of web application security.
                <br />
                The attendees got to explore a wide range of different security
                flaws that can be encountered by security researchers and
                developers, as well as see how they could be exploited with the
                help of labs in a practical demonstration.
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
              <h2 className="card-title">
                Conclusion of 30 Days of Google Cloud
              </h2>
              <p>
                An event to acknowledge the efforts put in by all the club
                members who successfully completed Cloud Engineering and Data
                Science and Machine Learning Tracks during 30 Days of Google
                Cloud Campaign. This program helped participants explore and
                learn different concepts like computing, application
                development, big data and machine learning using cloud. We were
                amazed by the response we received thought out the month!!
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
              <h2 className="card-title">Intro to 30 days of Google Cloud</h2>
              <p>
                Kick-Off event of 30 Days of Google Cloud- A program that
                provided students with an opportunity to kickstart their
                learning journey on Cloud Technology using Google Cloud
                Platform- the tool that powers apps like Google Search, Gmail
                and YouTube. This campaign was held under the guidance of our
                Cloud Facilitator, <b>Vedant Bhogawade</b>.
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
                machine learning models of Jina AI, a neural network company. It
                helped participants get introduced to open source and make
                meaningful contributions during Hacktoberfest.
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
                Inauguration Event of the first Developer Community of our
                College. It was all about Google Developer Student Club TCOER,
                benefits of being a member, type of sessions and learning
                resources the club will offer, introduction of all core team
                members, fun quiz,discord navigation and QnA to answer all the
                queries.
                <br />
                We really enjoyed introducing the club and interacting with all
                the club members. It was the best start to an amazing journey
                ahead!
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
