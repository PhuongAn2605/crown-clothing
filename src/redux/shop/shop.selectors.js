import { createSelector} from 'reselect';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const selectShop = state => state.shop;


// //map string value to expected id
// const COLLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5

// }

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => 
        collections[collectionUrlParam]
        
    )