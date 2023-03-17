import './Category.sass';
import {useEffect} from "react";
import {useActions} from "../../Hooks/productAction";
import {useTypedSelector} from "../../Hooks/productTypeSelector";


const Category = () => {
    const {getCategory} = useActions();
    const {category} = useTypedSelector(state => state.category)
    console.log(111,category)
    useEffect(() => {
        getCategory()
    }, [])
    return (
        <div>

        </div>
    )
};
export default Category;