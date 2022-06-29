export default function({store,redirect}){
  console.log("middlewares");
  const getToken = localStorage.getItem("authId");

  if(getToken === undefined || getToken === null){
    return redirect("/")
  }
}
