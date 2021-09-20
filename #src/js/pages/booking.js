{
    let deliveryAddressBlock = document.querySelector('#deliveryAddresses');
    if(deliveryAddressBlock) {
        let columnNumber = deliveryAddressBlock.querySelector('._number');
        let radioSingleAddressDelivery = deliveryAddressBlock.querySelector('#singleAddressDelivery');
        let radioMultipleAddressDelivery = deliveryAddressBlock.querySelector('#multipleAddressDelivery');

        if(radioSingleAddressDelivery && radioMultipleAddressDelivery && columnNumber) {
            radioSingleAddressDelivery.addEventListener('change', (e) => {
                if(e.target.checked) {
                    columnNumber.setAttribute('disabled', '');
                }
            })

            radioMultipleAddressDelivery.addEventListener('change', (e) => {
                if(e.target.checked) {
                    columnNumber.removeAttribute('disabled');
                }
            })
        }
    }
}