export default function Header() {
    return (
        <header className="nav-header">
            <img className="nav-logo" src="react-logo.png" alt="React logo" />
            <nav>
                <ul className="nav-list">
                    <li><a href="">Pricing</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}