import { createStore } from '../libs/sm';

type UserState = {
    count: number;
};

type UserAccessors = {
    incCount: (val: number) => void;
    clearCount: () => void;
    multCount: (val: number) => number;
};

const userStore = createStore<UserState, UserAccessors>({
    name: 'userStore',
    initialState: {
        count: 0,
    },
    accessorsCreator: (mutate, get) => ({
        incCount: (val: number) => mutate(state => (state.count += val)),
        clearCount: () => mutate(state => (state.count = 0)),
        multCount: (val: number) => get().count * val,
    }),
    mutatorHook: state => console.log(state),
});

export default userStore;
