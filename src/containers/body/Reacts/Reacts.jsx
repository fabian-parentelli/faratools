import './reacts.css';
import { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import IcosnCopm from './comps/IconsComp/IconsComp';
import ToolTipsComp from './comps/ToolTipsComp/ToolTipsComp';
import AccordionComp from './comps/AccordionComp/AccordionComp';
import PopupComp from './comps/PopupComp/PopupComp';

const Reacts = () => {

    const [comp, setComp] = useState('icons');

    return (
        <div className="reacts">
            <Sidebar comp={comp} setComp={setComp} />
            {comp === 'icons' && <IcosnCopm />}
            {comp === 'tooltips' && <ToolTipsComp />}
            {comp === 'accordion' && <AccordionComp />}
            {comp === 'popup' && <PopupComp />}
        </div>
    );
};

export default Reacts;