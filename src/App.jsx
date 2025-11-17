import { useState } from "react";
import NavBar from "./containers/Navbar/NavBar";
import Headers from "./containers/Headres/Headers";
import Reacts from "./containers/body/Reacts/Reacts";

const App = () => {

    const [view, setView] = useState('react');

    return (
        <>
            <NavBar view={view} setView={setView} />
            <Headers />
            {view == 'react' && <Reacts />}
        </>
    );
};

export default App;