{
    (function uploadFileHandler() {
        let files = []
        let inputWrapItems = document.querySelectorAll('.file-block');
        if(inputWrapItems.length) {
            inputWrapItems.forEach(inputWrap => {
                let input = inputWrap.querySelector('input[type="file"]');
                let div = document.createElement('div');
                div.className = 'file-block__result';
                inputWrap.prepend(div);
                const changeHandler = (event) => {
                    if (!event.target.files.length) {
                        return
                    }
    
                    files = Array.from(event.target.files)
    
                    let result = files.map(item => item.name);
                    div.innerText = result.join(', ');
                }
    
                input.addEventListener('change', changeHandler);
            })
        }
    })()
}