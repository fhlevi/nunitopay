import { setupWorker } from 'msw'
import MockApi from 'utilities/mock/api'

const serviceWorkerApi = setupWorker(...MockApi)

if(process.env.REACT_APP_MODE === 'local'){
    console.log('%c Mock API Service Worker Active', 'font-size: 12px; font-weight: 700; color: green;')

    serviceWorkerApi.start()
}

export default serviceWorkerApi;