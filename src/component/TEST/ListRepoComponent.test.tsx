import ListRepoComponent from 'component/list-repo/list-repo';
import configureStore from 'redux-mock-store';
import ReactTestUtils from 'react-dom/test-utils'; 

describe('With React Testing Library', () => {
    const initialState = { output: '' };
    const mockStore = configureStore();
    let store;

    it('has store', () => {
        store = mockStore(initialState);
        expect(store).not.toBeNull();
    });
})

describe('ListRepoComponent', () => {
 
    it('passing test', () => {
      expect(true).toBeTruthy();
    })
   
    it('has a div tag', () => {
        const component:any = ReactTestUtils.renderIntoDocument(<ListRepoComponent/>);
        let div = ReactTestUtils.findRenderedDOMComponentWithTag(
            component, 'div'
        );
    })

    it('has UpdateRepoComponent', () => {
        const component:any = ReactTestUtils.renderIntoDocument(<ListRepoComponent/>);
        let UpdateRepoComponent = ReactTestUtils.findRenderedDOMComponentWithTag(
            component, 'UpdateRepoComponent'
        );
    })
  })

export {};