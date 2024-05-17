import AddresRepository from "../../repositories/SalesRepository";
import Repository from "../../repositories/Repository";

jest.mock("../../database/Connection", () => ({
  getConnection: jest.fn().mockReturnValue({}),
}));

describe("AddressRepository", () => {
  it("Should be instance of repository", () => {
    expect(AddresRepository instanceof Repository).toBe(true);
  });
});
