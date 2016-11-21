export class ContactsAddController{
  constructor(apiUrl, $http, $location){
    this.$http = $http;
    this.apiUrl = apiUrl;
    this.$location = $location;
    this.init();
  }

  init(){

  }

  addContact(newContact){
    let contact = {
      name:newContact.name,
      email: newContact.email,
      username: newContact.username
    };
    this.$http.post(`${this.apiUrl}users`, contact).then((resp) => {
      this.$location.path('/list');
    });
  }
}
