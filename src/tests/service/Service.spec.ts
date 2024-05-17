import { makeSutService, mockRepo } from "../mock/service";

describe("Abstract Service", () => {
  const sutService = makeSutService(mockRepo);

  beforeEach(() => {
    jest.restoreAllMocks();
  });

  describe("create", () => {
    it("should call the repository create method and return the result", async () => {
      const body = { operation: "create" };
      const result = await sutService.save(body);

      expect(mockRepo.create).toHaveBeenCalledWith(body);
      expect(result).toEqual({ operation: "create" });
    });
  });

  describe("findUnique", () => {
    it("should call the repository findUnique method and return the result", async () => {
      const res = await sutService.findUnique({ cep: "12345678" } as any, [
        "*",
      ]);
      expect(mockRepo.findUnique).toHaveBeenCalledWith({ cep: "12345678" }, [
        "*",
      ]);
      expect(res).toEqual({ operation: "findUnique" });
    });
  });

  describe("findMany", () => {
    it("should call the repository findMany method and return the result", async () => {
      const res = await sutService.findMany({ type: "test" }, ["*"], {});
      expect(mockRepo.findMany).toHaveBeenCalledWith(
        { type: "test" },
        ["*"],
        {}
      );
      expect(res).toEqual([{ operation: "findMany" }]);
    });
  });
});
