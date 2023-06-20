export function ChangeToPersianDate(dateStr) {
    const date = new Date(dateStr);
    const persianDate = date.toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "numeric",
      day:"numeric",
    });
  
    return persianDate;
  }
  