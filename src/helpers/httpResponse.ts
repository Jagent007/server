import { HttpResponse } from "../types/http";

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null,
});

export const success = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});

export const badRequest = (message: string): HttpResponse => ({
  statusCode: 400,
  body: { message },
});

export const notFound = (message: string): HttpResponse => ({
  statusCode: 404,
  body: { message },
});

export const unprocessableEntity = (message: string) => ({
  statusCode: 422,
  body: { message },
});

export const serverError = (message?: string): HttpResponse => ({
  statusCode: 500,
  body: { message: message || "Erro interno do servidor" },
});
