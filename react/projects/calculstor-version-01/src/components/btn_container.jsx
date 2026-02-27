import Btn from "./btn_holder"

const BtnSection = ()=>{
    const names = ['C','1','2','3','4','5','6','7','8','9','0','X','%','+','-','='];
    return (
      <div id="btn-container">
        {names.map((bt) => {
          return <Btn name={bt}></Btn>;
        })}
      </div>
    );
}

export default BtnSection