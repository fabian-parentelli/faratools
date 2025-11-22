import './toolTipCompData.css';

const ToolTipCompData = ({ values, setValues }) => {

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    return (
        <div className="toolTipCompData flex-col">
            <p><span>{'<'}</span><span className='cdpb'>Tooltip</span></p>
            <p>  text=<span className='cdpo'>
                "<input
                    type="text" name='text' value={values.text} size={values.text.length - 1 || 1}
                    onChange={handleChange}
                />"
            </span></p>
            <p>  position=<span className='cdpo'>
                "<input
                    type="text" name='position' value={values.position} size={values.position.length - 1 || 1}
                    onChange={handleChange}
                />"
            </span></p>
            <p className='pgreen'>  // top, bottom, left, right, or none</p>
            <p>  backgroundColor=<span className='cdpo'>
                "<input
                    type="text" name='backgroundColor' value={values.backgroundColor} size={values.backgroundColor.length - 1 || 1}
                    onChange={handleChange}
                />"
            </span></p>

            <p>  color=<span className='cdpo'>"<input
                    type="text" name='color' value={values.color} size={values.color.length - 1 || 1}
                    onChange={handleChange}
                />"
            </span></p>
            
            <p>  cursor=<span className='cdpo'>"<input
                    type="text" name='cursor' value={values.cursor} size={values.cursor.length - 1 || 1}
                    onChange={handleChange}
                />"
            </span></p>
            <p><span>{'>'}</span></p>
                <p> {`{ Children }`}</p>
            <p><span>{'</'}</span><span className='cdpb'>Tooltip</span><span>{'>'}</span></p>
        </div>
    );
};

export default ToolTipCompData;