//#region Imports

import React from 'react';
import { Image } from 'semantic-ui-react';
import IMAGE from 'utils/constants/image';

//#endregion

const AvatarTrigger = ({ texto, image }) => (
    <span>
        <Image avatar src={image || IMAGE.DEFAULT_USER} />
        {texto}
    </span>
);

export default AvatarTrigger;
