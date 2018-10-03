import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
//import element to test
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

//wrapped defined in outer scoped
let wrapped;

beforeEach(() => {
    //wrapped set here
    wrapped = shallow(<App />);

})

//If test passed, break and test again
it('shows a comment box', () => {
    //Gives the number of instances of the element and sets expectation of seeing 1 item
    expect(wrapped.find(CommentBox).length).toEqual(1)
;})

it('shows the comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1)
})