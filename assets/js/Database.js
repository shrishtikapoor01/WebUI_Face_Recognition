/*
Asia = 1
US = 2
Europe = 3
*/

// Calculating the price of Databases for AWS, GCP, Azure in the region (Asia, US, Europe)
function database_price() {

    let region = document.getElementById("region").value;
    let data_size = document.getElementById("data_size").value;
    let db_type = document.getElementById("db_type").value;

    $(document).ready(function(){
        if(region == '' || data_size =='' || db_type ==''){
            return;
        }
        else{ 
            $('#staticBackdrop').modal('show');
        }
    });

    let azure_price = sql_database_azure(region, data_size, db_type);
    let gcp_price = sql_database_gcp(region, data_size, db_type);
    let aws_price = sql_database_aws(region, data_size, db_type);
    // let arr = [azure_price, gcp_price, aws_price];
    let arr = [azure_price , gcp_price , aws_price];
    // result.sort();

    arr.sort((a,b)=>
a.price>b.price ? 1:-1
);

arr.forEach((data , index) => {
    document.getElementById("cloud"+(index+1),"cloud"+(index+1)).value=data.cloud+" price is: "+data.price+" USD";
});
console.log(arr);
    return arr;
}

// Calculating the price of Azure SQL Database for the region (Asia, US, Europe)
function sql_database_azure(region, data_size, db_type) { 
    let priceUSD = 0;

    let SQL = false;
    let MYSQL = false;
    let POSTGRESQL = false;
    let result = {
        db:"",
        price:0,
        cloud:"AZURE"
    }
    // Price calculation for Azure SQL Database
    if(db_type == "SQL"){
        SQL=true;
        // For Asia pacific region
        if(region==1){
            priceUSD = 391.26;
            if(data_size > 5)
                priceUSD += (data_size-5)*0.13 + (data_size-5)*0.04;
                // console.log(priceUSD); //0.13+0.04=0.17
        }
        // For US East region
        else if(region==2){
            priceUSD = 368.93;
            if(data_size > 5)
                priceUSD += (data_size-5)*0.12 + (data_size-5)*0.03;
        }
        // For Europe region
        else{
            priceUSD = 373.45;
            if(data_size > 5)
                priceUSD += (data_size-5)*0.13 + (data_size-5)*0.04;
        }
    }
    // Price calculation for Azure MySQL Database
    else if(db_type == "MySQL"){
        // For Asia pacific region
        MYSQL = true;
        if(region==1){
            priceUSD = 180.82;
            if(data_size > 5)
                priceUSD += (data_size-5)*0.131;
        }
        // For US East region
        else if(region==2){
            priceUSD = 128.47;
            if(data_size > 5)
                priceUSD += (data_size-5)*0.12;
        }
        // For Europe region
        else{
            priceUSD = 152.82;
            if(data_size > 5)
                priceUSD += (data_size-5)*0.137;
        }
    }
    // Price calculation for Azure PostgreSQL Database
    else{
        // For Asia pacific region
        POSTGRESQL = true;
        if(region==1){
            priceUSD = 180.82;
            if(data_size > 5)
                priceUSD += (data_size-5)*0.131;
        }
        // For US East region
        else if(region==2){
            priceUSD = 128.47;
            if(data_size > 5)
                priceUSD += (data_size-5)*0.12;
        }
        // For Europe region
        else{
            priceUSD = 152.82;
            if(data_size > 5)
                priceUSD += (data_size-5)*0.137;
        }
    }

    if(SQL){
        result.db="SQL";
        result.price=priceUSD
        return result
    }else if(MYSQL){
        result.db="MYSQL";
        result.price=priceUSD
        return result
    }else{
        result.db="POSTGRESQL";
        result.price=priceUSD
        return result
    }
    
}

// Calculating the price of GCP SQL, MySQL, PostgreSQL Database for the region (Asia, US, Europe)
function sql_database_gcp(region, data_size, db_type) {
    let priceUSD =0;
    let SQL = false;
    let MYSQL = false;
    let POSTGRESQL = false;
    let result = {
        db:"",
        price:0,
        cloud:"GCP"
    }
    // Price calculation for GCP SQL Database
    if(db_type == "SQL"){
        // For Asia pacific region
        SQL=true;
        if (region == 1) {
            priceUSD = 478.53;
            let data = 10;
            // For each GB of data data_size SSD volume if exceed 10 GB calculated seperatly.
            while (data < data_size) { 
                priceUSD += 0.2;
                data++;
            }
        }
        // For US East region
        else if (region == 2) {
            priceUSD = 467.85;
            let data = 10;
            // For each GB of data data_size SSD volume if exceed 10 GB calculated seperatly. 
            while (data < data_size) { 
                priceUSD += 0.18;
                data++;
            }
        }
        // For Europe region
        else {
            priceUSD = 478.53;
            let data = 10;
            // For each GB of data data_size SSD volume if exceed 10 GB calculated seperatly. 
            while (data < data_size) { 
                priceUSD += 0.20;
                data++;
            }
        }
        
    }
    // Price calculation for GCP MySQL Database
        else if(db_type == "MYSQL"){
            MYSQL=true;
        // For Asia pacific region
        if (region == 1) {
            priceUSD = 98.93;
            let data = 10;
            // For each GB of data data_size SSD volume if exceed 10 GB calculated seperatly.
            while (data < data_size) { 
                priceUSD += 0.2;
                data++;
            }
        }
        // For US East region
        else if (region == 2) {
            priceUSD = 88.25;
            let data = 10;
            // For each GB of data data_size SSD volume if exceed 10 GB calculated seperatly.
            while (data < data_size) { 
                priceUSD += 0.18;
                data++;
            }
        }
        // For Europe region
        else {
           
            priceUSD = 98.93;
            let data = 10;
            // For each GB of data data_size SSD volume if exceed 10 GB calculated seperatly.
            while (data < data_size) { 
                priceUSD += 0.2;
                data++;
            }
        }
    
    }
    else{
        // Price calculation for GCP PostgreSQL Database
        POSTGRESQL= true;
        // For Asia pacific region
        if (region == 1) {
            priceUSD = 98.93;
            let data = 10;
            // For each GB of data data_size SSD volume if exceed 10 GB calculated seperatly.
            while (data < data_size) { 
                priceUSD += 0.2;
                data++;
            }
        }
        // For US East region
        else if (region == 2) {
            priceUSD = 88.25
            let data = 10;
            // For each GB of data data_size SSD volume if exceed 10 GB calculated seperatly.
            while (data < data_size) { 
                priceUSD += 0.18;
                data++;
            }
        }
        // For Europe region
        else {
            priceUSD = 98.93;
            let data = 10;
            // For each GB of data data_size SSD volume if exceed 10 GB calculated seperatly.
            while (data < data_size) { 
                priceUSD += 0.2;
                data++;
            }
        }

    }
    if(SQL){
        result.db="SQL";
        result.price=priceUSD
        return result
    }else if(MYSQL){
        result.db="MYSQL";
        result.price=priceUSD
        return result
    }else{
        result.db="POSTGRESQL";
        result.price=priceUSD
        return result
    }
}

// Calculating the price of Amazon RDS for SQL, MySQL, PostgreSQL Database for the region (Asia, US, Europe)
// For 2vCPU and 4GB RAM
function sql_database_aws(region, data_size, db_type) {
    let priceUSD = 0;
    let SQL = false;
    let MYSQL = false;
    let POSTGRESQL = false;
    let result = {
        db:"",
        price:0,
        cloud:"AWS"
    }
    // Price calculation for Amazon RDS for SQL Database
    if(db_type == "SQL"){
        SQL = true;

        // For Asia pacific region
        if (region == 1) {
            priceUSD = 85.54;
            let data = 10;
            while (data < data_size) { // For each GB of data data_size EBS volume
                priceUSD += 0.131;
                data++;
            }
        }
        // For US East region
        else if (region == 2) {
            priceUSD = 64.35;
            let data = 10;
            while (data < data_size) { // For each GB of data data_size EBS volume
                priceUSD += 0.115;
                data++;
            }
        }
        // For Europe region
        else {
            priceUSD = 71.67;
            let data = 10;
            while (data < data_size) { // For each GB of data data_size EBS volume
                priceUSD += 0.133;
                data++;
            }
        }

    }
    // Price calculation for Amazon RDS for MySQL Database
    else if(db_type == "MySQL"){
        MYSQL = true;
        // For Asia pacific region
        if (region == 1) {
            priceUSD = 71.67;
            let data = 10;
            while (data < data_size) { // For each GB of data data_size EBS volume
                priceUSD += 0.131;
                data++;
            }
        }
        // For US East region
        else if (region == 2) {
            priceUSD = 49.76;
            let data = 10;
            while (data < data_size) { // For each GB of data data_size EBS volume
                priceUSD += 0.115;
                data++;
            }
        }
        // For Europe region
        else {
            priceUSD = 56.34;
            let data = 10;
            while (data < data_size) { // For each GB of data data_size EBS volume
                priceUSD += 0.133;
                data++;
            }
        }
        
    }
    else{
        // Price calculation for Amazon RDS for PostgreSQL Database
        POSTGRESQL = true;
        // For Asia pacific region
        if (region == 1) {
            priceUSD = 77.51;
            let data = 10;
            while (data < data_size) { // For each GB of data data_size EBS volume
                priceUSD += 0.131;
                data++;
            }
        }
        // For US East region
        else if (region == 2) {
            priceUSD = 53.41;
            let data = 10;
            while (data < data_size) { // For each GB of data data_size EBS volume
                priceUSD += 0.115;
                data++;
            }
        }
        // For Europe region
        else {
            priceUSD = 59.41;
            let data = 10;
            while (data < data_size) { // For each GB of data data_size EBS volume
                priceUSD += 0.133;
                data++;
            }
        }
    }
    if(SQL){
        result.db="SQL";
        result.price=priceUSD
        return result
    }else if(MYSQL){
        result.db="MYSQL";
        result.price=priceUSD
        return result
    }else{
        result.db="POSTGRESQL";
        result.price=priceUSD
        return result
    }
}