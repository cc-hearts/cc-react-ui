/**
 * @author heart
 * @description 单例hooks
 * @Date 2022-05-01
 */
import { initRender } from "./useStateMany";
let state: unknown;

export default function <T>(initialState: T): readonly [T, (state: T) => void] {
  state = state ? state : initialState;
  function setState(newState: T): void {
    state = newState;
    // 清除stateIndex自增的副作用
    initRender();
  }
  // state as T 暂时不知如何解决
  return [state as T, setState] as const;
}
