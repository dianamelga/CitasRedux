import { createStore } from "redux";
import reducer from './reducers';
import { obtenerStateStorage, guardarStateStorage } from './localStorage';

//definir state inicial
//const initialState = [];

//obtener citas de localstorage
const storageState = obtenerStateStorage();

const store = createStore(
  reducer,
  storageState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe( () => {
    console.log('Algo cambio');
    guardarStateStorage({
      citas: store.getState().citas
    })
});

export default store;
