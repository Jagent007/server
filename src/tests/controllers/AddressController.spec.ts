import Controller from "../../controllers/Controller";
import AddressController from "../../controllers/SalesController";

jest.mock("../../database/connection", () => ({
  getConnection: jest.fn().mockReturnValue({}),
}));

jest.mock("../../services/AddressService", () => ({
  findUnique: jest.fn().mockResolvedValue([
    {
      cep: "55038-030",
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
  ]),
  save: jest.fn().mockResolvedValue([
    {
      cep: "55038-030",
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
  ]),
}));

describe("AddressController", () => {
  it("Should be instacen of Controller", () => {
    expect(AddressController instanceof Controller).toBe(true);
  });

  describe("findUnique", () => {
    it("Should return a address", async () => {
      const res = await AddressController.findUnique({
        body: { cep: "55038-030" },
      } as any);

      expect(res).toEqual({
        statusCode: 200,
        body: [
          {
            cep: "55038-030",
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
        ],
      });
    });

    it("Should be invalid cep", async () => {
      const res = await AddressController.findUnique({
        body: { cep: "55038-03" },
      } as any);

      expect(res).toEqual({
        statusCode: 400,
        body: { message: "CEP inválido" },
      });
    });
  });
});
