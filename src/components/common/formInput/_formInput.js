import * as React from "react";
import {StyledFormInput} from './_style';

const FormInput = ({
    cn,
    name,
    type,
    errors,
    changed,
    register
}) =>{
    return(
        <StyledFormInput className={cn}>
             <input 
                onChange={changed} 
                type={type} 
                name={name} 
                placeholder={name}
                ref={register} 
             />
            {errors && <p role="warning">⚠ {errors.message}</p>}
        </StyledFormInput>
    )
}

export default FormInput;