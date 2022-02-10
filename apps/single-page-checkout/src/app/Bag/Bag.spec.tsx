import { render } from '@testing-library/react';

import Bag from './Bag';

describe('Bag', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Bag />);
    expect(baseElement).toBeTruthy();
  });
});
