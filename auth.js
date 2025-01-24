
const signupEmail= document.getElementById("signup-email")
const signupPass= document.getElementById("signup-password")
const signupBtn= document.getElementById("signupbtn")

const loginEmail= document.getElementById("login-email")
const loginPass= document.getElementById("login-password")
const loginBtn= document.getElementById("loginbtn")
const logingoogleBtn= document.getElementById("logingooglebtn")
const alreadyAccount= document.getElementById("switch-to-login")



async function signup() {
    try {
        const { data, error } = await supabase.auth.signUp({
            email: signupEmail.value,
            password: signupPass.value,
          }
        
        ) 
        
        if(error) throw error
        if(data){
            Swal.fire({
                icon: "Success",
                title: "Account Created Successfully",
                text: "Please Check Your Email For Confirmation!",
              });
        }
        return data
    }
 catch (error) {
    console.log(error)
        
    }
    
}

async function login() {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: loginEmail.value,
            password: loginPass.value,
          }
        
        ) 
        
        if(error) throw error
        if(data){
           window.location.href="dashboard.html"
        }
        return data
    }
 catch (error) {
    console.log(error)
    alert(error.message)
        
    }
    
}

async function googlelogin(){
    supabase.auth.signInWithOAuth({
        provider: 'google',
      })
      
}



async function getsessioncheck(params) {
    const { data, error } = await supabase.auth.getSession()
    
    if (error) throw error

    if(data){
        console.log(data)
    }



    
}

if(logingoogleBtn){
logingoogleBtn.addEventListener("click",googlelogin)
}

if(signupBtn){
signupBtn.addEventListener("click", signup)
}

if(loginBtn){
loginBtn.addEventListener("click", login)
}
if(alreadyAccount){
alreadyAccount.addEventListener("click", () => window.location.href="/login.html")
}

window.onload= getsessioncheck()