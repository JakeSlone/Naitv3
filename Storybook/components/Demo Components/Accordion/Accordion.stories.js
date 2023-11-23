import Accordion from "./Accordion.vue";


export default {
  title: "Components/Demo Components/Accordion",
  component: Accordion,
  argTypes: {
      title: { control: "text" },
      ariaTitle: { control: "text" },
  },
};

const Template = (args) => ({
  components: { Accordion },
  setup: () => ({ args }),
  template: '<Accordion v-bind="args">{{ args.default }}</Accordion>',
});


export const Default = Template.bind({});
Default.args = {
  default: "Content text",
  title: "Default Title",
  ariaTitle: "Default Aria",
};