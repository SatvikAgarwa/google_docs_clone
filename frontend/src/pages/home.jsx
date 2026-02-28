import "./styles.css"

export default function Home() {
    return (
        <div className="container">
            <div className="left">
                <div className="head">
                    <div className="head-left">
                        <img src="logo.png" alt="logo" className="logo" />
                        <div className="welcome-text">
                            <h1>Welcome</h1>
                            <h3>Satvik, What's Up</h3>
                        </div>
                    </div>

                    <input type="text" placeholder="🔎 Search" />
                </div>
                <div className="middle">
                    <div className="profile-card card">
                        <p>Profile</p>
                        <div className="profile">
                            <div className="profile-ring">
                                <div className="gap">
                                    <img src="https://i.namu.wiki/i/bXvoxoQTdizpiPKcex5yfh9f_1LhBUf3S92gKypJDdz4DFEr-qr6-Olay_vJ65yN7tA-8iBg1CE3ppl0HeDb2zJJS-WadctZTYzExO6INwhDfJkOU4L0hmqqB1dpbXsh7hcdbMixVERM3ssT1G8a549bSMN8X5sUlVAqCBg3vbo.web" alt="profile-img" />
                                </div>
                            </div>
                            <h3>Eunhye Park</h3>
                            <p>Dashboard Admin</p>
                        </div>
                    </div>
                    <div className="p-section">
                        <h1>Priorites</h1>
                        <div className="p-cards">
                            <div className="p-card first card">Nothing to show</div>
                            <div className="p-card second card">Nothing to show</div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <h3>All documents</h3>
                    <div className="dropdown">
                        <button>Select Time</button>
                        <div className="dropdown-content">
                            <a href="#">Last Day</a>
                            <a href="#">Last week</a>
                            <a href="#">Last Month</a>
                        </div>
                    </div>
                </div>
                <div className="recent-row">
                    <p>No Recent Activity</p>
                </div>
            </div>
            <div className="right">
                <div className="line"></div>
                <div className="cards">
                    <div className="recent-card card r">Nothing to Show</div>
                    <div className="created-card card r">Nothing to Show</div>
                    <div className="edited-card card r">Nothing to Show</div>
                </div>
            </div>
        </div>
    )
}