import MastHead from "./MastHead.vue";

export default {
    title: "Components/Demo Components/MastHead",
    component: MastHead,
    argTypes: {
        student: { control: "boolean" },
        staff: { control: "boolean" },
    },
};

const Template = (args) => ({
    components: { MastHead },
    setup: () => ({ args }),
    template: '<MastHead v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    name: "Emp Loyee",
    student: true,
    staff: false,
};
