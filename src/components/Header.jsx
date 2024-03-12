import { Link } from "react-router-dom"
export default function Header(){
    return(
        <header>
            <h1>Jenni Park</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/AboutMe'>About Me</Link>
            </nav>
        </header>
    )
}