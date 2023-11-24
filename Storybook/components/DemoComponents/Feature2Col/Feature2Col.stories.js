import Feature2Col from "./Feature2Col.vue";

export default {
    title: "Components/Demo Components/Feature2Col",
    component: Feature2Col,
    argTypes: {
        student: { control: "boolean" },
        staff: { control: "boolean" },
    },
};

const Template = (args) => ({
    components: { Feature2Col },
    setup: () => ({ args }),
    template: '<Feature2Col v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = { student: true, staff: false };
