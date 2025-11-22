import './reacts.css';
import { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import IcosnCopm from './comps/IconsComp/IconsComp';
import ToolTipsComp from './comps/ToolTipsComp/ToolTipsComp';

const Reacts = () => {

    const [comp, setComp] = useState('icons');

    return (
        <div className="reacts">
            <Sidebar comp={comp} setComp={setComp} />
            {comp === 'icons' && <IcosnCopm />}
            {comp === 'tooltips' && <ToolTipsComp />}
        </div>
    );
};

export default Reacts;