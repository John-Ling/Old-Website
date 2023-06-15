const get_age = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    let age = year - 2005;
    if (month < 7 || month == 8 && day < 7) {
        age--;
    }
    return age;
}

const get_years_programming = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    let years = year - 2019;
    if (month < 9) {
        years--;
    }

    return years;
}

document.addEventListener("DOMContentLoaded", () => {
    const ageTexts = document.querySelectorAll(".age-text");
    ageTexts.forEach((element) => element.innerHTML = get_age());

    const yearsTexts = document.querySelectorAll(".years-text");
    yearsTexts.forEach((element) => element.innerHTML = get_years_programming());
});
