//#region Imports

import React from 'react';
import { Image } from 'semantic-ui-react';
import useSystemReducer from 'storage/system/reducer';
import USER_FIELDS from 'utils/constants/field/user';
import IMAGE from 'utils/constants/image';

//#endregion

const AvatarTrigger = () => {
    const { user } = useSystemReducer();

    const text = (user && user[USER_FIELDS.NAME]) || '';
    const picture = (user && user[USER_FIELDS.PICTURE]) || IMAGE.DEFAULT_USER;

    return (
        <span>
            <Image avatar src={picture} />
            {text}
        </span>
    );
};

export default AvatarTrigger;
