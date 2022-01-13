export const getAllProducts = () => {
    return fetch('https://kickstartthisapi.herokuapp.com/')
      .then(response => {
        if (!response.ok) {
          throw Error('Oops, problem loading products. Please refresh the page.')
        }
        return response.json()
      })
};

export const getSingleProduct = (id) => {
    return fetch(`https://kickstartthisapi.herokuapp.com/product/${id}`)
      .then(response => {
        if (!response.ok) {
          throw Error('Oops, problem finding product. Please try again.')
        }
        return response.json()
    })
};