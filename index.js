const http=require('http');
const url=require('url');

const server=http.createServer((req,res) => {
const pathname=req.url
if(pathname=='/'){
    res.end('home');
}
else{
    res.end('404')
}
})

server.listen(5000,'localhost',()=>{
    console.log('Server  ');
})