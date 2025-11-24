import './popupComp.css';
import { useState } from 'react';
import { Icons, Popup } from 'fara-comp-react';
import { dataUtils } from '../../../../../data.utils.js';
import PopupCompDet from './PopupCompDet/PopupCompDet.jsx';

const PopupComp = () => {

    const [copy, setCopy] = useState(false);
    const [values, setValue] = useState({
        text: 'texto',
        icon: 'app',
        styles: {
            color: 'white',
            size: '30px',
            position: 'l',
            width: '100px'
        }
    })

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText('import { Popup } from "fara-comp-react";');
        setTimeout(() => { setCopy(false) }, 3000);
    };

    return (
        <div className="popupComp flex-col">
            <div>
                <h2>Popup</h2>
                <p className='pgray'>{dataUtils.version}</p>
            </div>

            <code className='icosnCopmTop' onClick={handleCopy}>
                <p><span className='cdpi'>import</span> <span className='cdpy'>{'{'}</span> <span className='cdpb'>Popup</span> <span className='cdpy'>{'}'}</span> <span className='cdpi'>from</span> <span className='cdpo'>"fara-comp-react"</span>;</p>
                <Icons type={!copy ? 'copy' : 'success'} size='20px' color='#0054A6' hover={true} />
            </code>

            <section className='popupCompSect'>

                <pre className='icosnCopmTop'>
                    <PopupCompDet values={values} setValues={setValue} />
                </pre>

                <div className='flex-col'>
                    <Popup
                        text={values.text}
                        icon={values.icon}
                        styles={{
                            color: values.styles.color,
                            size: values.styles.size,
                            position: values.styles.position,
                            width: values.styles.width
                        }}
                    >
                        <div style={{ color: 'black', padding: '10px' }}>
                            <p>Item 1</p>
                            <p>Item 2</p>
                            <p>Item 3</p>
                        </div>
                    </Popup>

                    <table aria-label="Posiciones del Popup">
                        <thead>
                            <tr>
                                <th>Position</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>r</code></td>
                                <td>Right</td>
                            </tr>
                            <tr>
                                <td><code>l</code></td>
                                <td>Left</td>
                            </tr>
                            <tr>
                                <td><code>t</code></td>
                                <td>Top</td>
                            </tr>
                            <tr>
                                <td><code>b</code></td>
                                <td>Bottom</td>
                            </tr>
                            <tr>
                                <td><code>lt</code></td>
                                <td>Left - Top</td>
                            </tr>
                            <tr>
                                <td><code>rt</code></td>
                                <td>Right - Top</td>
                            </tr>
                            <tr>
                                <td><code>lb</code></td>
                                <td>Left - Bottom</td>
                            </tr>
                            <tr>
                                <td><code>rb</code></td>
                                <td>Right - Bottom</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </section>
        </div>
    );
};

export default PopupComp;