// Template.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'destructive',
    size: 'lg',
    //👇 The args you need here will depend on your component
  },
  decorators: [
    (Story) => (
      <div className='mx-auto max-w-sm'>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};
