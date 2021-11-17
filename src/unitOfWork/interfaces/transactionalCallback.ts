export type TransactionalCallback<Result, UOW> = (unitOfWork: UOW) => Promise<Result>;
