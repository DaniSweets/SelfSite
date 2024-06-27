import AboutMe from "./AboutMe"

export default function Header() {
    return (
        <header className="section has-text-centered">
            <div className="card"><div className="card-content">
                <p className="title">Dani Sweetwood</p>
                <AboutMe />
            </div></div>
        </header>
    )
}