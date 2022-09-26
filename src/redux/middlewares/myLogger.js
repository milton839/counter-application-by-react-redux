// Create our first redux middleware
// curried function
import rootReducer from '../rootReducer';
const myLogger = (store) => (next) =>(action)=>{
    console.log(`Action${JSON.stringify(action)}`);
    console.log(`Before${JSON.stringify(store.getState())}`);

    const upcomingAction = [action].reduce(rootReducer, store.getState());
    console.log(`${JSON.stringify(upcomingAction)}`);
    //pass action
    return next(action);
}
export default myLogger;