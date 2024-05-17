import { makeSutRepo, mockDB } from "../mock/repository";
import { NotFoundError } from "../../errors/NotFoundError";
import { DatabaseError } from "../../errors/DatabaseError";

jest.mock("../../errors/DatabaseError");

describe("Repository", () => {
  let mockDatabaseError: jest.Mock;

  beforeEach(() => {
    mockDatabaseError = jest.fn();
    (DatabaseError as unknown as jest.Mock) = mockDatabaseError;
  });

  describe("create", () => {
    it("should create a new entity", async () => {
      const data = [{ cep: "12345678" }];
      const res = await makeSutRepo(mockDB).create(data);

      expect(res).toEqual([
        {
          cep: "12345678",
          id: expect.any(String),
          createdAt: expect.any(Date),
          updatedAt: expect.any(Date),
        },
      ]);
    });

    it("should throw DatabaseError if database fails", async () => {
      const db = {
        ...mockDB,
        transactional: jest.fn().mockRejectedValue(new Error("erro ao buscar")),
      };
      mockDatabaseError.mockImplementationOnce(() => {
        throw new Error("Database error");
      });

      await expect(makeSutRepo(db).create([{}])).rejects.toThrow(
        "Database error"
      );
    });
  });

  describe("findUnique", () => {
    it("should call the repo findUnique method and return the result", async () => {
      const res = await makeSutRepo(mockDB).findUnique({ cep: "12345678" });

      expect(mockDB.findOne).toHaveBeenCalledWith(
        "test",
        { cep: "12345678" },
        {
          fields: ["*"],
          refresh: true,
          disableIdentityMap: true,
        }
      );
      expect(res).toEqual({ operation: "findOne" });
    });

    it("should throw DatabaseError if database fails", async () => {
      const db = {
        ...mockDB,
        findOne: jest.fn().mockRejectedValue(new Error("erro ao buscar")),
      };
      mockDatabaseError.mockImplementationOnce(() => {
        throw new Error("Database error");
      });

      await expect(
        makeSutRepo(db).findUnique({ cep: "12345678" })
      ).rejects.toThrow("Database error");
    });
  });

  describe("findMany", () => {
    it("should call the repo findMany method and return the result", async () => {
      const res = await makeSutRepo(mockDB).findMany({ cep: "12345678" });

      expect(mockDB.find).toHaveBeenCalledWith(
        "test",
        { cep: "12345678" },
        {
          fields: ["*"],
          refresh: true,
          disableIdentityMap: true,
          orderBy: { createdAt: "DESC" },
        }
      );
      expect(res).toEqual([{ operation: "find" }]);
    });
  });

  it("should throw DatabaseError if database fails", async () => {
    const db = {
      ...mockDB,
      find: jest.fn().mockRejectedValue(new Error("erro ao buscar")),
    };
    mockDatabaseError.mockImplementationOnce(() => {
      throw new Error("Database error");
    });

    await expect(
      makeSutRepo(db).findMany({ cep: "12345678" })
    ).rejects.toThrow("Database error");
  });
});
