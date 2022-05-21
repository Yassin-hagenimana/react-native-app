import bcrypt from "bcryptjs"
const data={

  users:[
    {
      name:"Yassin",
      email:"h@gmail.com",
      password:bcrypt.hashSync("123456"),
      isAdmin:true
  },
  
  {
      name:"Draxler",
      email:"d@gmail.com",
      password:bcrypt.hashSync("123456"),
      isAdmin:false
  }
],
  
}
export default data;