//Footer.js
import { Link, Routes, Route } from "react-router-dom";
import './Footer.css';
export default function Footer() {
    return (
        <>
            <footer>
                <p class="quote">This website contains details of various persons.</p>
                <div class="icons">
                    <li><a href=""><Link to='/facebook'><i class="fa-brands fa-facebook fa-bounce"></i></Link>Facebook</a></li>
                    <li><a href=""><Link to='/instagram'><i class="fa-brands fa-instagram fa-bounce"></i></Link>Instagram</a></li>
                    <li><a href=""><Link to='/github'><i class="fa-brands fa-github fa-bounce"></i></Link>Github</a></li>
                    <li><a href=""><Link to='/Linkedin'><i class="fa-brands fa-linkedin fa-bounce"></i></Link>Linkedin</a></li>
                </div>
                <a href="mailto:gurramsivaanjali2004@gmail.com">Contact me</a>
            </footer>
        </>
    )
}