export const getAllProducts = () => {
    return fetch('https://kickstartthisapi.herokuapp.com/')
      .then(response => {
        if (!response.ok) {
          throw Error('Oops, problem loading products. Please refresh the page.')
        }
        return response.json()
      })
  };
  
  