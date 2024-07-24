import AboutMe from "./AboutMe"
import AboutMeMobile from "./AboutMeMobile";

let isMobile = null;
  
if (typeof window !== "undefined") {
  isMobile = window.innerWidth < 700;
}

var about = <AboutMe />

if (isMobile == true){
    about = <AboutMeMobile />
}

export default function Header() {
    return (
        <header className="section has-text-centered">
            <div className="card"><div className="card-content">
                <p className="title">Dani Sweetwood</p>
                {about}
            </div></div>
        </header>
    )
}