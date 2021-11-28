import { AppBar, Box, Toolbar, Typography, IconButton  } from '@mui/material';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { unstable_styleFunctionSx } from '@mui/system';

const Div = styled('div')(unstable_styleFunctionSx)

function Header(props) {
    const history = useHistory();

    const isShowName = (name) => {
        const SHOW_HEADER = [
            'product',
            'transaction'
        ]

        return SHOW_HEADER.indexOf(name) !== -1
    }

    const handleBack = () => {
        history.go(-1)
    }

    return ( 
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" className={`header-navigation ${isShowName(props.keyName) ? 'shadow' : 'no-shadow'}`}>
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleBack}
                    >
                        <Div className="header-icons arrow-back"></Div>
                    </IconButton>
                        <Typography variant="h7" component="div" className="title-header" sx={{ flexGrow: 1 }}>
                            { isShowName(props.keyName) && props.routeName }
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>            
        </>
     );
}

export default Header;