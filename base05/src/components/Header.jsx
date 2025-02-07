import chefClaudeIcon from '/chef-claude-icon.png';

export default function Header() {

    function handleMouseClick() {
        alert("Welcome to Chef Mistral's Recipe App!")
    }



    return (
        <header 
            className="header-main"
            onMouseDown={handleMouseClick}
        >
            <div className="header-main-container">
                <img className="header-img" src={chefClaudeIcon} alt="Chef Claude Icon" />
                <span className="header-title">Chef Mistral</span>
            </div>
        </header>
    )
}