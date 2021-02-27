const Pluralize = (currency: any) =>{

    let plural;

    switch (currency?.type) {
        case 'pt-br':
            plural = currency?.currency.replace("l", "is")
            break;
        case 'en-us':
            plural = currency?.currency.replace("r", "res")
            break;
    
        default:
            break;
    } 

    return plural

}
export default Pluralize