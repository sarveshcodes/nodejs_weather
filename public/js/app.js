

console.log("client   side is loaded")


const form=document.querySelector('form')
const input=document.querySelector('input')

const message1=document.querySelector('#message-1')
const message2=document.querySelector('#message-2')




form.addEventListener('submit',(error) => {
    error.preventDefault()
    const location=input.value;
    message1.textContent='Loading......'
    message2.textContent=''
    fetch('/weather?location='+location).then((response)=>{
         
        response.json().then((data)=>{
            if(data.error)
            {
            
                message1.textContent=data.error
            }
            else
            {   
                message1.textContent=data.location
                message2.textContent="The weather is "+data.Description+" in "+data.location+" and the Temperature is "+data.temperature
            }
            
        })
    })

})
