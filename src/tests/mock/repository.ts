import Repository from '../../repositories/Repository';

class SutRepository extends Repository {}

const insert = jest.fn().mockReturnValue({ operation: 'insert' });
const insertMany = jest.fn().mockReturnValue([{ operation: 'insertMany' }]);
const nativeUpdate = jest.fn().mockReturnValue(1);

export const mockDB = {
	find: jest.fn().mockReturnValue([{ operation: 'find' }]),
	findOne: jest.fn().mockReturnValue({ operation: 'findOne' }),
	insert,
	insertMany,
	transactional: jest
		.fn()
		.mockImplementation(callback => callback({ insert, insertMany, nativeUpdate })),
};
export const makeSutRepo = (database: any) => new SutRepository(database, 'test');
