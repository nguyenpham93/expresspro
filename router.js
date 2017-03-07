const routing = (sever)=>{
    sever.get('/',(req,res)=>{
        res.send('Hello Express');
    });
    sever.get('/json',(req,res)=>{
        res.json({
            'Books' : 'Learning Express',
            "BookID" : "B1234"
        });
    });
}
module.exports = routing;