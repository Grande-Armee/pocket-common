import { DomainEventsDispatcher } from '../domainEventsDispatcher/providers/domainEventsDispatcherFactory';
import { LoggerService } from '../logger/services/logger/loggerService';
import { TransactionalCallback } from './interfaces';

export abstract class GenericUnitOfWork {
  public constructor(
    protected readonly logger: LoggerService,
    protected readonly domainEventsDispatcher: DomainEventsDispatcher,
  ) {}

  protected abstract init(): Promise<void>;
  protected abstract commit(): Promise<void>;
  protected abstract rollback(): Promise<void>;
  protected abstract cleanUp(): Promise<void>;

  public getDomainEventsDispatcher(): DomainEventsDispatcher {
    return this.domainEventsDispatcher;
  }

  public async runInTransaction<Result>(callback: TransactionalCallback<Result, GenericUnitOfWork>): Promise<Result> {
    try {
      await this.init();

      this.logger.debug('Initialized unit of work.');

      const result = await callback(this);

      await this.commit();

      this.logger.debug('Transaction committed.');

      return result;
    } catch (e) {
      await this.rollback();

      this.logger.debug('Transaction rolled back.');

      throw e;
    } finally {
      await this.cleanUp();
    }
  }
}
