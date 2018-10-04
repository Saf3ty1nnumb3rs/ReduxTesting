export default ({dispatch}) => next => action => {
    //Check to see if the action has a promise on it's payload property

    //If it does, then wait for resolution

    //If it does not, then send the action on to the next middleware
    
    if(!action.payload || !action.payload.then) {
        //not necessarily returning anything - just exiting function with next()
        return next(action);
    }

    //We want to wait for promise to resolve (get data!) and then create a new action with the data and dispatch that data
    action.payload.then(function(response){
        const newAction = { ...action, payload: response };
        //flows through middleware again without Promise from dispatch
        dispatch(newAction)
    })
}

//////////////ABOVE IS PRETTY MUCH THE SAME AS REDUXPROMISE

//Same as above - three function change return...particular to redux
// export default function({dispatch}) {
//     return function(next) {
//         return function(action) {

//         }
//     }
// }