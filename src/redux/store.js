import { createStore, combineReducers } from 'redux'
import categories from 'redux/modules/categories';

const rootStore = combineReducers({
    categoriesReduce: categories
});

const store = createStore(rootStore)

export default store