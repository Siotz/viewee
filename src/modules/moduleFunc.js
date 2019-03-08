
// 오늘 날짜를 'yyyy-mm-dd' 형식으로 반환하는 모듈
// return 타입은 string
export function getDate() {
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    const year = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }

    return year + '-' + mm + '-' + dd;
}