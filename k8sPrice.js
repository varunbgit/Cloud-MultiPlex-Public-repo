// kubernetes 

function k8s(){
    let aws = hostingAWS(noOfCluster);
    let azure = hostingAzure();
    let  gcp = hostingGCP ();
}

function hostingAWS(noOfCluster){
    return 73 * noOfCluster;
}

function hostingAzure(noOfCluster,os,region){
    if(region == asia){
        if(os == linux){
            return noOfCluster * 77.38; 
        }
        else{
            return noOfCluster * 116;
        }
    }
    else if (region == europe){
        if(os == linux){
            return noOfCluster * 63.51 ;
        }
        if(os == windows){
            return  noOfCluster * 94.90;
        }
    }
    else if(region == America){
        if(os == linux){
            return noOfCluster * 56.21 ;
        }
        if(os == windows){
            return  noOfCluster * 131.40;
        }
    }
}
  

//Please Assign the windows as value =2  and linux =1 
function hostingGCP(noOfCluster,os,region){
    if(region  == asia){
        if(os == linux){
            return 29.15 * noOfCluster;
        }else{
            return 62.73 * noOfCluster;
        }
    }
    else if (region  == Europe){
        if(os == linux){
            return 31.27 * noOfCluster;
        }else{
            return 60.92 * noOfCluster;
        }
    
    }
    else{
        if(os == linux){
            return 87.76 * noOfCluster;
        }else{
            return 60.92 * noOfCluster;
        }
    }
}