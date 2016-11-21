export class ContactsDetailsController{
  constructor(apiUrl, $http, $routeParams){
    this.apiUrl = apiUrl;
    this.$http = $http;
    this.$routeParams = $routeParams;
    this.init();
  }

  init(){
    let id = this.$routeParams.contactId;
    this.$http.get(`${this.apiUrl}users/${id}`).then((resp) => {
      this.contact = resp.data;
    });
  }
}
