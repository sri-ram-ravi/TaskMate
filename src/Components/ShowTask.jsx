import React from 'react';
import styles from "./ShowTask.module.css";

const ShowTask = () => {
  return (
    <>
    <div className={styles.heading}>
      <h5 className="mt-3">Task List</h5>
      <span className={styles.taskCount}>0</span>
      <button type="submit" class="btn btn-primary p-2">Clear All</button>
    </div>
    <div class="mt-3">
      <div className={styles.tasklist}>
        <div className={styles.taskDetails}>
        <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-2 mt-2 text-body-secondary">Card subtitle</h6>
        <a href="#" class="card-link">Card link</a>&nbsp;&nbsp;&nbsp;
        <a href="#" class="card-link">Another link</a>
        </div>
      </div>
    </div>
    </>
  );
};

export default ShowTask;
