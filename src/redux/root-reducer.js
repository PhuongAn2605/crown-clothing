import { combineReducers }  from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistCofig = {
    key: 'root', //what to store
    storage,
    whitelist: ['cart']// string name any reducer want to store

}

const rootReducer = combineReducers({
    user: userReducer, // hadle by firebase
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});
export default persistReducer(persistCofig, rootReducer); // modify rootReducer by persisConfig