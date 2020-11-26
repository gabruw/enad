//#region Imports

import ButtonUI from 'components/ButtonUI';
import React from 'react';
import { Icon, Loader, Segment } from 'semantic-ui-react';
import styles from './styles.module.css';

//#endregion

const ContextBox = ({ title, icon, children, onClick, research, buttonText, isLoading = false }) => (
    <Segment className={styles.segment}>
        <div className={styles.header}>
            <div className={styles.headerIconContent}>
                <Icon name={icon} className={styles.headerIcon} />
            </div>
            <span className={styles.title}>{title}</span>
        </div>

        <hr className={styles.divider} />

        <div className={styles.content}>
            <div className={styles.buttonContent}>
                <div className={styles.left}>
                    {research && (
                        <ButtonUI
                            isLoading={isLoading}
                            className={styles.button}
                            onClick={async () => await research()}
                        >
                            <Icon name='redo' className={styles.research} />
                        </ButtonUI>
                    )}
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

export default ContextBox;
