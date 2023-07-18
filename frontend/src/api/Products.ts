import Api from './Api';

class Products {
  getAllProducts() {
    return Api.get('/gallery');
  }

  getProductById(id: string) {
    return Api.get(`/product/${id}`);
  }

  postProduct(title: string, description: string, tags: string, imageUrl: string) {
    return Api.post(`/newproduct`)
  }
}

export default new Products();
