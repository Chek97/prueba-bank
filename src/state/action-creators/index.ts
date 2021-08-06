import { Dispatch, applyMiddleware, StoreEnhancer } from 'redux';
import { makeRequest } from '../../helpers/request';
import { ActionType } from "../action-types"

export const depositMoney = (amount: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setDeposit(amount));
        dispatch(setDepositHistory(amount));
    }
}

export const setDeposit = (amount: number) => ({
    type: ActionType.DEPOSIT,
    payload: amount
});

export const setDepositHistory = (amount: number) => ({
    type: ActionType.SETDEPOSIT,
    payload: {
        type: 'deposit',
        amount
    }
});

export const withdrawMoney = (amount: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setWithDraw(amount));
        dispatch(SetWithDrawHistory(amount));
    }
}

export const setWithDraw = (amount: number) => ({
    type: ActionType.WITHDRAW,
    payload: amount
});

export const SetWithDrawHistory = (amount: number) => ({
    type: ActionType.SETWITHDRAW,
    payload: {
        type: 'withdraw',
        amount
    }
});

export const bankrupt = (totalAmount: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setBankRuptHistory(totalAmount));    
        dispatch(setBankRupt());
    }
}

export const setBankRupt = () => ({
    type: ActionType.BANKRUPT
});

export const setBankRuptHistory = (total: number) => ({
    type: ActionType.SETAMOUNT,
    payload: {
        type: 'amount',
        amount: total
    }
});

//API REQUESTS
export const startGetDeposit = () => {
    return async(dispatch: Dispatch) => {
        try {
            const request = await makeRequest('http://localhost:3041/history', {});
            const resp = await request.json();
            
            let amount = 0;
            resp.forEach((element: any) => {
                amount  = amount + element.amount;
            });
            
            dispatch(getDeposit(amount));

        } catch (error) {
            console.error('No fue posible conectar con el recurso');
        }
    }
}

export const getDeposit = (deposit: number) => ({
    type: ActionType.GETDEPOSIT,
    payload: deposit
});

export const startGetHistory = () => {
    return async(dispatch: Dispatch) => {
        try {
            const request = await makeRequest('http://localhost:3041/history', {});
            const resp = await request.json();

            dispatch(getHistory(resp));
        } catch (error) {
            console.error('No fue posible conectar con el servicio');
        }
    }
}

export const getHistory = (history: object[]) => ({
    type: ActionType.GETHISTORY,
    payload: history
});