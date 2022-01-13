import { NewProduct } from './types';

export const getAllProducts = () => {
    return fetch('https://kickstartthisapi.herokuapp.com/')
      .then(response => {
        if (!response.ok) {
          throw Error('Oops, problem loading products. Please refresh the page.')
        }
        return response.json()
      })
};

export const getSingleProduct = (id: string) => {
    return fetch(`https://kickstartthisapi.herokuapp.com/product/${id}`)
      .then(response => {
        if (!response.ok) {
          throw Error('Oops, problem finding product. Please try again.')
        }
        return response.json()
    })
};

export const addSingleProduct = (newProduct: NewProduct) => {
    return fetch('https://kickstartthisapi.herokuapp.com/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newProduct)
    })
    .then(response => {
      if (!response.ok) {
        throw Error('Your product was not added, please try again')
      }
    })
};

export const deleteSingleProduct = (id: number) => {
    return fetch('https://kickstartthisapi.herokuapp.com/products', {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({id})
    })
    .then(response => {
      if (!response.ok) {
        throw Error('Your delete request was not successful')
      }
    })
};

export const updateFundsRaised = (funds_raised: number, id: number) => {
  return fetch(`https://kickstartthisapi.herokuapp.com/products/${id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({funds_raised})
  })
  .then(response => {
    if (!response.ok) {
      throw Error('Your rating was not successful')
    }
  })
};

