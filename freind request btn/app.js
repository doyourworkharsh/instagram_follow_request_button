let st=document.querySelector("h4")
let addfriend=document.querySelector("#add")


st.addEventListener("click",function() {
    
})
let check =0;
addfriend.addEventListener("click",function(){
    if (check==0) {
        st.innerHTML="REQUSTED"
        addfriend.innerHTML="REMOVE REQUEST"

        check = 1

    }
    else{
       st.innerHTML="STRANGER"
       check=0
       addfriend.innerHTML="ADD FRIEND"
    }
   

} )


