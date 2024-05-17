import Service from "../../services/Service";
import AddresRepository from "../../repositories/SalesRepository";
import AddressService from "../../services/SalesService";

jest.mock("../../database/connection", () => ({
  getConnection: jest.fn().mockReturnValue({}),
}));

jest.mock("../../services/CepApiService", () => ({
  getCep: jest.fn().mockReturnValue({
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
  }),
}));

jest.mock("../../repositories/AddresRepository", () => ({
  create: jest.fn().mockReturnValue([
    {
      id: 1,
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
  ]),
  findUnique: jest.fn().mockReturnValueOnce(null).mockReturnValue({
    id: 1,
    cep: "12345678",
    logradouro: "Rua find",
    complemento: "Complemento teste",
    bairro: "Bairro Teste",
    localidade: "Cidade Teste",
    uf: "UF Teste",
    ibge: "1238",
    gia: "123",
    ddd: 99,
    siafi: "1234",
  }),
}));

describe("Address Service", () => {
  it("Should extende the class Service", () => {
    expect(AddressService instanceof Service).toBe(true);
  });

  describe("save", () => {
    it("Should create a new address", async () => {
      const data = {
        id: 1,
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
      };

      const result = await AddressService.save(data);

      expect(AddresRepository.create).toHaveBeenCalledWith([data]);
      expect(result).toEqual([data]);
    });
  });

  describe("findUnique", () => {
    it("Should find a address by cep in the api", async () => {
      const result = await AddressService.findUnique("12345671");

      expect(result).toEqual([
        {
          id: 1,
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
      ]);
    });
    it("Should find a address by cep in the data base", async () => {
      const result = await AddressService.findUnique("12345678");

      expect(result).toEqual([
        {
          id: 1,
          cep: "12345678",
          logradouro: "Rua find",
          complemento: "Complemento teste",
          bairro: "Bairro Teste",
          localidade: "Cidade Teste",
          uf: "UF Teste",
          ibge: "1238",
          gia: "123",
          ddd: 99,
          siafi: "1234",
        },
      ]);
    });
  });
});
