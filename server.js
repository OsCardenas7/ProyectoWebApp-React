import Express from 'express'
import Path from 'path'

const app = Express()
app.use(Express.static("frontend/build"))
app.use(Express.json())
app.use(Express.urlencoded({}))
const dir_root = Path.resolve()

app.listen('8000', function(){
    console.log("Server has started")
})

app.get('/', function(req, res){
    res.sendFile(dir_root + "/frontend/build/index.html")
})

app.get("/home", (req, res)=>{
    res.sendFile(dir_root + "/frontend/build/index.html")
})

app.get("/register_page", (req, res)=>{
    res.sendFile(dir_root + "/frontend/build/index.html")
})

app.get("/consult_page", (req, res)=>{
    res.sendFile(dir_root + "/frontend/build/index.html")
})

app.get("/contact", (req, res)=>{
    res.sendFile(dir_root + "/frontend/build/index.html")
})

app.post("/register_users", (req, res)=>{
    let {name, lastname, id, birthday} = req.body
    console.log(name + " " + lastname + " " + id + " " + birthday)
    res.redirect("/")
})