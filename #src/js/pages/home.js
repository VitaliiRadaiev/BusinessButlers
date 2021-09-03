{
    if (document.documentElement.clientWidth >= 768) {
        let infoDeliveringSizesText = document.querySelectorAll('.info-delivering-sizes__text');
        if (infoDeliveringSizesText.length) {
            setSameHeight(infoDeliveringSizesText);
        }

        let infoDeliveringSizesTimaframes = document.querySelectorAll('.info-delivering-sizes__timaframes');
        if (infoDeliveringSizesTimaframes.length) {
            setSameHeight(infoDeliveringSizesTimaframes);
        }
    }
}