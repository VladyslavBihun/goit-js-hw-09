const form = document.querySelector(".feedback-form");
const inputEmail = form.querySelector("input");
const textarea = form.querySelector("textarea");
const localStorageKey = "feedback-form-state";

form.addEventListener("input", feedbackForm);

function feedbackForm (event) {
    const email = inputEmail.value.trim();
    const message = textarea.value.trim();

    const feedback = {
        email: email,
        message: message
    };
    
    localStorage.setItem(localStorageKey, JSON.stringify(feedback));
}

const savedFeedback = localStorage.getItem(localStorageKey);
const parsedFeedback = JSON.parse(savedFeedback) || {};

const { email, message } = parsedFeedback;

inputEmail.value = email ?? "";
textarea.value = message ?? "";

form.addEventListener("submit", submitForm);

function submitForm(event) {

    event.preventDefault();

    if (inputEmail.value.trim() === "" || textarea.value.trim() === "") {
        alert("Please fill in both fields.");
        return
    };

    const currentValue = {
        Email: inputEmail.value.trim(),
        Message: textarea.value.trim()
    };
    console.log(currentValue);

    localStorage.removeItem(localStorageKey);
    form.reset();

}