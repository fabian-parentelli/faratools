import './accordionComp.css';
import { useState } from 'react';
import { Icons, Accordion } from 'fara-comp-react';
import { dataUtils } from '../../../../../data.utils.js';
import AccBody from './AccBody/AccBody.jsx';

const AccordionComp = () => {

    const [copy, setCopy] = useState(false);

    const [values, setValues] = useState({
        title: 'Este es el título',
        styles: {
            backColHeader: '#2f14de',
            colorHeader: '#fff',
            backColContent: '#f0f0f0',
            colorContent: '#000',
            paddingHeader: '1rem',
            borderAcordion: '1px solid #333',
            iconBold: 2,
            iconColor: '#fff',
            iconSize: '1.2rem',
            iconType: 'chevron',
            heightHeader: '100%'
        }
    });

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText('import { Accordion } from "fara-comp-react";');
        setTimeout(() => { setCopy(false) }, 3000);
    };

    return (
        <div className="accordionComp flex-col">
            <div>
                <h2>Accordion</h2>
                <p className='pgray'>{dataUtils.version}</p>
            </div>

            <code className='icosnCopmTop' onClick={handleCopy}>
                <p><span className='cdpi'>import</span> <span className='cdpy'>{'{'}</span> <span className='cdpb'>Accordion</span> <span className='cdpy'>{'}'}</span> <span className='cdpi'>from</span> <span className='cdpo'>"fara-comp-react"</span>;</p>
                <Icons type={!copy ? 'copy' : 'success'} size='20px' color='#0054A6' hover={true} />
            </code>

            <section className='accordionCompSect'>
                <pre className='icosnCopmTop'>
                    <AccBody values={values} setValues={setValues} />
                </pre>

                <div style={{ width: '500px' }}>
                    <Accordion
                        title={values.title}
                        styles={values.styles}
                    >
                        <div className='flex-col'>
                            <p>Item 1</p>
                            <p>Item 2</p>
                            <p>Item 3</p>
                            <p>Item 4</p>
                        </div>
                    </Accordion>
                </div>
            </section>

        </div>
    );
};

export default AccordionComp;