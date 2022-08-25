import React from "react";
import { Form, Button } from 'react-bootstrap';

const FormInput = ({ onSubmit, onChangeHandler, value }) => (
    <Form
        style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}
        onSubmit={onSubmit}
    >
        <div style={{ fontWeight: "800", fontSize: "25px", margin: "20px auto" }}>
            Shorten your link!
        </div>
        <Form.Group style={{ width: "800px" }} className="mb-3" controlId="formBasicHere">
            <Form.Control value={value} onChange={onChangeHandler} type="text" placeholder="Enter URL here" required />
        </Form.Group>
        <Button type="submit" variant="primary">
            Shorten!
        </Button>
    </Form>
)

export default FormInput;