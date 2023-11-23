import ImageCard from './ImageCard.vue'

export default {
    title: 'Components/Demo Components/ImageCard',
    component: ImageCard
}

const Template = (args) => ({
    components: { ImageCard },
    setup: () => ({ args }),
    template: '<ImageCard v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
    title: 'Look at this image',
    text: 'Read this to learn more about the image',
    imageUrl: 'https://picsum.photos/400/300',
    price: '$199'
}

export const WithOldPrice = Template.bind({})
WithOldPrice.args = {
    ...Default.args,
    oldPrice: '$299'
}
