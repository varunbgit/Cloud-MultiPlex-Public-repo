const express = require("express")
const app = express();
const cp = require("child_process")
// var path = require('path');
// import {hosting} from "./assets/js/webhosting.js";
// import {aman} from "./assets/js/webhosting"
//webhosting.js
app.get("/test", function (req,res){


    
    
    // var para = req.query;
    // res.send(para.ab);
    

    
    // console.log(para.gb);
    // alert(para.gb);
    // let gb = req.query.gb;
    // alert(gb)
    // cp.exec('python3 instance.py')
    
    
        cp.exec('terraform  -chdir="./Terraform/ec2" apply -auto-approve',(err, stdout, stderr) => {
            if (err) {
                console.log(stderr);
                res.send("Failed");
            }else{
            res.send("Success");
            console.log(stdout);
            
        }
    
        
        // });
    

});
});




app.get("/data" ,(req,res)=>{
   console.log(req);
})

// const nodeCmd = require('node-cmd');

// import myname , {lw , myvimal} from './shrishti' 
 

app.use('/assets', express.static(__dirname + '/assets'));

app.get("", function (req, res) {
    res.sendFile(__dirname + "/index.html")
});
app.get("/form_webhosting.html", function (req, res) {
    res.sendFile(__dirname + "/form_webhosting.html")
});
app.get("/form_storage.html", function (req, res) {
    res.sendFile(__dirname + "/form_storage.html")
});
app.get("/form_ElasticIP.html", function (req, res) {
    res.sendFile(__dirname + "/form_ElasticIP.html")
});
app.get("/form_SQLDB.html", function (req, res) {
    res.sendFile(__dirname + "/form_SQLDB.html")
});
app.get("/form_kubernetes.html", function (req, res) {
    res.sendFile(__dirname + "/form_kubernetes.html")
});


app.listen(3000);