import { atom, selector } from "recoil";

const NavigationState = atom({
  key: "NavigationState",
  default: [
    { linkName: "Home", linkPath: "/" },
    { linkName: "Dashboard", linkPath: "/dashboard" },
  ],
});

const NavigationSelector = selector({
  key: "NavigationSelector",
  get: ({ get }) => {
    return get(NavigationState);
  },
});

export { NavigationSelector };
