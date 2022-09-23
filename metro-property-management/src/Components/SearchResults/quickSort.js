function ApplySort(properties, category)
{
  let listSorted = [];
  switch(category){
    case "rate":
    listSorted = quickSortRate(properties);
    break;
    case "title":
    listSorted = quickSortTitle(properties);
    break;
  case "bedrooms":
    listSorted = quickSortBedrooms(properties);
    break;
  case "bathrooms":
    listSorted = quickSortBathrooms(properties);
    break;
  case "Parking":
    listSorted = quickSortCarparks(properties);
    break;
  default:
    break;
  }
  return listSorted
}

function quickSortRate(listToSort){
  if(listToSort.length < 2){
    return listToSort;
  }
  const pivot = listToSort[listToSort.length - 1];
  let left = [];
  let right = [];
  let index = 0;
  while(index < listToSort.length-1){
    if( listToSort[index].rate < pivot.rate){
      left.push(listToSort[index])
    }
    else{
      right.push(listToSort[index])
    }
    index++;
  }
  const sortedlist = [...quickSortRate(left), pivot, ...quickSortRate(right)];
  return (sortedlist);
}
function quickSortTitle(listToSort){
  if(listToSort.length < 2){
    return listToSort;
  }
  const pivot = listToSort[listToSort.length - 1];
  let left = [];
  let right = [];
  let index = 0;
  while(index < listToSort.length-1){
    if( listToSort[index].title < pivot.title){
      left.push(listToSort[index])
    }
    else{
      right.push(listToSort[index])
    }
    index++;
  }
  const sortedlist = [...quickSortTitle(left), pivot, ...quickSortTitle(right)];
  return (sortedlist);
}

function quickSortBedrooms(listToSort){
  if(listToSort.length < 2){
    return listToSort;
  }
  const pivot = listToSort[listToSort.length - 1];
  let left = [];
  let right = [];
  let index = 0;
  while(index < listToSort.length-1){
    if( listToSort[index].bedrooms > pivot.bedrooms){
      left.push(listToSort[index])
    }
    else{
      right.push(listToSort[index])
    }
    index++;
  }
  const sortedlist = [...quickSortBedrooms(left), pivot, ...quickSortBedrooms(right)];
  return (sortedlist);
}

function quickSortBathrooms(listToSort){
  if(listToSort.length < 2){
    return listToSort;
  }
  const pivot = listToSort[listToSort.length - 1];
  let left = [];
  let right = [];
  let index = 0;
  while(index < listToSort.length-1){
    if( listToSort[index].bathrooms > pivot.bathrooms){
      left.push(listToSort[index])
    }
    else{
      right.push(listToSort[index])
    }
    index++;
  }
  const sortedlist = [...quickSortBedrooms(left), pivot, ...quickSortBedrooms(right)];
  return (sortedlist);
}

function quickSortCarparks(listToSort){
  if(listToSort.length < 2){
    return listToSort;
  }
  const pivot = listToSort[listToSort.length - 1];
  let left = [];
  let right = [];
  let index = 0;
  while(index < listToSort.length-1){
    if( listToSort[index].Parking > pivot.Parking){
      left.push(listToSort[index])
    }
    else{
      right.push(listToSort[index])
    }
    index++;
  }
  const sortedlist = [...quickSortCarparks(left), pivot, ...quickSortCarparks(right)];
  return (sortedlist);
}


export default ApplySort