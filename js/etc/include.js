$(function () {
  const versionUpdate = new Date().getTime();
  $('#header-wrapper').load(
    `/main_project_vom13/baexang_front/include/header.html?_v=${versionUpdate}`
  );
  $('#mobile-overlay-wrapper').load(
    `/main_project_vom13/baexang_front/include/mobile-menus.html?_v=${versionUpdate}`
  );
  $('#footer-wrapper').load(
    `/main_project_vom13/baexang_front/include/footer.html?_v=${versionUpdate}`
  );
});
