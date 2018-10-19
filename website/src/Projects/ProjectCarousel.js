import React, { Component } from "react";
import {
  soccerHub,
  paka,
  hackerNews,
  fortfriendproject,
  taylorOld,
  tbtn,
  github,
  source,
  safepath
} from "./../Images";
import "./../App.css";
import Slider from "react-slick";
import { withRouter } from "react-router";
class ProjectCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="ProjectCarouselContainer">
        <Slider className="ProjectCarousel" {...settings}>
          <div className="CarouselItem">
            <a href="https://fort-friend.com">
              <img src={fortfriendproject} className="CarouselImage" />
            </a>
            <div
              className="FeaturedProjectHeader"
              style={{
                display: "flex",
                width: "200px",
                height: "60px",
                margin: "0",
                position: "absolute",
                top: "0px",
                left: "0px"
              }}
            >
              <div style={{}}>
                <div style={{ fontSize: "2em" }}> FortFriend</div>
                <div>Summer 2018</div>
              </div>
              <div style={{ flex: "2", display: "flex" }}>
                <a
                  style={{
                    margin: "auto"
                  }}
                  href="https://github.com/20rohrichtt/fortnite_challenges"
                >
                  <img
                    src={github}
                    style={{
                      width: "30px"
                    }}
                  />
                </a>
              </div>
            </div>

            <div className="CarouselFooter">
              React web app I made to track challenges in the vastly popular
              Battle Royale game Fortnite.
            </div>
          </div>
          <div className="CarouselItem">
            <a href="https://github.com/20rohrichtt/Source">
              <img src={source} className="CarouselImage" />
            </a>
            <div
              className="FeaturedProjectHeader"
              style={{
                display: "flex",
                width: "200px",
                height: "60px",
                margin: "0",
                position: "absolute",
                top: "0px",
                left: "0px"
              }}
            >
              <div style={{}}>
                <div style={{ fontSize: "2em" }}> Source</div>
                <div>Fall 2018</div>
              </div>
              <div style={{ flex: "2", display: "flex" }}>
                <a
                  style={{
                    margin: "auto"
                  }}
                  href="https://github.com/20rohrichtt/Source"
                >
                  <img
                    src={github}
                    style={{
                      width: "30px"
                    }}
                  />
                </a>
              </div>
            </div>

            <div className="CarouselFooter">
              Program Material for a course I teach to college students at UVA
              about software engineering.
            </div>
          </div>
          <div className="CarouselItem">
            <a href="https://github.com/20rohrichtt/SafePathe">
              <img src={safepath} className="CarouselImage" />
            </a>
            <div
              className="FeaturedProjectHeader"
              style={{
                display: "flex",
                width: "200px",
                height: "60px",
                margin: "0",
                position: "absolute",
                top: "0px",
                left: "0px"
              }}
            >
              <div style={{}}>
                <div style={{ fontSize: "2em" }}> SafePath</div>
                <div>Spring 2018</div>
              </div>
              <div style={{ flex: "2", display: "flex" }}>
                <a
                  style={{
                    margin: "auto"
                  }}
                  href="https://safepath-26172.firebaseapp.com/"
                >
                  <img
                    src={github}
                    style={{
                      width: "30px"
                    }}
                  />
                </a>
              </div>
            </div>

            <div className="CarouselFooter">
              HackUVA project for finding a safe route home.
            </div>
          </div>
          <div className="CarouselItem">
            <a href="https://takebackthenightuva.com/">
              <img src={tbtn} className="CarouselImage" />
            </a>
            <div
              className="FeaturedProjectHeader"
              style={{
                display: "flex",
                width: "150px",
                height: "60px",
                margin: "0",
                position: "absolute",
                top: "0px",
                left: "0px"
              }}
            >
              <div style={{}}>
                <div style={{ fontSize: "2em" }}> TBTN</div>
                <div>Spring 2018</div>
              </div>
              <div style={{ flex: "2", display: "flex" }}>
                <a
                  style={{
                    margin: "auto"
                  }}
                  href="https://github.com/20rohrichtt/TBTN2018"
                >
                  <img
                    src={github}
                    style={{
                      width: "30px"
                    }}
                  />
                </a>
              </div>
            </div>
            <div className="CarouselFooter">
              Website made for the <i>Take Back the Night</i> group at UVA: a
              sexual assault awareness club.
            </div>
          </div>
          <div className="CarouselItem">
            <a href="https://taylorrohrich-dc022.firebaseapp.com/">
              <img src={taylorOld} className="CarouselImage" />
            </a>
            <div
              className="FeaturedProjectHeader"
              style={{
                display: "flex",
                width: "300px",
                height: "60px",
                margin: "0",
                position: "absolute",
                top: "0px",
                left: "0px"
              }}
            >
              <div style={{}}>
                <div style={{ fontSize: "2em" }}>Personal Website</div>
                <div>Summer 2017</div>
              </div>
              <div style={{ flex: "2", display: "flex" }}>
                <a
                  style={{
                    margin: "auto"
                  }}
                  href="https://github.com/20rohrichtt/personal_website"
                >
                  <img
                    src={github}
                    style={{
                      width: "30px"
                    }}
                  />
                </a>
              </div>
            </div>
            <div className="CarouselFooter">Previous personal website.</div>
          </div>
          <div className="CarouselItem">
            <a href="https://hacker-news-clone-107e0.firebaseapp.com/">
              <img src={hackerNews} className="CarouselImage" />
            </a>
            <div
              className="FeaturedProjectHeader"
              style={{
                display: "flex",
                width: "325px",
                height: "60px",
                margin: "0",
                position: "absolute",
                top: "0px",
                left: "0px"
              }}
            >
              <div style={{}}>
                <div style={{ fontSize: "2em" }}>HackerNews Clone</div>
                <div>Summer 2017</div>
              </div>
              <div style={{ flex: "2", display: "flex" }}>
                <a
                  style={{
                    margin: "auto"
                  }}
                  href="https://github.com/nickshey/hacker-news-clone"
                >
                  <img
                    src={github}
                    style={{
                      width: "30px"
                    }}
                  />
                </a>
              </div>
            </div>
            <div className="CarouselFooter">
              A Hacker News website clone, created entirely in ReactJS.
            </div>
          </div>
          <div className="CarouselItem">
            <a href="https://paka-7286a.firebaseapp.com/">
              <img src={paka} className="CarouselImage" />
            </a>
            <div
              className="FeaturedProjectHeader"
              style={{
                display: "flex",
                width: "300px",
                height: "60px",
                margin: "0",
                position: "absolute",
                top: "0px",
                left: "0px"
              }}
            >
              <div style={{}}>
                <div style={{ fontSize: "2em" }}>PAKA Prelaunch Site</div>
                <div>Summer 2017</div>
              </div>
              <div style={{ flex: "2", display: "flex" }} />
            </div>
            <div className="CarouselFooter">
              In the Summer of 2017, I helped create a prelaunch website for the
              PAKA sweater line, which ultimately earned over $100,000 on
              kickstarter.
            </div>
          </div>

          <div className="CarouselItem">
            <a href="https://soccerhub-b7a63.firebaseapp.com/">
              <img src={soccerHub} className="CarouselImage" />
            </a>
            <div
              className="FeaturedProjectHeader"
              style={{
                display: "flex",
                width: "225px",
                height: "60px",
                margin: "0",
                position: "absolute",
                top: "0px",
                left: "0px"
              }}
            >
              <div style={{}}>
                <div style={{ fontSize: "2em" }}>SoccerHub</div>
                <div>Summer 2017</div>
              </div>
              <div style={{ flex: "2", display: "flex" }}>
                <a
                  style={{
                    margin: "auto"
                  }}
                  href="https://github.com/nickshey/SoccerHub"
                >
                  <img
                    src={github}
                    style={{
                      width: "30px"
                    }}
                  />
                </a>
              </div>
            </div>
            <div className="CarouselFooter">
              A website that allows for you to access all the latest soccer
              updates at your fingertips.
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default withRouter(ProjectCarousel);
