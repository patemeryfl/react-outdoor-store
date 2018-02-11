// eslint-disable-next-line
import { createStore as reduxCreateStore, applyMiddleware } from "redux";
import axios from 'axios';
//import { composeWithDevTools } from "redux-devtools-extension";
import { API_KEY } from '../utilities/keys';

const url = 'https://api.goodzer.com/products/v0.1/search_stores/';
const key = `apiKey=${API_KEY}`;

/* action types*/
const GET_LL_FROM_ZIP = "GET_LL_FROM_ZIP"
const FETCHING_QUERY = "FETCHING_QUERY";
const FETCHING_DETAILS = "FETCHING_DETAILS";
const ITEM_FETCHED = "ITEM_FETCHED";

const LOG_IN = "LOG_IN";
const LOG_IN_ERROR = "LOG_IN_ERROR";
const LOG_OUT = "LOG_OUT";
const CHECK_AUTH = "CHECK_AUTH";

const ADD_FAVORITE = "ADD_FAVORITE";

/* action creators */
export function fetchProducts(q) {
  let request = `${url}${q}${key}`;
  let products = [];
  axios.get(request)
  .then((response) => products.push(response))
  .catch((error) => console.log(error));
  return { type: FETCHING_QUERY };
}

export function fetchDetails(product) {
  let details = [];
  axios.get(`${url}`)
  .then((response) => details.push(response))
  .catch((error) => console.log(error));
  return { type: FETCHING_DETAILS };
}

export function getLLFomZip(zip) {
  let LL = {
    lat: "",
    long: ""
  }
  axios.get(`http://maps.googleapis.com/maps/api/geocode/json?address=${zip}`)
  .then((response) => {
    LL.lat = response.data.results[0].geometry.location.lat
    LL.long = response.data.results[0].geometry.location.lat
  })
  .catch((error) => console.log(error));
  return { type: GET_LL_FROM_ZIP };
}

export function logIn() { }

export function logOut() { }

export function checkAuth() { }

export function addFavorite() { }

/* reducer */
const reducer = (state, action) => {
  switch (action.type) { 
    case FETCHING_QUERY:
      return {
        ...state,
        products: [action.value]
      };
    case FETCHING_DETAILS:
      return {
        ...state,
        details: [action.value]
      };
      case GET_LL_FROM_ZIP:
      debugger;
      return {
        ...state,
        LL: [action.value]
      };
      case ITEM_FETCHED:
      return {
        ...state,
        details: [action.value]
      };
      case LOG_IN:
      return {
        ...state,
        details: [action.value]
      };
      case LOG_OUT:
      return {
        ...state,
        details: [action.value]
      };
      case LOG_IN_ERROR:
      return {
        ...state,
        details: [action.value]
      };
      case CHECK_AUTH:
      return {
        ...state,
        details: [action.value]
      };
      case ADD_FAVORITE:
      return {
        ...state,
        details: [action.value]
      };
    default:
      return state;
  }
};

const initialState = {
  products: [],
  details: [],
  auth: null,
  LL: {},
  user: {
    name: "",
    cart: [],
    favorites: []
  }
};

const createStore = () =>
  reduxCreateStore(
    reducer,
    initialState
    //composeWithDevTools(applyMiddleware())
  );
export default createStore;
