import { Helmet, HelmetProvider } from 'react-helmet-async';
import imgFavicon from 'assets/images/icons/Favicon-Sooltan.png'

function MetaHeader() {
    return ( 
        <>
            <HelmetProvider>
                <Helmet>
                    <title>sooltanPay</title>
                    <link rel="icon" type="image/png" sizes="32x32" href={imgFavicon} />
                </Helmet>
            </HelmetProvider>
        </>
     );
}

export default MetaHeader;