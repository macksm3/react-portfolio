import React from "react";
import "./style.css";

function Bio(){
  return(
    <section className="aboutme">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Who is M3? (Michael "Macks" McCosh)<hr /></h2>
          </div>
        </div>
        <div className="row">
          <article className="col-12">
            <img className="bio-image" src="assets/img/close up selfie.png" alt="M3 selfie" />
            <p>It all started with music in high school. As the base player in a band, I also endeavored to take care of the tech
              stuff, like sound and lights. I designed and built a road worthy light show because, you know, every band needs
              lights to play on stage. From there I went on to building speaker systems, installing car audio, recording
              bands/music, and playing base/guitar.</p>
            <p>I landed at TweeterEtc in retail sales at a time when audio and video were just coming together. The audio CD
              technology was introduced to the world while I was there. The iPod did not exist, and cell phones were a brand new technology.
              Then I discovered photography! I spent a considerable amount of time as a working pro doing portraits and
              youth sports teams. Owned a photography franchise called "The Sports Section" and was doing that when auto
              focus lenses first came out. Learning to shoot with auto focus was challenging at first but soon became second
              nature. Digital Photography started slowly with Kodak developing the first high quality digital capture system
              that attached to a Nikon camera. Getting a computer capable of displaying high quality photography was VERY
              expensive as personal computers were just starting to be a thing.</p>
            <p>As I realized "production line photography" was not what I wanted to do for the rest of my life I made a move
              to high tech, home automation first, then commercial A/V. With home automation products and a small PC, I
              created a christmas tree lighting system that had 4 dimmers that each had a different color light string. The
              tree would fade from color to color in a sort of random pattern and it was the absolute best christmas
              decoration I have ever had. I was building and fixing computers and networks for small businesses, again self
              employed but not really making enough money. I was able to score a gig with a small commercial integration
              company where I did autoCAD system documentation and control system programming. Control System Programming
              became a life long career that ended abruptly, last year. So now I start over, able to provide consulting
              services, problem solving with a vast array of knowledge and a wealth of experience able to tackle anything
              you can throw at me.</p>
            <p> - Michael "Macks" McCosh</p>
          </article>
        </div>      
      </div>
    </section>
  );
}

export default Bio; 
