const http = require('http')
const path = require("path")
const fs = require('fs')
const server = http.createServer((req, res) =>{
    // request  - sorov
    // response - javob
//  console.log(request.url);
//     response.write('<h1>Hello world</h1>')
if(req.method ==='GET'){
   
    if(req.url ==='/'){
        fs.readFile(path.join(__dirname,'template','index.html'),'utf-8',(err,data)=>{
            if(err) throw err
            res.end(data)
        })
    }else if(req.url ==='/about'){
        fs.readFile(path.join(__dirname,'template','about.html',),'utf-8',(err,data)=>{
            if(err) throw err
            res.end(data)
    })}else if(req.url === '/contect'){
        fs.readFile(path.join(__dirname,'template','contect.html'),'utf-8',(err,data)=>{
            if(err) throw err
            res.end(data)

})
}else if(req.url === '/api/admin'){
    const  json = {
        name:"Muhammadqodir",
        surname: 'Usmonaliyev',
        job:'backend devloper'
}
    res.end(JSON.stringify(json))
}
}else if(req.method ==='POST'){
       
        const name =[]
        req.on('data', data=>{
            name.push(Buffer.from(data))
        })
        req.on('end',()=>{
           const toName = name.toString().split('=')[1]
            res.end(`successfly ${toName}`)
        })

    }
})
  server.listen(3000, ()=>{
        console.log('server runnig port:3000');
    })
