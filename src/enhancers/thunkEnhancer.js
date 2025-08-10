export const thunkEnhancer = ({getstate, dispatch}) => next => action => {
    if (typeof action === 'function') {
        return action(dispatch, getstate);
    }
    return next(action);
}