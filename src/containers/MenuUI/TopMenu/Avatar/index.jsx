//#region Imports

import React from 'react';
import { Image } from 'semantic-ui-react';

//#endregion

const AvatarTrigger = ({ texto, image }) => (
    <span>
        <Image avatar src={image} />
        {texto}
    </span>
);

export default AvatarTrigger;
