import './sidebar.css';

const Sidebar = ({ comp, setComp }) => {

    return (
        <aside className="sidebar">
            <p style={{background: comp == 'icons' ? '#0a1520' : ''}} onClick={() => setComp('icons')}>Iconos</p>
            <p style={{background: comp == 'tooltips' ? '#0a1520' : ''}} onClick={() => setComp('tooltips')}>Tooltips</p>
            <p style={{background: comp == 'loader' ? '#0a1520' : ''}} onClick={() => setComp('loader')}>Loader</p>
            <p style={{background: comp == 'snackbar' ? '#0a1520' : ''}} onClick={() => setComp('snackbar')} >Snackbar</p>
            <p style={{background: comp == 'modal' ? '#0a1520' : ''}} onClick={() => setComp('modal')}>Modal</p>
        </aside>
    );
};

export default Sidebar;