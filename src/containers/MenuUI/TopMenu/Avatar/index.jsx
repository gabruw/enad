//#region Imports

import React from 'react';
import { Image } from 'semantic-ui-react';
import useSystemContext from 'storage/system/context';
import USER_FIELDS from 'utils/constants/field/user';
import IMAGE from 'utils/constants/image';
import styles from './styles.module.css';

//#endregion

const AvatarTrigger = () => {
    const { user } = useSystemContext();

    const text = (user && user[USER_FIELDS.NAME]) || '';
    const picture = (user && user[USER_FIELDS.PICTURE]) || IMAGE.DEFAULT_USER;

    return (
        <span className={styles.text}>
            <Image avatar src={picture} />
            {text}
        </span>
    );
};

export default AvatarTrigger;
