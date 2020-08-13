import React from 'react';
import {FormInput} from '../../common';

const Writing = ({
    onChangeTitle,
    onChangeInquiry,
    register,
    handleSubmit,
    errors
}) =>{
    return(
        <form onSubmit={handleSubmit}>
            <h2>문의하기</h2>
            <FormInput 
               cn="RegisterInputBox" 
               type="text" 
               name="title"
               register={register} 
               errors={errors&&errors['title']}
               changed={onChangeTitle}
            />
            <FormInput 
               cn="RegisterInputBox" 
               type="text" 
               name="inquiry"
               register={register} 
               errors={errors&&errors['inquiry']}
               changed={onChangeInquiry}
            />
            <input type="submit" className="WritingButton" data-testid="button" />
        </form>
    )
}

export default Writing;