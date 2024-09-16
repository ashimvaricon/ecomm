export type LazyLoadProps<T = object> = {
  Component: React.LazyExoticComponent<React.ComponentType<T>>;
};