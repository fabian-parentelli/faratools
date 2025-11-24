import './popupCompDet.css';

const PopupCompDet = ({ values, setValues }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name !== 'title') {
            setValues({
                ...values,
                styles: { ...values.styles, [name]: value }
            });
        } else {
            setValues({ ...values, title: value });
        }
    };

    return (
        <div className="popupCompDet flex-col">
            <p><span>{'<'}</span><span className='cdpb'>Popup</span></p>

            <p>  text=<span className='cdpo'>
                "<input
                    type="text" name='text' value={values.text} size={values.text.length - 1 || 1}
                    onChange={handleChange}
                />"
            </span></p>

            <p>  icon=<span className='cdpo'>
                "<input
                    type="text" name='icon' value={values.icon} size={values.icon.length - 1 || 1}
                    onChange={handleChange}
                />"
            </span></p>

            <p>  styles=<span className='cdpo'>{'{'}</span></p>
            {values.styles && Object.keys(values.styles).map((key) => (
                <p key={key}>
                    {`    ${key}=`}<span className='cdpo'>
                        "<input
                            type="text"
                            name={key}
                            value={values.styles[key] || ''}
                            size={(values.styles[key]?.toString().length - 1) || 1}
                            onChange={handleChange}
                        />"
                    </span>
                </p>
            ))}
            <p><span className='cdpo'>{'}'}</span></p>

            <p><span>{'>'}</span></p>
            <p>  {`{ Children }`}</p>
            <p><span>{'</'}</span><span className='cdpb'>Accordion</span><span>{'>'}</span></p>
        </div>
    );
};

export default PopupCompDet;