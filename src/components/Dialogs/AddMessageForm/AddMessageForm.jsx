import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { requiredField, maxLengthCreator } from '../../../utilits/validators/validators';

let maxLengthCreator50 = maxLengthCreator(50)

const AddMessageForm = (props) => {     

    return(
        <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} validate = {[requiredField,maxLengthCreator50]}
        name='newMessageText' placeholder='Enter message here' />
      </div>
      <div>
        <button >Send</button>
      </div>
    </form>
    )
}


export default reduxForm({form:'dialog-add-message-form'})(AddMessageForm);