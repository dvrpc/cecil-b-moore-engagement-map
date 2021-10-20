import "mapbox-gl/dist/mapbox-gl.css";
import "./css/settings.css";
import "./css/map_style.css";
import "./css/alerts.css";
import "./css/box_overlays.css";
import "./css/mobile.css";

import { map } from "./js/map";
import { wire_click_logic } from "./js/click.js";
import { hover_setup } from "./js/hover.js";
import { setup_button_listeners } from "./js/click_main_buttons.js";
import {
  load_pins_from_api,
  load_study_area_from_geojson,
} from "./js/load_data";
import {
  set_display_to_id,
  set_mouse_to_normal,
  clear_selected_pin,
} from "./js/switches";
import { add_tag_options_to_map } from "./js/load_tags";

const CLUSTER_LEVEL = 15;

map.on("load", function () {
  load_pins_from_api(map);
  load_study_area_from_geojson(map);

  // Set up the click event & hover
  wire_click_logic(map);
  hover_setup(map);

  setup_button_listeners();

  add_tag_options_to_map(map);
});

document.getElementById("close-form").onclick = () => {
  set_mouse_to_normal(map);
  set_display_to_id("survey-form", "none");
  set_display_to_id("click-map-text", "none");
};
document.getElementById("close-details").onclick = () => {
  set_display_to_id("detail-form", "none");
  clear_selected_pin(map);
};

document.getElementById("close-info").onclick = () => {
  set_display_to_id("info-box", "none");
};
document.getElementById("close-filter").onclick = () => {
  set_display_to_id("filter-box", "none");
};

document.getElementById("about-button").onclick = () => {
  set_display_to_id("info-box", "inline");
  set_display_to_id("survey-form", "none");
  set_display_to_id("detail-form", "none");
  set_display_to_id("filter-box", "none");
  set_display_to_id("click-map-text", "none");
  set_mouse_to_normal(map);
};

document.getElementById("filter-button").onclick = () => {
  set_display_to_id("filter-box", "inline");
  set_display_to_id("info-box", "none");
  set_display_to_id("survey-form", "none");
  set_display_to_id("detail-form", "none");
  set_display_to_id("click-map-text", "none");
  set_mouse_to_normal(map);
  clear_selected_pin(map);
};

document.getElementById("logo-city").onclick = () => {
  window.open("http://www.phillyotis.com/", "_blank").focus();
};
document.getElementById("logo-dvrpc").onclick = () => {
  window.open("https://www.dvrpc.org/", "_blank").focus();
};
