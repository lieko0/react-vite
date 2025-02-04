import chefClaudeIcon from '/chef-claude-icon.png';

export default function Header() {
    return (
        <header className="header-main">
            <div className="header-main-container">
                <img className="header-img" src={chefClaudeIcon} alt="Chef Claude Icon" />
                <span className="header-title">Chef Claude</span>
            </div>
        </header>
    )
}