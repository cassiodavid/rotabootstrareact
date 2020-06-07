
import React from 'react';
import { Table } from 'reactstrap';
import ButtonTabela from './ButtonTabela'
import './TabelaSt.css';

const Head = ({ keys, head }) => {
    const tableHead = head || {}

    return (

        <thead>
            <tr>
                {keys.map(key =><th key={key} >{tableHead[key] || key}</th>)}
                <th>Status</th>
            </tr>
        </thead>

    )
}

const Row = ({ record }) => {
    const keys = Object.keys(record)
    return (
        <tr key={record.id}>
            {keys.map(key =><td className="linhas"scope="row" key={key} >{record[key]}</td>)}
            <td><ButtonTabela></ButtonTabela></td>
            
        </tr>
    )

}



const Tabela = ({ data, head }) => {
    const keys = Object.keys(data[0])
    
    
    return (
       
        <Table className='fuba' striped >
            <Head keys={keys} head={head} />
            <tbody >

                {data.map(record => <Row record={record} />)}
                
            </tbody>


        </Table>
      
    
    );
}

export default Tabela;


