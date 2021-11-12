const api_url_base = () => {
  // read webpack's 'mode' and alter the
  // api route prefix in production
  let current_env = process.env.NODE_ENV;

  let url = "";

  if (current_env == "production") {
    url = "/webmaps/cbm";
  }
  return url;
};

let BASE_PATH = api_url_base();

const PIN_URL = BASE_PATH + "/api/get-pins";
const TAG_URL = BASE_PATH + "/api/tags";
const FILTER_URL = BASE_PATH + "/api/filter-pins";
const ADD_PIN_URL = BASE_PATH + "/api/add-pin/";
const ADD_COMMENT_URL = BASE_PATH + "/api/add-comment/";
const ADD_USER_INFO_URL = BASE_PATH + "/api/add-user-info/";
const ADD_SURVEY_URL = BASE_PATH + "/api/add-longform-survey/";
const GO_TO_SURVEY_PAGE_URL = BASE_PATH + "/survey";
const GO_TO_DEMOGRAPHICS_PAGE_URL = BASE_PATH + "/demographics";
const GO_TO_THANKS_PAGE_URL = BASE_PATH + "/thanks";
const GO_TO_HOME_PAGE_URL = "./";

const get_data_from_api = async (map, url, inner_func) => {
  /*
   * Get a JSON response from the URL endpoint, and then
   * dump the map object and JSON response into the inner_func
   */
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.setRequestHeader("Access-Control-Allow-Origin", "*");
  request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      // retrieve the JSON from the response
      var json = JSON.parse(this.response);

      return inner_func(map, json);
    }
  };
  request.send();
};

export {
  get_data_from_api,
  PIN_URL,
  TAG_URL,
  FILTER_URL,
  ADD_PIN_URL,
  ADD_COMMENT_URL,
  ADD_USER_INFO_URL,
  ADD_SURVEY_URL,
  GO_TO_SURVEY_PAGE_URL,
  GO_TO_DEMOGRAPHICS_PAGE_URL,
  GO_TO_THANKS_PAGE_URL,
  GO_TO_HOME_PAGE_URL,
  BASE_PATH,
};
