export default function(context){

  const currentPath = context.route.name;
  const getToken = localStorage.getItem("authId")


  console.log(currentPath);
  if(currentPath === "index" && getToken) return context.redirect("/home");

  if(currentPath === "/login"){
    if(getToken === undefined || getToken === null){
      return context.redirect("/")
    }
    return context.redirect("/home");
  }
}
