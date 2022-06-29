
export const state = () =>({
  authToken:""
})
export const mutations = {
  setToken: function(state,token){
    state.authToken = token;
  }
}
export const actions = {
  requestNowServerTime:async function(){
    return this.$axios.get("access");
  },
  requestUserLogin:async function(context,user){
    //this.$axios.get()
    const {data} = await context.dispatch("requestNowServerTime");

    const nowServerTime = data.l_time;

    console.log(user);
    const postPayloadData = {
      str1:user.id,
      str2:user.password,
      long1:nowServerTime
    }
    const {data:postAuthData} = await this.$axios.post("lo_ent",postPayloadData);

    console.log(postAuthData);

    if(postAuthData.token !== null){
      localStorage.setItem("authId",postAuthData.token);
      //context.commit("setToken",postAuthData.token);
      return "로그인 성공";
    }

    if(postAuthData.msg === "Exceeded"){
      return "해당 계정으로 로그인을 5회 이상 시도하였습니다.";
    }

    if(postAuthData.msg === "NoIdPass"){
      return "아이디 패스워드가 잘못되었습니다."
    }

    if(postAuthData.msg === "param is null"){
      return "알 수 없는 오류가 발생하였습니다. 관리자에게 문의해주시길 바랍니다.";
    }

    return "알 수 없는 오류가 발생하였습니다. 관리자에게 문의해주시길 바랍니다.";
  }
}
