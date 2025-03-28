const express = require('express');
const app = express();

app.set("view engine","ejs");


app.get('/',(req,res)=>{
    const data = [
        { name : "Michael Choi",
          createdAt : "23-10-2013",
          message : "This is my first post",
        },
        { name : "Hanibal",
          createdAt : "27-10-2013",
          message : "This is my second post",},
        { name : "Tomy",
          createdAt : "04-11-2013",
          message : "This is my last post"

        }
    ];
res.render('index',{data:data});
});


app.listen(3000,()=>{
    console.log('A request has been listened by port 3000')
});
