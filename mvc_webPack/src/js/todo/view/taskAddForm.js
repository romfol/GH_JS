export default function taskAddFormView(rootElement, actions) {
    let form = document.createElement('form');
    form.innerHTML = `
        <input type="text" name="text">
        <input type="submit" value="Add">
    `;

    form.addEventListener('submit', function (event) {
        let input = form.querySelector('[name=text]');
        let text = input.value.trim();

        if (text) {
            actions.onSubmit(text);
            input.value = '';
        }
        event.preventDefault();
    });

    rootElement.appendChild(form);
}