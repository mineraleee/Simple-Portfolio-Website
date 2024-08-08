import './../style2.css'

export default function about() {
    return (
        <>
        <header className="header">
          <a href="./../dashboard" className="first">
            <span id="highlight">My</span> web!
          </a>
          <nav className="menu">
            <a href="./../dashboard">Home</a>
            <a className="active" href="./about">
              About
            </a>
            <a href="./../portfolio">Portfolio</a>
            <a href="./../skill">Skills</a>
            <a href="./../contact">Contact</a>
          </nav>
        </header>
        <div className="about">
          <div className="content-about">
            <div className="text-content">
              <h1>Minat dan Bakat</h1>
              <br />
              <div className="opsi">
                <h3>Musik: Bermain Biola</h3>
              </div>
              <div className="opsi">
                <h3>Olahraga: Lari</h3>
              </div>
              <div className="opsi">
                <h3>Hiburan: Menonton Anime dan Membaca Novel</h3>
              </div>
              <div className="opsi">
                <h3>Teknologi: Pemrograman dan Coding</h3>
              </div>
              <a href="./../portfolio" id="box">
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </>     
    );
  }
  