# Assignment 9
1. Create a new user profile component showing the properties of a user. The user shall be determined by it's id passed in as a `prop`. 

    The user profile shall be retrieved by a new service call, that uses the dev-server endpoint `GET` `/api/users/{id}`.
    
    You can test the component by temporarily adding it the `Chatterbox` component.
2. Use `react-router`'s `HashRouter` to create a separate page for the user-profile component, which can be accessed using `localhost:8080/#/user-profiles/{id}`, for example.
3. Create Links from users of the `UserList`component to their corresponding user-profile page
4. Now user the `BrowserRouter` to get beautiful URLs.
    - Hint 1: use webpack-dev-server's option `historyApiFallback: true`, to always serve the `index.html instead of a 404-response.
    - Hint 2: correct the `index.html` to include `bundle.js` with an absolute path, so this works also from nested paths.
5. Optional: The state of being an active chat member get's lost if you switch pages. Do you know how to solve this?