//#region Imports

import { useCallback, useState } from 'react';
import sleep from 'utils/functions/sleep';

//#endregion

const initalState = {
    data: null,
    error: null,
    success: false,
    isLoading: false
};

const useRequestState = () => {
    const [requestState, setRequestState] = useState(initalState);

    const clear = useCallback((timeout = 100) => setTimeout(() => setRequestState(initalState), timeout), []);

    const run = useCallback(
        async (callback, options) => {
            setRequestState({ ...initalState, isLoading: true, success: undefined });

            if (options?.sleep) {
                await sleep(options?.sleepTimeout || 3000);
            }

            let responseObj = null;
            try {
                const { data: result } = await callback();
                responseObj = { ...initalState, data: result, success: true };
            } catch (error) {
                if (options?.autoClear) {
                    clear(5000);
                }

                responseObj = {
                    ...initalState,
                    error: error.response && error.response.data ? error.response.data : error
                };
            }

            setRequestState(responseObj);
            return responseObj;
        },
        [clear]
    );

    return {
        run,
        clear,
        requestState
    };
};

export default useRequestState;
