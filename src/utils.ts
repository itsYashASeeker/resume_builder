
export function formatDateToMonthYear(dateString: any) {
    if (!dateString) return '';
    const date = new Date(dateString);
    const month = date.toLocaleString('en-US', { month: 'long' }).slice(0, 3);
    const year = date.getFullYear();
    const formattedDate = `${month},${year}`;
    return formattedDate;
}