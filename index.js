// function that takes two strings as arguments. One that is userName the other UserEmail
document.addEventListener('DOMContentLoaded', submitData)


function submitData (userName, userEmail){
    //write a valid Post request that includes URL, headers for Content-type & Accept and body with name and email passed in as arguments to submitData these should be assigned name and email keys
    let userInfo = {
        name: userName,
        email: userEmail
    }

    let inputObject = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(userInfo)
    }

   return fetch('http://localhost:3000/users', inputObject)
    .then(function (response){
        return response.json()
    })
    .then(function(object){
        let p = document.createElement('p')
         p.textContent = object.id
         document.body.append(p)

    })
    .catch(function (error){
        let p1 = document.createElement('p')
        p1.textContent = error.message
        document.body.append(p1)
    })

}





