import { Grid } from '@mui/material';
import { unstable_styleFunctionSx } from '@mui/system';
import React from 'react';
import styled from 'styled-components';

const DIV = styled('div')(unstable_styleFunctionSx)

function BottomNavigationItem(props) {
    const navigationItems = props.navigationItems
    
    const getIconName = () => {
        const { key } = navigationItems

        return key
    }

    const changeMenu = () => {
        props.changeNavigation(navigationItems.key)
    }
    
    return ( 
        <Grid 
            container
            direction="column"
            justifyContent="center"
            className={`bottom-item-navigation el-center ${navigationItems.active ? 'active' : ''}`}
            onClick={changeMenu}
        >
            <DIV className={`nav-icon-${getIconName()} ${navigationItems.active && 'active'}`}></DIV>
            <DIV className="text-10 font-regular" sx={{ mt: 1 }}>
                { navigationItems.name }
            </DIV>
        </Grid>
    );
}

export default BottomNavigationItem;