import { HistoryContainer, HistoryList, Status } from './styles';

const Index = () => {
  return (
    <div>
      <HistoryContainer>
        <h1>HISTORY</h1>

        <HistoryList>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Início</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Tarefa 03</td>
                <td>20 minutos</td>
                <td>Há cerca de 2 meses</td>
                <td>
                  <Status statusColor="green">Concluído</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefa 02</td>
                <td>20 minutos</td>
                <td>Há cerca de 2 meses</td>
                <td>
                  <Status statusColor="red">Interrompido</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefa 01</td>
                <td>10 minutos</td>
                <td>Há cerca de 1 mese</td>
                <td>
                  <Status statusColor="yellow">Em andamento</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefa 03</td>
                <td>20 minutos</td>
                <td>Há cerca de 2 meses</td>
                <td>
                  <Status statusColor="green">Concluído</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefa 02</td>
                <td>20 minutos</td>
                <td>Há cerca de 2 meses</td>
                <td>
                  <Status statusColor="green">Concluído</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefa 01</td>
                <td>10 minutos</td>
                <td>Há cerca de 1 mese</td>
                <td>
                  <Status statusColor="green">Concluído</Status>
                </td>
              </tr>
            </tbody>
          </table>
        </HistoryList>
      </HistoryContainer>
    </div>
  );
};

export default Index;
