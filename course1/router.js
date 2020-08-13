const fs = require("fs")
let router = (req,res)=>{
    //console.log(req.url,req.method,req.headers)
    //console.log(req.headers)
    //console.log(req.headers.host)
      
    if(req.url === "/"){ 
        res.setHeader("content-type","json")
    res.write("<html>")
    res.write("<form action='/messagee' method ='POST'><input type='text' name='name'><input type = 'submit' ></form>")
    res.write("</html>")
   //to quit the function execution
    return res.end()

    }
    else if(req.url === "/messagee" && req.method == "POST"){
            res.setHeader("content-type","text/html")
        res.write("congratulation, you have sucessfully registered")
        let body = []
        //here we are listening for data event
        req.on("data",(chunks)=>{
            body.push(chunks)

            //body is now an array of chunks which are human unreadable format
        })
       //this event listener will be fired once we are done passing the incoming request data
        req.on("end",()=>{
            const parsedBody = body.toString().slice(3,)
            fs.appendFile("textt.txt",parsedBody,()=>{
                console.log("hi")
            })
            
            
        })
        return res.end()
       
    }

}
module.exports = router
