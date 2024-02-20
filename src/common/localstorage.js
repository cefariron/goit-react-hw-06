export const save = (key, value) => {
      const data = JSON.stringify(value);
      localStorage.setItem(key, data);
  };
  
  export const load = key => {
      const data = localStorage.getItem(key);
      return data === null ? undefined : JSON.parse(data);
  };