import chefClaudeIcon from '/chef-claude-icon.png';

export default function Header() {

    function handleMouseClick() {
        alert("Welcome to Chef Claude's Recipe App!")
    }



    return (
        <header 
            className="header-main"
            onMouseDown={handleMouseClick}
        >
            <div className="header-main-container">
                <img className="header-img" src={chefClaudeIcon} alt="Chef Claude Icon" />
                <span className="header-title">Chef Claude</span>
            </div>
        </header>
    )
}