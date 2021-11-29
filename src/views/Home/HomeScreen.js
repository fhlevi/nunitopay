import React from 'react';
import ApiCategory from 'api/Category';
import TopHeader from "./partials/TopHeader";
import { Card, CardContent, Grid } from '@mui/material';
import QrLogo from 'assets/images/icons/home/qr.svg';
import ProductLogo from 'assets/images/icons/home/store.svg';
import styled from 'styled-components';
import { unstable_styleFunctionSx } from '@mui/system';
import { useHistory } from 'react-router-dom';

const DIV = styled('div')(unstable_styleFunctionSx)


function HomeScreen () {
    let history = useHistory()
    const [listCategory, setListCategory] = React.useState([])
    const [productModel, setProductModel] = React.useState(null)
    const [navigationList, setNavigationList] = React.useState([])

    const handleTo = () => {
        history.push('/login')
    }

    React.useEffect(() => {
        const data = new ApiCategory()

        setProductModel(data)
    }, [])

    React.useEffect(() => {
        if(productModel) {
            const getDataCategory = async () => {
                try {
                    const response = await productModel.getCategory()
        
                    setListCategory(response.data.data.data)
                } catch (e) {
                    console.error(e)
                }
            }
            
            getDataCategory()
        }
    }, [productModel])

    React.useEffect(() => {
        const mappingCategoryMenu = (menuCategory) =>{
            let menuList = [];
            const menuItem = [];
    
            menuCategory.forEach((item) => {
                item.listProduct.forEach((itemf) => {
                    if (itemf.status.toLowerCase() === "active") {
                        menuItem.push(itemf);
                    }
                });
                
                if (item.listProduct.length) {
                    menuList = menuItem;
                }
            });
    
            setNavigationList(menuList)
        }
        
        mappingCategoryMenu(listCategory)
    }, [listCategory])

    const getImagesMenu = (key) => {
        const imgName = key.toLowerCase().replace(/[ .]+/g, '-')

        return require('assets/images/icons/online-payment/'+imgName+'.svg').default
    }

    return (
        <div className="home-wrapper">
            <TopHeader></TopHeader>
            <Grid item m={2} xs={12}>
                <Grid container>
                    <Grid item xs={6} pr={1}>
                        <Card className="item__card" onClick={handleTo}>
                            <CardContent className="item__card-content">
                                <img src={QrLogo} alt="qr-logo" />
                                <DIV sx={{ ml: 1 }}>
                                    Lihat QR
                                </DIV>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} pl={1}>
                        <Card className="item__card" onClick={handleTo}>
                            <CardContent className="item__card-content">
                                <img src={ProductLogo} alt="produk-toko-logo" />
                                <DIV sx={{ ml: 1 }}>
                                    Produk Toko
                                </DIV>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs={12} p={2} item className="base-wrapper">
                <DIV sx={{ mb: 2 }}>
                    Top Up dan Tagihan
                </DIV>
                <Grid container item xs={12}>
                    {navigationList.map((_, index) => (
                        <Grid item xs={3} p={2} key={index} textAlign="center">
                            <img src={getImagesMenu(_.category)} alt="item-logo" />
                            <DIV className="text-12" sx={{ mt: 1 }}>
                                {_.category}
                            </DIV>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid xs={12} p={2} item className="base-wrapper">
                <Grid 
                    container 
                    item 
                    justifyContent="space-between"
                >
                    <DIV sx={{ mb: 2 }}>
                        Info Terkini
                    </DIV>
                    <DIV sx={{ mb: 2 }} className="text-12 n-link link-nunito-default">
                        Lihat Semua
                    </DIV>
                </Grid>

                <Grid container item xs={12}>
                    
                </Grid>
            </Grid>
        </div>
    )
}

export default HomeScreen;