import { Helmet, HelmetProvider } from 'react-helmet-async';
import imgFavicon from 'assets/images/icons/favicon.ico'

function MetaHeader() {
    return ( 
        <>
            <HelmetProvider>
                <Helmet>
                    <title>nunitoPay</title>
                    <link rel="icon" type="image/ico" sizes="32x32" href={imgFavicon} />
                </Helmet>
            </HelmetProvider>
        </>
     );
}

export default MetaHeader;