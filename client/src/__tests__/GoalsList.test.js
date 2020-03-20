import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { TestIds } from '../Constants';
import GoalsList from '../components/Views/AboutView/GoalsList';

describe('GoalsList', () => {
  it('GoalsList is present in the document', () => {
    const { getByTestId } = render(<GoalsList/>);
    const elem = getByTestId(TestIds.goalsListArticleId);
    expect(elem).toBeInTheDocument();
  });
});