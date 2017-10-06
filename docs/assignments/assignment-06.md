# Assignment 6
1. Add the `prop-types` package to your package.json
2. Add two props to the `NicknameSelector` component:
    1. one for an initial nickname to be proposed to the user
    2. one for callback that is called when the entered-state changes; this should provide the entered state to the parent component that shall annotate it somewhere in its rendering
3. Provide PropTypes for those components. Make one of them required, and see what happens if you don't provide one.
4. Optional: Check if the code completion functionality of your IDE can do something with the PropTypes definition
5. Inspect what happens with the proposed nickname if you enter the chat and leave again. Can you explain this?