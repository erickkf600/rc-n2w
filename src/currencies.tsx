import { Currencies } from  './interfaces/currencies'

const Currency: Array<Currencies> = [
    {type: 'pt-br',  currency: "real", separator: ' e ', fraction: 'centavo'}, 
    {type: 'en-us',  currency: 'dolar', separator: ' and ', fraction: 'cent'}
] 

export default Currency