import { Link } from "react-router-dom"
export default function Header(){
    return(
        <header>
            <h1>logo goes here</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/newpage'>new page</Link>
            </nav>
        </header>
    )
}