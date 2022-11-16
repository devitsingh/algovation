import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";




const FormSec = (props) => {
        let history = useHistory();
        const {register, handleSubmit, formState: { errors }} = useForm();
        const handleRegistration = (data) => {
            console.log(data);
            history.push(`/${props.navigates}`);
        }
        const handleError = (errors) => {};
        const registerOptions = {
            name: { required: "Please Fill The Name" }
        }


        return(
                    <React.Fragment>
                            <Form id={props.action} onSubmit={handleSubmit(handleRegistration, handleError)}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder={props.placeholder} name="name" {...register('name', registerOptions.name)} className="inputForm" />
                                    <span className="text-danger text-center d-block">{errors ?.name && errors.name.message}</span>
                                </Form.Group>
                                <Button variant="default"  className="primary-btn" type="submit">{props.Button} </Button>
                            </Form>
                    </React.Fragment>
        )
}
export default FormSec;