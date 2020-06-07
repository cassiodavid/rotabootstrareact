import React from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import './TabelaSt.css'
import { Badge } from 'reactstrap';
const ButtonPo = (props) => {
  return (
    <div>
     
      <Button id="PopoverLegacy" type="button" color="info" size="sm">
       Status Chamadas  
      </Button>
      {' '}
      
      <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverLegacy">
        <PopoverHeader>

            <div className="popH">Status do Chamado <Badge color="primary">Pendente</Badge></div>

        </PopoverHeader>
        <PopoverBody>

            <div className="popT">
            O chamado no Momento estar em Processamento, Favor Aguardar! {''}
            </div>
  
       </PopoverBody>
      </UncontrolledPopover>
      
    </div>
  );
}

export default ButtonPo;