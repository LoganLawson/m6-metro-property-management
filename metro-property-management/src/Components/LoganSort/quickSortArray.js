const reorder = (sorted, unsorted, target) => {

    let order = []

    let i = 0;
    while (i < sorted.length) {

        let j = 0;
        while (j < sorted[i].length && !order[i]) {
            if (sorted[i] === unsorted[j][target]) {
                order[i] = [i, j]
            } else {
                j ++;
            }
        }
        i++;
    }

    const ordered = [];
    i = 0;
    while (i < order.length) {
        ordered[order[i][0]] = unsorted[order[i][1]]
        i++
    }
    
    return ordered
};

const quickSort = (arr) => {

    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }
    const sorted = [...quickSort(left), pivot, ...quickSort(right)];
    return sorted
};

const quickSortArray = (arr, target) => {
    const toSort = arr.map((x) => x[target]);
    const sorted = quickSort(toSort);
    const reordered = reorder(sorted, arr, target);
    return reordered
};

export default quickSortArray;