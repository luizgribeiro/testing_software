describe("Questionamento: O que esses simuladores estão fazendo?", () => {
  class Conta {
    constructor(servicoDePix) {
      this.servicoDePix = servicoDePix;
    }
    transferePix(contaDestino, valor) {
      const resultadoTransacao = this.servicoDePix.realizaTransacao();
      return { success: resultadoTransacao };
    }
  }

  const servicoDePix = { realizaTransacao: () => true };

  it("deveria utilizar servicoDePix para fazer a transferência e deve retornar success: true se a transacão ocorreu com sucesso", () => {
    const conta = new Conta(servicoDePix);
    const result = conta.transferePix({ ag: 12, cc: 1245675 }, 30.0);
    expect(result).toEqual({
      success: true,
    });
  });

  it("deveria utilizar servicoDePix para fazer a transferência e deve retornar success: false se a transacão não pode ser realizada", () => {
    servicoDePix.realizaTransacao = jest
      .fn()
      .mockImplementationOnce(() => false);

    const conta = new Conta(servicoDePix);
    const result = conta.transferePix({ ag: 12, cc: 1245675 }, 30.0);
    expect(servicoDePix.realizaTransacao).toHaveBeenCalledTimes(1);
    expect(result).toEqual({
      success: false,
    });
  });
});

//Qual é o papel dos dublês utilizados?
//Como poderíamos utilizar interfaces no contexto de simuladores?
