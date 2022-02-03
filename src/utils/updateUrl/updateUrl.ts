const updateUrl = (mapping: string) => {
  window.location.assign(`${window.location.href}${mapping}`);
};

export default updateUrl;
