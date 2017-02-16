import { call, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import * as actions from './actions'
import { isBlackAndWhite } from './config'



import { take } from 'redux-saga/effects'
export function* addTodo() {
    while(true) {
       try {
          const action = yield take("ADD_TODO")
          yield call(delay, 4000)
          yield put(actions.addTodoFinish(action.id, isBlackAndWhite))
       } catch (error) {
          yield put({type: "FAILED", error})
       }
    }
}





// import { takeEvery } from 'redux-saga/effects'
// function* addTodoFinish(action) {
//     try {
//         yield call(delay, 4000)
//         yield put(actions.addTodoFinish(action.id, isBlackAndWhite))
//     } catch (error) {
//         yield put({type: "FAILED", error})
//     }
// }
// export function* addTodo() {
//     yield takeEvery('ADD_TODO', addTodoFinish);
// }





// import { buffers } from 'redux-saga'
// import { actionChannel, take } from 'redux-saga/effects'
// export function* addTodo() {
//     var chan = yield actionChannel('ADD_TODO', buffers.sliding(3));
//     while(true) {
//        try {
//           const action = yield take(chan)
//           yield call(delay, 2000)
//           yield put(actions.addTodoFinish(action.id, isBlackAndWhite))
//        } catch (error) {
//           yield put({type: "FAILED", error})
//        }
//     }
// }





// import { fork, take } from 'redux-saga/effects'
// export function* addTodo() {
//     while(true) {
//        try {
//           const action = yield take('ADD_TODO')
//           var task = yield fork(addTodoFinish, action);
//           console.log(task);
//        } catch (error) {
//           yield put({type: "FAILED", error})
//        }
//     }
// }
// function* addTodoFinish(action) {
//     try {
//         yield call(delay, 2000)
//         yield put(actions.addTodoFinish(action.id, isBlackAndWhite))
//     } catch (error) {
//         yield put({type: "FAILED", error})
//     }
// }
