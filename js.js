let fullName = document.getElementById('fullName')
let id = document.getElementById('id')
let studentName = document.getElementById('studentName')
let fatherName = document.getElementById('fatherName')
let nickName = document.getElementById('nickName')
let matherName = document.getElementById('matherName')
let d_o_b = document.getElementById('date-of-birth')
let p_o_b = document.getElementById('place-of-birth')
let gander = document.getElementById('gander')
let school = document.getElementById('school')
let classes = document.getElementById('class')
let living_situation = document.getElementById('living-situation')
let health_status = document.getElementById('health-status')
let d_o_j = document.getElementById('date-of-joining')
let locational = document.getElementById('location')
let part = document.getElementById('part')
let modawm = document.getElementById('modawm')
let teacher = document.getElementById('teacher')
let comments = document.getElementById('comments')
let creat = document.getElementById('creat')
let tbody = document.getElementById('tbody')
let count = document.getElementById('count')
let search = document.getElementById('search')


// Craet Student

let dataArray;
if(localStorage.dataStudent != null){
    dataArray = JSON.parse(localStorage.dataStudent)
}
else{
    dataArray = [];
}
 
let mood='creat';


creat.onclick = () => {

   

 //    if(fullName.value && id.value && studentName.value&& fatherName.value
    //   && nickName.value && matherName.value && d_o_b.value && p_o_b.value
    //   && gander.value && school.value && classes.value && living_situation.value
     //   && health_status.value && d_o_j.value && locations && part.value && modawm.value
      //  && teacher.value  != '')
         
         
        
            let dataStudent = {
                fullName:fullName.value,
                id:id.value,
                studentName:studentName.value,
                fatherName:fatherName.value,
                nickName:nickName.value,
                matherName:matherName.value,
                d_o_b:d_o_b.value,
                p_o_b:p_o_b.value,
                gander:gander.value,
                school:school.value,
                classes:classes.value,
                living_situation:living_situation.value,
                health_status:health_status.value,
                d_o_j:d_o_j.value,
                locational:locational.value,
                part:part.value,
                modawm:modawm.value,
                teacher:teacher.value,
                comments:comments.value,
            } 

            if(mood === 'creat'){
                if(dataArray.count > 1){
                    for(let i=0 ; i<dataArray.count ; i++){
                        dataArray.push(dataStudent);
                    }
                }else {
                    dataArray.push(dataStudent);
                }
            }
            else {
                dataArray[tmp] = dataStudent;
                mood = 'creat';
                creat.innerHTML='إضافة الطالب';
               
            }
           
 
            localStorage.setItem( 'dataStudent', JSON.stringify(dataArray))
         


            fullName.value = id.value = studentName.value = fatherName.value
            = nickName.value = matherName.value = d_o_b.value = p_o_b.value
            = gander.value = school.value = classes.value = living_situation.value
            = health_status.value = d_o_j.value = locations = part.value = modawm.value
            = teacher.value = comments.value = ''
            readStudent()
             
            count.innerHTML = dataArray.length
        }     

 


//  Read Student

function readStudent(){
    let show;
    for(let i=0 ; i< dataArray.length ; i++)
    {
    show += `
    <tr class=" hover:bg-zinc-600 duration-500">
    <td>${dataArray[i].fullName}</td>
    <td>${dataArray[i].id}</td>
    <td>${dataArray[i].studentName}</td>
    <td>${dataArray[i].fatherName}</td>
    <td>${dataArray[i].nickName}</td>
    <td>${dataArray[i].matherName}</td>
    <td>${dataArray[i].d_o_b}</td>
    <td>${dataArray[i].p_o_b}</td>
    <td>${dataArray[i].gander}</td>
    <td>${dataArray[i].school}</td>
    <td>${dataArray[i].classes}</td>
    <td>${dataArray[i].living_situation}</td>
    <td>${dataArray[i].health_status}</td>
    <td>${dataArray[i].d_o_j}</td>
    <td>${dataArray[i].locational}</td>
    <td>${dataArray[i].part}</td>
    <td>${dataArray[i].modawm}</td>
    <td>${dataArray[i].teacher}</td>
    <td>${dataArray[i].comments}</td>
    <td><button onclick="update(${i})" class="bg-yellow-500 px-8 py-1 rounded-full text-xl hover:tracking-widest duration-300 my-1">تعديل</button></td>
    <td><button onclick="delet(${i})" class="bg-yellow-500 px-8 py-1 rounded-full text-xl hover:tracking-widest duration-300">حذف</button></td>
    </tr>
    `
    }
   tbody.innerHTML = show ;
 
}
readStudent()


 

//  Update  Data

let tmp;
function update(i){

    mood = 'update';
    creat.innerHTML = 'تعديل الطالب'
    tmp=i;
    scrollTo({
        top:0,
        behavior:'smooth'
    })

    

    fullName.value = dataArray[i].fullName;
    id.value = dataArray[i].id;
    studentName.value = dataArray[i].studentName;
    fatherName.value = dataArray[i].fatherName;
    nickName.value = dataArray[i].nickName;
    matherName.value = dataArray[i].matherName;
    d_o_b.value = dataArray[i].d_o_b;
    p_o_b.value = dataArray[i].p_o_b;
    gander.value = dataArray[i].gander;
    school.value = dataArray[i].school;
    classes.value = dataArray[i].classes;
    living_situation.value = dataArray[i].living_situation;
    health_status.value = dataArray[i].health_status;
    d_o_j.value = dataArray[i].d_o_j;
    locational.value = dataArray[i].locational;
    part.value = dataArray[i].part;
    modawm.value = dataArray[i].modawm;
    teacher.value = dataArray[i].teacher;
    comments.value = dataArray[i].comments;
    
}
 

// Delet Data

function delet(i){
     dataArray.splice(i,1)
     localStorage.dataStudent = JSON.stringify(dataArray);
     readStudent()
     count.innerHTML = dataArray.length
}

// Delete All

function deleteAll(){
    localStorage.clear()
    dataArray.splice(0);
    readStudent()
    count.innerHTML = dataArray.length
}


 // Count Data 

  count.innerHTML = dataArray.length
 


  // Search Data

  function fsearch(value){
    let show ='';
    for(let i=0 ; i< dataArray.length ; i++)
    {
        if(dataArray[i].fullName.includes(value)){             
            show += `
    <tr class=" hover:bg-zinc-600 duration-500">
    <td>${dataArray[i].fullName}</td>
    <td>${dataArray[i].id}</td>
    <td>${dataArray[i].studentName}</td>
    <td>${dataArray[i].fatherName}</td>
    <td>${dataArray[i].nickName}</td>
    <td>${dataArray[i].matherName}</td>
    <td>${dataArray[i].d_o_b}</td>
    <td>${dataArray[i].p_o_b}</td>
    <td>${dataArray[i].gander}</td>
    <td>${dataArray[i].school}</td>
    <td>${dataArray[i].classes}</td>
    <td>${dataArray[i].living_situation}</td>
    <td>${dataArray[i].health_status}</td>
    <td>${dataArray[i].d_o_j}</td>
    <td>${dataArray[i].locational}</td>
    <td>${dataArray[i].part}</td>
    <td>${dataArray[i].modawm}</td>
    <td>${dataArray[i].teacher}</td>
    <td>${dataArray[i].comments}</td>
    <td><button onclick="update(${i})" class="bg-yellow-500 px-8 py-1 rounded-full text-xl hover:tracking-widest duration-300 my-1">تعديل</button></td>
    <td><button onclick="delet(${i})" class="bg-yellow-500 px-8 py-1 rounded-full text-xl hover:tracking-widest duration-300">حذف</button></td>
    </tr>
    `

                
            }
    
    document.getElementById('tbody') .innerHTML = show;
  }
}
   
    
          
         
    
       
       
        
