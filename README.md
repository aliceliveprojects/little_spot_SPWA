# Little_spot_SPWA

#### Implementation of the Single Page Web App described in [little_spot_app](<https://github.com/aliceliveprojects/little_spot_app>)

Little Spot App lets you do three things:

1. Request a Spotify **access token**.
2. Request a Spotify **refresh token** when previous session has expires.
3. **Search**, **view** and **stream** a selected song.

### Requirements

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](<https://nodejs.org/en/about/>)
- [NPM](<https://docs.npmjs.com/about-npm/>)
- [Spotify Developer Account](https://developer.spotify.com/dashboard/)(Client ID and Client Secret)
- [Server](https://github.com/aliceliveprojects/little_spot_authentication_server)
- [Heroku Account](<https://signup.heroku.com/>)(Optional)

### Getting Started

#### Creating Developer Account and Registering Application

For account create and registering of application see [little_spot_app](https://github.com/aliceliveprojects/little_spot_app#creating-developer-account-and-registering-application)

#### Completing Application Details

For completing application details see [little_spot_app](https://github.com/aliceliveprojects/little_spot_app#completing-application-details)

### Deploying Server Locally

For Local deployment see [little_spot_app](https://github.com/aliceliveprojects/little_spot_app#deploying-server-locally)

### Deploying Server with Heroku

For Heroku deployment see [little_spot_app](https://github.com/aliceliveprojects/little_spot_app#deploying-server-with-heroku)

### Deploying SPWA Locally

To deploy a single page web application locally on a specified port:

```
sudo npm install -g http-server && http-server -a localhost -p 5500
```

### Deploying SPWA from Github

1. Make sure your index.html is at the root of the folder. 
2. Add "<base href="/little_spot_SPWA/">" to the <head> of your index.html (example can be found within the index), this is typically the name of your project.
3. Add `$locationProvider.hashPrefix('')` to your app.js to remove the hash in the URL given from angularjs
4. Add `$locationProvider.html5Mode(true);` within the `app.config` of app.js as this allows for use of regular URL paths instead of the hashbang equivalent.
5. Go to your repository and then settings.
6. Scroll to the section titled "GitHub Pages"
7. From there choose the branch you wish to deploy and done.

### Deploying SPWA from Heroku

1. `npm i express`
2. Create a new file in your root directory titled `server.js`
3. Add the following variables to begin routing your application.

```javascript
const express = require('express');
const http = require('http')
const path = require('path');
const fs = require('fs');

const app = express();
```

4. Add the following to allow your application to become a static web file

```javascript
app.use(express.static(path.join(__dirname, '')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname + req.url));
});
```

5. The following will handle your callback requests. As we need to extract the code access-token given to use from Spotify however when left unmanaged our SPWA is unable to extract the access-token as the URL is too long.

```javascript
app.get('/little_spot_SPWA/*', (req, res, next) => {
  let reqPath = req.url.split("little_spot_SPWA")[1];
  if (req.query.hasOwnProperty("code")) {
    reqPath = reqPath.split("?")[0];
    res.sendFile(path.join(__dirname + "/js/app_specific/callback" + reqPath));
  } else if (reqPath === "/auth-secure") {
    res.sendFile(path.join(__dirname + "/js/app_specific/authenticate/authenticate.secure.html"));
  } 
  else {
    res.sendFile(path.join(__dirname + reqPath));
  }
});
```

6. Following handles the port number and creates the server.

```javascript
const port = process.env.PORT || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`running on port ${port}`));
```

7. Now go to your dashboard in [Heroku](http://heroku.com/), look for the deployment tab, scroll to 'manual deployment' and click deploy.

### License

This project is licensed under the MIT License - see the [LICENSE.md](https://gist.github.com/PurpleBooth/LICENSE.md) file for details.