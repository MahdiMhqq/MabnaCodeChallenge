export const highLightSearch = (
  search: string,
  prevSearch: string | undefined,
  rowRef: React.RefObject<HTMLDivElement>
) => {
  const row = rowRef?.current;
  if (row) {
    if (search.trim()) {
      //if there is any text in search bar
      if (search)
        if (search !== prevSearch && !row.innerHTML.includes("<mark>"))
          //if its a new search and the result it self does not include <mark> tags
          row.innerHTML = row.innerHTML?.replace(
            search,
            `<mark>${search}</mark>`
          );
        //if its a new search and the result already has some highlighted text
        else if (search !== prevSearch && row.innerHTML.includes("<mark>")) {
          //remove highlighted text
          row.innerHTML = row.innerHTML?.replace(/<\/?mark>/gim, "");
          //add new highlighted text that matches new search
          row.innerHTML = row.innerHTML?.replace(
            search,
            `<mark>${search}</mark>`
          );
        }
    } else {
      //if there isnt remove added <mark> tags
      row.innerHTML = row.innerHTML?.replace(/<\/?mark>/gim, "");
    }
  }
};
