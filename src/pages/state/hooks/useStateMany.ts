/**
 * @author heart
 * @description 多例state hooks
 * @Date 2022-05-01
 */
import { render } from "../../../main";
let state: unknown[] = [];
// 用于存储改变state的值
let setState: ((state: unknown) => void)[] = [];
let stateIndex = 0;

// 改进setState
function createSetter(index: number) {
  return (newState: unknown) => {
    state[index] = newState;
    initRender();
  };
}
// TODO: 这里为了结合useState单例的改进
export function initRender() {
  render(() => {
    stateIndex = 0;
  });
}

export default function <T>(initialState: T) {
  // 初始化state
  state[stateIndex] = state[stateIndex] ? state[stateIndex] : initialState;
  // 初始化setState
  // setState[stateIndex] = ((index: number) => {
  //   return (newState: unknown) => {
  //     state[index] = newState;
  //     // 每次调用玩应该重新刷新页面
  //     render(() => {
  //       // render的时候应该将stateIndex 重置为 0
  //       stateIndex = 0;
  //     });
  //   };
  // })(stateIndex);
  // ! 改进setState[]
  setState[stateIndex] = createSetter(stateIndex);
  // 每次调用一个useStateMany时，stateIndex++ 使得可以存储多个值
  stateIndex++;

  return [state[stateIndex - 1] as T, setState[stateIndex - 1]] as const;
}
