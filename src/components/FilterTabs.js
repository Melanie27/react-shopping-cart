import React from 'react';
import ProductDatabase from '../store/ProductsDatabase';

export default class FilterTabs extends React.Component{
    constructor() {
        super();
        let categories = ProductDatabase.map(singleProduct => {
            return singleProduct.category;
        });
        this.state = {
            categories: Array.from(new Set(categories))
        }
    }

    render() {
        return (
            <div className="tabs">
                <ul>
                    {this.state.categories.map(singleCategory => {
                        return <li><a href="#"> {singleCategory} </a> </li>
                    })}
                </ul>
            </div>
        )
    }
}