import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faSpinner,
  faAlignLeft,
  faChessQueen,
  faAddressCard,
  faAlignJustify,
  faSearch,
  faFilter,
  faStar,
  faStarHalf
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faUserSecret,
  faSpinner,
  faAlignLeft,
  faChessQueen,
  faAddressCard,
  faAlignJustify,
  faSearch,
  faFilter,
  faStar,
  faStarHalf
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
