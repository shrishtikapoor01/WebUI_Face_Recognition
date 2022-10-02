
function Launchxyz(){
    console.log("xyz");
}


 function launchaws(){
    console.log("os:"+os);
    console.log("ram:"+ram);
    console.log("region:"+region);
    // $.ajax({ 
    //     type: "GET",
    //     dataType: "json",
    //     contentType: "application/json",
    //     url: "http://localhost:3000/test",
    //     success: function(){
    //         alert("success");
    //         console.log("launched log");
                



    //     }
    //  });

    // return data 

} 

function launchazure(){
    $.ajax({ 
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        url: "http://localhost:3000/test",
        success: function(){
            alert("success");
            console.log("launched log");
                



        }
     });

    
}

function nothing(){
    console.log("do nothing");
}


function  hosting(){

    let region = document.getElementById("region").value;
    let os = document.getElementById("os").value;
    let ram = document.getElementById("ram").value; //2

    
    $(document).ready(function(){
        if(region == '' || os =='' || ram ==''){

            if(os ==''){
                Notiflix.Notify.failure(
                    'Please Select OS',
                  );
               }
           else if(region ==''){
             Notiflix.Notify.failure(
                 'Please Select Region',
               );
            }

          else if(ram ==''){
            Notiflix.Notify.failure(
                'Please Select RAM',
              );
           }
            return;
        }
        else{
            $('#staticBackdrop').modal('show');
        }
    });
    
    let AZURE = hosting_azure(region, os, ram);
     let GCP =  hosting_gcp(region, os, ram);
     let AWS = hosting_aws(region, os, ram);
    let arr = [AZURE, GCP, AWS]; 
    //[2,3,1]

arr.sort((a,b)=>
a.price>b.price ? 1:-1
);

var temp = "";
arr.forEach((data) => {
    // console.log("Hello " +data);

    // blank += "<li>"+data.price+"-"+data.cloud+"</li>" 
    // console.log(data.price);
    // document.getElementById("cloud"+(index+1),"cloud"+(index+1)).value=data.cloud+" price is: "+data.price+" USD";
    temp += `<div class="input-group mb-3 " style="width:300px; margin-left: 50px;">
    <input type="text" disabled id="cloud1" class="form-control ${data.cloud=='AWS' ? 'aws' : 'otheros'}" aria-label="Recipient's username"
      aria-describedby="button-addon2" value="${data.cloud} price is :${data.price} USD">
    <button type="button" class="btn btn-outline-info" onclick="${data.cloud=='AWS' ? launchaws(os,ram ,region) : data.cloud=='AZURE'? launchazure(os,ram,region):nothing()}" >Launch</button>
  </div>`

});  
    document.getElementById("model_body").innerHTML=temp;
    return arr;
}



// Calculating price for Azure hosting in region (Asia, Africa, Europe)
function hosting_azure(region, os, ram){
    let priceUSD = 0;
    let ubuntu = false;
    let rhel = false;
    let windows = false;
    let result = {
        os:"",
        price:0,
        cloud:"AZURE"
    }
    // For Asia region
    if(region == 1){
        if(os == "ubuntu"){
            ubuntu = true;
            priceUSD = 18.25;
            let reqRam = 1;
            while(ram >= reqRam){ 
                priceUSD *= 2; 
                reqRam*=2;
            }
        }
        else if(os == "rhel"){
            rhel = true;
            priceUSD = 40.15;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;  
            }
        }
        else{
            // os == windows
            windows = true;
            priceUSD = 173.74;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;  
            }
        }
        // return priceUSD;
    }
    // For Africa region
    if(region == 2){
        if(os == "ubuntu"){
            priceUSD = 17.595;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;
            }
        }
        else if(os == "rhel"){
            priceUSD = 39.495;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;  
            }
        }
        else{
            // os == windows
            priceUSD = 180.385;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;  
            }
        }
        // return priceUSD;
    }
    // For Europe Region
    if(region == 3){
        if(os == "ubuntu"){
            priceUSD = 14.965;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;
            }
        }
        else if(os == "rhel"){
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
        // return priceUSD;
    }
    if(ubuntu){
        result.os="ubuntu";
        result.price=priceUSD
        return result
    }else if(rhel){
        result.os="rhel";
        result.price=priceUSD
        return result
    }else{
        result.os="windows";
        result.price=priceUSD
        return result
    }
}
// Calculating price for GCP hosting in region (Asia, Africa, Europe)
function hosting_gcp(region, os, ram){
    let priceUSD = 0;
    let ubuntu = false;
    let rhel = false;
    let windows = false;
    let result = {
        os:"",
        price:0,
        cloud:"GCP"
    }
    // For Asia region (Mumbai)
    if(region == 1){
        if(os == "ubuntu"){
            ubuntu = true;
            priceUSD = 10.74;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;
            }
        }
        else if(os == "rhel"){
            rhel = true;
            priceUSD = 54.54;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;  
            }
        }
        else{
            // os == windows
            windows = true;
            priceUSD = 16.22;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;  
            }
        }

    }
    // For Africa region 
    // For Europe Region (Finland)
    if(region == 3){
        if(os == "ubuntu"){
            ubuntu = true;
            priceUSD = 10.75;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;
            }
        }
        else if(os == "rhel"){
            rhel = true;
            priceUSD = 53.89;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;  
            }
        }
        else{
            // os == windows
            windows = true;
            priceUSD = 18.49;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;  
            }
        }

    }
    if(ubuntu){
        result.os="ubuntu";
        result.price=priceUSD
        return result
    }else if(rhel){
        result.os="rhel";
        result.price=priceUSD
        return result
    }else{
        result.os="windows";
        result.price=priceUSD
        return result
    }
}

function hosting_aws(region, os, ram){
    let priceUSD = 0;
    let ubuntu = false;
    let rhel = false;
    let windows = false;
    let result = {
        os:"",
        price:0,
        cloud:"AWS",
        region:region,
        ram:ram
    }
    // For Asia region (Mumbai)
    if(region == 1){
        if(os == "ubuntu"){
            ubuntu = true;
            priceUSD = 8.18;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;
            }
        }
        else if(os == 'rhel'){
            rhel = true;
            priceUSD = 51.98;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;  
            }
        }
        else{
            // os == windows
            windows = true;
            priceUSD = 451.69;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;  
            }
        }

    }
    // For Africa region
    
    // For Europe Region 
    if(region == 3){
        if(os == "ubuntu"){
            ubuntu = true;
            priceUSD = 13.72;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;
            }
        }
        else if(os == "rhel"){
            rhel = true;
            priceUSD = 57.52;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;  
            }
        }
        else{
            // os == windows
            windows = true;
            priceUSD = 483.99;
            let reqRam = 1;
            while(ram >= reqRam){
                priceUSD *= 2;
                reqRam*=2;  
            }
        }
  
    }
    if(ubuntu){
        result.os="ubuntu";
        result.price=priceUSD
        return result
    }else if(rhel){
        result.os="rhel";
        result.price=priceUSD
        return result
    }else{
        result.os="windows";
        result.price=priceUSD
        return result
    }
}