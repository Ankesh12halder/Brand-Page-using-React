import './App.css';    //global css
import Hero from './components/Hero';
const App=()=> {
    return (
    <div>
        <nav className='container'>
            <div className="logo">
                <img src="/images/brand_logo.png" alt="logo" />
            </div>
            <ul>
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>
            <button>login</button>
        </nav>
        <Hero />
    </div>
    )
};
export default App;