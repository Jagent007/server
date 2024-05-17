import Controller from '../../controllers/Controller';

class SutController extends Controller {}

export const mockService = {
	findMany: jest.fn().mockReturnValue([{ operation: 'findMany' }]),
	findUnique: jest.fn().mockReturnValue({ operation: 'findOne' }),
	save: jest.fn().mockReturnValue({ operation: 'create' }),
};

export const makeSutController = (service: any) => new SutController(service);
