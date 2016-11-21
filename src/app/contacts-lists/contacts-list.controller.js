export class ContactsListController{
  constructor(){
    this.init();
    this.title = "Contacts List";
    // this.$scope = $scope;
    // this.$scope.random = Math.random();
  }

  init(){
    this.title = "Contacts List";
    this.showList="true";
    this.contacts=[{
      name:"Frederik Van Hebruggen",
      email:"frederik.vanh@gmail.com",
      username:"Elapo"
    },
      {
        name:"Iris Verbert-Caes",
        email:"iris@irisv-c.be",
        username:"Ivc"
      },
      {
        name:"Benny Hill",
        email:"Benny@Hill.com",
        username:"Bhill"
      }]
  }

  toggleList(){
    this.showList = !this.showList;
  }

  addContact(newContact){
    let contact = {
      name:newContact.name,
      email: newContact.email,
      username: newContact.username
    };
    this.contacts.push(contact);
  }

}