import axios from "axios";

// axios cheatsheet: https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index

// axios syntax: axios.METHOD('URL', DATA, HEADERS)

// Authentication Header:

/* ******** user ******** */

// Authentication Header:
const HEADERS = (token) => {
  const headers = token
  ? {"Content-Type": "application/json", "Authorization": `Bearer ${token}`}
  : {"Content-Type": "application/json"}
  function validateStatus (status) {return status === 200 || status === 400;}
  const headersObj = {headers, validateStatus}  
  return headersObj;
}
export async function checkToken(token) {
  try {
    const { data } = await axios.get("/api/users", HEADERS(token));
    return data;
  } catch (e) {
    throw e
  }
}


export async function loginUser({username, password}) {
 
      const { data }   = await axios.post("/api/users/login", {
        username,
        password
      }, {
        headers: {
          "Content-Type": "application/json"
        },
        validateStatus: function (status) {
          return status === 200 || status === 400; // default
        },
      });
      console.log('> loginUser', data);
      return data;
  }
 
export async function registerUser({username, password, firstName, lastName, email, address}) {

      const { data } = await axios.post("/api/users/register", {
          username,
          password,
          email,
          firstName,
          lastName,
          address
      });
      console.log('> registerUser', data);
      return data;
  
}

export async function updateUser({username,password,email,firstName,lastName,address,token}) {

    const { data } = await axios.patch('/api/users/update', {
      username,
      password,
      email,
      firstName,
      lastName,
      address
    },
      HEADERS(token)
    );
    console.log('> updateUser', data);
    localStorage.setItem("token", data.token);
    return data;
}

export async function getUserInfo() {
  try {
    const user = await axios.get("/api/users/getUserInfo", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return user;
  } catch (error) {
    throw error;
  }
}





/* ******** products ******** */

export async function getAllProducts() {
    try {
      const { data: { products } } = await axios.get("/api/products");
      
      return products;
    } catch (error) {
      throw error;
    }
}

export async function searchProducts(searchTerm) {
  try {
    const { data } = await axios.get('/api/search/:searchTerm', {searchTerm});
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createProducts(
    name, 
    description,
    price,
    stock,
    active,
    featured,
    thumbnail,
    image,
    categoryId ){

        try {
        const { data } = await axios.post('/api/products/create',{
          name, 
          description,
          price,
          stock,
          active,
          featured,
          thumbnail,
          image,
          categoryId
        });
        console.log(data);
        return data;
    }   catch (error) {
      throw error;
    }
    //authorization/ bearer token needed... pull from state
}

export async function checkStock({token, productId}) {
  try {
    const { data: stock } = await axios.post("/api/products/stock", {productId}, HEADERS(token));
    return stock;
  } catch (error) {
    throw error;
  }
}

/* ******** cart ******** */

export async function getCart({token}) {
  try {
    const { data: { cart } } = await axios.get("/api/carts/open", HEADERS(token));
    console.log("cart:", cart);
    return cart;
  } catch (error) {
    throw error;
  }
}
//add item to cart
export async function addToCart({productId, quantity, token}) {
  try {
    const { data: updatedCart } = await axios.post('/api/cart_products/add', {productId, quantity}, HEADERS(token));
    return updatedCart;
  } catch (error) {
    throw error;
  }
}

//Update cartProduct quantity
export async function updateCartProductQuantity({cartProductId, quantity, token}) {
  try {
    const { data } = await axios.patch(`/api/cart_products/${cartProductId}`, {quantity}, HEADERS(token));
    return data;
  } catch (error) {
    throw error;
  }
}

//remove item from cart
export async function removeFromCart({token, cartProductId}) {
  try {
    const { data } = await axios.delete(`/api/cart_products/${cartProductId}/remove`, HEADERS(token));
    return data;
  } catch (error) {
    throw error;
  }
}
//clear cart
export async function clearCart({token}) {
  try {
    const { data } = await axios.delete(`/api/cart_products/clear`, HEADERS(token));
    return data;
  } catch (error) {
    throw error;
  }
}

//CHECKOUT:
export async function checkout({shippingAddress, token}) {
  try {
    const { data } = await axios.patch(`/api/carts/checkout`, {shippingAddress}, HEADERS(token));
    return data;
  } catch (e) {
    throw e;
  }
}

/* ******** reviews ******** */

export async function getReviewsByProductId(productId) {
  try {
    const { data } = await axios.get('/api/reviews/:productId', {productId});
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}


export async function getReviewsByUserId(userId) {
  try {
    const { data } = await axios.get('/api/reviews/:userId', {userId});
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

