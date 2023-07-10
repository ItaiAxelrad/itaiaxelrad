// ContactForm.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ContactForm } from './ContactForm';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ContactForm> = {
  component: ContactForm,
};

export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Primary: Story = {
  args: {
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
