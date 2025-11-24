import './sidebar.css';

const Sidebar = ({ comp, setComp }) => {

    return (
        <aside className="sidebar">
            <p style={{background: comp == 'icons' ? '#0a1520' : ''}} onClick={() => setComp('icons')}>Iconos</p>
            <p style={{background: comp == 'tooltips' ? '#0a1520' : ''}} onClick={() => setComp('tooltips')}>Tooltips</p>
            <p style={{background: comp == 'accordion' ? '#0a1520' : ''}} onClick={() => setComp('accordion')}>Accordion</p>
            <p style={{background: comp == 'popup' ? '#0a1520' : ''}} onClick={() => setComp('popup')}>Popup</p>
        </aside>
    );
};

export default Sidebar;