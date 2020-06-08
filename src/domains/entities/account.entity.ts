import { MoneyEntity } from './money.entity';
import { ActivityWindowEntity } from './activity-window.entity';

export type AccountId = string;

export class AccountEntity {
  constructor(
    private readonly _id: AccountId,
    private readonly _baseLineBalance: MoneyEntity,
    private readonly _activityWindow: ActivityWindowEntity
  ) {}

}
