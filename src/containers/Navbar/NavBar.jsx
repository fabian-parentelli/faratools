import './navBar.css';

const NavBar = ({ view, setView }) => {

    return (
        <div className="navBar">
            <section>
                <p style={{color: view == 'react' ? '#778DA9' : ''}} onClick={()=> setView('react')}>Componentes</p>
                <p style={{color: view == 'css' ? '#778DA9' : ''}} onClick={()=> setView('css')}>CSS</p>
                <p style={{color: view == 'node' ? '#778DA9' : ''}} onClick={()=> setView('node')}>Node js</p>
            </section>
        </div>
    );
};

export default NavBar;