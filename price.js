// asia = 1
// us = 2
// europe = 3

function hosting(region,os,ram){
    
    let azure = hosting_azure(region, os, ram);
    let gcp = hosting_gcp(region, os, ram);
    let aws = hosting_aws(region, os, ram);
    let arr = {azure, gcp, aws};
    arr.sort();
    return arr;
}

// Calculating price for Azure hosting in region (Asia, Africa, Europe)
function hosting_azure(region, os, ram){
    let priceUSD = 0;
    // For Asia region
    if(region == 1){
        if(os == ubuntu){
            priceUSD = 18.25;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;
            }
        }
        else if(os == RHEL){
            priceUSD = 40.15;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;  
            }
        }
        else{
            // os == windows
            priceUSD = 173.74;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;  
            }
        }
        return priceUSD;
    }
    // For Africa region
    // if(region == 2){
    //     if(os == ubuntu){
    //         priceUSD = 17.595;
    //         let reqRam = 1;
    //         while(ram >= reqRam){
    //             priceUSD *= 2;
    //             reqRam*=2;
    //         }
    //     }
    //     else if(os == RHEL){
    //         priceUSD = 39.495;
    //         let reqRam = 1;
    //         while(ram >= reqRam){
    //             priceUSD *= 2;
    //             reqRam*=2;  
    //         }
    //     }
    //     else{
    //         // os == windows
    //         priceUSD = 180.385;
    //         let reqRam = 1;
    //         while(ram >= reqRam){
    //             priceUSD *= 2;
    //             reqRam*=2;  
    //         }
    //     }
    //     return priceUSD;
    // }
    // For US Region
    if(region == 2){
        if(os == ubuntu){
            priceUSD = 15.695;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;
            }
        }
        else if(os == RHEL){
            priceUSD = 37.595;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;  
            }
        }
        else{
            // os == windows
            priceUSD = 169.75;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;  
            }
        }
        return priceUSD;
    }
    // For Europe Region
    if(region == 3){
        if(os == ubuntu){
            priceUSD = 14.965;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;
            }
        }
        else if(os == RHEL){
            priceUSD = 36.865;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;  
            }
        }
        else{
            // os == windows
            priceUSD = 168.63;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;  
            }
        }
        return priceUSD;
    }
}
// Calculating price for GCP hosting in region (Asia, Africa, Europe)
function hosting_gcp(region, os, ram){
    let priceUSD = 0;
    // For Asia region (Mumbai)
    if(region == 1){
        if(os == ubuntu){
            priceUSD = 10.74;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;
            }
        }
        else if(os == RHEL){
            priceUSD = 54.54;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;  
            }
        }
        else{
            // os == windows
            priceUSD = 16.22;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;  
            }
        }
        return priceUSD;
    }
    // For US region
    if(region == 2){
        if(os == ubuntu){
            priceUSD = 10.24;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;
            }
        }
        else if(os == RHEL){
            priceUSD = 54.04;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;
            }
        }
        else{
            // os == windows
            priceUSD = 18.64;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;
            }
        }
        return priceUSD;
    }
    
    // For Europe Region (London)
    if(region == 3){
        if(os == ubuntu){
            priceUSD = 12.0;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;
            }
        }
        else if(os == RHEL){
            priceUSD = 55.08;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;  
            }
        }
        else{
            // os == windows
            priceUSD = 19.67;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;  
            }
        }
        return priceUSD;
    }
}

function hosting_aws(region, os, ram){
    let priceUSD = 0;
    // For Asia region (Mumbai)
    if(region == 1){
        if(os == ubuntu){
            priceUSD = 8.18;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;
            }
        }
        else if(os == RHEL){
            priceUSD = 51.98;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;  
            }
        }
        else{
            // os == windows
            priceUSD = 451.69;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;  
            }
        }
        return priceUSD;
    }
    // For US region
    
    // For Europe Region 
    if(region == 3){
        if(os == ubuntu){
            priceUSD = 13.72;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;
            }
        }
        else if(os == RHEL){
            priceUSD = 57.52;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;  
            }
        }
        else{
            // os == windows
            priceUSD = 483.99;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;  
            }
        }
        return priceUSD;
    }
}