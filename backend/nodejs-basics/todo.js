const fs = require("fs");
const filePath = "./tasks.json";

const loadTask = ()=>{
    try{
       const dataBuffer = fs.readFileSync(filePath); 
       const dataJSON = dataBuffer.toString();
       return JSON.parse(dataJSON);
    }catch(error){
        return [];
    }
}

function saveTasks(Tasks){
    const dataJSON = JSON.stringify(Tasks);
    fs.writeFileSync(filePath,dataJSON);
    console.log("Tasks saved!")

}

const command = process.argv[2];
const argument = process.argv[3];

if(command === 'add'){
    addTask(argument);
}else if(command === 'list'){
    listTask();
}else if(command === 'remove'){
    removeTask(argument);
}else{
    console.log('command not found');
}

function addTask(argument){
    const Tasks = loadTask()
    Tasks.push(argument);
    saveTasks(Tasks)
}

function listTask(){
    const Tasks = loadTask();
    Tasks.forEach((task)=>{
        console.log(`Task: ${task}`);
    })
}

function removeTask(argument){
    let tasks = loadTask();
    tasks = tasks.filter(task => task !== argument);
    saveTasks(tasks);
}