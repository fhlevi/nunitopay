import Button from '@mui/material/Button';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { unstable_styleFunctionSx } from '@mui/system';

const DIV = styled('div')(unstable_styleFunctionSx)

function SubHeader() {
    const history = useHistory();
    
    const handleToLogin = () => {
        history.push('/login')
    }

    return ( 
        <div className="sub-header">
            <div className="wallet-panel">
                <div className="text-12 font-semibold text-midnight text-center mb-3">
                    Masuk untuk memulai transkasi jual beli Anda, nikmati juga semua fitur Top Up dan Tagihan
                </div>
                <DIV sx={{ mt: 1 }}>
                    <Button className="s-button primary-button button-block" onClick={handleToLogin}>Masuk</Button>
                </DIV>
            </div>
        </div>
     );
}

export default SubHeader;