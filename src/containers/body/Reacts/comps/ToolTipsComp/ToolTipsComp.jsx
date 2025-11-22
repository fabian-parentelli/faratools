import './toolTipsComp.css';
import { useState } from 'react';
import { Icons, Tooltip } from 'fara-comp-react';
import { dataUtils } from '../../../../../data.utils.js';
import ToolTipCompData from './ToolTipCompData/ToolTipCompData.jsx';

const ToolTipsComp = () => {

    const [copy, setCopy] = useState(false);
    const [values, setValues] = useState({
        text: 'tooltip',
        position: 'top',
        backgroundColor: '#333',
        color: 'white',
        cursor: 'pointer'
    });

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText('import { Tooltip } from "fara-comp-react";');
        setTimeout(() => { setCopy(false) }, 3000);
    };

    return (
        <div className="toolTipsComp flex-col">
            <div>
                <h2>Tooltips</h2>
                <p className='pgray'>{dataUtils.version}</p>
            </div>

            <code className='icosnCopmTop' onClick={handleCopy}>
                <p><span className='cdpi'>import</span> <span className='cdpy'>{'{'}</span> <span className='cdpb'>Tooltip</span> <span className='cdpy'>{'}'}</span> <span className='cdpi'>from</span> <span className='cdpo'>"fara-comp-react"</span>;</p>
                <Icons type={!copy ? 'copy' : 'success'} size='20px' color='#0054A6' hover={true} />
            </code>

            <section className='icosnCopmItems'>
                <pre className='icosnCopmTop'>
                    <ToolTipCompData values={values} setValues={setValues} />
                </pre>

                <div>
                    <Tooltip
                        text={values.text}
                        position={values.position}
                        backgroundColor={values.backgroundColor}
                        color={values.color}
                        cursor={values.cursor}
                    >
                        <Icons />
                    </Tooltip>
                </div>

                <p className='pwhite'>Para hacer pruebas pasa el cursor por encima del icono</p>
            </section>
        </div>
    );
};

export default ToolTipsComp;