let count = 0;

const LOADER_ID = 'loader';
const LOADER_OPEN_CLASS = 'open';

const showLoader = () => {
  const loader = document.getElementById(LOADER_ID);
  if (loader) {
    loader.className = LOADER_OPEN_CLASS;
  }
};

const hideLoader = () => {
  const loader = document.getElementById(LOADER_ID);
  if (loader) {
    loader.className = '';
  }
};

export default (open: boolean) => {
  if (open) {
    count += 1;
  } else if (count > 0) {
    count -= 1;
  }

  if (count === 0) {
    hideLoader();
  } else {
    showLoader();
  }
};
