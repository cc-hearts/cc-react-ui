/**
 * @author heart
 * @description 单例hooks
 * @Date 2022-05-01
 */
let state: unknown;
import { render } from "../../../main";
export default function <T>(initialState: T): readonly [T, (state: T) => void] {
  state = state ? state : initialState;
  function setState(newState: T): void {
    state = newState;
    render();
  }
  // state as T 暂时不知如何解决
  return [state as T, setState] as const;
}
