import './../style4.css'

export default function skill() {
    return (
    <>
        <header className="header">
            <a href="./../dashboard" className="first">
                <span id="highlight">My</span> web!
            </a>
            <nav className="menu">
                <a href="./../dashboard">Home</a>
                <a href="./../about">About</a>
                <a href="./../portfolio">Portfolio</a>
                <a className="active" href="./skill">
                    Skills
                </a>
                <a href="./../contact">Contact</a>
            </nav>
        </header>
        <div className="skills">
            <div className="content-skills">
            <div className="text-content">
                <h1 id="title">Skills</h1>
                <br />
                <div className="opsi">
                    <div>
                        <h3>Python</h3>
                    </div>
                    <div>
                        <h3>HTML</h3>
                    </div>
                    <div>
                        <h3>CSS</h3>
                    </div>
                    <div>
                        <h3>C++</h3>
                    </div>
                    <div>
                        <h3>Pascal</h3>
                    </div>
                </div>
                <a href="./../contact" id="box">
                Contact
                </a>
            </div>
            </div>
        </div>
    </>
    );
  }
  