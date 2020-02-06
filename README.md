## little_spot_SPWA

Based on [little_list_spwa](https://github.com/aliceliveprojects/little_list_SPWA).

A simple angularJS 1.x web-app which will display a list of songs and allow you to view more about the selected song

To use, you must have:

- [Spotify Developer Account](<https://developer.spotify.com/dashboard/>)
- [A running server](https://github.com/aliceliveprojects/little_spot_authentication_server)

The 'running server' is used as part of the authentication process, and is what will keep the CLIENT SECRET of your Spotify account safe. You can find an example of a working server [here](https://github.com/aliceliveprojects/little_spot_authentication_server) which you can use locally.



### Notes

This project comprises 3 modules: **spotifyjs**, **mainjs** and **authenticatejs**:

**spotifyjs** provides the communications service for getting basic information from the Spotify API
**mainjs** provides list, update and detail states
**authenticatejs** provides authenticate_intro and authenticate_secure states

mainjs:list comes first and presents you with an input box in the header, and an authenticate button in the footer.

The Authenticate button takes you to a Spotify login. The access token from the login is stored in local storage and is available from the authenticateSrvc.getAuthInfo() at any point afterward.

Once back to the mains:list state again, the input box can be used to type a term. Currently, it's interpreted as being an artist name, but use the [Spotify API docs](https://developer.spotify.com/documentation/web-api/reference/search/search/) to improve as you like.

Data is fetched when the input box submits (hit return when you're typing)

If anything is found from the search, it is listed.

Pressing on an item in the list view will do a fetch on that specific item, and go to the detail view.

Also shows how we can simply add new states and modules and move between them.



### Getting Started with the Server

Open the server code within Visual studio code if you don't have this IDE, you can download it [here](https://code.visualstudio.com/).

Once that's done you'll greeted with a similar window to this.

[![Screen-Shot-2020-02-06-at-17-26-13.png](https://i.postimg.cc/Jz9yfJHV/Screen-Shot-2020-02-06-at-17-26-13.png)](https://postimg.cc/BjBQDjCM)



Now if you click on the bug like icon with an X in the middle you will see this in your sideview.

[![Screen-Shot-2020-02-06-at-17-29-16.png](https://i.postimg.cc/rzX36fTR/Screen-Shot-2020-02-06-at-17-29-16.png)](https://postimg.cc/q6wjyXzp)



Create a launch.json file then replace what you see in that .json file with the following code 

```
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "program": "${workspaceFolder}/index.js",
      "env":{
        "API_DOMAIN":"localhost", //For us it is localhost
        "API_PORT":	"8000",//Port we are using
        "API_SCHEME":"http",
        "SPOTIFY_API_DOMAIN":"accounts.spotify.com",
        "SPOTIFY_API_PATH":"/api/token",
        "SPOTIFY_CLIENT_CALLBACK_URL": "http://localhost:5500/callback.html",
        "SPOTIFY_CLIENT_ID":"GET ME FROM HERE:<https://developer.spotify.com/dashboard/>",
		"SPOTIFY_CLIENT_SECRET":"GET ME FROM HERE <https://developer.spotify.com/dashboard/>",
        "SPOTIFY_ENCRYPTION_SECRET": "Give me your best secret word"// Can be any arbitary string
      }
    }
  ]
}
```

Replace the empty string's of "SPOTIFY_CLIENT_SECRET", "SPOTIFY_CLIENT_ID" with the ones given to you from your Spotify Developer Account 



Once that's done you can look back at the debug side view and above there you will see a green play button 

[![Screen-Shot-2020-02-04-at-17-34-22.png](https://i.postimg.cc/qRWv9H5J/Screen-Shot-2020-02-04-at-17-34-22.png)](https://postimg.cc/zbSNg6N6) 

this will launch your server for you and give you a similar console output such as this

[![Screen-Shot-2020-02-04-at-17-52-28.png](https://i.postimg.cc/6QYwHz06/Screen-Shot-2020-02-04-at-17-52-28.png)](https://postimg.cc/f3t6ycp1) 

That's all for the server.



### **Getting Started With The Code**

Now open 'little_spot_spwa' in Visual studio code, within the file directory in the 'services' folder you will see a file named credentials.service.js

[![Screen-Shot-2020-02-06-at-18-21-38.png](https://i.postimg.cc/9QpTvyzQ/Screen-Shot-2020-02-06-at-18-21-38.png)](https://postimg.cc/v44cngWJ)

The 'clientId' will be the same one you recieve from your developer account.

Next you open the app.js and look for the line of code with comments above to flag it  '$locationProvider.html5Mode(true)' and comment out the line. The line must be commented out so the SPWA will work locally the same must be done for the index with the line 'base href="/little_spot_SPWA".



Now open your terminal and enter the following lines of code

```
sudo npm install -g http-server
```

```
http-server -a localhost -p 5500
```

Voila! Now you should be up and running!



### **One last thing!**

On your developer account click the big green button reading '**edit settings**' you will be greeted with a nice white modal asking for your redirect URI, this can be found within your **credentials.service.js** in-between **redirectShort** and **scopes** just add it to the spotify modal and you will be authenticating like a pro! 



[![Screen-Shot-2020-02-06-at-18-01-02.png](https://i.postimg.cc/LXK5n7Z6/Screen-Shot-2020-02-06-at-18-01-02.png)](https://postimg.cc/DW6nNxgt)

