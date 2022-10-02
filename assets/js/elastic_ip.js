/*
Asia = 1
US = 2
Europe = 3

*** node in parameter is the number of elastic Ip needed ***
*/

function elasticIP() {

    let region = document.getElementById("region").value;
    let node = document.getElementById("node").value;

    $(document).ready(function(){
        if(region == '' || node ==''){
            return;
        }
        else{
            $('#staticBackdrop').modal('show');
        }
    });


    let azure = azure_elasticIP(region, node);
    let gcp = gcp_elasticIP(region, node);
    let aws = aws_elasticIP(region, node);
    arr = [azure, gcp, aws];
    // arr.sort;

    arr.sort((a, b) =>
        a.price > b.price ? 1 : -1
    );

    arr.forEach((data, index) => {
        document.getElementById("cloud" + (index + 1), "cloud" + (index + 1)).value = data.cloud + " price is: " + data.price + " USD";
    });
    return arr;
}


// Calculate the elastic IPs for Azure
function azure_elasticIP(region, node) {
    let asia = false;
    let us = false;
    let europe = false;
    let result = {
        price: 0,
        cloud: "AZURE"
    }
    let priceUSD = 2.63;
    if (region == 1) {

        asia = true;

        if (node == 1) {
            priceUSD = node * priceUSD;
        }
        else if (node == 2) {
            priceUSD = node * priceUSD;
        }
        else {
            priceUSD = node * priceUSD;
        }

    }
    else if (region == 2) {

        us = true;

        if (node == 1) {
            priceUSD = node * priceUSD;
        }
        else if (node == 2) {
            priceUSD = node * priceUSD;
        }
        else {
            priceUSD = node * priceUSD;
        }

    }
    else{

        europe = true;

        if (node == 1) {
            priceUSD = node * priceUSD;
        }
        else if (node == 2) {
            priceUSD = node * priceUSD;
        }
        else {
            priceUSD = node * priceUSD;
        }

    }
    if (asia) {
        result.price = priceUSD;
        return result;
    }
    else if (us) {
        result.price = priceUSD;
        return result;
    }
    else {
        result.price = priceUSD;
        return result;
    }
}

// Calculate the elastic IPs for GCP
function gcp_elasticIP(region, node) {
    let priceUSD = 0;
    let asia = false;
    let us = false;
    let europe = false;
    let result = {
        price: 0,
        cloud: "GCP"
    }


    if (region == 1) {
        priceUSD = 2.92;
        asia = true;

        if (node == 1) {
            priceUSD = node * priceUSD;
        }
        else if (node == 2) {
            priceUSD = node * priceUSD;
        }
        else {
            priceUSD = node * priceUSD;
        }

    }
    else if (region == 2) {
        priceUSD = 1.46;
        us = true;

        if (node == 1) {
            priceUSD = node * priceUSD;
        }
        else if (node == 2) {
            priceUSD = node * priceUSD;
        }
        else {
            priceUSD = node * priceUSD;
        }

    }
    else  {
        priceUSD = 2.92;
        europe = true;

        if (node == 1) {
            priceUSD = node * priceUSD;
        }
        else if (node == 2) {
            priceUSD = node * priceUSD;
        }
        else {
            priceUSD = node * priceUSD;
        }

    }
    if (asia) {
        result.price = priceUSD;
        return result;
    }
    else if (asia) {
        result.price = priceUSD;
        return result;
    }
    else {
        result.price = priceUSD;
        return result;
    }
}

// Calculate the elastic IPs for AWS
function aws_elasticIP(region, node) {
    let asia = false;
    let us = false;
    let europe = false;
    let result = {
        price: 0,
        cloud: "AWS"
    }
    let priceUSD = 2.63;
    if (region == 1) {

        asia = true;

        if (node == 1) {
            priceUSD = node * priceUSD;
        }
        else if (node == 2) {
            priceUSD = node * priceUSD;
        }
        else {
            priceUSD = node * priceUSD;
        }

    }
    else if (region == 2) {

        us = true;

        if (node == 1) {
            priceUSD = node * priceUSD;
        }
        else if (node == 2) {
            priceUSD = node * priceUSD;
        }
        else {
            priceUSD = node * priceUSD;
        }

    }
    else{

        europe = true;

        if (node == 1) {
            priceUSD = node * priceUSD;
        }
        else if (node == 2) {
            priceUSD = node * priceUSD;
        }
        else {
            priceUSD = node * priceUSD;
        }

    }
  
    
    
    if (asia) {
        result.price = priceUSD;
        return result;
    }
    else if (asia) {
        result.price = priceUSD;
        return result;
    }
    else {
        result.price = priceUSD;
        return result;
    }
}