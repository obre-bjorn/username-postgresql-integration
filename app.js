const express = require('express')
const app = express()

app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))

const userControllers = require('./controllers/usersControllers')


app.get('/', userControllers.getUsernames)

app.get('/new', userControllers.createUsernameGet)


app.post('/new', userControllers.createUsernamePost)

app.get('/search/:query', (req,res) => {
    

})




app.listen(3000, console.log('Server running at port 3000'))