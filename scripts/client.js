// Sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 6000
});

// Autocomplete
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
  data: {
    "Aruba": null,
    "California": null,
    "Cancun": null,
    "Europe": null,
    "Hawaii": null,
    "Jamaica": null,
    "London": null,
    "Sahara": null,
    "Sydney": null,
    "Venice": null,
  }
});
