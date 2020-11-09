//#region Imports

import { ptBR } from '@material-ui/core/locale';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import FONTS from 'assets/styles/fonts';

//#endregion

const AppTheme = createMuiTheme(
    {
        palette: {
            primary: {
                main: '#FFFFFF'
            },
            secondary: {
                main: '#FFFFFF'
            }
        },
        typography: {
            fontFamily: ['Geomanist'].join(','),
            subtitle1: { fontSize: 12 },
            subtitle2: { fontSize: 10 },
            h1: { fontSize: 28, ...FONTS.GEOMANIST_MEDIUM },
            h2: { fontSize: 24, ...FONTS.GEOMANIST_MEDIUM },
            h3: { fontSize: 20, ...FONTS.GEOMANIST_MEDIUM },
            h4: { fontSize: 18, ...FONTS.GEOMANIST_MEDIUM },
            h5: { fontSize: 16, ...FONTS.GEOMANIST_MEDIUM },
            h6: { fontSize: 14, ...FONTS.GEOMANIST_MEDIUM }
        }
    },
    ptBR
);

export default AppTheme;
