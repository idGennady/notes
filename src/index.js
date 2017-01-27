import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Application from './components/application';
import Error from './components/error/error';
import NoteForm from './components/forms/noteForm';
import NoteDetails from './components/notes/noteDetails';
import EditNoteForm from './components/forms/editNoteForm';
import './styles/styles.css';

// reducers
import notesReducer from './reducers/notesReducer';
import categoriesReducer from './reducers/categoriesReducer';

// actions
import { setNotes } from './actions/notesAction';
import { setCategories } from './actions/categoriesAction';


const store = createStore(combineReducers({
    notesReducer,
    categoriesReducer
}), applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState().notesReducer.notes)
});

store.dispatch(setNotes());
store.dispatch(setCategories());

ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory}>
          <Route path="/" components={Application} />
          <Route path="/add-note" components={NoteForm} />
          <Route path="/details/:id" component={NoteDetails}/>
          <Route path="/edit/:id" component={EditNoteForm}/>
          <Route path="*" components={Error} />
      </Router>
  </Provider>,
  document.getElementById('root')
);
