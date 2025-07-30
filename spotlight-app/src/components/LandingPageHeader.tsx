import { Box, Typography } from "@mui/material";
import appLogo from '../assets/spotlight-logo.svg';
import { useTranslation } from 'react-i18next';

function LandingPageHeader() {
    const { t } = useTranslation('common');
    return (
        <Box sx={{
            width: '100vw',
            height: '6em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pb: 1
            }}>
            <Box
                sx={{
                    width: '50vw',
                    m: 0,
                    p: 0,
                    height: '15%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pl: 3
                }}
            >
                <img src={appLogo} style={{ height: 75 }} ></img>
                <>
                    <Typography sx={{pl: 1, fontSize: 25, fontWeight: 700, backgroundImage: 'linear-gradient(to right, #FFFFFF, #5099C6)',backgroundClip: 'text', color: 'transparent' }}>SpotLight</Typography>
                    <Typography sx={{pl: 1, fontSize: 16, fontWeight: 400, backgroundImage: 'linear-gradient(to right, #6B99BA, #FDFFFE)', backgroundClip: 'text', color: 'transparent' }}>{t('landingPage.header.one')}</Typography>
                </>
            </Box>
        </Box>
    );
}

export default LandingPageHeader;