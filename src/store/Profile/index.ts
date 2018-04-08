import { action, observable } from 'mobx';

class ProfileStore {
  @observable public profile: Profile.RootObject;

  @action.bound
  public async fetchOwnProfile() {
    const url = 'https://api.fitbit.com/1/user/-/profile.json';
    const token = process.env.REACT_APP_FITBIT_TOKEN;
    const profile = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // FIXME: Write another place
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json());

    this.profile = profile;
  }
}

export { ProfileStore };
export const profileStore = new ProfileStore();
