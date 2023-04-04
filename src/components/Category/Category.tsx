import './Category.sass';
import {useEffect} from "react";
import {useActions} from "../../Hooks/productAction";
import {useTypedSelector} from "../../Hooks/productTypeSelector";


const Category = () => {
        const {getCategory} = useActions();
        const {category} = useTypedSelector(state => state.category);

        useEffect(() => {
            getCategory();
        }, [])
        return (
            <div className='category'>
                <h1>Category</h1>
                <div className='category-wrap'>
                    <div className='category-item'>
                        <img src={require('../../img/electronics.jpeg')} alt='electronics'/>
                        <span>{category[0]}</span>
                    </div>
                    <div className='category-item'>
                        <img src={require('../../img/jewelery.jpeg')} alt='jewelery'/>
                        <span>{category[1]}</span>
                    </div>
                    <div className='category-item'>
                        <img src={require("../../img/means.jpeg")} alt='means'/>
                        <span>{category[2]}</span>
                    </div>
                    <div className='category-item'>
                        <img src={require("../../img/womens.jpeg")} alt='womens'/>
                            <span>{category[3]}</span>
                    </div>
                </div>
            </div>
        )
    }
;
export default Category;