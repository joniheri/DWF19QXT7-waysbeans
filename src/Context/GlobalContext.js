import { createContext, useReducer } from "react";
import user from "../data/user.json";

export const GlobalContext = createContext();

const initialData = {
  isLogin: false,
  ProductsCart: [],
  totalCart: {
    subtotal: 0,
    qty: 0,
    total: 0,
  },
  transaction: [],
  adminTransaction: [],
  user: user,
  userLogin: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const filterExistedProduct = state.ProductsCart.filter(
        (product) => product.id === action.payload.id
      );
      if (filterExistedProduct.length > 0) {
        return {
          ...state,
          ProductsCart: state.ProductsCart.map((product) => {
            if (product.id === action.payload.id) {
              return { ...product, qty: product.qty + 1 };
            } else {
              return product;
            }
          }),
        };
      }
      return {
        ...state,
        ProductsCart: [...state.ProductsCart, { ...action.payload, qty: 1 }],
      };
    case "ADD_TO_TRANSACTION":
      return {
        ...state,
        transaction: [...state.transaction, ...action.payload],
        ProductsCart: [],
      };
    case "ADD_TO_TRANSACTION_ADMIN":
      const data = action.payload;
      return {
        ...state,
        adminTransaction: [
          ...state.adminTransaction,
          {
            name: data.name,
            address: data.address,
            postCode: data.postCode,
            product: data.product,
            status: "waiting",
          },
        ],
      };
    case "DESC_TO_CART":
      return {
        ...state,
        ProductsCart: state.ProductsCart.map((product) => {
          if (product.id === action.payload.id) {
            return { ...product, qty: product.qty - 1 };
          } else {
            return product;
          }
        }),
      };
    case "REMOVE_TO_CART":
      return {
        ...state,
        ProductsCart: state.ProductsCart.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    case "GET_TOTAL_CART":
      if (state.ProductsCart.length > 0) {
        let subtotal = 0,
          qty = 0,
          total = 0;
        state.ProductsCart.forEach((product) => {
          subtotal += +product.price;
          qty += +product.qty;
          total += +product.price * +product.qty;
        });
        return {
          ...state,
          totalCart: { subtotal, qty, total },
        };
      } else {
        return {
          ...state,
          totalCart: initialData.totalCart,
        };
      }
    case "ADMIN_APPROVE_TRANSC":
      if (state.adminTransaction[action.payload.index]) {
        state.adminTransaction[action.payload.index].status = "succsess";
        return { ...state };
      }
      return state;

    case "ADMIN_CANCEL_TRANSC":
      if (state.adminTransaction[action.payload.index]) {
        state.adminTransaction[action.payload.index].status = "cancel";
        return { ...state };
      }
      return state;
    case "LOGIN":
      return {
        ...state,
        isLogin: true,
        userLogin: action.payload,
      };
    case "REGISTER":
      return {
        ...state,
        isLogin: true,
        user: [...state.user, action.payload],
        userLogin: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false,
      };
    default:
      throw new Error();
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
};
