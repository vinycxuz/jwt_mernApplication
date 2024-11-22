
# JWT_Application

This exercise is a different methods to make register and login using JWT. 
First method is only using JWT module.
Updating second method, using Google OAUth and passport

## Installation

Install the modules from JWT_Application with npm

```bash
  npm install bcrypt express mongoose jsonwebtoken cors dotenv cookie-parser
```

Create a .env and apply your credentials following this schema for your database
```bash
email:{
    type: String,
    required: true,
    unique: true
  },
  username:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true
  },
  date:{
    type: Date,
    default: Date.now
  }
```
dotenv is STRING_CONNECTION





## Run Locally


Start the server

```bash
  node index
```

For test, use your favorite, I use thunderclient directly in vs code and the routes is

```bash
  localhost:3000/signup
  localhost:3000/login
```

The JSON to signup is

```bash
{
  "email":"yourexample@yourexample.com",
  "username":"yourexample",
  "password":"yourexample"
}
```



## Contributing

Contributions are always welcome!

Specially for frontend :D

