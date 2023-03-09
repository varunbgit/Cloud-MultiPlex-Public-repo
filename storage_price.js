/*
Asia = 1
US = 2
Europe = 3
*/

// Calculating the price of the storage for the region (Asia, US, Europe)
function storage_price(){
    let azure_price = storage_azure(region, storage_size);
    let gcp_price = storage_gcp(region, storage_size);
    let aws_price = storage_aws(region, storage_size);
    let arr = [azure_price, gcp_price, aws_price];
    arr.sort();
    return arr;
}

function storage_azure(region, storage_size){
    let priceUSD = 0;
    if(region == 1){
        priceUSD = 0.13 * storage_size;
    }
    else if(region == 2){
        priceUSD = 0.00 * storage_size;
    }
    else{
        priceUSD = 0.13 * storage_size;
    }
    return priceUSD;
}

function storage_gcp(region, storage_size){
    let priceUSD = 0.02 * storage_size;
    return priceUSD;
}

function storage_aws(region, storage_size){
    let priceUSD = 0;
    if(region == 1){
        priceUSD = 0.03 * storage_size;
    }
    else if(region == 2){
        priceUSD = 0.023 * storage_size;
    }
    else{
        priceUSD = 0.024 * storage_size;
    }
    return priceUSD;
}
