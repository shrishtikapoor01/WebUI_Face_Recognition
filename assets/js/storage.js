

// Calculating the price of the storage for the region (Asia, US, Europe)
function storage_price(){

    let storage_size = document.getElementById("storage_size").value;
    let region = document.getElementById("region").value;

    $(document).ready(function(){
        if(region == '' || storage_size ==''){
            return;
        }
        else{
            $('#staticBackdrop').modal('show');
        }
    });

    let azure_price = storage_azure(region, storage_size);
    let gcp_price = storage_gcp(region, storage_size);
    let aws_price = storage_aws(region, storage_size);
    let arr = [azure_price , gcp_price , aws_price];
    
    arr.sort((a, b) =>
    a.price > b.price ? 1 : -1
);

arr.forEach((data, index) => {
    document.getElementById("cloud" + (index + 1), "cloud" + (index + 1)).value = data.cloud + " price is: " + data.price + " USD";
});
return arr;
}

function storage_azure(region, storage_size){
    let priceUSD = 0;

    let asia_region = false;
    let europe_region = false;
    let america_region = false;

    let result = {
        price: 0,
        cloud: "AZURE"
    }
    if(region == 1){
        asia_region = true;
        priceUSD = 0.13 * storage_size;
    }
    else if(region == 2){
        europe_region = true;
        priceUSD = 0.00 * storage_size;
    }
    else{
        america_region = true;
        priceUSD = 0.13 * storage_size;
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

function storage_gcp(storage_size){
    let asia = true;
    let result = {
        price: 0,
        cloud: "GCP"
    }

    let priceUSD = 0;
     priceUSD = 0.02 * storage_size;

     if (asia) {
        result.price = priceUSD;
        return result;
    }
    else {
        result.price = priceUSD;
        return result;
    }
}



function storage_aws(region, storage_size){
    let priceUSD = 0;

    let asia_region = false;
    let europe_region = false;
    let america_region = false;

    let result = {
        price: 0,
        cloud: "AZURE"
    }

    if(region == 1){
        asia_region = true;
        priceUSD = 0.03 * storage_size;
    }
    else if(region == 2){
        europe_region = true;
        priceUSD = 0.023 * storage_size;
    }
    else{
        america_region = true;
        priceUSD = 0.024 * storage_size;
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