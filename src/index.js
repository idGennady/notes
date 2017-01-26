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

const store = createStore(combineReducers({
    notesReducer
}), applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState().notesReducer.notes)
});

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
