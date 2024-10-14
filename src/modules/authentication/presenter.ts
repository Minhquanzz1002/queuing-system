import authenticationRepository from './repository';
import {ILoginDTO} from "@modules/authentication/interface";
import store from "@core/store/redux";
import profileStore from "@modules/authentication/profileStore";

const authenticationPresenter = {...authenticationRepository};

authenticationPresenter.login = async (payload: ILoginDTO) => {
    const user = await authenticationRepository.login(payload);
    store.dispatch(profileStore.actions.setUser(user));
    store.dispatch(profileStore.actions.setToken(user.id));
    return user;
};

authenticationPresenter.getProfile = async (id: string) => {
    const user = await authenticationRepository.getProfile(id);
    store.dispatch(profileStore.actions.setUser(user));
    return user;
};

export default authenticationPresenter;