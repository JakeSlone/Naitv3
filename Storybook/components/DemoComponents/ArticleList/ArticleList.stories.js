import ArticleList from "./ArticleList.vue";

export default {
    title: "Components/Demo Components/ArticleList",
    component: ArticleList,
    argTypes: {
        student: { control: "boolean" },
        staff: { control: "boolean" },
    },
};

const Template = (args) => ({
    components: { ArticleList },
    setup: () => ({ args }),
    template: '<ArticleList v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    student: true,
    staff: false,
};
