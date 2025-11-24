import './accBody.css';

const AccBody = ({ values, setValues }) => {

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
        <div className="accBody flex-col">
            <p><span>{'<'}</span><span className='cdpb'>Accordion</span></p>

            <p>  title=<span className='cdpo'>
                "<input
                    type="text"
                    name='title'
                    value={values.title || ''}
                    size={values.title?.length - 1 || 1}
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

export default AccBody;
