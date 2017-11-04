# React Test App
Single Page Application using React, Redux and indexedDB

**Tech Stack:**

- React with Redux, client level caching with indexedDB

**To Run:**

Clone the repository and run the following commands under appropriate directories
 - Do 'npm install'
 - Run 'npm start'
 
Client starts at 8080

**How it works:**
 - 4 AJAX requests are fired simultanously as the app starts
 - Data is downloaded from the URLs and timestamps are displayed on the UI
 - Downloaded data is then saved in indexedDB
 - Buttons are provided to fetch data for further requests and timestamps are changed accordingly
 - Current UNIX time is also displayed

**Code Structure and Characteristics:**

 - React components are divided into 'components' and 'containers'
 - Components are dumb and are functional components
 - They do not know about the state or redux store, their role is to take care of the UI
 - Containers know about the states and are connected to redux stores
 - They just render the corresponding UI component
 - All the actions are dispatched via 'containers'
 - Reducers are responsible for updating the states in store
 - Reducers are pure functions
