import React from 'react';

import './form-input.styles.scss';

const FormInput = ( {handleChange, label, id, value, ...otherProps} ) => (
    <div className="group">
        <input id={id} className='form-input' onChange={handleChange} {...otherProps} />
            {
                label ?
                    (
                        <label
                            htmlFor={id}
                            className={`${
                                value.length ? "shrink" : ""
                            } form-input-label`}
                        >{label}</label>
                    ) : null
            }
    </div>
);

export default FormInput;