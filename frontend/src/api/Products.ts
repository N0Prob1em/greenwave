import Api from './Api';

class Products {
  getAllProducts() {
    return Api.get('/gallery');
  }

  getProductById(id: string) {
    return Api.get(`/product/${id}`);
  }

  postProduct() {
    return Api.post(`/newproduct`)
  }
}

export default new Products();
