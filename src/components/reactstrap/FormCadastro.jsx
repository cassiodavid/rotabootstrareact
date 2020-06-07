import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../../components/reactstrap/TabelaSt.css';
import Modals1 from './Modals1'
const FormCadastro = (props) => {
    return (
        <Form className="teste">
            <FormGroup>
                <Label for="exampleEmail">Nome</Label>
                <Input type="text" name="nome" id="exampleEmail" placeholder="Digite seu nome" />
            </FormGroup>

            <FormGroup>
                <Label for="exampleSelect">Setor Solicitado</Label>
                <Input type="select" name="select" id="exampleSelect">
                    <option>Setor 1</option>
                    <option>Setor 2</option>
                    <option>Setor 3</option>
                    <option>Setor 4</option>
                    <option>Setor 5</option>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="exampleText">Descrição</Label>
                <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>


            <Modals1 buttonLabel={"Submit"}></Modals1>
            {/*<Button>Submit</Button>*/}
        </Form>
    );
}

export default FormCadastro;