import reactLogo from '../assets/react.svg'

export default (props) => (
    <nav className={props.darkMode ? "dark" : ""}>
        <div className="logo">
            <img src={reactLogo} alt="React logo" />
            <h3>ReactFacts</h3>
        </div>

        <div className="theme-toggler">
            <p className="toggle-light">Light</p>
            <div className="toggle-slider" onClick = {props.toggleDarkMode}>
                <div className="toggle-slider-circle"></div>
            </div>
            <p className="toggle-dark">Dark</p>
        </div>
    </nav>
)