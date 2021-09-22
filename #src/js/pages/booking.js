{
    let deliveryAddressBlock = document.querySelector('#deliveryAddresses');
    if(deliveryAddressBlock) {
        let columnNumber = deliveryAddressBlock.querySelector('._number');
        let radioSingleAddressDelivery = deliveryAddressBlock.querySelector('#singleAddressDelivery');
        let radioMultipleAddressDelivery = deliveryAddressBlock.querySelector('#multipleAddressDelivery');
        let pickupAddressInput = deliveryAddressBlock.querySelector('#pickupAddressInput');
        let multipleAddressInput = deliveryAddressBlock.querySelector('#multipleAddressInput');


        if(radioSingleAddressDelivery && radioMultipleAddressDelivery && columnNumber) {
            radioSingleAddressDelivery.addEventListener('change', (e) => {
                if(e.target.checked) {
                    columnNumber.setAttribute('disabled', '');
                    setPickupItems(1);
                    setMultipleItems(1);
                }
            })

            radioMultipleAddressDelivery.addEventListener('change', (e) => {
                if(e.target.checked) {
                    columnNumber.removeAttribute('disabled');
                    setPickupItems(pickupAddressInput.value);
                    setMultipleItems(multipleAddressInput.value);
                }
            })
        }

        if(pickupAddressInput && multipleAddressInput) {
            setPickupItems(pickupAddressInput.value);
            setMultipleItems(multipleAddressInput.value);

            pickupAddressInput.addEventListener('input', (e) => {
                if(e.target.value < 1) {
                    setPickupItems(1);
                } else {
                    setPickupItems(pickupAddressInput.value);
                }
            })
            pickupAddressInput.addEventListener('blur', (e) => {
                if(e.target.value < 1) {
                    pickupAddressInput.value = 1;
                } else if(e.target.value > 6) {
                    pickupAddressInput.value = 6;
                }
            })

            multipleAddressInput.addEventListener('input', (e) => {
                if(e.target.value < 1) {
                    setMultipleItems(1);
                } else {
                    setMultipleItems(multipleAddressInput.value);
                }
            })
            multipleAddressInput.addEventListener('blur', (e) => {
                if(e.target.value < 1) {
                    multipleAddressInput.value = 1;
                } else if(e.target.value > 6) {
                    multipleAddressInput.value = 6;
                }
            })
        }
    }

    function setActiveItems(wrap, count) {
        let items = Array.from(wrap.children);
        
        items.forEach(item => {
            item.classList.remove('active');
        })

        items.forEach((item, index) => {
            if(index < count) {
                item.classList.add('active');
            } else {
                return;
            }
        })
    }

    function setPickupItems(count) {
        let pickupAddress = document.querySelector('.pickup-address');
        if(!pickupAddress) return
        setActiveItems(pickupAddress, count);
    }
    function setMultipleItems(count) {
        let pickupAddress = document.querySelector('.multiple-address');
        if(!pickupAddress) return
        setActiveItems(pickupAddress, count);
    }


}