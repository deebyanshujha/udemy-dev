function SmallPara(){
    let name = 'deebyanshu';
    let age = ()=>{
        return 20;
    }
    return  <h3 style={{'backgroundColor':'skyblue'}}>
        my name is {name} and my age is {age()};
    </h3>
}

export default SmallPara;