import { Grid, OutlinedInput, InputAdornment, Checkbox, FormControlLabel, Button } from '@mui/material';
import styled from 'styled-components';
import { unstable_styleFunctionSx } from '@mui/system';

const Div = styled('div')(unstable_styleFunctionSx)

function LoginScreen () {
    return ( 
        <>
            <Grid xs={12} p={2} item>
                <Div className="text-24 font-bold text-bg-midnight" sx={{ mb: 2 }}>Masuk</Div>
                <Grid xs={12} item>
                    <Div sx={{ mt: 3 }}>
                        Nomor HP
                    </Div>
                    <Div sx={{ mt: 2 }}>
                        <OutlinedInput 
                            fullWidth
                            placeholder="81243234554"
                            startAdornment={
                                <InputAdornment position="start">+62</InputAdornment>
                            }
                        />
                    </Div>
                </Grid>
                <Grid xs={12} item>
                    <Div sx={{ mt: 3 }}>
                        Password
                    </Div>
                    <Div sx={{ mt: 2 }}>
                        <OutlinedInput 
                            type="password"
                            fullWidth
                            placeholder="Contoh: nunito123"
                            // endAdornment={
                            //     <InputAdornment position="end">+62</InputAdornment>
                            // }
                        />
                    </Div>
                </Grid>
                <Grid xs={12} item container justifyContent="space-between">
                    <Div>
                        <FormControlLabel 
                            control={
                                <Checkbox />
                            }
                            label="Ingat Saya"
                        />
                    </Div>
                    <Div className="text-14 el-center text-bg-midnight font-regular text-center">
                        Lupa Password?
                    </Div>
                </Grid>
                <Grid xs={12} item sx={{ mt: 2 }}>
                    <Div>
                        <Button className="s-button primary-button button-block">Masuk</Button>
                    </Div>
                    <Div className="text-14 el-center font-regular text-center" sx={{ mt: 2 }}>
                        Belum punya akun?&nbsp;<span className="n-link link-nunito-default">Daftar</span>
                    </Div>
                </Grid>
            </Grid>
        </>  
    );
}

export default LoginScreen;