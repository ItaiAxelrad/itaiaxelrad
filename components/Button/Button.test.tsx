import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button component', () => {
  it('has div', () => {
    render(<Button>Button</Button>);
    const button = document.querySelector('button');
    expect(button.innerHTML).toBe('<button>Button</button>');
  });
});
