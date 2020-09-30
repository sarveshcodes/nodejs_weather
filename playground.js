const request= require('request')



const location='s'
const url='https://api.openweathermap.org/data/2.5/weather?q='+location+'&units=metric&appid=121bc216a9373ec1c38213362ade3efb'
request({url:url, json:true},(error,response)=> {
    console.log(error)
    console.log(response.body)
})