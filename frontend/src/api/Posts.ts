import Api from './Api';

class Posts {
  getAllPosts() {
    return Api.get('/gallery');
  }
}

export default new Posts();
