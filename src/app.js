const express=require('express')

const path=require('path')
const hbs=require('hbs')

const api=require('../utils/api.js')

const app=express()
const port = process.env.PORT || 3000









const directorypath= path.join(__dirname,'../public')
const viewpath=path.join(__dirname,'../templates/views')
const partialpath=path.join(__dirname,'../templates/partials')

app.use(express.static(directorypath))



app.set('view engine','hbs')
app.set('views',viewpath)
hbs.registerPartials(partialpath)

app.get('',(req,res)=> {
    res.render('index',{
        title:"Weather app"
    })
})

app.get('/product',(req,res)=>{
    res.send(req.query.search)  
})

app.get('/about',(req,res)=> {
    res.render('about',{
        title:"About"
    })
})

app.get('/weather',(req,res)=>{
      api.forecast(req.query.location,(error,resp)=>{
          if(!error)
          {
              res.send({
                  location:resp.name,
                  temperature:resp.temp,
                  Description:resp.description

              })

          }
          else{
              
              res.send({error:error})
          }

      })
     
})



app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
        name:"sanu"
    })
})

app.get('*',(req,res)=>{
    res.render('404page',{
        title:"404 Page"
    })
})
app.listen(port,()=>{
    console.log("Server is running on port"+port)
}
)