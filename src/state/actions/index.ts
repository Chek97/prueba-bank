import { ActionType } from "../action-types/index"

interface DepositAction {
    type: ActionType.DEPOSIT,
    payload: number
}

interface WithdrawAction {
    type: ActionType.WITHDRAW,
    payload: number
}

interface BankruptAction {
    type: ActionType.BANKRUPT
}

interface GetDepositAction {
    type: ActionType.GETDEPOSIT,
    payload: number
}

interface GetHistoryAction {
    type: ActionType.GETHISTORY,
    payload: any
}

interface SetDepositAction {
    type: ActionType.SETDEPOSIT,
    payload: any
}

interface SetWithDrawAction {
    type: ActionType.SETWITHDRAW,
    payload: any
}

interface SetAmountAction {
    type: ActionType.SETAMOUNT,
    payload: any
}

export type Action = DepositAction | WithdrawAction | BankruptAction | GetDepositAction | GetHistoryAction | SetDepositAction | SetWithDrawAction | SetAmountAction;