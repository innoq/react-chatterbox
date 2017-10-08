# Assignment 7
1. Use the `fetch`-API to connect your nickname selector to the development REST backend. Use the following resource endpoints for this:
    - enter chatroom: POST to `/api/users` with `Content-Type: application/json` and body `{"nickname": "<value>"}`. The response body contains a JSON user object including a `userId`. 
    - leave chatroom: DELETE to `/api/users/{userId}`.
    
    Give feedback to the user, while entering/leaving the chatroom is in progress. 
    
    Hint 1: use the network section of your browser debugging tools to inspect the requests and responses.
    
    Hint 2: use bandwidth throttling of your browser debugging tools, to inspect the behavior for pending requests.
    
    Hint 3: don't forget an `npm install` after the check-out of this assignment from Git.
    
2. Extract the `fetch`-calls into a separate _service_ module to decouple it from the react component.
3. Use a `model` class for the user object, to decouple the component from the REST API responses and have object conversions in one place.
4. Optional: Implement a new user list component, listing the current members of the chatroom. The list of current members can be retrieved using a GET request to `/api/users`.