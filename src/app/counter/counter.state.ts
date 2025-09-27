import { Action, Selector, State, StateContext } from "@ngxs/store";
import { CounterAction } from "./counter.action";

export interface CounterModel {
    count: number;
}

@State<CounterModel>({
    name: "counter",
    defaults: {
        count: 0
    }
})
export class CounterState {
    @Selector()
    static getCount(state: CounterModel) {
        return state.count;
    }

    @Action(CounterAction)
    increment(ctx: StateContext<CounterModel>) {
        const state = ctx.getState();
        ctx.setState({ count: state.count + 1 });
    }
}
