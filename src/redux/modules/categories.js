const initialState = {
    navigationList: []
}
  
const categories = (state = initialState, { type, ...rest }) => {
    if(type === 'set') {
        return {...state, ...rest }
    }

    return state
}

export default categories;