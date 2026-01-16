function AddTask() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-4">
          <form>
            <input type="text" placeholder="Enter task" className="text-input"/>
          </form>
        </div>
        <div className="col-4">
          <form>
            <input type="date" />
          </form>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
