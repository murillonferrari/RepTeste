import { createServer } from 'http';


createServer(function(req,res){
    
    
        res.write(("Hello World 2025"));
        return res.end();
    }). listen(8080);