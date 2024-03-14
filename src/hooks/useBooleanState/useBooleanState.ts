import React from "react";

type Dispatcher = () => void;

type UseBooleanState = (
  initialState: boolean
) => [boolean, Dispatcher, Dispatcher, Dispatcher];

export const useBooleanState: UseBooleanState = (initialState) => {
  const [state, setState] = React.useState(initialState);

  const setToTrue = React.useCallback(() => {
    setState(true);
  }, []);

  const setToFalse = React.useCallback(() => {
    setState(false);
  }, []);

  const toggle = React.useCallback(() => {
    setState((state) => !state);
  }, []);

  return [state, setToTrue, setToFalse, toggle];
};
