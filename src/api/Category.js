import Axios from 'api/configAxios';

class Category extends Axios{
    constructor(header) {
        super(header);
        this.uri = '/product-category'
    }

    getCategory() {
        return this.Axios.get(this.uri) 
    }
}

export default Category;