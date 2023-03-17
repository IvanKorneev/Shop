import * as getProduct from './products/action'
import * as getCategory from './category/action'

export default {
    ...getProduct,
    ...getCategory
}