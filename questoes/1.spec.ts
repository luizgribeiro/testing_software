describe("Primeiro questionamento: Essas funcões são puras?", () => {
  it("saque é 'puro'?", () => {
    const saque = (valor, conta) => {
      conta.saldo -= valor;
      return conta;
    };

    const conta = {
      saldo: 300,
    };

    expect(saque(100, conta).saldo).toBe(200);
  });

  it("criaConta é 'pura'?", () => {
    const [nome, cpf] = ["Maria da Silva", "00000000000"];

    const criaConta = () => {
      return {
        nome,
        cpf,
        saldo: 0,
        agencia: 1,
        cc: 184485785,
      };
    };

    expect(criaConta()).toEqual({
      nome,
      cpf,
      saldo: 0,
      agencia: 1,
      cc: 184485785,
    });
  });

  //Qual a relacão entre funcões puras e a utilizacão de const?
  //Qual o padrão existente nas duas funcões apresentadas?
  //As funcões de array map, reduce, forEach são puras?
});
