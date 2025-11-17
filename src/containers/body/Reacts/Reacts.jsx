import './reacts.css';
import { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import IcosnCopm from './comps/IconsComp/IconsComp';

const Reacts = () => {

    const [comp, setComp] = useState('icons');

    return (
        <div className="reacts">
            <Sidebar comp={comp} setComp={setComp} />
            {comp === 'icons' && <IcosnCopm />}
        </div>
    );
};

export default Reacts;