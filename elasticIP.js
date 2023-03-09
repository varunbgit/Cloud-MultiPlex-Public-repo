/*
Asia = 1
US = 2
Europe = 3

*** node in parameter is the number of elastic Ip needed ***
*/

function elasticIP(region, node){
    let azure = azure_elasticIP(region, node);
    let gcp = gcp_elasticIP(region, node);
    let aws = aws_elasticIP(region, node);
    arr = {azure, gcp, aws};
    arr.sort;
    return arr;
}

// Calculate the elastic IPs for Azure
function azure_elasticIP(region, node){
    let priceUSD = 2.63;   // Prices is same for each region
    return priceUSD * node;
}

// Calculate the elastic IPs for GCP
function gcp_elasticIP(region, node){
    let priceUSD = 0;
    if(region == 1){
        priceUSD = 2.92;
    }
    else if(region == 2){
        priceUSD = 1.46;
    }
    else if(region == 3){
        priceUSD = 2.92;
    }
    return priceUSD * node;
}

// Calculate the elastic IPs for AWS
function aws_elasticIP(region, node){
    let priceUSD = 2.63;   // Prices is same for each region
    return priceUSD * node;
}