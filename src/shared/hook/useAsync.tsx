import {useCallback, useState} from "react";

export interface IState<T> {
    value?: T;
    status: 'ready' | 'loading' | 'error';
    error: any;
}

// eslint-disable-next-line no-unused-vars
export const useSingleAsync = <T = any>(asyncFunction: (...params: any[]) => Promise<T>) => {
    const [state, setState] = useState<IState<T>>({
        value: undefined,
        status: 'ready',
        error: null
    });

    const onSuccess = useCallback((response: T) => {
        setState(prevState => ({
            ...prevState,
            status: 'ready',
            value: response
        }));
        return Promise.resolve(response);
    }, []);

    const onError = useCallback((error: any) => {
        setState(prevState => ({
            ...prevState,
            status: 'error',
            error: error,
        }));
        console.log(error);
        return Promise.reject(error);
    }, []);

    const execute = useCallback((...args: any[]) => {
        setState(prevState => ({
            ...prevState,
            status: 'loading',
            value: undefined,
            error: null,
        }));

        return asyncFunction(...args)
            .then(onSuccess)
            .catch(onError);

    }, [asyncFunction, onError, onSuccess]);

    return {execute, ...state};
};

export const useAsync = (...params: any) => {
    return params.map((item: any) => {
        if (Array.isArray(item)) {
            if (item.length > 0) {
                return useSingleAsync(item[0]);
            }
            return undefined;
        }
        return useSingleAsync(item);
    });
};