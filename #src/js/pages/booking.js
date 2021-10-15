{
    let deliveryAddressBlock = document.querySelector('#deliveryAddresses');
    if(deliveryAddressBlock) {
        let columnNumber = deliveryAddressBlock.querySelector('._number');
        let radioSingleAddressDelivery = deliveryAddressBlock.querySelector('#singleAddressDelivery');
        let radioMultipleAddressDelivery = deliveryAddressBlock.querySelector('#multipleAddressDelivery');
        let pickupAddressInput = deliveryAddressBlock.querySelector('#pickupAddressInput');
        let deliveryAddressesItems = document.querySelector('#deliveryAddressesItems');
        let multipleAddressInput = deliveryAddressBlock.querySelector('#multipleAddressInput');
        let multipleAddressBlock = document.querySelector('.multiple-address');
        let maxItems = 6; 

        if(multipleAddressBlock.children.length) {
            maxItems = +multipleAddressBlock.children.length;
        }

        if(radioSingleAddressDelivery && radioMultipleAddressDelivery && columnNumber) {
            radioSingleAddressDelivery.addEventListener('change', (e) => {
                if(e.target.checked) {
                    columnNumber.setAttribute('disabled', '');
                   // setPickupItems(0);
                    setMultipleItems(0);
                    removeAttributeOfMultipleItems('data-place_name');
                    deliveryAddressesItems.style.display = 'none';
                }
            })

            radioMultipleAddressDelivery.addEventListener('change', (e) => {
                if(e.target.checked) {
                    columnNumber.removeAttribute('disabled');
                    //setPickupItems(pickupAddressInput.value);
                    setMultipleItems(multipleAddressInput.value);
                    deliveryAddressesItems.style.display = 'block';
                }
            })
        }


        if(multipleAddressInput) {
            if(radioSingleAddressDelivery.checked) {
                columnNumber.setAttribute('disabled', '');
               // setPickupItems(0);
                setMultipleItems(0);
            } else {
               // setPickupItems(pickupAddressInput.value);

                setMultipleItems(multipleAddressInput.value);
            }


            // pickupAddressInput.addEventListener('input', (e) => {
            //     if(e.target.value < 1) {
            //         setPickupItems(1);
            //     } else {
            //         setPickupItems(pickupAddressInput.value);
            //     }
            // })
            // pickupAddressInput.addEventListener('blur', (e) => {
            //     if(e.target.value < 1) {
            //         pickupAddressInput.value = 1;
            //     } else if(e.target.value > 6) {
            //         pickupAddressInput.value = 6;
            //     }
            // })

            multipleAddressInput.addEventListener('input', (e) => {
                if(!e.target.value.trim()) return;

                if(e.target.value < 1) {
                    setMultipleItems(1);
                    if(e.target.value < 1 && e.target.value.trim()) {
                        e.target.value = 1;
                    }
                } else {
                    if(e.target.value > maxItems && e.target.value.trim()) {
                        e.target.value = maxItems;
                    }
                    setMultipleItems(multipleAddressInput.value);
                }
            })
            multipleAddressInput.addEventListener('blur', (e) => {
                if(e.target.value < 1) {
                    multipleAddressInput.value = 1;
                } else if(e.target.value > maxItems) {
                    multipleAddressInput.value = maxItems;
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

        items.slice(count).forEach(item => {
            let input = item.querySelector('input[data-place_name]');
            if(input) {
                removeAttributeClearValue(input, 'data-place_name');
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

    function removeAttributeClearValue(input, attributeName) {
        input.removeAttribute(attributeName);
        input.value = '';
    }

    function removeAttributeOfMultipleItems(attributeName) {
        let pickupAddress = document.querySelector('.multiple-address');
        if(!pickupAddress) return

        let inputs = pickupAddress.querySelectorAll('input[data-place_name]');
        if(inputs.length) {
            inputs.forEach(input => {
                removeAttributeClearValue(input, attributeName)
            })
        }
    }
}