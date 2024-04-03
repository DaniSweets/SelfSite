import ProjectCard from "./ProjectCard"

export default function Projects() {

    var trafficJam = {
        title: "Traffic Jam",
        description: "This site utilized TicketMaster's API to show local events and save them within local storage.",
        repo: "https://github.com/eagersidekick/Traffic_Jam",
        site: "https://eagersidekick.github.io/Traffic_Jam/"
    }

    var weatherDashboard = {
        title: "Weather Dashboard",
        description: "This project used a weather API to show a five day forecast for a given location.",
        repo: "https://github.com/DaniSweets/Weather-Dashboard",
        site: "https://danisweets.github.io/Weather-Dashboard/"
    }

    var campaignManager = {
        title: "Campaign Manager",
        description: "This application utilized React to create a virtual space for TTRPG groups.",
        repo:"https://github.com/eagersidekick/Campaign_Manager",
        site:"https://campaign-manager.onrender.com/"
    }

    return (
        <div className="section">
            <div className="columns">
                <div className="column">
                    <ProjectCard props={trafficJam}/>
                    <ProjectCard props={weatherDashboard}/>
                </div>
                <div className="column">
                    <ProjectCard props={campaignManager}/>
                </div>
            </div>
        </div>
    )
};