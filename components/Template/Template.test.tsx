import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react';
import Template from './Template';

describe('Template component', () => {
  it('has div', () => {
    render(<Template />);
    const div = document.querySelector('div');
    expect(div.innerHTML).toBe('<div>Template</div>');
  });
});
