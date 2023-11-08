import { render } from '@test-utils';
import { Welcome } from './Welcome';
import '@testing-library/jest-dom/extend-expect';

describe('Welcome component', () => {
  it('has correct Vite guide link', () => {
    render(<Welcome />);
  });
});
