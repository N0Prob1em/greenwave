import Api from './Api';

class PostsApi {
  getAllPosts() {
    return Api.get('/gallery');
  }
}

export default new PostsApi();
