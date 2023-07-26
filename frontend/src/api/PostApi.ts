import Api from './Api';

class Products {
  getAllProducts() {
    return Api.get('/gallery');
  }

  getProductById(id: string) {
    return Api.get(`/product/${id}`);
  }

  postProduct(post: any) {
    return Api.post(`/newproduct`,post);
  }
}

export default new Products();
