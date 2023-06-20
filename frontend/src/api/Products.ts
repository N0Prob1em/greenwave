import Api from './Api';

class Products {
  getAllProducts() {
    return Api.get('/gallery');
  }
}

export default new Products();
