export default function ProjectCard({props}){
    return (
        <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">{props.title}</p>
                        </header>
                        <div className="card-content">
                            <div className="content">
                                <p>{props.description}</p>
                            </div>
                        </div>
                        <footer className="card-footer">
                            <a href={props.repo} className="card-footer-item">
                                <ion-icon className='icon' name="logo-github"></ion-icon>
                            </a>
                            <a href={props.site} className="card-footer-item">
                                <ion-icon name="earth-outline"></ion-icon>
                            </a>
                        </footer>
                    </div>
    )
}