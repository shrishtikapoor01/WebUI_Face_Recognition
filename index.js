// import Swal from 'sweetalert2'
const express = require("express")
const app = express();
const cp = require("child_process")
//adding the storage upload package
// const formidable = require('formidable');

// CommonJS
const Swal = require('sweetalert2')
// var path = require('path');
// import {hosting} from "./assets/js/webhosting.js";
// import {aman} from "./assets/js/webhosting"
//webhosting.js

    
app.get("/test", function (req,res){
    
    
        cp.exec('python face.py',(err, stdout, stderr) => {
            if (err) {
                
                res.status(400).json({ message: 'unauthorized' });
            }else{

            res.status(200).json({ message: 'authorized' });
            
            
        }
});
});




app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
});


app.use('/assets', express.static(__dirname + '/assets'));


app.listen(4000);