import GlobalFooter from "./GlobalFooter.vue";

export default {
    title: "Components/Demo Components/GlobalFooter",
    component: GlobalFooter,
};

const Template = (args) => ({
    components: { GlobalFooter },
    setup: () => ({ args }),
    template: '<GlobalFooter v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
