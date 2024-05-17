export default interface IRepository {
	create: (_data: any) => any;
  findUnique(_data: any, _fields?: any[]): Promise<any | null>;
  findMany(_condition?: any, _fields?: any[], _options?: {}): Promise<any>;
}