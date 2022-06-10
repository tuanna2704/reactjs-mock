import React from 'react';
import ListRepoComponent from 'component/list-repo/list-repo';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme'; 
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'; 

// const mockDispatch = jest.fn();
// jest.mock('react-redux', () => ({
//   useSelector: jest.fn(),
//   useDispatch: () => mockDispatch
// }));

describe('<ListRepoComponent />', () => {
  it('has a div tag', () => {
    const mockStore = configureStore();
    const store = mockStore({
      repo: {
        repo: []
      }
    });

    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ListRepoComponent />
        </BrowserRouter>
      </Provider>
    );
    
    expect(wrapper.find('a').text()).toEqual('ADD ')
  });
});
