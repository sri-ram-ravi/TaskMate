import React from 'react';
import styles from "./ShowTask.module.css";

const ShowTask = ({taskList,setTaskList}) => {
  return (
    <>
    <div className={styles.heading}>
      <h5 className="mt-3">Task List</h5>
      <span className={styles.taskCount}>{taskList.length}</span>
      <button type="submit" className="btn btn-primary p-2" onClick={()=>setTaskList([])}>Clear All</button>
    </div>
    <div className="mt-3">
      <div className={styles.tasklist}>
        {
          taskList.map((task)=>{
            return(
              <div className={styles.taskDetails} key={task.id}>
              <div className='d-flex justify-content-between'>
                <h5 className="card-title">{task.name}</h5>
                <div>
                  <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M17.263 2.177a1.75 1.75 0 0 1 2.474 0l2.586 2.586a1.75 1.75 0 0 1 0 2.474L19.53 10.03l-.012.013L8.69 20.378a1.753 1.753 0 0 1-.699.409l-5.523 1.68a.748.748 0 0 1-.747-.188.748.748 0 0 1-.188-.747l1.673-5.5a1.75 1.75 0 0 1 .466-.756L14.476 4.963ZM4.708 16.361a.26.26 0 0 0-.067.108l-1.264 4.154 4.177-1.271a.253.253 0 0 0 .1-.059l10.273-9.806-2.94-2.939-10.279 9.813ZM19 8.44l2.263-2.262a.25.25 0 0 0 0-.354l-2.586-2.586a.25.25 0 0 0-.354 0L16.061 5.5Z"></path></svg></a>&nbsp;&nbsp;&nbsp;
                  <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z"></path></svg></a>
                </div>
              </div>
              <h6 className="card-subtitle mb-2 mt-2 text-body-secondary">{task.time}</h6>
            </div>
            )
            })
        }
      </div>
    </div>
    </>
  );
};

export default ShowTask;
