import { IntegrationEventsStore } from '../integrationEventsStore/providers/integrationEventsStoreFactory';
import { LoggerService } from '../logger/services/logger/loggerService';
import { TransactionalCallback } from './types';

export abstract class UnitOfWork {
  public constructor(
    protected readonly logger: LoggerService,
    public readonly integrationEventsStore: IntegrationEventsStore,
  ) {}

  public abstract init(): Promise<void>;
  public abstract commit(): Promise<void>;
  public abstract rollback(): Promise<void>;
  public abstract cleanUp(): Promise<void>;

  public async runInTransaction<Result>(callback: TransactionalCallback<Result, UnitOfWork>): Promise<Result> {
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
