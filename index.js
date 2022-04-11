const express = require('express')
const app = express()
const fs = require('fs')

app.use(express.static('static'))
app.use(express.urlencoded({extended:true}))

app.get("/login", (req, res) => {
    res.sendFile(__dirname + '/regForm.html')
})

function FileWrite(error)
{
    if(error)
    {
        console.log("Error")
    }
    else
    {
        console.log("User added")
    }
}

app.post("/login", (req, res) => {
    if(!req.body)
        console.log("Error")
    else
    {
        let user = fs.readFileSync('users.txt', 'utf-8').toString().split("\n")
        let result = ""
        for(let i = 0; i < user.length; i++)
        {
            let userData = user[i].split(" ")
            if (userData[0] == req.body.username)
            {
                if (userData[1] == req.body.password)
                {
                    if (req.body.password == req.body.passAng)
                    {
                        result = "Glad to meet you, " + req.body.username
                    }
                }
                else
                {
                    result = "Wrong password"
                }
            }
        }
        if(!result)
        {
            result = "Apparently, you're new here!"
            fs.appendFile(__dirname + "/users.txt",'\n' + req.body.username + ' ' + req.body.password, FileWrite)
        }
        res.send(result)
    }
})

function AdminMode (req, res) {
    function AdminFunc(req, res) {
        let result = "Since you're an admin, here is the full list of users:\n";
        let user = fs.readFileSync('users.txt', 'utf-8').toString().split("\n")
        for (let i = 0; i < user.length; i++) {
            let userParams = user[i].split(' ')
            result += userParams[0] + '\n'
        }
        res.send(result)
    }

    if(req.headers.secret == 'I know the secret')
    {
        AdminFunc();
    }
    else
    {
        res.send("Seems like you are not admin")
    }
}

app.get("/admin", AdminMode)

app.listen(500)