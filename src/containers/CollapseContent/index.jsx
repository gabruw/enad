//#region Imports

import React, { Fragment, useCallback, useMemo, useState } from 'react';
import { Button } from 'semantic-ui-react';
import styles from './styles.module.css';

//#endregion

const CollapseContent = ({ maxItems, children, hideField, minItems = 1, actualItem = 1 }) => {
    const [actual, setActual] = useState(actualItem);

    const disabledMin = useMemo(() => actual === minItems || hideField, [actual, minItems, hideField]);
    const disabledMax = useMemo(() => actual === maxItems || hideField, [actual, maxItems, hideField]);

    const action = useCallback((canAdd = false) => setActual((prevState) => (canAdd ? prevState + 1 : prevState - 1)), [
        setActual
    ]);

    return (
        <Fragment>
            <div className={styles.content}>
                <div className={styles.array}>
                    {Array.apply(null, { length: actual }).map((_, index) => children({ index }))}
                </div>

                <div className={styles.buttons}>
                    <Button circular color='primary' icon='remove' disabled={disabledMin} onClick={() => action()} />
                    <Button circular color='primary' icon='add' disabled={disabledMax} onClick={() => action(true)} />
                </div>
            </div>
        </Fragment>
    );
};

export default CollapseContent;
