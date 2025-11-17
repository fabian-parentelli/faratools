import './iconsCompData.css';

const IconsCompData = ({ values, setValues }) => {

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    return (
        <code className="flex-col iconsCompData">
            <p><span>{'<'}</span><span className='cdpb'>Icons</span></p>

            <p>  color=<span className='cdpo'>
                "<input
                    type="text" name='color' value={values.color} size={values.color.length - 1 || 1}
                    onChange={handleChange}
                />"
            </span></p>

            <p>  size=<span className='cdpo'>
                "<input
                    type="text" name='size' value={values.size} size={values.size.length - 1 || 1}
                    onChange={handleChange}
                />px"
            </span></p>
            <p>  onClick=<span className='cdpo'></span><span className='cdpy'>{'{'}</span><span className='cdpi'>()</span><span className='cdpi'>{'=>'}</span> <span className='cdpb'>console.</span><span className='cdpi'>log</span><span className='cdpo'>{'("Hace click")'}</span><span className='cdpy'>{'}'}</span> </p>

            <p>  bold=<span className='cdpo'></span><span className='cdpy'>{'{'}</span><span className='cdpb'><input
                type="text" name='bold' value={values.bold} size={1}
                onChange={handleChange}
            /></span><span className='cdpy'>{'}'}</span></p>

            <p>  type=<span className='cdpo'>
                "<input
                    type="text" name='type' value={values.type} size={values.type.length - 1 || 1}
                    onChange={handleChange}
                />"
            </span></p>

            <p onClick={()=> setValues({...values, hover: !values.hover})}>  hover=<span className='cdpo'></span><span className='cdpy'>
                "{values.hover ? 'true' : 'false'}"</span></p>
            <p>{'/>'}</p>
        </code>
    );
};

export default IconsCompData;