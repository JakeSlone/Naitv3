<script>
const KontentDelivery = require("@kontent-ai/delivery-sdk");

var PageCall = {
    name: "PageCall",
    data: function (pageId) {
        this.mounted(pageId);
        return { content: [] };
    },
    mounted(pageId) {
        const deliveryClient = new KontentDelivery.createDeliveryClient({
            environmentId: "d6a9597f-2e6e-0006-ad27-50e384133464",
        });

        deliveryClient
            .item(pageId)
            .toPromise()
            .then((response) => {
                console.log(response);
                window.pageData = response;
            });
    },
};
export default PageCall;
</script>
