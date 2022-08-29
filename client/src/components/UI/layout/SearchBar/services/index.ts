export const onSearchChange = (
  value: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>
) => {
  setSearch(value);
};

export const highLightSearch = (search: string, prevSearchQuery?: string) => {
  //asset name column data
  const paymentIdContent = document.querySelectorAll(
    "table tr td:first-child > *"
  );
  //asset company name column data
  const referenceIdContent = document.querySelectorAll(
    "table tr td:nth-child(4) > *"
  );

  const allTableContent = [
    ...Array.of(paymentIdContent),
    ...Array.of(referenceIdContent),
  ];
  if (search.trim()) {
    //if there is any text in search bar
    if (allTableContent?.length > 0) {
      allTableContent.forEach((arr) => {
        arr.forEach((el, key) => {
          if (search)
            if (
              search !== prevSearchQuery &&
              !arr[key].innerHTML.includes("<mark>")
            )
              //if its a new search and the result it self does not include <mark> tags
              arr[key].innerHTML = el.innerHTML?.replace(
                search,
                `<mark>${search}</mark>`
              );
            //if its a new search and the result already has some highlighted text
            else if (
              search !== prevSearchQuery &&
              arr[key].innerHTML.includes("<mark>")
            ) {
              //remove highlighted text
              arr[key].innerHTML = el.innerHTML?.replace(/<\/?mark>/gim, "");
              //add new highlighted text that matches new search
              arr[key].innerHTML = el.innerHTML?.replace(
                search,
                `<mark>${search}</mark>`
              );
            }
        });
      });
    }
  } else {
    //if there isnt remove added <mark> tags
    allTableContent.forEach((arr) => {
      arr.forEach((el, key) => {
        arr[key].innerHTML = el.innerHTML?.replace(/<\/?mark>/gim, "");
      });
    });
  }
};
