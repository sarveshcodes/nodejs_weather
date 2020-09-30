const request= require('request')

const forecast=(location,callback)=>{


const url='https://api.openweathermap.org/data/2.5/weather?q='+location+'&units=metric&appid=121bc216a9373ec1c38213362ade3efb'
request({url:url, json:true},(error,rresponse)=> {
      if(rresponse.body.cod==404)
      {   
          callback(rresponse.body.message,undefined)
      }
     
      else
      {   
          if(rresponse.body.main)
          {
          callback(undefined,{
              description:rresponse.body.weather[0].description,
              temp:rresponse.body.main.temp,
              name:rresponse.body.name
          
            })
          }   
          else  
          {
              callback('Please enter a city name')
          }   
                    
    
      }
     
    })

}

module.exports={forecast}

