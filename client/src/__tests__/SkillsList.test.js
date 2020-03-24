import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { TestIds } from '../Constants';
import SkillsList from '../components/Views/AboutView/SkillsList';

describe('SkillsList', () => {
  it('SkillsList is present in the document', () => {
    const { getByTestId } = render(<SkillsList/>);
    const elem = getByTestId(TestIds.SKILLS_LIST_ARTICLE_ID);
    expect(elem).toBeInTheDocument();
  });
});