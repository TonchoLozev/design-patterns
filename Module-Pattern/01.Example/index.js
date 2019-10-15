const HTMLChanger = (function () {
    let content = '<span>Hello</span>';

    const changeHTML = () => {
        content = '<h3>Hey</h3>';
    };

    return {
        callChangeHTML: function () {
            changeHTML();
            console.log(content);
        }
    }
})();

HTMLChanger.callChangeHTML();
//console.log(HTMLChanger.changeHTML());
//console.log(HTMLChanger.content);