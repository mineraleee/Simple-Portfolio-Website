import './../style.css'

export default function Home() {
    return (
    <>
      <header className="header">
        <a href="./dashboard" className="first">
          <span id="highlight">My</span> web!
        </a>
        <nav className="menu">
          <a className="active" href="./dashboard">Home</a>
          <a href="./../about">About</a>
          <a href="./../portfolio">Portfolio</a>
          <a href="./../skills">Skills</a>
          <a href="./../contact">Contact</a>
        </nav>
      </header>
      <div className="home">
        <div className="content-home">
          <div className="profile">
            <img src="foto.png" alt="My Photo" className="profile-photo" />
          </div>
          <div className="text-content">
            <h2>Hello, It's Me</h2>
            <br/>
            <h1>
              Heleni Gratia <br /> Meitrina Tampubolon
            </h1>
            <h2>
              And I'm a{" "}
              <span id="important">2nd Level Informatics Engineering Student</span>
            </h2>
            <p>
              Someone who lives their days normally. Choose
              technology-related majors for their motivation to study without
              memorize. After getting acquainted with the world of informatics, it became
              love it and always want to know new things related to it. In spare time,
              I do my own exploration to learn and also do
              my hobby. I have strong motivation and am able to adapt
              well.
            </p>
            <a href="./../about" id="box">
              About Me
            </a>
          </div>
        </div>
      </div>
    </>
    );
  }
  