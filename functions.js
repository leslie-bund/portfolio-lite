

document.querySelector('#sub_btn').addEventListener('click', submit);

function submit(event) {
    let usermail = document.getElementById("mail-value").value;
    let usertel = document.getElementById("tel-value").value;

    document.getElementById("contact-alert").innerHTML = `
    <div class='alert alert-success my-5 mx-auto' role='alert' style='width: 60%;'>
        <strong>success</strong>
        <br>
        <hr>
        Your message has been received and feedback will be relayed to <b><i>${usermail}</i></b> then to <b><i>${usertel}</i></b>
    </div>`;
    return event.preventDefault();
    // window.history.back();
    // return event.prev;
}
