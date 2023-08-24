import { Outlet } from "react-router-dom";
import Images1 from '../../components/images/images-component';
import PhotoImages from '../../components/photoimages/photoimages-component';
import { PhotoContainer } from "./shop-styles";
import { product1 } from '../../photo-data';
import { Fragment } from 'react';
import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories-context';


let products2 = [
    {
        title: 'Hats',
        items: [
            {
                id: 1,
                name: 'Brown Brim',
                imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
                price: 25,
                options: [
                    {option: `option1`, checked: false},
                    {option: `option2`, checked: false},
                    {option: `option3`, checked: false},
                    {option: `option4`, checked: false},
                ]
            },
            {
                id: 2,
                name: 'Blue Beanie',
                imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
                price: 18,
                options: [
                    {option: `option1`, checked: false},
                    {option: `option2`, checked: false},
                    {option: `option3`, checked: false},
                    {option: `option4`, checked: false},
                ]
            },
            {
                id: 3,
                name: 'Brown Cowboy',
                imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
                price: 35,
                options: [
                    {option: `option1`, checked: false},
                    {option: `option2`, checked: false},
                    {option: `option3`, checked: false},
                    {option: `option4`, checked: false},
                ]
            },
            {
                id: 4,
                name: 'Grey Brim',
                imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
                price: 25,
                options: [
                    {option: `option1`, checked: false},
                    {option: `option2`, checked: false},
                    {option: `option3`, checked: false},
                    {option: `option4`, checked: false},
                ]
            },
            {
                id: 5,
                name: 'Green Beanie',
                imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
                price: 18,
                options: [
                    {option: `option1`, checked: false},
                    {option: `option2`, checked: false},
                    {option: `option3`, checked: false},
                    {option: `option4`, checked: false},
                ]
            },
            {
                id: 6,
                name: 'Palm Tree Cap',
                imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
                price: 14,
                options: [
                    {option: `option1`, checked: false},
                    {option: `option2`, checked: false},
                    {option: `option3`, checked: false},
                    {option: `option4`, checked: false},
                ]
            },
            {
                id: 7,
                name: 'Red Beanie',
                imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
                price: 18,
                options: [
                    {option: `option1`, checked: false},
                    {option: `option2`, checked: false},
                    {option: `option3`, checked: false},
                    {option: `option4`, checked: false},
                ]
            },
            {
                id: 8,
                name: 'Wolf Cap',
                imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
                price: 14,
                options: [
                    {option: `option1`, checked: false},
                    {option: `option2`, checked: false},
                    {option: `option3`, checked: false},
                    {option: `option4`, checked: false},
                ]
            },
            {
                id: 9,
                name: 'Blue Snapback',
                imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
                price: 16,
                options: [
                    {option: `option1`, checked: false},
                    {option: `option2`, checked: false},
                    {option: `option3`, checked: false},
                    {option: `option4`, checked: false},
                ]
            },
        ],
    },
];

const Shop = () => {

    return (
        <Fragment>
            {
                Object.keys(products2).map((title) => (
                    <Fragment key={title}>
                        <h2>{title}</h2>
                        <PhotoContainer>
                            <div>
                            </div>
                            {products2[title].map((category) => (
                                <PhotoImages key={category.id} category={category} />
                            ))}
                        </PhotoContainer >
                    </Fragment>
                ))}
        </Fragment>
    );
};

export default Shop;