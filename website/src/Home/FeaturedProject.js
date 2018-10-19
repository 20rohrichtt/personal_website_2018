import React, { Component } from "react";
import { fortfriend, forbes, polygon, pcgn, github } from "./../Images";
import "./../App.css";

class FeaturedProject extends Component {
  render() {
    return (
      <div className="FeaturedProjectContainer">
        <div
          className="FeaturedProject"
          style={{ backgroundImage: `url(${fortfriend})` }}
        >
          <div className="FeaturedProjectContent">
            <div
              className="FeaturedProjectHeader"
              style={{
                display: "flex"
              }}
            >
              <div style={{}}>
                <div style={{ fontSize: "2em" }}> FortFriend</div>
                <div>Summer 2018</div>
              </div>
              <div
                style={{
                  flex: "2",
                  display: "flex",
                  justifyContent: "flex-end"
                }}
              >
                <a
                  style={{
                    marginTop: "auto",
                    marginBottom: "auto",
                    marginRight: "15px"
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
            <div className="FeaturedProjectText">
              React web app I made to track challenges in the vastly popular
              Battle Royale game <i>Fortnite</i>.
            </div>
          </div>
        </div>
        <div style={{ margin: "20px" }}>
          <hr className="Divider" />
          <div className="FeaturedProjectFooter">
            <div className="Stats">
              <div className="StatItem">
                <div className="StatHeader">150,000</div>
                <div className="StatFooter">Users</div>
              </div>
              <div className="StatItem">
                <div className="StatHeader">600,000+</div>
                <div className="StatFooter">Visits</div>
              </div>
              <div className="StatItem">
                <div className="StatHeader">
                  <a
                    className="articleImage"
                    href="https://www.forbes.com/sites/davidthier/2018/05/29/heres-a-map-that-shows-you-how-to-complete-every-weekly-challenge-in-fortnites-season-4/#34cb549f218d
"
                  >
                    <img className="articleImage" src={forbes} />
                  </a>
                </div>
                <div className="StatFooter">Forbes Article</div>
              </div>
              <div className="StatItem">
                <div className="StatHeader">
                  <a
                    className="articleImage"
                    href="https://www.polygon.com/fortnite/2018/5/28/17402692/fortnite-weekly-battle-pass-challenge-tracker-fort-friend-reddit"
                  >
                    <img className="articleImage" src={polygon} />
                  </a>
                </div>
                <div className="StatFooter">Polygon Article</div>
              </div>
              <div className="StatItem">
                <div className="StatHeader">
                  <a
                    className="articleImage"
                    href="https://www.pcgamesn.com/fortnite/fortnite-fort-friend"
                  >
                    <img className="articleImage" src={pcgn} />
                  </a>
                </div>
                <div className="StatFooter">PCGamesN Article</div>
              </div>
            </div>
          </div>
          <hr className="Divider" />
        </div>
      </div>
    );
  }
}

export default FeaturedProject;
