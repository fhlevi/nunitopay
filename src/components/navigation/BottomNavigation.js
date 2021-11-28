import BottomNavigationItem from "components/navigation/partials/BottomNavigationItem";
import { useHistory } from 'react-router-dom';
import React from 'react';


function BottomNavigation(props) {
    const [itemNavigation, setItemNavigation] = React.useState([])
    
    const history = useHistory();

    const checkMenuLoginOrNot = () => {
        let data = [
            {
                name: 'Beranda',
                icon: 'Home',
                key: 'beranda',
                active: false,
            },
            {
                name: 'Atur Produk',
                icon: 'Product Setting',
                key: 'product',
                active: false,
            },
            {
                name:  'Transaksi',
                icon: 'Note',
                key: 'transaction',
                active: false
            },
            {
                name: 'Profil',
                key: 'profile',
                icon: 'Person',
                active: false,
            }
        ]

        let navigationMenu = {
            active: false,
            icon: 'Person',
            key: 'login',
            name: 'Masuk'
        }

        data[3] = {...navigationMenu}

        return data
    }
    
    React.useEffect(() => {
        let data = checkMenuLoginOrNot()

        const indexActive = data.findIndex((menu) => {
            return menu.active
        })

        if(indexActive !== -1){
            data[indexActive].active = false
        }

        const indexRoute = data.findIndex((itemMenu) => {
            return itemMenu.key.toLowerCase() === props.routeName.toLowerCase() 
        })

        if(indexRoute !== -1){
            data[indexRoute].active = true
        }

        setItemNavigation(data)
    }, [props.routeName])

    const navAction = (key) => {
        let route_menu = {
            'beranda': '/home',
            'product': '/product',
            'transaction': '/transaction',
            'login': '/login'
        }
    
        history.push(route_menu[key])
    }

    return ( 
        <div className="bottom-navigation">
            {
                itemNavigation.map((_item, index) => (
                    <BottomNavigationItem 
                        key={index}
                        navigationItems={_item} 
                        changeNavigation={navAction}
                    >
                    </BottomNavigationItem>
                ))
            }
        </div>  
    );
}

export default BottomNavigation;