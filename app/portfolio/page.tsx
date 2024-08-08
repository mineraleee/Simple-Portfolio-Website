import './../style3.css'

export default function portfolio() {
    return (
    <>
      <header className="header">
        <a href="./../dashboard" className="first">
          <span id="highlight">My</span> web!
        </a>
        <nav className="menu">
          <a href="./../dashboard">Home</a>
          <a href="./../about">About</a>
          <a className="active" href="./portfolio">
            Portfolio
          </a>
          <a href="./../skill">Skills</a>
          <a href="./../contact">Contact</a>
        </nav>
      </header>
      <div className="portfolio">
        <div className="content-portfolio1">
          <div className="panitia1-photo-wrapper">
            <img
              src="panitia.JPG"
              alt="Gathering STEIK"
              className="panitia1-photo"
            />
          </div>
          <div className="text-content">
            <h2 className="number">1.</h2>
            <h2>
              Panitia Pre-Event{" "}
              <span className="important">Gathering Offline STEI-K 23</span>
            </h2>
            <a href="#" className="box">
              More
            </a>
          </div>
        </div>
        <div className="content-portfolio2">
          <div className="text-content">
            <h2 className="number">2.</h2>
            <h2>
              Panitia Finance <span className="important">Makrab STEI-K 23</span>
            </h2>
            <a href="#" className="box">
              More
            </a>
          </div>
          <div className="panitia2-photo-wrapper">
            <img
              src="panitia2.jpeg"
              alt="Makrab STEIK"
              className="panitia2-photo"
            />
          </div>
        </div>
        <div className="content-portfolio3">
          <div className="panitia3-photo-wrapper">
            <img src="panitia3.jpeg" alt="AMI ITB" className="panitia3-photo" />
          </div>
          <div className="text-content">
            <h2 className="number">3.</h2>
            <h2>
              Panitia Lapangan <span className="important">Aku Masuk ITB 2023</span>
            </h2>
            <a href="#" className="box">
              More
            </a>
          </div>
        </div>
        <div className="content-portfolio4">
          <div className="text-content">
            <h2 className="number">4.</h2>
            <h2>
              Trainer{" "}
              <span className="important">Character Development Training 2024</span>
            </h2>
            <a href="#" className="box">
              More
            </a>
          </div>
          <div className="panitia4-photo-wrapper">
            <img
              src="panitia4.jpeg"
              alt="Makrab STEIK"
              className="panitia4-photo"
            />
          </div>
        </div>
        <div className="content-portfolio5">
          <div className="text-content">
            <h2 className="number">5.</h2>
            <h2>
              Panitia Finance <span className="important">Makrab KSEP 23</span>
            </h2>
            <a href="#" className="box">
              More
            </a>
          </div>
        </div>
        <div className="content-portfolio5">
          <div className="text-content">
            <h2 className="number">6.</h2>
            <h2>
              Panitia Konsumsi <span className="important">DFBWD 23</span>
            </h2>
            <a href="#" className="box">
              More
            </a>
          </div>
        </div>
        <div className="content-portfolio5">
          <div className="text-content">
            <h2 className="number">7.</h2>
            <h2>
              Lomba <span className="important">Inspectra UGM</span>
            </h2>
            <a href="#" className="box">
              More
            </a>
          </div>
        </div>
        <div className="content-portfolio5">
          <div className="text-content">
            <h2 className="number">8.</h2>
            <h2>
              Panitia Humas <span className="important">PTD KSEP</span>
            </h2>
            <a href="#" className="box">
              More
            </a>
            <a href="./../skill" className="skills">
              Skills
            </a>
          </div>
        </div>
      </div>
    </>
    );
  }
  