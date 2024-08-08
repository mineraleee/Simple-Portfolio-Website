import './../style5.css'

export default function Home() {
    return (
    <>
        <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
        />
        <header className="header">
            <a href="./../dashboard" className="first">
            <span id="highlight">My</span> web!
            </a>
            <nav className="menu">
            <a href="./../dashboard">Home</a>
            <a href="./../about">About</a>
            <a href="./../portfolio">Portfolio</a>
            <a href="./../skill">Skills</a>
            <a className="active" href="./contact">
                Contact
            </a>
            </nav>
        </header>
        <div className="content">
            <h2 id="title">
            Social <span id="important"> Media</span>
            </h2>
            <h3 id="title2">Contact Me!</h3>
            <div className="contact">
            <a
                href="https://www.linkedin.com/in/heleni-gratia-8174a9289/" target="_blank">
                <i className="bx bxl-linkedin" />
            </a>
            <a href="https://www.instagram.com/helenitamz23/" target="_blank">
                <i className="bx bxl-instagram" />
            </a>
            <a href="#">
                <i className="bx bxl-twitter" />
            </a>
            </div>
        </div>
    </>
    );
  }
  