export enum UserType {
  HiringAttorney = "Hiring Attorney",
  RemoteAssociate = "Remote Associate",
}

export enum NavigationPath {
  Home = "/",
  Login = "/login",
  SignUp = "/sign-up",
  Registration = "/registration",
  RemoteAssociates = "/remote-associates",
}

export enum QueryKey {
  ListProfiles = "ListProfiles",
}

export enum MutationKey {
  CreateProfile = "CreateProfile",
}

export const CONFIG = {
  BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
};
