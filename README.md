# 📅 Add an event

Add an event is a simple app that allows user to add events to the database.
## Prerequisites

Before you begin, ensure you have met the following requirements:
* You have installed Node v14.17.3 or higher.
* You have proper MongoDB URI.

## Installing


In both `backend` and `frontend` directories:
```
npm install
```

In `backend` directory create `.env` file with following variable:
```
DB_URI_DEV="sample://mongo-db-uri"
```
You can get proper `MongoDB URI` by contacting the author.
## Using

### Backend

To start server:
```
npm run start
```
To restart server:
```
npm run restart
```
To start server with automatic restart:

```
npm run start:dev
```
To build:

```
npm run build
```
To test:

```
npm run test
```
### Frontend

To start:
```
npm run start
```
To build:

```
npm run build
```
To test:

```
npm run test
```
## **Future improvements**

* Improving and extending unit tests. Complete test coverage. (!)
* Securing API.
* Implementing test and production environments.
* Connecting the local database.
* Implementing TypeScript on the backend.
* Extending the application with new CRUD requests.
## Technologies used

* React.js with TypeScript
* Node.js with Express
* MongoDB Atlas
## License
<!--- If you're not sure which open license to use see https://choosealicense.com/--->

This project uses the following license: [MIT License](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt).


## Screeshots
![Desktop view](https://user-images.githubusercontent.com/33831675/127796958-8f04c287-671a-4380-940e-df0d9e0a6a9d.png "Desktop view]")
<br>
Desktop view
<br>
![Mobile view with success toast](https://user-images.githubusercontent.com/33831675/127796960-9d550e62-d08c-445b-a1b2-0040438cb5c7.png "Mobile view with success toast")
<br>
Mobile view with success toast
