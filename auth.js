
const signupEmail= document.getElementById("signup-email")
const signupPass= document.getElementById("signup-password")
const signupBtn= document.getElementById("signupbtn")

const loginEmail= document.getElementById("login-email")
const loginPass= document.getElementById("login-password")
const loginBtn= document.getElementById("loginbtn")
const logingoogleBtn= document.getElementById("logingooglebtn")



async function signup() {
    try {
        const { data, error } = await supabase.auth.signUp({
            email: signupEmail.value,
            password: signupPass.value,
          }
        
        ) 
        
        if(error) throw error
        if(data){
            alert("please check your email")
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
            alert("got it")
        }
        return data
    }
 catch (error) {
    console.log(error)
        
    }
    
}

async function googlelogin(){
    supabase.auth.signInWithOAuth({
        provider: 'google',
      })
      
}

logingoogleBtn.addEventListener("click",googlelogin)
signupBtn.addEventListener("click", signup)
loginBtn.addEventListener("click", login)