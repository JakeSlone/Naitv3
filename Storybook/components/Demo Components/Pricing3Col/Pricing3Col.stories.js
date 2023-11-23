import Pricing3Col from "./Pricing3Col.vue";

export default {
    title: "Components/Demo Components/Pricing3Col",
    component: Pricing3Col,
};

const Template = (args) => ({
    components: { Pricing3Col },
    setup: () => ({ args }),
    template: '<Pricing3Col v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
