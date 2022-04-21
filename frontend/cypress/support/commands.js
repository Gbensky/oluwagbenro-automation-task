
function formatDate(date) {
    let da = new Intl.DateTimeFormat("en", { day: "numeric" }).format(date);
    let mo = new Intl.DateTimeFormat("en", { month: "numeric" }).format(date);
    let year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);

    let month = (mo < 10 ? "0" : "") + mo;
    let day = (da < 10 ? "0" : "") + da;

    return day + "." + month + "." + year;
}

Cypress.Commands.add("checkDate", () => {
    return formatDate();
});
