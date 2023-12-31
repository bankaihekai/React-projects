// npm install @reduxjs/toolkit // install redux toolkit
------------------------------
// 1. npm init -y
// 2. npm install redux || npm install redux react-redux

const redux = require('redux'); // importing redux using node
// import redux, { createStore} from 'redux'; // importing from react

// 4. reducer function, add default value to avoid error "undefined properties"
const counterReducer = (state = { counter: 0 }, action) => {

    if(action.type === 'increment'){
        return {
            counter: state.counter + 1,
        };
    }

    if(action.type === 'decrement'){
        return {
            counter: state.counter - 1,
        };
    }

    return state; 
};
// 3. create store , this execute first 
const store = redux.createStore(counterReducer);
// console.log(store.getState());

// 5. create subscriber function
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

// 6. execute subscriber function everytime state changes by subscribe();
store.subscribe(counterSubscriber);

// 7. dispatch an action
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });


//in the terminal , execute the node file by "node fileName.js"
