import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ( { collection } ) => {
    // console.log(match.params.collectionId);
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{ title }</h2>
            <div className='items'>
                { items.map(item => (
                    <CollectionItem key={ item.id} item={item} />
                ))}
            </div>
        </div>
    )
};

//1st arg: state = overal reducer state from top
//2nd arg: optional: props of the component which we were wrapping in connect
// unlike other selecors, this selector needs a part of the state depending on the URL parameter
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state) //pass state after invoking selectCollection
})
export default connect(mapStateToProps) (CollectionPage);
