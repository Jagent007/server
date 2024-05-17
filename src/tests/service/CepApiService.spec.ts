import CepApiService from "../../services/CepApiService";

jest.mock("../../helpers/AxiosClient", () =>
  jest.fn().mockReturnValue({
    get: jest.fn().mockResolvedValue({
      data: {
        cep: "12345678",
        logradouro: "Rua create",
        complemento: "Complemento teste",
        bairro: "Bairro Teste",
        localidade: "Cidade Teste",
        uf: "UF Teste",
        ibge: "1238",
        gia: "123",
        ddd: 99,
        siafi: "1234",
      },
    }),
  })
);

describe("CepApiService", () => {
  describe("getCep", () => {
    it("Should return a address", async () => {
      const res = await CepApiService.getCep("12345678");

      expect(res).toEqual({
        data: {
          cep: "12345678",
          logradouro: "Rua create",
          complemento: "Complemento teste",
          bairro: "Bairro Teste",
          localidade: "Cidade Teste",
          uf: "UF Teste",
          ibge: "1238",
          gia: "123",
          ddd: 99,
          siafi: "1234",
        },
      });
    });
  });
});
