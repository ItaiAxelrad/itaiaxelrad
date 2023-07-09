// ContactForm.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { ContactForm } from './ContactForm';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ContactForm> = {
  component: ContactForm,
};

export default meta;
type Story = StoryObj<typeof ContactForm>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
