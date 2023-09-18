# iRacing Web Challenge

iRacing is a racing simulator that lets users race against other players at scheduled times. We would like to build a new app that displays races that are available to join. This will be a table built in React that shows the users some key bits of information:

-   When the race starts
-   How many players are registered for the race
-   What cars are available to be used
-   What track the race is at
-   A way to join the session and launch the simulator

### Example Table:

| Start Time | # Registered | Cars            | Track         |          |
| ---------- | ------------ | --------------- | ------------- | -------- |
| 1:00 PM    | 57           | Mazda MX-5      | Limerock Park | REGISTER |
| 1:15 PM    | 24           | BMW M4, Audi R8 | Indianapolis  | REGISTER |
| 1:30 PM    | 12           | NASCAR          | Daytona       | REGISTER |

This repository already has mocked endpoints you can use to build this, and do not need an internet connection to fetch any data with.

## Starting the app

-   Install all the dependencies with `npm ci`

-   Start the app with `npm start`

-   Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Api Endpoints

You should have access to the mocked API endpoints automatically when you start the application. You will know you have the mocked endpoints running when you see this message in the console: `[MSW] Mocking enabled.`

[Contact us](mailto:jaime.baker@iracing.com) if you have any trouble getting the mocked API to start.

`/api/cars` - A resource for getting car data from the backend

-   Array of objects:

    -   id - Numeric - ID of the car
    -   make - String - Make of the car
    -   model - String - Model of the car
    -   relative_speed - Numeric - Relative speed of the car to other cars in the service

`/api/tracks` - A resource for getting track data from the backend

-   Array of objects:

    -   id - Numeric - ID of the track
    -   name - String - Name of the track
    -   track_length - Numeric - Length of the track in kilometers
    -   logo - String - URL to the track's logo

`/api/sessions` - A resource for getting session data from the backend

-   Array of objects:

    -   id - Numeric - ID of the session
    -   name - String - Name of the session
    -   start_time - Numeric - Unix timestamp of when the session starts
    -   track_id - Numeric - ID of the track the session is at
    -   car_ids - Array (Numeric) - IDs of the cars that can be used in the session
    -   registered - Numeric - Number of users registered for the session

`/api/mixed-sessions` - A resource for getting preformatted session data for use in iRacing UI's

-   Array of objects:

    -   id - Numeric - ID of the session
    -   name - String - Name of the session
    -   start_time - String - Local time string of when the session starts
    -   track - String - Name of the track the session is at
    -   cars - Array (String) - Names of the cars that can be used in the session
    -   registered - Numeric - Number of users registered for the session

## Objectives:

### Primary Objectives:

-   Use the /api endpoint(s) to fetch and display session data for users
-   Include the following 5 columns of data:
    -   Start Time - format however you feel is appropriate
    -   Number of Registered users
    -   Car(s)
    -   Track
    -   A button or link that alerts the `id` of the session when clicked.
        -   Use the included utility function to simulate registering to a session.
-   Use Redux to store app state

### Secondary Objectives

-   Match the formatting for the time string (local time string), car and track columns to the example provided.
-   Use Typescript
-   Add your own personal flourish or features
