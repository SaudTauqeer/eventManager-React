# Event Manager

Event Manager is MERN stack web based application, that lets you schedule events/messages with images and remind/send them at your given date and time.
This is my first full stack web app and it's under development - will add more features and provide better optimization.

## Live Project
http://eventmanager-web.herokuapp.com
Note: It will not work in `https`

## Getting Started

`npm run dev` will run the app in dev mode. You have to specify Environment variables beforehand to make it work.
Environment variables needed to run this are : `REACT_APP_TIME_API_KEY`.
The timezone API used is https://timezonedb.com/api
### Prerequisites

What you need to install the app and how to install them

Simply run `npm start dev` in the root directory to get the front-end running.
Note: You will have to run the node server and RESTapi this app consumes in order to make it fully functional.


### Installing

First, install all the dependencies needed to run the app.

package.json looks like this.

```
{
  "name": "event-reminder",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^1.2.8",
    "@sendgrid/client": "^6.3.0",
    "@sendgrid/mail": "^6.3.1",
    "axios": "^0.18.0",
    "bootstrap": "^4.1.3",
    "dotenv": "^6.1.0",
    "es6-promise": "^4.2.5",
    "isomorphic-fetch": "^2.2.1",
    "react": "^16.6.0",
    "react-dom": "^16.6.0",
    "react-fontawesome": "^1.6.1",
    "react-router-dom": "^4.3.1",
    "react-scripts": "2.1.1",
    "react-table": "^6.8.6",
    "reactstrap": "^6.5.0",
    "serve": "^10.1.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "heroku-postbuild": "npm run build"
  }
```
Now run `npm i` or `npm install`

After installing all the dependencies:

`npm start dev` or `npm start`

![Home page image ](https://raw.githubusercontent.com/SaudTauqeer/eventReminder-React/master/Screenshot%20(7).png "Title")

## Follow these links:

### Node server repo
https://github.com/SaudTauqeer/eventReminder-NodeServer

### RESTful Api repo
https://github.com/SaudTauqeer/eventReminder-RestApi



## Deployment

I have simply deployed it on Heroku with github integration.


## Authors

* **Saud Tauqeer**  - (https://github.com/SaudTauqeer)


## License

This project is licensed under the MIT License.

## Under fixing
* Memory Leak.
The app still have some memory. I fixed them earlier  --> commit id : `b9e78612c4070931e7997e94fb5ad1e8dd0a2c13` but it was using axios and its `cancelSourceToken`.
After running into several preflight issues with sending credentials to the API, I discovered that it is an issue with axios that the setting `axios.defaults.withCredentials = true;` and not using an instance of `withCredentials` at all, solves the issue.
Hence I shifted to `fetch` for better support and had to drop memory leak --> commit id : `b937363fe1d7ccf635bf405d719a19351905fb7b`.
The memory leak issue can be resolved more elegantly using React hooks.

* Heroku idling.
Heroku free tier dyano idles your app after 30 minutes of inactivity. So i created endpoints on the API and server.
And I'm sending a request to them periodically to keep the server awake. Otherwise it will not process the sending of emails.

* ~~Form needs more validation and better routing can be added~~ Before form validation was done on the REST api but now after testing and thinking about it, it's best to move the validation to the React side -> less consumption of server resources -> better managment with state -> better validation time rather than waiting for a response from the API -> as well as live validation.

* For better Redirects i'm currently looking into Protected -> React is my preffered choice for now but i'm also looking into NextJs.

* Will be removing the option of letting user input a sending email. User can add a permanent sending email -> to prevent spoof emails -> and use the app as a spam bot. 

* UI improvements ->  Working on letting user edit their saved event, let them change timezone - timezone will be stored and shown in a dropdown and they can change timezones at any time. Add Component specfic rendering such as for event sent status, date and time rendering.  Full fledged Form validation such as checking for a correct email, correct time vice virsa. Let user delete their account permanently -> user will not be able to register with that email again as to prevent any sinister usage of the app.

### The core functioanlity of the App is working but i'm actively developing on new changes i have written in the changelog to, to ofcouse make the app functional better and let users experience a more friendly and smooth experience.

## Fixes for API and Node server are in their respective README.md

## Acknowledgments
I have used this Bootstrap template with react-strap and edited it according to my need.
* https://startbootstrap.com/template-overviews/new-age/

