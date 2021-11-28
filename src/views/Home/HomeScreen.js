import TopHeader from "./partials/TopHeader";
import { Card, CardContent, Grid } from '@mui/material';
import QrLogo from 'assets/images/icons/home/qr.svg';
import ProductLogo from 'assets/images/icons/home/store.svg';
import styled from 'styled-components';
import { unstable_styleFunctionSx } from '@mui/system';
import { useHistory } from 'react-router-dom';

const DIV = styled('div')(unstable_styleFunctionSx)

const imageItem = require('assets/images/icons/online-payment/isi-pulsa.svg').default


function HomeScreen () {
    let history = useHistory()

    const handleTo = () => {
        history.push('/login')
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
                    {Array.from(Array(10)).map((_, index) => (
                        <Grid item xs={3} p={2} key={index} textAlign="center">
                            <img src={imageItem} alt="item-logo" />
                            <DIV className="text-12" sx={{ mt: 1 }}>
                                Isi Pulsa
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