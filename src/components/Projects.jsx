import ProjectCard from "./ProjectCard"

export default function Projects() {

    var trafficJam = {
        title: "Traffic Jam",
        description: "This site utilized TicketMaster's API to show local events and save them within local storage.",
        languages: ["HTML", "CSS"],
        repo: "https://github.com/eagersidekick/Traffic_Jam",
        site: "https://eagersidekick.github.io/Traffic_Jam/"
    }

    var weatherDashboard = {
        title: "Weather Dashboard",
        description: "This project used a weather API to show a five day forecast for a given location.",
        languages: "HTML",
        repo: "https://github.com/DaniSweets/Weather-Dashboard",
        site: "https://danisweets.github.io/Weather-Dashboard/"
    }

    var campaignManager = {
        title: "Campaign Manager",
        description: "This application utilized React to create a virtual space for TTRPG groups.",
        languages: "HTML",
        repo:"https://github.com/eagersidekick/Campaign_Manager",
        site:"https://campaign-manager.onrender.com/"
    }

    var selfSite = {
        title: 'This Website',
        description: "This application uses React to show all my info with a sleek and minimalistic design.",
        languages: "HTML",
        repo: "https://github.com/DaniSweets/SelfSite",
        site: "https://danisweetwood.com"

    }

    return (
        <div className="section mb-4">
            <div className="columns">
                <div className="column">
                    <ProjectCard props={trafficJam}/>
                    <ProjectCard props={weatherDashboard}/>
                </div>
                <div className="column">
                    <ProjectCard props={campaignManager}/>
                    <ProjectCard props={selfSite}/>
                </div>
            </div>
        </div>
    )
}