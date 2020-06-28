import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { TestIds } from '../Constants';
import AboutView from '../components/Views/AboutView/AboutView';

describe('AboutView', () => {
  it('AboutView is present in the document', () => {
    const { getByTestId } = render(<AboutView />);
    const elem = getByTestId(TestIds.ABOUT_VIEW_ARTICLE_ID);
    expect(elem).toBeInTheDocument();
  });
});
