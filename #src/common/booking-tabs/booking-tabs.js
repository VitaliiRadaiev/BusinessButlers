{
    let bookingTabItemsWrap = document.querySelector('.booking-tabs__items');
    if(bookingTabItemsWrap) {
        bookingTabHandler(bookingTabItemsWrap)
    }

    function bookingTabHandler(parent) {
        const getChildrenCoordinates = (parent, allItems) => {
            let coordinates = [];
            let parentCoordinatesLeft =  parent.getBoundingClientRect().left;

            allItems.forEach(item => {
                coordinates.push(item.getBoundingClientRect().left - parentCoordinatesLeft);
            })
            return coordinates;
        }

        const addSlideLine = (parent) => {
            let el = document.createElement('div');
            el.className = 'booking-tabs__items-slide-line';
            parent.append(el)
            return el;
        }

        const setElWidth = (el, width) => {
            el.style.width = width + 'px';
        }

        const setElPosition = (el, coordinate) => {
            el.style.left = coordinate + 'px';
        }

        let allItems = Array.from(parent.querySelectorAll('.booking-tabs__item'));
        let itemWidth = allItems[0].clientWidth;
        let coordinates = getChildrenCoordinates(parent, allItems);
        let indexActiveElement = allItems.findIndex(item => item.classList.contains('active'));
        let slideLine = addSlideLine(parent);

        setElWidth(slideLine, itemWidth);
        setElPosition(slideLine, coordinates[indexActiveElement]);

        const updateData = () => {
            itemWidth = allItems[0].clientWidth;
            coordinates = getChildrenCoordinates(parent, allItems);
            setElWidth(slideLine, itemWidth);
            setElPosition(slideLine, coordinates[indexActiveElement]);
        }

        allItems.forEach((item, index) => {
            item.addEventListener('mouseenter', () => {
                setElPosition(slideLine, coordinates[index]);
            })
        })

        parent.addEventListener('mouseleave', () => {
            setElPosition(slideLine, coordinates[indexActiveElement]);
        })

        window.addEventListener('resize', updateData)

    }
}