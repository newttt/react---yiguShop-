const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use(proxy("/api",{
        target:"https://api.ricebook.com",
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    }))

    app.use(proxy("/users",{
        target:"http://10.60.13.121:3000",
        changeOrigin:true,
    }))
}

