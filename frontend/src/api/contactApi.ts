import Api from './Api';

class Contact {
  sendMail(data: any) {
    return Api.post(`/sendmail`,data);
  }
}

export default new Contact();
