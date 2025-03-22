import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";
import Backend from "../../services/Backend";

function TabelaGrupoClientes (){
     const [grupoClientes, setGrupoClientes] = useState([]);


    async function getUsers() {
        try {
            const response = await Backend.get("grupoclientes");
            console.log(response.data);
            setGrupoClientes(response.data);
        } catch (error) {
            console.error("Erro ao buscar grupos de clientes:", error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);
return(
  <div>
        <div>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome do grupo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {grupoClientes.map (grupo => (
                            <tr key={grupo.id_grupo_cliente}>
                                <td>{grupo.id_grupo_cliente}</td>
                                <td>{grupo.nome_grupo}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
  </div>
)}

export default TabelaGrupoClientes;

