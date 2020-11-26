//#region Imports

import React, { Fragment } from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

//#endregion

const ScreenLoader = ({ isLoading }) => (
    <Fragment>
        {isLoading && (
            <Segment>
                <Dimmer active>
                    <Loader>Loading</Loader>
                </Dimmer>

                <Image src='/images/wireframe/short-paragraph.png' />
            </Segment>
        )}
    </Fragment>
);

export default ScreenLoader;
