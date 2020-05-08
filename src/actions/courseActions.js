import dispatcher from '../appDispatcher';
import * as courseApi from '../api/courseApi';
import actionTypes from './actionTypes';

// This function creates an action.
// What we placed in function dispatch is called action
export function saveCourse(course) {
  return courseApi.saveCourse(course).then((savedCourse) => {
    // dispatcher tell all the stores that a course was just created
    dispatcher.dispatch({
      actionType: course.id
        ? actionTypes.UPDATE_COURSE
        : actionTypes.CREATE_COURSE,
      course: savedCourse,
    });
  });
}

export function loadCourses() {
  return courseApi.getCourses().then((courses) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses: courses,
    });
  });
}

export function deleteCourse(id) {
  return courseApi.deleteCourse(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_COURSE,
      id: id,
    });
  });
}
