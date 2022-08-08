// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == undefined) {
        return [];
    }
    if (matrix.length == 0 || matrix == undefined) {
        return [];
    }
    matrix.forEach((element, index) => {
        if (index % 2 != 0) {
            element = element.reverse();
        }
    });
    let fromStrToArr = matrix.join().split(",");
    let ArrOfNumb = fromStrToArr.map(Number);

    return ArrOfNumb;
};
