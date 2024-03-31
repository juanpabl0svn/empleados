export default function useSearchParams() {
  const searchParams = new URLSearchParams(window.location.search);

  const get = (key) => searchParams.get(key);
  const set = (key, value) => {
    searchParams.set(key, value);
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.pushState({}, "", newUrl);
  };

  return [get, set];
}
