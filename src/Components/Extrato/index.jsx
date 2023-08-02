import React from "react";
import { Box, Botao } from "../UI"
import { extratoLista } from "../../info";
 
const Extrato = () => {
    return(
        <Box>
            {extratoLista.updates.map(({ id, type, value, date, from }) => {
                return(
                    <div key={id}>
                        <div>{type}</div>
                        <div>{from}</div>
                    </div>
                );
            })}
            <Botao>Ver mais</Botao>
        </Box>
    );
}

export default Extrato;