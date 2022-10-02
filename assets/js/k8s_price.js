// kubernetes 

function k8s(){

    let os = document.getElementById("os").value;
    let region = document.getElementById("region").value;
    let noOfCluster = document.getElementById("cluster").value;

    $(document).ready(function(){
        if(region == '' || os =='' || noOfCluster ==''){
            return;
        }
        else{
            $('#staticBackdrop').modal('show');
        }
    });


    let aws = hostingAWS(noOfCluster ,os);
    let azure = hostingAzure(noOfCluster , os , region);
    let  gcp = hostingGCP (noOfCluster , os , region);

    arr = [aws,azure,gcp];
    
    arr.sort((a, b) =>
        a.price > b.price ? 1 : -1
    );

    arr.forEach((data, index) => {
        document.getElementById("cloud" + (index + 1), "cloud" + (index + 1)).value = data.cloud + " price is: " + data.price + " USD";
    });
    return arr;
}

function hostingAWS(noOfCluster){
    let asia = true;
    let result = {
        price: 0,
        cloud: "AWS"
    }
    let priceUSD = 0
    priceUSD = 73 * noOfCluster;

if (asia) {
    result.price = priceUSD;
    return result;
}
else {
    result.price = priceUSD;
    return result;
}
}


function hostingAzure(noOfCluster,os,region){
    let priceUSD = 0;
    let asia_region = false;
    let europe_region = false;
    let america_region = false;

    let result = {
        price: 0,
        cloud: "AZURE"
    }

    if(region == "asia"){
        asia_region = true;
        if(os == "linux"){
            priceUSD =  noOfCluster * 77.38; 
        }
        else{
            priceUSD = noOfCluster * 116;
        }
    }
    else if (region == "europe"){
        europe_region = true;
        if(os == "linux"){
            priceUSD = noOfCluster * 63.51 ;
        }
        if(os == "windows"){
            priceUSD =  noOfCluster * 94.90;
        }
    }
    else if(region == "america"){
        america_region = true;
        if(os == "linux"){
            priceUSD = noOfCluster * 56.21 ;
        }
        if(os == "windows"){
            priceUSD =  noOfCluster * 131.40;
        }
    }
    
    if (asia_region) {
        result.price = priceUSD;
        return result;
    }
    else if (europe_region) {
        result.price = priceUSD;
        return result;
    }
    else {
        result.price = priceUSD;
        return result;
    }
}
  

// //Please Assign the windows as value =2  and linux =1 
function hostingGCP(noOfCluster,os,region){

    let priceUSD = 0;
    let asia_region = false;
    let europe_region = false;
    let america_region = false;

    let result = {
        price: 0,
        cloud: "GCP"
    }
    if(region  == "asia"){
        asia_region = true;
        if(os == "linux"){
            priceUSD =  29.15 * noOfCluster;
        }else{
            priceUSD =  62.73 * noOfCluster;
        }
    }
    else if (region  == "europe"){
        europe_region = true;
        if(os == "linux"){
            priceUSD =  31.27 * noOfCluster;
        }else{
            priceUSD =  60.92 * noOfCluster;
        }
    
    }
    else{
        if(os == "linux"){
            america_region = true;
            priceUSD =  87.76 * noOfCluster;
        }else{
            priceUSD = 60.92 * noOfCluster;
        }
    }

    if (asia_region) {
        result.price = priceUSD;
        return result;
    }
    else if (europe_region) {
        result.price = priceUSD;
        return result;
    }
    else {
        result.price = priceUSD;
        return result;
    }
}