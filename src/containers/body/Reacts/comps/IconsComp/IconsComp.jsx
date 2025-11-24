import './icosnCopm.css';
import { useState } from 'react';
import { Icons } from 'fara-comp-react';
import { dataUtils } from '../../../../../data.utils.js';
import IconsCompData from './IconsCompData/IconsCompData.jsx';

const IcosnCopm = () => {

    const [copy, setCopy] = useState(false);
    const [values, setValues] = useState({
        color: 'white',
        size: 50,
        onClick: `Este es el onClik del ícono`,
        backCol: 'none',
        bold: 2,
        type: 'app',
        hover: true
    });

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText('import { Icons } from "fara-comp-react";');
        setTimeout(() => { setCopy(false) }, 3000);
    };

    return (
        <div className="icosnCopm flex-col">
            <div>
                <h2>Iconos</h2>
                <p className='pgray'>{dataUtils.version}</p>
            </div>

            <code className='icosnCopmTop' onClick={handleCopy}>
                <p><span className='cdpi'>import</span> <span className='cdpy'>{'{'}</span> <span className='cdpb'>Icons</span> <span className='cdpy'>{'}'}</span> <span className='cdpi'>from</span> <span className='cdpo'>"fara-comp-react"</span>;</p>
                <Icons type={!copy ? 'copy' : 'success'} size='20px' color='#0054A6' hover={true} />
            </code>

            <section className='icosnCopmItems'>

                <pre className='icosnCopmTop'>
                    <IconsCompData values={values} setValues={setValues} />
                </pre>

                <Icons
                    color={values.color}
                    size={`${values.size}px`}
                    onClick={() => alert(values.onClick)}
                    backCol={values.backCol}
                    bold={values.bold}
                    type={values.type}
                    hover={values.hover}
                />

            </section>

            <section className='iconsToolsTools'>
                {icons.map((ic, ind) => (
                    <div key={ind} onClick={() => navigator.clipboard.writeText(ic)}>
                        <Icons type={ic} color='#EAEBEF' />
                    </div>
                ))}
            </section>

        </div>
    );
};

export default IcosnCopm;

const icons = ["facebook", "x", "instagram", "youtube", "github", "user", "info", "app", "error", "warning",
    "success", "dashboard", "star", "message", "bell", "run", "door", "ticket", "shirt", "computer", "clipboard",
    "report", "userCircle", "image", "delete", "square", "padlock", "carrot", "copy", "calendar", "map", "credit",
    "publicity", "cart", "down", "tickets", "pdf", "notimage", "notcredit", "event", "video", "arrows", "qr",
    "scan", "print", "setting", "activity", "menu", "bookUser", "book", "css", "html", "js", "node", "react",
    "mongo", "npm", "spotify", "whatsapp", "store", "camera", "cash", "chart", "check", "clock", "cloud", "database",
    "analytic", "direction", "sendfile", "house", "id", "lock", "email", "bike", "clip", "phone", "like", "truck",
    "search", "icon", "arrowright", "arrowleft", "notuser", "notmap", "browser", "question", "boxPack", "bank",
    "return", "onoff", "radio", "play", "pause", "playback", "playnext", "volume", "volumenot", "playlist", "eye",
    "eyeclosed", "browserplus", "browserdel", "cashregister", "dothor", "dotver", "pencil", "signature",
    "certificate", "chevron", "replace", "folder", "paint", "bag", "bottle", "coffee", "glass"
];