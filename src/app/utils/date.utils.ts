export class DateUtils {
    static formatDateWithMonthName(date: string) {
        let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let dateArr = date.split("-");
        let year = dateArr[0];
        let month = monthNames[(+dateArr[1])-1];
        let day = dateArr[2];
        return day + ' ' + month + ' ' + year;
    }
}