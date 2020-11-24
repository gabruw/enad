//#region Imports

import ButtonUI from 'components/ButtonUI';
import React from 'react';
import { Icon, Loader, Segment } from 'semantic-ui-react';
import styles from './styles.module.css';

//#endregion

const ContextBox = ({ title, children, onClick, research, buttonText, isLoading = false }) => {
    return (
        <Segment className={styles.segment}>
            <div className={styles.title}>
                <div>{title}</div>
            </div>

            <div className={styles.content}>
                <div className={styles.buttonContent}>
                    <div className={styles.left}>
                        <ButtonUI
                            isLoading={isLoading}
                            className={styles.button}
                            onClick={async () => await research()}
                        >
                            <Icon name='redo' />
                        </ButtonUI>
                    </div>

                    <div className={styles.right}>
                        <ButtonUI
                            startIcon='plus'
                            isDisabled={isLoading}
                            className={styles.button}
                            onClick={() => onClick && onClick()}
                        >
                            {buttonText}
                        </ButtonUI>
                    </div>
                </div>

                {!isLoading && children}
                <Loader active={isLoading} inline='centered' />
            </div>
        </Segment>
    );
};

export default ContextBox;
