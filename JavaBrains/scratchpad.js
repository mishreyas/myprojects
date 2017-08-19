var person = {
  "firstName": "Shreyas",
  "lastName" : "Bhosale",
  "getFullName" : function(){
  return this.firstName + " " + this.lastName;
  },
  "address":{
    "street": "2452 Nutwood Ave",
    "city": "Fullerton",
    "state": "California",
    
  },
  "isFromState": function(sts){
      return(this.address.state === sts)
    }

};

//var fullName = person.getFullName();
//console.log("Hello");
//var person2 = person;

//person = {};

//console.log(person2.getFullName());

console.log(person.isFromState("California"));

