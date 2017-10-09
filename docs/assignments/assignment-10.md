# Assignment 10
1. Create redux store, reducers and actions to implement the enter leave functionality in redux, yet without http requests.
    - create actions for enter-chat and leave-chat functionality
    - create reducers, that persist the parameters of those actions to the store
    - provide the store to your application using a react-redux`Provider` component
    - refactor your `NicknameSelectorContainer` into a redux connected component, using `mapStateToProps`, `mapDispatchToProps`, and `connect(...)` (Hint 1: the `currentUser` field will move from state to props, as the redux store will hold the state for this now; Hint 2: don't take entering and leaving into account for now)
    
    Hint: You might want to consider putting your redux specific actions and reducers into a separate `redux` folder within your source folder.
2. Use `combineReducers` to prepare your store for more reducers separated by application domain functionality. (Are reducers worth a subdiretory of `redux`?)
3. Integrate the HTTP-calls again, by refactoring the action creators such that they do not only return an action, but also do the service call. If the service call is successful the action creator function should dispatch another action.
    - Hint 1: You'll need a separate action for the request and the response and also correponding reducer action handling.
    - Hint 2: You need the dispatch function within the action creator for this. How does it get there?
    
    Now you can also take `entering` and `leaving` into account again :). 
    
    Congratulations! You moved all the state from the `NicknameSelectorContainer` to the redux store now, so it's accessable from all other containers, too.
4. Do you notice a difference when navigate to a user profile and back again? Can you explain that?
5. Now implement the asnychronous action creaters with `redux-thunks`. Which version do you like more?
6. Optional: Try out the redux-devtools-extension. Take the advanced store setup into account: `https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup`