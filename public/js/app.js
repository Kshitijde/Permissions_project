console.log("Client side database")

const approve_btn = document.querySelector('#approve_btn')
const reject_btn  = document.querySelector('#reject_btn')


// approve_btn.addEventListener('click',(req,res)=>{
//     id = req.params.id
//     // id = '5fa9482876ef5430cc80dd9d'
//     console.log(id)

//     approve_btn.setAttribute('disabled' , 'disabled')
//     reject_btn.setAttribute('disabled' , 'disabled')

//     if(confirm("Do you surely wish to approve the request ?")){
//         // window.location.href='/approval/{{id}}/app_status/1'
//         window.location.href=`/approval/${id}/app_status/1`
//     }else{
//         window.location.href='/requests'
//     }
// })

// reject_btn.addEventListener('click' ,()=>{

//     id = req.params.id
//     console.log(id)
//     approve_btn.setAttribute('disabled' , 'disabled')
//     reject_btn.setAttribute('disabled' , 'disabled')

//     if(confirm("Do you surely wish to reject the request ?")){
//         console.log("Working !!")
//         window.location.href='/approval/{{id}}/app_status/-1'
//         console.log("done")
//     }
//     else{
//         window.location.href='/requests'
//     }
// })
