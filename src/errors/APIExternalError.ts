export class APIExternalError extends Error {
	constructor(message: string) {
		super(`Erro de API Externa: ${message}`);
		this.name = 'APIExternalError';
	}
}