//QUESTÃO 3: (ENADE 2017, Adaptada) Uma empresa trabalha na produção de concreto e terceiriza o serviço de transporte do produto. 
// Os caminhoneiros telefonam para a empresa e registram seu interesse pelo trabalho. Todas as manhãs, os caminhoneiros estacionam no pátio 
// da empresa e aguardam sua vez. O atendimento segue o critério de ordem de chegada. Esse processo é, atualmente, controlado pela secretária, 
// que utiliza sua agenda para gerenciar os motoristas diariamente. A empresa, que carrega, no máximo, 10 caminhões por dia, pretende 
// informatizar esse processo. Implemente um sistema que atenda às necessidades da empresa considerando as possibilidades de chegada de 
// um novo caminhoneiro, saída de um caminhoneiro, verificar se existe caminhoneiro no aguardo, verifique se o número de carregamentos 
// do dia foi atingido, listar todos os caminhões no aguardo.

import EmpresaConcreto from "../../src/lista02_src/EmpresaConcreto";

const empresa = new EmpresaConcreto(10);

it("É esperado que inicialmente a fila esteja vazia", () => {
    expect(empresa.isEmpty()).toBe(true);
});

it("É esperado que caminhoneiros sejam adicionados à fila corretamente", () => {
    empresa.enqueue("Caminhoneiro 1");
    empresa.enqueue("Caminhoneiro 2");
    expect(empresa.listarCaminhoneiros()).toEqual(["Caminhoneiro 1", "Caminhoneiro 2"]);
});

it("É esperado que o próximo caminhoneiro seja exibido corretamente", () => {
    expect(empresa.front()).toBe("Caminhoneiro 1");
});

it("É esperado que um caminhoneiro seja removido da fila corretamente", () => {
    expect(empresa.dequeue()).toBe("Caminhoneiro 1");
    expect(empresa.listarCaminhoneiros()).toEqual(["Caminhoneiro 2"]);
});

it("É esperado que o limite de carregamentos não seja excedido", () => {
    for (let i = 0; i < empresa.maxCarregamentos; i++) {
        empresa.enqueue(`Caminhoneiro ${i + 3}`);
        empresa.dequeue();
    }
    expect(empresa.verificarLimiteCarregamentos()).toBe(true);
});