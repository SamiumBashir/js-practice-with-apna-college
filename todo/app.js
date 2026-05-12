let todo =[];

let req = prompt('Please Enter Your Request');

while(true){
    if(req == 'quit'){
        console.log('Todo list is terminated');
        break;
    }
    if(req == 'list'){
        console.log('-------------------');
        for(let i = 0; i < todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log('-------------------');
    } else if(req === 'add'){
        let task = prompt('Enter Your Task You Want To ADD');
        todo.push(task);
        console.log('task added');
    } else if(req == 'delete'){
        let dlt = prompt('Enter the task index');
        todo.splice(dlt, 1);
        console.log('task delete');
    } else{
        console.log('wrong request');
    }

    req = prompt('Please Enter Your Request');
}