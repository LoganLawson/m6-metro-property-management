function quickSort(listToSort, target){
    if (target === 'featured') {
        target = 'title'
    }
    console.log('target', target)
    // console.log('sort item', listToSort[1][target])

    if(listToSort.length < 2){
      return listToSort;
    }
    const pivot = listToSort[listToSort.length - 1];
    let left = [];
    let right = [];
    let index = 0;
    while(index < listToSort.length-1){
      if( listToSort[index][target] < pivot[target]){
        console.log(listToSort[index][target])
        console.log(listToSort[index])
        
        left.push(listToSort[index])
      }
      else{
        right.push(listToSort[index])
      }
      index++;
    }
    const sortedlist = [...quickSort(left), pivot, ...quickSort(right)];
    console.group(sortedlist)
    return (sortedlist);
  }

export default quickSort;