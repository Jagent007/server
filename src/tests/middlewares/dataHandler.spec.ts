import dataHandler from "../../middlewares/datahandler";

describe("middlewares", () => {
  describe("dataHandler", () => {
    const req: any = {};
    const res: any = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      writeHead: jest.fn(),
      end: jest.fn(),
    };
    const next: any = jest.fn();

    it("should set the status code and send the body as a JSON response", () => {
      dataHandler(
        { statusCode: 400, body: { message: "Bad request" } },
        req,
        res,
        next
      );
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: "Bad request" });
    });

    it("should set the status code and send the body as a JSON response with different properties", () => {
      dataHandler(
        { statusCode: 401, body: { error: "Unauthorized" } },
        req,
        res,
        next
      );
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ error: "Unauthorized" });
    });
  });
});
