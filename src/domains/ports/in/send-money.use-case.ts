import { SendMoneyCommand } from './send-money.command';

export const SendMoneyUseCaseSymbol = Symbol('sendMoneyUseCase');

export interface SendMoneyUseCase {
  sendMoney(command: SendMoneyCommand): Promise<boolean>;
}
