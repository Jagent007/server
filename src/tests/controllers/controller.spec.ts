import { makeSutController, mockService } from "../mock/controller";

describe("Abstract Controller", () => {
  const sutController = makeSutController(mockService);

  beforeEach(() => {
    jest.restoreAllMocks();
  });

  describe("create", () => {
    it("should call the service create method and return the result", async () => {
      const body = { operation: "create" };
      const result = await sutController.create({ body } as any);

      expect(mockService.save).toHaveBeenCalledWith(body);
      expect(result).toEqual({ operation: "create" });
    });
  });

  describe("findUnique", () => {
    it("should call the service findUnique method and return the result", async () => {
      const body = { operation: "findOne" };
      const result = await sutController.findUnique({ body } as any);

      expect(mockService.findUnique).toHaveBeenCalledWith(body);
      expect(result).toEqual({ operation: "findOne" });
    });
  });

  describe("findMany", () => {
    it("should call the service findMany method and return the result", async () => {
      const query = { operation: "findMany" };
      const result = await sutController.findMany({ query } as any);

      expect(mockService.findMany).toHaveBeenCalledWith(query);
      expect(result).toEqual([{ operation: "findMany" }]);
    });
  });
});
