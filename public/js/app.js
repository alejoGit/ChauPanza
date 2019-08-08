webpackJsonp([0],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/App.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_TopMenu_vue__ = __webpack_require__("./resources/assets/js/components/shared/TopMenu.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_TopMenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__shared_TopMenu_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_AppFooter_vue__ = __webpack_require__("./resources/assets/js/components/shared/AppFooter.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_AppFooter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shared_AppFooter_vue__);
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
	components: {
		'top-menu': __WEBPACK_IMPORTED_MODULE_0__shared_TopMenu_vue___default.a,
		'app-footer': __WEBPACK_IMPORTED_MODULE_1__shared_AppFooter_vue___default.a
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/control/Control.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_jwt_token__ = __webpack_require__("./resources/assets/js/helpers/jwt-token.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["d" /* mapState */])({
		user: function user(state) {
			return state.auth;
		}
	}),
	methods: {
		logout: function logout() {
			var _this = this;

			__WEBPACK_IMPORTED_MODULE_1__helpers_jwt_token__["a" /* default */].removeToken();
			this.$store.dispatch('unsetAuthUser').then(function () {
				_this.$noty.success('You are logged out');
				_this.$router.push({ name: 'login' });
			});
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/control/ControlBoard.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__("./resources/assets/js/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue__ = __webpack_require__("./resources/assets/js/components/loading/Loading.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
	components: {
		'loading': __WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue___default.a
	},
	computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["d" /* mapState */])({
		user: function user(state) {
			return state.auth;
		}
	}),
	data: function data() {
		return {
			loading: false,
			showModal: false,
			currentMonth: 2,
			arrControls: [],
			controlMonth1: null,
			currentControl: {},
			currentMonthSelect: 0,
			currentControlSelect: {},

			arrRoutineControls: [],
			routineControlMonth1: null,
			currentRoutineControl: null,

			arrFoodsControls: [],
			foodsControlMonth1: null,
			currentFoodControl: null,
			inputPeso: null,
			inputIndiceCadera: null,
			inputPerimetroAbdominal: null
		};
	},
	created: function created() {
		var _this = this;

		this.loading = true;
		axios.get(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* api */].getControls).then(function (res) {
			_this.loading = false;
			_this.arrControls = res.data.controls;
			_this.arrRoutineControls = res.data.routineControls;
			_this.arrFoodsControls = res.data.foodControls;

			console.log(res.data);

			_this.controlMonth1 = _this.findControl(1);
			_this.currentControl = _this.findControl(2);

			_this.routineControlMonth1 = _this.arrRoutineControls[0];
			_this.currentRoutineControl = _this.arrRoutineControls[1];

			_this.foodsControlMonth1 = _this.arrFoodsControls[0];
			_this.currentFoodControl = _this.arrFoodsControls[1];
		}).catch(function (err) {
			console.log(err);
			_this.loading = false;
		});
	},
	mounted: function mounted() {
		this.inputPeso = document.getElementById('inputPeso');
		this.inputIndiceCadera = document.getElementById('inputIndiceCadera');
		this.inputPerimetroAbdominal = document.getElementById('inputPerimetroAbdominal');
	},

	methods: {
		onClickModal: function onClickModal() {
			this.showModal = true;
		},
		onClickCloseModal: function onClickCloseModal() {
			this.showModal = false;
		},
		onClickNext: function onClickNext() {

			if (this.currentMonth < this.user.past_months) {
				this.currentMonth++;
				this.currentControl = this.findControl(this.currentMonth);
				this.currentRoutineControl = this.arrRoutineControls[this.currentMonth - 1];
				this.currentFoodControl = this.arrFoodsControls[this.currentMonth - 1];
			}
		},
		onClickBack: function onClickBack() {
			if (this.currentMonth > 2) {
				this.currentMonth--;
				this.currentControl = this.findControl(this.currentMonth);
				this.currentRoutineControl = this.arrRoutineControls[this.currentMonth - 1];
				this.currentFoodControl = this.arrFoodsControls[this.currentMonth - 1];
				//alert(JSON.stringify(this.currentPhotos))
			}
		},
		findControl: function findControl(month) {
			var controlAux = this.arrControls.find(function (control) {
				return control.month === month;
			});

			if (controlAux) {
				return controlAux;
			} else {
				return {};
			}
		},
		onChangeSelectMonth: function onChangeSelectMonth(event) {
			this.currentMonthSelect = parseInt(event.target.value);
			this.currentControlSelect = this.findControl(this.currentMonthSelect);
		},

		isBlank: function isBlank(str) {
			return !str || /^\s*$/.test(str);
		},
		onClickSaveControls: function onClickSaveControls() {
			var _this2 = this;

			if (this.currentMonthSelect <= 0) {
				alert('Porfavor seleccione el mes');
				return;
			}

			if (this.inputPeso.value !== undefined && this.inputIndiceCadera.value !== undefined && !this.isBlank(this.inputPeso.value) && !this.isBlank(this.inputIndiceCadera.value)) {
				this.loading = true;
				var postData = {
					month: this.currentMonthSelect,
					peso: this.inputPeso.value,
					indice_cadera: this.inputIndiceCadera.value,
					perimetro_abdominal: this.inputPerimetroAbdominal.value
				};
				axios.post(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* api */].setControls, postData).then(function (res) {
					_this2.loading = false;

					_this2.$noty.success('Se guardó la Información correctamente!');
					setTimeout(function () {
						window.location.reload();
					}, 2000);

					_this2.showModal = false;
					// this.$router.push({name: 'index'});
				}).catch(function (err) {

					err.response.data.error && _this2.$noty.error(err.response.data.error);

					err.response.data.errors ? _this2.setErrors(err.response.data.errors) : _this2.clearErrors();

					_this2.loading = false;
				});
			} else {
				alert("Todos los campos son obligatorios");
				return;
			}
		}
	},
	filters: {
		getScoreName: function getScoreName(value) {
			var scoreNames = [' ', 'Muy Fácil', 'Fácil', 'Moderada', 'Algo Dura', 'Dura', 'Muy Dura', 'Máxima'];
			value = parseInt(value);
			return scoreNames[value];
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/control/ControlFeeding.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__("./resources/assets/js/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue__ = __webpack_require__("./resources/assets/js/components/loading/Loading.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_v_calendar__ = __webpack_require__("./node_modules/v-calendar/lib/v-calendar.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_v_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_v_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_v_calendar_lib_v_calendar_min_css__ = __webpack_require__("./node_modules/v-calendar/lib/v-calendar.min.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_v_calendar_lib_v_calendar_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_v_calendar_lib_v_calendar_min_css__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







// Remember to setup calendar (passing in defaults if needed)
Object(__WEBPACK_IMPORTED_MODULE_3_v_calendar__["setupCalendar"])({
	firstDayOfWeek: 2 // Monday,
	// ...other defaults
});

/* harmony default export */ __webpack_exports__["default"] = ({
	computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["d" /* mapState */])({
		user: function user(state) {
			return state.auth;
		}
	}),
	components: {
		'loading': __WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue___default.a,
		'v-calendar': __WEBPACK_IMPORTED_MODULE_3_v_calendar__["Calendar"]
	},
	data: function data() {
		return {
			currentDate: '',
			currentFormatDate: '',
			currentTab: 0,
			modalIsActive: false,
			modalCalendarIsActive: false,
			loading: false,
			userFoods: [],
			arrFoods: [],
			// arrBreakfast:[],
			// arrLunch:[],
			// arrSnak:[],
			// arrDinner:[],
			currentFoods: [],
			currentFoodCategory: '',
			currentFoodName: '',
			currentFood: 0,
			topIsActive: false,
			middleIsActive: false,
			bottomIsActive: false,
			currentPyramid: null,
			pyramid1: [{ id: 1, name: "Consumo Reducido", value: "consumo_reducido", img1: '/img/piramide/1SP.png', img2: '/img/piramide/1SP-GRIS.png' }, { id: 2, name: "Proteínas y Grasas Buenas", value: "proteinas_grasas", img1: '/img/piramide/2S.png', img2: '/img/piramide/2S-GRIS.png' }, { id: 3, name: "Hidratos de carbono", value: "hidratos_carbono", img1: '/img/piramide/3S.png', img2: '/img/piramide/3S-GRIS.png' }],
			pyramid2: [{ id: 1, name: "Consumo Reducido", value: "consumo_reducido", img1: '/img/piramide/1SP.png', img2: '/img/piramide/1SP-GRIS.png' }, { id: 2, name: "Hidratos de carbono", value: "hidratos_carbono", img1: '/img/piramide/2P.png', img2: '/img/piramide/2P-GRIS.png' }, { id: 3, name: "Proteínas y Grasas Buenas", value: "proteinas_grasas", img1: '/img/piramide/3P.png', img2: '/img/piramide/3P-GRIS.png' }],
			attrs: [{
				key: 'today',
				highlight: {
					backgroundColor: '#280459'
					// Other properties are available too, like `height` & `borderRadius`
				},
				contentStyle: {
					color: '#fafafa'
				},
				dates: []

			}]

		};
	},
	created: function created() {
		var _this = this;

		this.loading = true;
		console.log(this.user);
		var data = {};
		axios.post(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* api */].getFoodsByDate, data).then(function (res) {
			_this.arrFoods = res.data.foods;
			_this.loading = false;
			_this.userFoods = res.data.todayUserFoods;
			_this.currentDate = res.data.currentDate;
			_this.currentFormatDate = res.data.formatDate;
			_this.attrs[0].dates = _this.currentDate;
			_this.setClassActiveItems();

			if (_this.user.diet_type === "S" || _this.user.diet_type === "s") {
				_this.currentPyramid = _this.pyramid1;
			}
			if (_this.user.diet_type === "P" || _this.user.diet_type === "p") {
				_this.currentPyramid = _this.pyramid2;
			}
		}).catch(function (err) {

			console.log(err);
			_this.loading = false;
		});
	},

	methods: {
		onClickTab: function onClickTab(tab) {
			this.currentTab = tab;
			this.setClassActiveItems();
		},
		getFoods: function getFoods(cat) {
			var arrAux = this.arrFoods;
			arrAux = arrAux.filter(function (food) {
				return food.category == cat;
			});
			this.currentFoods = arrAux;
		},
		getTypeName: function getTypeName() {
			var typeAux = '';
			if (this.currentTab == 0) typeAux = 'breakfast';
			if (this.currentTab == 1) typeAux = 'lunch';
			if (this.currentTab == 2) typeAux = 'snak';
			if (this.currentTab == 3) typeAux = 'dinner';
			return typeAux;
		},
		setClassActiveItems: function setClassActiveItems() {
			var typeAux = this.getTypeName();

			this.topIsActive = false;
			this.middleIsActive = false;
			this.bottomIsActive = false;
			for (var i = 0; i < this.userFoods.length; i++) {
				var foodAux = this.userFoods[i];
				if (foodAux.category === 'consumo_reducido' && foodAux.type === typeAux) {
					this.topIsActive = true;
				}
				if (foodAux.category === 'proteinas_grasas' && foodAux.type === typeAux) {
					if (this.user.diet_type == "P") {
						this.bottomIsActive = true;
					} else {
						this.middleIsActive = true;
					}
				}
				if (foodAux.category === 'hidratos_carbono' && foodAux.type === typeAux) {
					if (this.user.diet_type == "P") {
						this.middleIsActive = true;
					} else {
						this.bottomIsActive = true;
					}
				}
			}
		},
		selectCurrentFood: function selectCurrentFood(cat) {
			var typeAux = this.getTypeName();

			for (var i = 0; i < this.userFoods.length; i++) {
				var foodAux = this.userFoods[i];
				if (foodAux.category === cat && foodAux.type === typeAux) {
					this.currentFood = foodAux.food_id;
				}
			}
		},
		onClickItemPyramid: function onClickItemPyramid(category, name) {
			this.modalIsActive = true;
			this.currentFood = 0;
			this.currentFoodCategory = category;
			this.currentFoodName = name;
			this.getFoods(category);

			this.selectCurrentFood(category);
		},
		onClickCalendar: function onClickCalendar() {
			this.modalCalendarIsActive = true;
		},
		onClickCloseModal: function onClickCloseModal() {
			this.modalIsActive = false;
			this.modalCalendarIsActive = false;
		},
		getCurrentTabName: function getCurrentTabName() {
			if (this.currentTab === 0) return 'breakfast';
			if (this.currentTab === 1) return 'lunch';
			if (this.currentTab === 2) return 'snak';
			if (this.currentTab === 3) return 'dinner';
		},
		onClickChoose: function onClickChoose() {
			var _this2 = this;

			if (this.currentFood > 0) {
				var postData = {
					food_id: this.currentFood,
					type: this.getCurrentTabName(),
					date: this.currentDate
				};

				axios.post(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* api */].setFoodUserByDate, postData).then(function (res) {
					_this2.loading = false;
					console.log(res.data);
					if (res.data.status === 'ok') {
						_this2.userFoods = res.data.userFoods;
						_this2.modalIsActive = false;
						_this2.$noty.success('Se eligió el alimento correctamente!');

						if (_this2.currentFoodCategory === 'consumo_reducido') {
							_this2.topIsActive = true;
						}
						if (_this2.currentFoodCategory === 'proteinas_grasas') {
							if (_this2.user.diet_type == "P") {
								_this2.bottomIsActive = true;
							} else {
								_this2.middleIsActive = true;
							}
						}
						if (_this2.currentFoodCategory === 'hidratos_carbono') {
							if (_this2.user.diet_type == "P") {
								_this2.middleIsActive = true;
							} else {
								_this2.bottomIsActive = true;
							}
						}
					}
					//this.$router.push({name: 'index'});
				}).catch(function (err) {

					console.log(err);
					_this2.loading = false;
				});
			} else {
				this.$noty.error('Porfavor seleccione un alimento!');
			}
		},
		formatNumber: function formatNumber(num) {
			num = parseInt(num);
			if (num <= 9) {
				num = '0' + num;
			}
			return num;
		},
		onClickDay: function onClickDay(day) {
			var _this3 = this;

			this.loading = true;

			var stringDate = day.year + '-' + this.formatNumber(day.month) + '-' + this.formatNumber(day.day);
			this.currentDate = stringDate;
			var data = {
				date: this.currentDate
			};

			axios.post(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* api */].getFoodsByDate, data).then(function (res) {
				_this3.arrFoods = res.data.foods;
				_this3.loading = false;
				_this3.modalCalendarIsActive = false;
				_this3.userFoods = res.data.todayUserFoods;
				_this3.currentDate = res.data.currentDate;
				_this3.currentFormatDate = res.data.formatDate;
				_this3.attrs[0].dates = _this3.currentDate;
				_this3.setClassActiveItems();

				if (_this3.user.diet_type === "S" || _this3.user.diet_type === "s") {
					_this3.currentPyramid = _this3.pyramid1;
				}
				if (_this3.user.diet_type === "P" || _this3.user.diet_type === "p") {
					_this3.currentPyramid = _this3.pyramid2;
				}
			}).catch(function (err) {

				console.log(err);
				_this3.loading = false;
				_this3.modalCalendarIsActive = false;
			});
		}
	}

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/control/ControlHemogram.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//import {mapState} from 'vuex'

/* harmony default export */ __webpack_exports__["default"] = ({
	// computed: mapState({
	// 	user: state => state.auth
	// }),
	data: function data() {
		return {};
	},

	methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/control/ControlPhotos.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__("./resources/assets/js/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue__ = __webpack_require__("./resources/assets/js/components/loading/Loading.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
	components: {
		'loading': __WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue___default.a
	},
	computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["d" /* mapState */])({
		user: function user(state) {
			return state.auth;
		}
	}),
	data: function data() {
		return {
			loading: false,
			currentMonth: 2,
			currentPhotos: null,
			photos: []
		};
	},
	created: function created() {
		// EventBus.$emit('EVENT_ROUTE_NAME', {name:this.$route.name});
		this.loading = true;
		this.httpRequest();
	},

	methods: {
		generateArrPhotos: function generateArrPhotos(data) {
			var pastMonths = this.user.past_months + 1;
			var arrAux = [];
			if (pastMonths >= 1) {
				var _loop = function _loop(i) {
					var objAux = data.find(function (photo) {
						return photo.month == i + 1;
					});
					console.log(objAux);
					if (objAux) {
						arrAux[i] = objAux;
					} else {
						arrAux[i] = { id: i + 1, month: i + 1, photo_1: "", photo_2: "", photo_3: "", photo_4: "" };
					}
				};

				for (var i = 0; i < pastMonths; i++) {
					_loop(i);
				}
				return arrAux;
			}
		},
		httpRequest: function httpRequest() {
			var _this = this;

			axios.get(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* api */].getPhotos).then(function (res) {

				_this.loading = false;
				_this.photos = _this.generateArrPhotos(res.data);
				_this.currentPhotos = _this.photos[1];

				if (_this.$route.params.month) {
					_this.currentMonth = _this.$route.params.month;
					if (_this.currentMonth == 1) {
						_this.currentPhotos = _this.photos[1];
					} else {
						_this.currentPhotos = _this.photos.find(function (photo) {
							return photo.month == _this.currentMonth;
						});
					}
				}
			}).catch(function (err) {
				console.log(err);
				_this.loading = false;
			});
		},
		onClickNext: function onClickNext() {

			if (this.currentMonth < this.user.past_months) {
				this.currentMonth++;
				this.currentPhotos = this.photos[this.currentMonth - 1];
				//alert(JSON.stringify(this.currentPhotos))
			}
		},
		onClickBack: function onClickBack() {
			if (this.currentMonth > 2) {
				this.currentMonth--;
				this.currentPhotos = this.photos[this.currentMonth - 1];
				//alert(JSON.stringify(this.currentPhotos))
			}
		},
		getImageUrl: function getImageUrl(img, num) {
			if (img) {
				return '/images/photos/' + img;
			} else {
				if (num == 1) {
					return '/img/frente.jpg';
				}
				if (num == 2) {
					return '/img/perfil.jpg';
				}
				if (num == 3) {
					return '/img/espalda.jpg';
				}
				if (num == 4) {
					return '/img/ropa_critica.jpg';
				}
			}
		},
		onClickPhoto: function onClickPhoto(num) {
			if (this.currentPhotos) {
				var photoAux = this.currentPhotos['photo_' + num];
				if (photoAux.length <= 0) {
					this.$router.push({
						name: 'uploadPhoto',
						params: { month: this.currentMonth, photoNum: num }
					});
				}
			} else {
				this.$router.push({
					name: 'uploadPhoto',
					params: { month: this.currentMonth, photoNum: num }
				});
			}
		},
		onClickFirstPhoto: function onClickFirstPhoto(num) {
			// if(this.photos[0]){
			var photoAux = this.photos[0]['photo_' + num];
			if (photoAux.length <= 0) {
				this.$router.push({
					name: 'uploadPhoto',
					params: { month: 1, photoNum: num }
				});
			}
			// }else{
			// 	this.$router.push({
			// 		name: 'uploadPhoto',
			// 	 	params: { month: 1, photoNum: num },
			// 	})
			// }
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/control/ControlRoutines.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__("./resources/assets/js/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loading_Loading_vue__ = __webpack_require__("./resources/assets/js/components/loading/Loading.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loading_Loading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__loading_Loading_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_v_calendar__ = __webpack_require__("./node_modules/v-calendar/lib/v-calendar.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_v_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_v_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_v_calendar_lib_v_calendar_min_css__ = __webpack_require__("./node_modules/v-calendar/lib/v-calendar.min.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_v_calendar_lib_v_calendar_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_v_calendar_lib_v_calendar_min_css__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//import {mapState} from 'vuex'





// Remember to setup calendar (passing in defaults if needed)
Object(__WEBPACK_IMPORTED_MODULE_2_v_calendar__["setupCalendar"])({
	firstDayOfWeek: 2 // Monday,
	// ...other defaults
});

/* harmony default export */ __webpack_exports__["default"] = ({
	// computed: mapState({
	// 	user: state => state.auth
	// }),
	components: {
		'loading': __WEBPACK_IMPORTED_MODULE_1__loading_Loading_vue___default.a,
		'v-calendar': __WEBPACK_IMPORTED_MODULE_2_v_calendar__["Calendar"]
	},
	data: function data() {
		return {
			loading: false,
			modalIsActive: false,
			scores: [],
			indexScore: 0,
			currentScore: {},
			scoreNames: ['Muy Fácil', 'Fácil', 'Moderada', 'Algo Dura', 'Dura', 'Muy Dura', 'Máxima +10'],
			scoreImages: ['7-muy-facil.png', '6-facil.png', '5-moderada.png', '4-algo-dura.png', '3-dura.png', '2-muy-dura.png', '1-maxima.png'],
			currentScoreName: '',
			attrs: [{
				key: 'today',
				highlight: {
					backgroundColor: '#280459'
					// Other properties are available too, like `height` & `borderRadius`
				},
				contentStyle: {
					color: '#fafafa'
				},
				dates: []

			}]

		};
	},

	methods: {
		onClickNext: function onClickNext() {
			if (this.indexScore > 0) {
				this.indexScore--;
				this.currentScore = this.scores[this.indexScore];
				this.currentScoreName = this.scoreNames[this.currentScore.score - 1];
			}
		},
		onClickBack: function onClickBack() {
			if (this.indexScore < this.scores.length - 1) {
				this.indexScore++;
				this.currentScore = this.scores[this.indexScore];
				this.currentScoreName = this.scoreNames[this.currentScore.score - 1];
			}
		},
		onClickCalendar: function onClickCalendar() {
			this.modalIsActive = true;
		},
		onClickCloseModal: function onClickCloseModal() {
			this.modalIsActive = false;
		},
		setDatesArray: function setDatesArray() {
			var arrDates = [];
			for (var i = 0; i < this.scores.length; i++) {
				var date = this.scores[i].date.split(" ")[0];
				var year = parseInt(date.split("-")[0]);
				var month = parseInt(date.split("-")[1]) - 1;
				var day = parseInt(date.split("-")[2]);
				arrDates[i] = new Date(year, month, day);
			}
			this.attrs[0].dates = arrDates;
		},
		formatNumber: function formatNumber(num) {
			num = parseInt(num);
			if (num <= 9) {
				num = '0' + num;
			}
			return num;
		},
		onClickDay: function onClickDay(day) {
			var stringDate = day.year + '-' + this.formatNumber(day.month) + '-' + this.formatNumber(day.day) + ' ' + '00:00:00';
			for (var i = 0; i < this.scores.length; i++) {
				if (this.scores[i].date === stringDate) {
					this.indexScore = i;
					this.currentScore = this.scores[i];
					this.currentScoreName = this.scoreNames[this.currentScore.score - 1];
					this.modalIsActive = false;
					return;
				}
			}
		},
		getCurrentImage: function getCurrentImage() {
			var currentImg = this.scoreImages[this.currentScore.score - 1];
			return '/img/caras/' + currentImg;
		}
	},
	created: function created() {
		var _this = this;

		this.loading = true;
		axios.get(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* api */].getUserScores).then(function (res) {
			console.log(res.data);
			_this.loading = false;
			_this.scores = res.data;
			_this.currentScore = _this.scores[_this.indexScore];
			_this.currentScoreName = _this.scoreNames[_this.currentScore.score - 1];
			_this.setDatesArray();
			//this.routines = res.data.routines
		}).catch(function (err) {
			console.log("err");
			_this.loading = false;
		});
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/control/ControlWrapper.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/control/UploadPhoto.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__("./resources/assets/js/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue__ = __webpack_require__("./resources/assets/js/components/loading/Loading.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_plugin_load_script__ = __webpack_require__("./node_modules/vue-plugin-load-script/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






__WEBPACK_IMPORTED_MODULE_4_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_vue_plugin_load_script__["a" /* default */]);
/* harmony default export */ __webpack_exports__["default"] = ({
	components: {
		'loading': __WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue___default.a
	},
	computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["d" /* mapState */])({
		user: function user(state) {
			return state.auth;
		}
	}),
	data: function data() {
		return {
			loading: false,
			month: 0,
			photoNum: 0,
			photoName: '',
			photo: null,
			cropper: null
		};
	},
	created: function created() {
		this.month = this.$route.params.month;
		this.photoNum = this.$route.params.photoNum;

		if (!this.month || !this.photoNum) {
			this.$router.push({ name: 'controlPhotos' });
		}
		if (this.photoNum == 1) this.photoName = 'Frente';
		if (this.photoNum == 2) this.photoName = 'Pefil';
		if (this.photoNum == 3) this.photoName = 'Espalda';
		if (this.photoNum == 4) this.photoName = 'Ropa Critica';
	},
	mounted: function mounted() {
		var _this = this;

		var self = this;
		__WEBPACK_IMPORTED_MODULE_4_vue___default.a.loadScript("/assets/slim/slim.global.min.js").then(function () {

			var cropper = new Slim(document.getElementById('myCropper'), {
				ratio: '3:5',
				instantEdit: true,
				service: '/api/set-photo',
				push: true,
				uploadBase64: true,
				meta: {
					month: _this.month,
					photo_num: _this.photoNum,
					user_id: _this.user.id
				},
				label: '<div><i class="icon icon-upload"></i></div>Suelta tu imagen aquí',
				willSave: function willSave(data, ready) {
					ready(data);
					setTimeout(function () {
						self.$router.push({
							name: 'controlPhotos',
							params: { month: self.month }
						});
					}, 2000);
				}
			});
		}).catch(function () {});
	},

	methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/diagnostic/Diagnostic.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__("./resources/assets/js/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loading_Loading_vue__ = __webpack_require__("./resources/assets/js/components/loading/Loading.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loading_Loading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__loading_Loading_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_jwt_token__ = __webpack_require__("./resources/assets/js/helpers/jwt-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_bus__ = __webpack_require__("./resources/assets/js/event-bus.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
	components: {
		'loading': __WEBPACK_IMPORTED_MODULE_1__loading_Loading_vue___default.a
	},
	data: function data() {
		return {
			currentStep: 'step1',
			arrHealthHistory: [{ id: 1, name: "HIPERTENSIÓN", value: 'no' }, { id: 2, name: "HIPOTIROIDISMO", value: 'no' }, { id: 3, name: "SARCOPENIA", value: 'no' }, { id: 4, name: "DIABETES TIPO II", value: 'no' }, { id: 5, name: "HIPERCOLESTEROLEMIA", value: 'no' }, { id: 6, name: "OBESIDAD", value: 'no' }, { id: 7, name: "HIPERGLUCEMIA", value: 'no' }, { id: 8, name: "HÍGADO GRASO", value: 'no' }, { id: 9, name: "POLIQUISTOSIS", value: 'no' }, { id: 10, name: "HIPERINSULINEMIA", value: 'no' }, { id: 11, name: "MENOPAUSIA", value: 'no' }, { id: 12, name: "COLON IRRITABLE", value: 'no' }, { id: 13, name: "INFLAMACIÓN", value: 'no' }],
			physicalCondition: null,
			arrQuestions: [{
				id: 1,
				question: "ENTRENANDO: Durante el ejercicio",
				optionA: "Tiene dificultades para ejercitar, suele frenar y descansar durante el entrenamiento",
				optionB: "No tiene dificultades, lo disfruta"
			}, {
				id: 2,
				question: "LUEGO DE ENTRENAR",
				optionA: "Se siente cansado, con pocas energías",
				optionB: "Se siente renovado, con energías"
			}, {
				id: 3,
				question: "DIGESTIÓN: ¿Como suele digerir la comida?",
				optionA: "No suele tener problemas para digerir la comida, y puedo comer en cualquier horario",
				optionB: "Suele tener digestión lenta, y si come mucho por la noche, le suele caer mal"
			}, {
				id: 4,
				question: "ALIMENTACIÓN: que prefiere? Elija una opción",
				optionA: "Alimentos salados, condimentados",
				optionB: "Dulces, alimentos con azúcar"
			}, {
				id: 5,
				question: "GRASAS SATURADAS: Como se siente frente a una ingesta de grasas saturadas (papas fritas, panceta, hamburguesas, etc).",
				optionA: "Las tolera sin problemas",
				optionB: "No las tolera"
			}, {
				id: 6,
				question: "CALIDAD DE SUEÑO",
				optionA: "Duerme profundamente",
				optionB: "Suele tener sueño liviano"
			}, {
				id: 7,
				question: "CLIMA",
				optionA: "Prefiere el clima frío. No aguanta mucho el calor",
				optionB: " Prefiere el calor. No aguanta demasiado el frío"
			}, {
				id: 8,
				question: "BAÑO",
				optionA: "Sufre de tránsito lento, estreñimiento, etc",
				optionB: "No tienen problemas. Puede ir una vez o más al día"
			}],
			answers: { '1': null, '2': null, '3': null, '4': null, '5': null, '6': null, '7': null, '8': null },
			loading: false
		};
	},
	mounted: function mounted() {
		__WEBPACK_IMPORTED_MODULE_4__event_bus__["a" /* default */].$emit('EVENT_ROUTE_NAME', { name: this.$route.name });
		//EJEMPLO CARGAR LIBRERIA EXTERNA (fuera de laravel mix)
		var momentScript = document.createElement('script');
		momentScript.setAttribute('src', '/js/moment.js');
		document.head.appendChild(momentScript);
	},
	beforeMounted: function beforeMounted() {
		Vue.use(VeeValidate);
	},

	methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapActions */])(['setAuthUser']), {
		onClickStep: function onClickStep(val) {
			if (val == 'step1') {
				this.currentStep = 'step1';
			}
			if (val == 'step2') {
				if (this.currentStep == 'step1') {
					this.validateStep1();
				}
				if (this.currentStep == 'step3') {
					this.currentStep = 'step2';
				}
			}
			if (val == 'step3') {
				if (this.currentStep == 'step2') {
					this.validateStep2();
				}
			}
			if (val == 'step4') {
				if (this.currentStep == 'step3') {
					this.validateStep3();
				}
			}
		},
		scrollTo: function scrollTo(element) {
			window.scroll({
				behavior: 'smooth',
				left: 0,
				top: element.offsetTop - 100
			});
		},
		validateStep1: function validateStep1() {
			var self = this;
			self.currentStep = 'step2';
		},
		validateStep2: function validateStep2() {
			var self = this;
			if (!this.physicalCondition) {
				this.$noty.error("Porfavor ingrese su condición fisica");
			} else {
				self.currentStep = 'step3';
			}
		},
		validateStep3: function validateStep3() {
			var _this = this;

			var self = this;
			for (var key in this.answers) {
				var answerAux = this.answers[key];
				if (answerAux == null) {
					var element = document.getElementById('question_' + key);
					this.scrollTo(element);
					this.$noty.error("Todas las preguntas son obligatorias");
					return;
				}
			}
			console.log(JSON.stringify(this.arrHealthHistory));
			console.log(JSON.stringify(this.physicalCondition));
			console.log(JSON.stringify(this.answers));

			this.loading = true;
			var objAux = {
				health_history: JSON.stringify(this.arrHealthHistory),
				physical_condition: this.physicalCondition,
				answers: JSON.stringify(this.answers)

			};
			axios.post(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* api */].setDiagnostic, objAux).then(function (res) {
				_this.$noty.success('Diagnostico Exitoso!');
				_this.loading = false;
				//console.log(res.data)
				_this.$router.push({ name: 'objectives' });
			}).catch(function (err) {

				console.log(err.response);
				err.response.data.errors && _this.$noty.error(_this.processErrors(err.response.data.errors));
				_this.loading = false;
				// (err.response.data.errors)
				// 	? this.setErrors(err.response.data.errors)
				// 	: this.clearErrors();

			});
		}
	})
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/diagnostic/InitialPhotos.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__("./resources/assets/js/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("./resources/assets/js/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_Loading_vue__ = __webpack_require__("./resources/assets/js/components/loading/Loading.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_Loading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__loading_Loading_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_bus__ = __webpack_require__("./resources/assets/js/event-bus.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_jwt_token__ = __webpack_require__("./resources/assets/js/helpers/jwt-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_plugin_load_script__ = __webpack_require__("./node_modules/vue-plugin-load-script/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vue__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










__WEBPACK_IMPORTED_MODULE_7_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_6_vue_plugin_load_script__["a" /* default */]);
/* harmony default export */ __webpack_exports__["default"] = ({
	components: {
		'loading': __WEBPACK_IMPORTED_MODULE_3__loading_Loading_vue___default.a
	},
	computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["d" /* mapState */])({
		user: function user(state) {
			return state.auth;
		}
	}),
	data: function data() {
		return {
			currentStep: 1,
			loading: false
		};
	},
	mounted: function mounted() {
		var _this = this;

		__WEBPACK_IMPORTED_MODULE_4__event_bus__["a" /* default */].$emit('EVENT_ROUTE_NAME', { name: this.$route.name });
		var self = this;
		__WEBPACK_IMPORTED_MODULE_7_vue___default.a.loadScript("/assets/slim/slim.global.min.js").then(function () {

			var cropper = new Slim(document.getElementById('myCropper'), {
				ratio: '3:5',
				instantEdit: true,
				service: '/api/set-photo',
				push: true,
				uploadBase64: true,
				meta: {
					month: 1,
					photo_num: 1,
					user_id: _this.user.id
				},
				label: '<img src="/img/frente.jpg"><div><i class="icon icon-upload"></i></div>Suelta tu imagen aquí',
				willSave: function willSave(data, ready) {
					ready(data);
					self.currentStep = 2;
				}
			});

			cropper = new Slim(document.getElementById('myCropper2'), {
				ratio: '3:5',
				instantEdit: true,
				service: '/api/set-photo',
				push: true,
				uploadBase64: true,
				meta: {
					month: 1,
					photo_num: 2,
					user_id: _this.user.id
				},
				label: '<img src="/img/perfil.jpg"><div><i class="icon icon-upload"></i></div>Suelta tu imagen aquí',
				willSave: function willSave(data, ready) {
					ready(data);
					self.currentStep = 3;
				}
			});

			cropper = new Slim(document.getElementById('myCropper3'), {
				ratio: '3:5',
				instantEdit: true,
				service: '/api/set-photo',
				push: true,
				uploadBase64: true,
				meta: {
					month: 1,
					photo_num: 3,
					user_id: _this.user.id
				},
				label: '<img src="/img/espalda.jpg"><div><i class="icon icon-upload"></i></div>Suelta tu imagen aquí',
				willSave: function willSave(data, ready) {
					ready(data);
					self.currentStep = 4;
				}
			});

			cropper = new Slim(document.getElementById('myCropper4'), {
				ratio: '3:5',
				instantEdit: true,
				service: '/api/set-photo',
				push: true,
				uploadBase64: true,
				meta: {
					month: 1,
					photo_num: 4,
					user_id: _this.user.id
				},
				label: '<img src="/img/ropa_critica.jpg"><div><i class="icon icon-upload"></i></div>Suelta tu imagen aquí',
				willSave: function willSave(data, ready) {
					ready(data);
					self.$noty.success('Fotos ingresadas correctamente!');
					self.$router.push({ name: "index" });
				}
			});
		}).catch(function () {});
	},
	beforeMounted: function beforeMounted() {
		__WEBPACK_IMPORTED_MODULE_7_vue___default.a.use(VeeValidate);
	},

	methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapActions */])(['setAuthUser']), {
		onClickStep: function onClickStep(val) {
			if (val == 1) {
				this.currentStep = 1;
			}
			if (val == 2) {
				this.currentStep = 2;
			}
			if (val == 3) {
				this.currentStep = 3;
			}
			if (val == 4) {
				this.currentStep = 4;
			}
		},
		onClickSkip: function onClickSkip() {
			// this.$router.push({name:"index"})
			window.location.href = "/";
		}
	})
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/feeding/Feeding.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//import {mapState} from 'vuex'

/* harmony default export */ __webpack_exports__["default"] = ({
	// computed: mapState({
	// 	user: state => state.auth
	// }),

	methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/feeding/FeedingForbidden.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//import {mapState} from 'vuex'

/* harmony default export */ __webpack_exports__["default"] = ({
	// computed: mapState({
	// 	user: state => state.auth
	// }),
	data: function data() {
		return {};
	},

	methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/feeding/FeedingGuide.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__("./resources/assets/js/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue__ = __webpack_require__("./resources/assets/js/components/loading/Loading.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
	computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["d" /* mapState */])({
		user: function user(state) {
			return state.auth;
		}
	}),
	components: {
		'loading': __WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue___default.a
	},
	data: function data() {
		return {
			currentTab: 0,
			modalIsActive: false,
			loading: false,
			userFoods: [],
			arrFoods: [],
			// arrBreakfast:[],
			// arrLunch:[],
			// arrSnak:[],
			// arrDinner:[],
			currentFoods: [],
			currentFoodCategory: '',
			currentFoodName: '',
			currentFood: 0,
			topIsActive: false,
			middleIsActive: false,
			bottomIsActive: false,
			currentPyramid: null,
			pyramid1: [{ id: 1, name: "Consumo Reducido", value: "consumo_reducido", img1: '/img/piramide/1SP.png', img2: '/img/piramide/1SP-GRIS.png' }, { id: 2, name: "Proteínas y Grasas Buenas", value: "proteinas_grasas", img1: '/img/piramide/2S.png', img2: '/img/piramide/2S-GRIS.png' }, { id: 3, name: "Hidratos de carbono", value: "hidratos_carbono", img1: '/img/piramide/3S.png', img2: '/img/piramide/3S-GRIS.png' }],
			pyramid2: [{ id: 1, name: "Consumo Reducido", value: "consumo_reducido", img1: '/img/piramide/1SP.png', img2: '/img/piramide/1SP-GRIS.png' }, { id: 2, name: "Hidratos de carbono", value: "hidratos_carbono", img1: '/img/piramide/2P.png', img2: '/img/piramide/2P-GRIS.png' }, { id: 3, name: "Proteínas y Grasas Buenas", value: "proteinas_grasas", img1: '/img/piramide/3P.png', img2: '/img/piramide/3P-GRIS.png' }]

		};
	},
	created: function created() {
		var _this = this;

		this.loading = true;
		console.log(this.user);
		axios.get(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* api */].getFoods).then(function (res) {
			_this.arrFoods = res.data.foods;
			_this.loading = false;
			_this.userFoods = res.data.todayUserFoods;
			_this.setClassActiveItems();

			if (_this.user.diet_type === "S" || _this.user.diet_type === "s") {
				_this.currentPyramid = _this.pyramid1;
			}
			if (_this.user.diet_type === "P" || _this.user.diet_type === "p") {
				_this.currentPyramid = _this.pyramid2;
			}
		}).catch(function (err) {
			console.log("err");
			_this.loading = false;
		});
	},

	methods: {
		onClickTab: function onClickTab(tab) {
			this.currentTab = tab;
			this.setClassActiveItems();
		},
		getFoods: function getFoods(cat) {
			var arrAux = this.arrFoods;
			arrAux = arrAux.filter(function (food) {
				return food.category == cat;
			});
			this.currentFoods = arrAux;
		},
		getTypeName: function getTypeName() {
			var typeAux = '';
			if (this.currentTab == 0) typeAux = 'breakfast';
			if (this.currentTab == 1) typeAux = 'lunch';
			if (this.currentTab == 2) typeAux = 'snak';
			if (this.currentTab == 3) typeAux = 'dinner';
			return typeAux;
		},
		setClassActiveItems: function setClassActiveItems() {
			var typeAux = this.getTypeName();

			this.topIsActive = false;
			this.middleIsActive = false;
			this.bottomIsActive = false;
			for (var i = 0; i < this.userFoods.length; i++) {
				var foodAux = this.userFoods[i];
				if (foodAux.category === 'consumo_reducido' && foodAux.type === typeAux) {
					this.topIsActive = true;
				}
				if (foodAux.category === 'proteinas_grasas' && foodAux.type === typeAux) {
					if (this.user.diet_type == "P") {
						this.bottomIsActive = true;
					} else {
						this.middleIsActive = true;
					}
				}
				if (foodAux.category === 'hidratos_carbono' && foodAux.type === typeAux) {
					if (this.user.diet_type == "P") {
						this.middleIsActive = true;
					} else {
						this.bottomIsActive = true;
					}
				}
			}
		},
		selectCurrentFood: function selectCurrentFood(cat) {
			var typeAux = this.getTypeName();

			for (var i = 0; i < this.userFoods.length; i++) {
				var foodAux = this.userFoods[i];
				if (foodAux.category === cat && foodAux.type === typeAux) {
					this.currentFood = foodAux.food_id;
				}
			}
		},
		onClickItemPyramid: function onClickItemPyramid(category, name) {
			this.modalIsActive = true;
			this.currentFood = 0;
			this.currentFoodCategory = category;
			this.currentFoodName = name;
			this.getFoods(category);

			this.selectCurrentFood(category);
		},
		onClickCloseModal: function onClickCloseModal() {
			this.modalIsActive = false;
		},
		getCurrentTabName: function getCurrentTabName() {
			if (this.currentTab === 0) return 'breakfast';
			if (this.currentTab === 1) return 'lunch';
			if (this.currentTab === 2) return 'snak';
			if (this.currentTab === 3) return 'dinner';
		},
		onClickChooseForToday: function onClickChooseForToday() {
			var _this2 = this;

			if (this.currentFood > 0) {
				var postData = {
					food_id: this.currentFood,
					type: this.getCurrentTabName()
				};

				axios.post(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* api */].setFoodUser, postData).then(function (res) {
					_this2.loading = false;
					console.log(res.data);
					if (res.data.status === 'ok') {
						_this2.userFoods = res.data.userFoods;
						_this2.modalIsActive = false;
						_this2.$noty.success('Se eligió el alimento correctamente!');

						if (_this2.currentFoodCategory === 'consumo_reducido') {
							_this2.topIsActive = true;
						}
						if (_this2.currentFoodCategory === 'proteinas_grasas') {
							if (_this2.user.diet_type == "P") {
								_this2.bottomIsActive = true;
							} else {
								_this2.middleIsActive = true;
							}
						}
						if (_this2.currentFoodCategory === 'hidratos_carbono') {
							if (_this2.user.diet_type == "P") {
								_this2.middleIsActive = true;
							} else {
								_this2.bottomIsActive = true;
							}
						}
					}
					//this.$router.push({name: 'index'});
				}).catch(function (err) {

					console.log(err);
					_this2.loading = false;
				});
			} else {
				this.$noty.error('Porfavor seleccione un alimento!');
			}
		}
	}

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/feeding/FeedingIndications.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__("./resources/assets/js/config.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["d" /* mapState */])({
		user: function user(state) {
			return state.auth;
		}
	}),
	data: function data() {
		return {
			// title:'',
			// body:'',
			// image:'',
		};
	},

	// created(){
	// 	this.loading= true
	// 	console.log(this.user)
	// 	axios.get(api.getUserIndications).then(res => {
	// 		console.log(res.data)
	// 		this.loading= false
	// 		this.title = res.data.title
	// 		this.body = res.data.body
	// 		this.image = '/images/feeding_extras/'+res.data.image

	// 	})
	// 	.catch(err => {
	// 		console.log("err")
	// 		this.loading= false
	// 	});
	// },
	methods: {
		onClickTab: function onClickTab(tab) {
			this.currentTab = tab;
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/feeding/FeedingPortions.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//import {mapState} from 'vuex'

/* harmony default export */ __webpack_exports__["default"] = ({
	// computed: mapState({
	// 	user: state => state.auth
	// }),
	data: function data() {
		return {};
	},

	methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/feeding/FeedingSingle.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//import {mapState} from 'vuex'

/* harmony default export */ __webpack_exports__["default"] = ({
	// computed: mapState({
	// 	user: state => state.auth
	// }),
	data: function data() {
		return {
			currentTab: 0
		};
	},

	methods: {
		onClickTab: function onClickTab(tab) {
			this.currentTab = tab;
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/feeding/FeedingWrapper.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/home/Home.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_jwt_token__ = __webpack_require__("./resources/assets/js/helpers/jwt-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_bus__ = __webpack_require__("./resources/assets/js/event-bus.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("./resources/assets/js/config.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
	computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["d" /* mapState */])({
		user: function user(state) {
			return state.auth;
		}
	}),
	data: function data() {
		return {
			// arrVideos:[],
			userIsFree: true
		};
	},
	created: function created() {
		if (this.user.status == 'premium' && this.user.level <= 0) {
			this.$router.push({ name: 'diagnostic' });
		}
	},
	mounted: function mounted() {
		__WEBPACK_IMPORTED_MODULE_2__event_bus__["a" /* default */].$emit('EVENT_ROUTE_NAME', { name: this.$route.name });
		if (this.user.status == 'premium') {
			this.userIsFree = false;
		}
	},
	beforeDestroy: function beforeDestroy() {
		__WEBPACK_IMPORTED_MODULE_2__event_bus__["a" /* default */].$emit('EVENT_ROUTE_NAME', { name: "" });
	},

	methods: {
		logout: function logout() {
			var _this = this;

			__WEBPACK_IMPORTED_MODULE_1__helpers_jwt_token__["a" /* default */].removeToken();
			this.$store.dispatch('unsetAuthUser').then(function () {
				_this.$noty.success('Gracias, te esperamos de vuelta');
				_this.$router.push({ name: 'login' });
			});
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/loading/Loading.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
	props: ['message']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/login/Login.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_LoginForm_vue__ = __webpack_require__("./resources/assets/js/components/login/LoginForm.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_LoginForm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__login_LoginForm_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_jwt_token__ = __webpack_require__("./resources/assets/js/helpers/jwt-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({

	components: {
		'login-form': __WEBPACK_IMPORTED_MODULE_0__login_LoginForm_vue___default.a
	},
	methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapActions */])(['setAuthUser']), {
		loginSuccess: function loginSuccess(data) {
			__WEBPACK_IMPORTED_MODULE_1__helpers_jwt_token__["a" /* default */].setToken(data.token);
			this.setAuthUser(data.user);
			this.$router.push({ name: 'index' });
		}
	})
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/login/LoginForm.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__("./resources/assets/js/config.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			loading: false,
			form: {
				email: 'alejo@gmail.com',
				password: null
			},
			error: {
				email: null,
				password: null
			}
		};
	},

	methods: {
		login: function login() {
			var _this = this;

			this.$validator.validateAll().then(function (result) {
				if (result) {
					_this.loading = true;

					axios.post(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* api */].login, _this.form).then(function (res) {
						_this.loading = false;
						_this.$noty.success('Bienvenido!');
						_this.$emit('loginSuccess', res.data);
					}).catch(function (err) {

						err.response.data.error && _this.$noty.error(err.response.data.error);

						err.response.data.errors ? _this.setErrors(err.response.data.errors) : _this.clearErrors();

						_this.loading = false;
					});

					return;
				}

				//alert('Correct them errors!');
			});
		},
		setErrors: function setErrors(errors) {
			this.error.email = errors.email ? errors.email[0] : null;
			this.error.password = errors.password ? errors.password[0] : null;
		},
		clearErrors: function clearErrors() {
			this.error.email = null;
			this.error.password = null;
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/objectives/Objectives.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__("./resources/assets/js/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loading_Loading_vue__ = __webpack_require__("./resources/assets/js/components/loading/Loading.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loading_Loading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__loading_Loading_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_jwt_token__ = __webpack_require__("./resources/assets/js/helpers/jwt-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_bus__ = __webpack_require__("./resources/assets/js/event-bus.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
	components: {
		'loading': __WEBPACK_IMPORTED_MODULE_1__loading_Loading_vue___default.a
	},
	computed: Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["d" /* mapState */])({
		user: function user(state) {
			return state.auth;
		}
	}),
	data: function data() {
		return {
			currentStep: 'step1',
			objective1: false,
			objective2: false,
			objective3: false,
			showModal: false,
			arrBodyParts: [{ id: 1, name: 'Abdomen', selected: false, value: 'abdomen', partsNumber: 3, imgMan: '/img/siluetas/abdomen-hombre.png', imgWoman: '/img/siluetas/abdomen-mujer.png' }, { id: 2, name: 'Piernas', selected: false, value: 'piernas', partsNumber: 4, imgMan: '/img/siluetas/piernas-hombre.png', imgWoman: '/img/siluetas/piernas-mujer.png' }, { id: 3, name: 'Glúteos', selected: false, value: 'gluteos', partsNumber: 2, imgMan: '/img/siluetas/gluteos-hombre.png', imgWoman: '/img/siluetas/gluteos-mujer.png' }, { id: 4, name: 'Espalda', selected: false, value: 'brazos_pecho', partsNumber: 2, imgMan: '/img/siluetas/espalda-hombre.png', imgWoman: '/img/siluetas/espalda-mujer.png' }, { id: 5, name: 'Pecho', selected: false, value: 'brazos_pecho', partsNumber: 1, imgMan: '/img/siluetas/pecho-hombre.png', imgWoman: '/img/siluetas/pecho-mujer.png' }, { id: 6, name: 'Brazos', selected: false, value: 'brazos_pecho', partsNumber: 3, imgMan: '/img/siluetas/brazos-hombre.png', imgWoman: '/img/siluetas/brazos-mujer.png' }],
			currentBodyPart: null,
			arrLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
			arrHemogram: [{ id: 1, name: 'LDL', value: '' }, { id: 1, name: 'Triglicéridos', value: '' }, { id: 1, name: 'Glucemia am (ayunas)', value: '' }, { id: 1, name: 'Hemoglobina Glucosilada', value: '' }, { id: 1, name: 'Insulina am (ayunas)', value: '' }, { id: 1, name: 'Proteína C Reactiva Ultrasensible', value: '' }, { id: 1, name: 'TSH', value: '' }, { id: 1, name: 'T4 Libre', value: '' }, { id: 1, name: 'T3 Libre', value: '' }, { id: 1, name: 'Cortisol am (ayunas)', value: '' }, { id: 1, name: 'Leptina', value: '' }, { id: 1, name: 'Grehalina', value: '' }],
			loading: false
		};
	},
	mounted: function mounted() {
		__WEBPACK_IMPORTED_MODULE_4__event_bus__["a" /* default */].$emit('EVENT_ROUTE_NAME', { name: this.$route.name });
		//EJEMPLO CARGAR LIBRERIA EXTERNA (fuera de laravel mix)
		var momentScript = document.createElement('script');
		momentScript.setAttribute('src', '/js/moment.js');
		document.head.appendChild(momentScript);
	},
	beforeMounted: function beforeMounted() {
		Vue.use(VeeValidate);
	},

	methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapActions */])(['setAuthUser']), {
		onClickStep: function onClickStep(val) {
			if (val == 'step1') {
				this.currentStep = 'step1';
			}
			if (val == 'step2') {
				this.currentStep = 'step2';
			}
			if (val == 'step3') {
				this.currentStep = 'step3';
			}
			if (val == 'step4') {
				this.currentStep = 'step4';
			}
		},
		scrollTo: function scrollTo(element) {
			window.scroll({
				behavior: 'smooth',
				left: 0,
				top: element.offsetTop - 100
			});
		},
		getObjectivesValue: function getObjectivesValue() {
			var valAux = "";
			if (this.objective1) {
				valAux += '1';
			} else {
				valAux += '0';
			}
			if (this.objective2) {
				valAux += '1';
			} else {
				valAux += '0';
			}
			if (this.objective3) {
				valAux += '1';
			} else {
				valAux += '0';
			}
			return valAux;
		},
		sendObjectives: function sendObjectives() {
			var _this = this;

			this.loading = true;
			var arrPartsAux = [];
			for (var i = 0; i < this.arrBodyParts.length; i++) {
				if (this.arrBodyParts[i].selected) {
					arrPartsAux.push(this.arrBodyParts[i].value);
				}
			}
			arrPartsAux = arrPartsAux.filter(function (item, pos) {
				return arrPartsAux.indexOf(item) == pos;
			});

			var objAux = {
				objectives: this.getObjectivesValue(),
				body_parts: arrPartsAux,
				hemogram: JSON.stringify(this.arrHemogram),
				objective1: this.objective1,
				objective2: this.objective2,
				objective3: this.objective3
				//console.log(objAux)
			};axios.post(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* api */].setObjectives, objAux).then(function (res) {
				_this.$noty.success('Selección de objetivos completada!');
				_this.setAuthUser(res.data);
				_this.loading = false;
				console.log(res.data);
				_this.$router.push({ name: 'initialPhotos' });
			}).catch(function (err) {

				console.log(err.response);
				err.response.data.errors && _this.$noty.error(_this.processErrors(err.response.data.errors));
				_this.loading = false;
				// (err.response.data.errors)
				// 	? this.setErrors(err.response.data.errors)
				// 	: this.clearErrors();

			});
		},
		onClickNextStep1: function onClickNextStep1() {

			if (this.getObjectivesValue() == '000') {
				this.$noty.error("Porfavor seleccione al menos un objetivo");
			} else {
				if (this.objective1) {
					this.currentStep = 'step2';
				} else {
					if (this.objective2) {
						this.currentStep = 'step3';
					} else {
						if (this.objective3) {
							this.currentStep = 'step4';
						}
					}
				}
			}
		},
		validateBodyParts: function validateBodyParts() {
			var count = 0;
			for (var i = 0; i < this.arrBodyParts.length; i++) {
				if (this.arrBodyParts[i].selected) count++;
			}
			if (count > 0) {
				return true;
			} else {
				return false;
			}
		},
		onClickNextStep2: function onClickNextStep2() {
			if (this.objective2) {
				if (this.validateBodyParts()) {
					this.currentStep = 'step3';
				} else {
					this.$noty.error("Seleccione al menos una parte del cuerpo");
				}
			} else {
				if (this.objective3) {
					this.currentStep = 'step4';
				} else {
					if (this.validateBodyParts()) {
						this.sendObjectives();
					} else {
						this.$noty.error("Seleccione al menos una parte del cuerpo");
					}
				}
			}
		},
		onClickNextStep3: function onClickNextStep3() {
			if (this.objective3) {
				this.currentStep = 'step4';
			} else {
				this.sendObjectives();
			}
		},
		closeModal: function closeModal() {
			this.showModal = false;
			this.currentBodyPart = null;
		},
		onChangeCheckboxBodyPart: function onChangeCheckboxBodyPart(id) {
			this.currentBodyPart = this.arrBodyParts.find(function (bodyPart) {
				return bodyPart.id == id;
			});
			this.showModal = this.currentBodyPart.selected;
		}
	})
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/plans/Plans.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__("./resources/assets/js/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loading_Loading_vue__ = __webpack_require__("./resources/assets/js/components/loading/Loading.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loading_Loading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__loading_Loading_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//import {mapState} from 'vuex'


/* harmony default export */ __webpack_exports__["default"] = ({
	// computed: mapState({
	// 	user: state => state.auth
	// }),
	components: {
		'loading': __WEBPACK_IMPORTED_MODULE_1__loading_Loading_vue___default.a
	},
	data: function data() {
		return {
			loading: false
		};
	},

	methods: {
		onClickPlanButton: function onClickPlanButton(planId) {
			var _this = this;

			this.loading = true;
			var postData = {
				plan_id: planId
			};
			axios.post(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* api */].postUrlUserPlan, postData).then(function (res) {
				_this.loading = false;
				//window.location.href = res.data
				if (res.data.status == 'error') {
					console.log("Plan Invalido");
					return;
				}

				window.location.href = res.data.url;
			}).catch(function (err) {

				console.log(err);

				_this.loading = false;
			});
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/profile/Profile.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["d" /* mapState */])({
		user: function user(state) {
			return state.auth;
		}
	}),

	filters: {
		formatBirthdate: function formatBirthdate(value) {
			var formatted = value.split(' ')[0];
			return formatted;
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/profile/ProfileWrapper.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/profile/edit-password/EditPassword.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EditPasswordForm_vue__ = __webpack_require__("./resources/assets/js/components/profile/edit-password/EditPasswordForm.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EditPasswordForm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__EditPasswordForm_vue__);
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	components: {
		'edit-password-form': __WEBPACK_IMPORTED_MODULE_0__EditPasswordForm_vue___default.a
	},
	methods: {
		updateSuccess: function updateSuccess() {
			this.$router.push({ name: 'profile' });
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/profile/edit-password/EditPasswordForm.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__("./resources/assets/js/config.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			loading: false,
			form: {
				new_password: '',
				confirm_new_password: ''
			},
			error: {
				new_password: '',
				confirm_new_password: ''
			}
		};
	},

	methods: {
		updatePassword: function updatePassword() {
			var _this = this;

			// uncomment the following 2 lines in your app
			this.$noty.info('Edit Password is disabled for demo purpose');
			return;

			this.loading = true;
			axios.post(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* api */].updateUserPassword, this.form).then(function (res) {
				_this.loading = false;
				_this.$noty.success('Password updated');
				_this.$emit('updateSuccess');
			}).catch(function (err) {
				err.response.data.error && _this.$noty.error(err.response.data.error);

				err.response.data.errors ? _this.setErrors(err.response.data.errors) : _this.clearErrors();

				_this.loading = false;
			});
		},
		setErrors: function setErrors(errors) {
			this.error.new_password = errors.new_password ? errors.new_password[0] : null;
			this.error.confirm_new_password = errors.confirm_new_password ? errors.confirm_new_password[0] : null;
		},
		clearErrors: function clearErrors() {
			this.error.new_password = null;
			this.error.confirm_new_password = null;
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/profile/edit-profile/EditProfile.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__("./resources/assets/js/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue__ = __webpack_require__("./resources/assets/js/components/loading/Loading.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
	components: {
		'loading': __WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue___default.a
	},
	computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["d" /* mapState */])({
		user: function user(state) {
			return state.auth;
		}
	}),
	data: function data() {
		var _ref;

		return _ref = {
			isValidForm: false,
			email: '',
			nombre: '',
			apellido: '',
			sexo: '',
			dia: '',
			mes: '',
			año: '',
			peso: '',
			altura: ''
		}, _defineProperty(_ref, 'email', ''), _defineProperty(_ref, 'password', ''), _defineProperty(_ref, 'confirmacionPassword', ''), _defineProperty(_ref, 'aceptarTerminos', false), _defineProperty(_ref, 'showInvalidDateError', false), _defineProperty(_ref, 'loading', false), _ref;
	},
	mounted: function mounted() {
		this.email = this.user.email;
		this.nombre = this.user.profile.name;
		this.apellido = this.user.profile.last_name;
		this.sexo = this.user.profile.gender;
		this.dia = this.user.profile.birthdate.split(' ')[0].split('-')[2];
		this.mes = this.user.profile.birthdate.split(' ')[0].split('-')[1];
		this.año = this.user.profile.birthdate.split(' ')[0].split('-')[0];
		this.peso = this.user.profile.weight;
		this.altura = this.user.profile.height;

		var momentScript = document.createElement('script');
		momentScript.setAttribute('src', '/js/moment.js');
		document.head.appendChild(momentScript);
	},

	methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapActions */])(['setAuthUser']), {
		onChangeDate: function onChangeDate() {
			this.showInvalidDateError = false;
		},
		sendUpdateRequest: function sendUpdateRequest() {
			var _this = this;

			this.loading = true;
			var objAux = {
				name: this.nombre,
				last_name: this.apellido,
				birthdate: this.año + '-' + this.mes + '-' + this.dia,
				weight: this.peso,
				height: this.altura,
				email: this.email,
				gender: this.sexo

			};

			axios.post(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* api */].updateUserProfile, objAux).then(function (res) {
				_this.$noty.success('Se actualizó el prefil correctamente!');
				_this.loading = false;
				//this.loginSuccess(res.data);
				console.log(res.data);
				_this.setAuthUser(res.data.newUser);
			}).catch(function (err) {

				console.log(err);
				_this.loading = false;
				// (err.response.data.errors)
				// 	? this.setErrors(err.response.data.errors)
				// 	: this.clearErrors();

			});
		},
		onClickSave: function onClickSave() {
			var _this2 = this;

			var self = this;
			var results = Promise.all([this.$validator.validate('email'), this.$validator.validate('nombre'), this.$validator.validate('apellido'),
			// this.$validator.validate('fechaNacimiento'),
			this.$validator.validate('sexo'), this.$validator.validate('dia'), this.$validator.validate('año'), this.$validator.validate('peso'), this.$validator.validate('altura')]).then(function (res) {
				var isValid = true;
				for (var i = 0; i < res.length; i++) {
					if (res[i] == false) {
						isValid = false;
					}
				}

				var dateAux = moment(_this2.año + _this2.mes + _this2.dia);
				if (!dateAux.isValid()) {
					isValid = false;
					_this2.showInvalidDateError = true;
				}

				if (isValid) {
					_this2.sendUpdateRequest();
				} else {
					_this2.$noty.error("Porfavor revise los campos");
				}
			});
		}
	})
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/register/FreeRegister.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__("./resources/assets/js/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__("./resources/assets/js/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue__ = __webpack_require__("./resources/assets/js/components/loading/Loading.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_jwt_token__ = __webpack_require__("./resources/assets/js/helpers/jwt-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
	components: {
		'loading': __WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue___default.a
	},
	data: function data() {
		return {
			siteName: __WEBPACK_IMPORTED_MODULE_0__config__["b" /* siteName */],
			currentStep: 'step1',
			nombre: '',
			apellido: '',
			sexo: '',
			dia: '',
			mes: '',
			año: '',
			peso: '',
			altura: '',
			email: '',
			password: '',
			confirmacionPassword: '',
			aceptarTerminos: false,
			showInvalidDateError: false,
			loading: false
		};
	},
	mounted: function mounted() {
		//EJEMPLO CARGAR LIBRERIA EXTERNA (fuera de laravel mix)
		var momentScript = document.createElement('script');
		momentScript.setAttribute('src', '/js/moment.js');
		document.head.appendChild(momentScript);
	},
	beforeMounted: function beforeMounted() {
		Vue.use(VeeValidate);
	},

	methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["b" /* mapActions */])(['setAuthUser']), {
		onClickStep: function onClickStep(val) {
			if (val == 'step1') {
				this.currentStep = 'step1';
			}
			if (val == 'step2') {
				if (this.currentStep == 'step1') {
					this.validateStep1();
				}
				if (this.currentStep == 'step3') {
					this.currentStep = 'step2';
				}
			}
			if (val == 'step3') {
				if (this.currentStep == 'step2') {
					this.validateStep2();
				}
			}
		},
		validateStep1: function validateStep1() {
			var _this = this;

			var self = this;
			var results = Promise.all([this.$validator.validate('nombre'), this.$validator.validate('apellido'),
			// this.$validator.validate('fechaNacimiento'),
			this.$validator.validate('sexo'), this.$validator.validate('dia'), this.$validator.validate('año'), this.$validator.validate('peso'), this.$validator.validate('altura')]).then(function (res) {
				var isValid = true;
				for (var i = 0; i < res.length; i++) {
					if (res[i] == false) {
						isValid = false;
					}
				}

				var dateAux = moment(_this.año + _this.mes + _this.dia);
				if (!dateAux.isValid()) {
					isValid = false;
					_this.showInvalidDateError = true;
				}

				if (isValid) {
					self.currentStep = 'step2';
				} else {
					_this.$noty.error("Porfavor revise los campos");
				}
			});
		},
		validateStep2: function validateStep2() {
			var _this2 = this;

			var self = this;
			var results = Promise.all([this.$validator.validate('email'), this.$validator.validate('password'), this.$validator.validate('confirmacionPassword')]).then(function (res) {
				var isValid = true;
				for (var i = 0; i < res.length; i++) {
					if (res[i] == false) {
						isValid = false;
					}
				}
				if (isValid) {
					self.currentStep = 'step3';
				} else {
					_this2.$noty.error("Porfavor revise los campos");
				}
			});
		},
		loginSuccess: function loginSuccess(data) {
			__WEBPACK_IMPORTED_MODULE_3__helpers_jwt_token__["a" /* default */].setToken(data.token);
			this.setAuthUser(data.user);
			this.$router.push({ name: 'index' });
		},
		onClickRegister: function onClickRegister() {
			var _this3 = this;

			this.$validator.validate('aceptarTerminos');
			if (this.aceptarTerminos) {
				this.loading = true;
				var objAux = {
					name: this.nombre,
					last_name: this.apellido,
					birthdate: this.año + '-' + this.mes + '-' + this.dia,
					weight: this.peso,
					height: this.altura,
					email: this.email,
					gender: this.sexo,
					password: this.password

				};

				axios.post(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* api */].freeRegister, objAux).then(function (res) {
					_this3.$noty.success('Registro Exitoso!');
					_this3.loading = false;
					_this3.loginSuccess(res.data);
					console.log(res.data);
				}).catch(function (err) {

					console.log(err.response);
					err.response.data.errors && _this3.$noty.error(_this3.processErrors(err.response.data.errors));
					_this3.loading = false;
					// (err.response.data.errors)
					// 	? this.setErrors(err.response.data.errors)
					// 	: this.clearErrors();

				});

				console.log(objAux);
			}
		},
		processErrors: function processErrors(arr) {
			var errorsAux = "";
			for (var error in arr) {
				errorsAux += '- ' + arr[error] + '<br>';
			}
			return errorsAux;
		},
		onChangeDate: function onChangeDate() {
			this.showInvalidDateError = false;
		}
	})
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/routines/QualifyRoutine.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__("./resources/assets/js/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue__ = __webpack_require__("./resources/assets/js/components/loading/Loading.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
	components: {
		'loading': __WEBPACK_IMPORTED_MODULE_2__loading_Loading_vue___default.a
	},
	computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["d" /* mapState */])({
		user: function user(state) {
			return state.auth;
		},
		currentRoutine: function currentRoutine(state) {
			return state.currentRoutine;
		}
	}),
	data: function data() {
		return {
			score: 0,
			loading: false,
			heartRate: ''
		};
	},

	methods: {
		onClickQualify: function onClickQualify() {
			var _this = this;

			// if(this.heartRate.length<=0){
			// 	this.$noty.error('Porfavor ingresa tu FRECUENCIA CARDIACA');
			// 	return
			// }

			if (this.score == 0) {
				this.$noty.error('Porfavor selecciona una calificación');
			} else {

				this.loading = true;
				var postData = {
					score: this.score,
					routine_id: this.currentRoutine.id,
					heart_rate: this.heartRate
				};
				axios.post(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* api */].qualifyRoutine, postData).then(function (res) {
					_this.loading = false;

					if (res.data === 'ok') {
						_this.$noty.success('Se calificó la rutina correctamente!');
					}
					_this.$router.push({ name: 'index' });
				}).catch(function (err) {

					console.log(err);

					_this.loading = false;
				});
			}
		}
	},
	mounted: function mounted() {
		if (!this.currentRoutine.id) {
			this.$router.push({ name: 'routines' });
			return;
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/routines/Routine.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["d" /* mapState */])({
		currentRoutine: function currentRoutine(state) {
			return state.currentRoutine;
		}
	}),
	data: function data() {
		return {
			// arrVideos:[],
			currentVideo: null,
			video: null
		};
	},

	methods: {
		/*onClickPrevious(){
  	
  	if(this.currentVideo>0){
  		this.currentVideo = this.currentVideo - 1
  		this.video.load()
    			this.video.play()
  	}
  },
  onClickNext(){
  	
  	if(this.currentVideo< this.arrVideos.length -1){
  		this.currentVideo = this.currentVideo + 1
  		this.video.load()
    			this.video.play()
  	}
  },
  */
		onClickQualify: function onClickQualify() {
			this.$router.push({ name: 'qualifyRoutine' });
		}
	},
	mounted: function mounted() {
		var self = this;
		if (!this.currentRoutine.video) {
			this.$router.push({ name: 'routines' });
			return;
		}

		//alert( this.currentRoutine.url)
		// this.video =  document.getElementById('myVideo')


		var iframe = document.getElementById('id-iframe');
		var player = new Vimeo.Player(iframe);

		player.on('play', function () {
			// console.log('END  video');
			console.log("start");
		});

		player.on('ended', function () {
			// console.log('END  video');
			self.$noty.success('Indica como te pareció la rutina!');
			self.$router.push({ name: 'qualifyRoutine' });
		});

		/*this.arrVideos = [
  	'/videos/v1.mp4',
  	'/videos/ABSD2.mp4',
  	'/videos/ABSD3.mp4',
  	'/videos/ABSD5.mp4',
  ]*/
		//this.currentVideo = this.arrVideos[this.currentVideo]


		/*let self = this
     self.video.onended = function(e) {
  	    	
  	self.$noty.success('Indica como te pareció la rutina!');
  	self.$router.push({name: 'qualifyRoutine'});
   			
     }*/
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/routines/Routines.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_jwt_token__ = __webpack_require__("./resources/assets/js/helpers/jwt-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("./resources/assets/js/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_Loading_vue__ = __webpack_require__("./resources/assets/js/components/loading/Loading.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_Loading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__loading_Loading_vue__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



// import EventBus from '../../event-bus';



/* harmony default export */ __webpack_exports__["default"] = ({
	components: {
		'loading': __WEBPACK_IMPORTED_MODULE_3__loading_Loading_vue___default.a
	},
	computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["d" /* mapState */])({
		currentRoutine: function currentRoutine(state) {
			return state.currentRoutine;
		}
	}),
	data: function data() {
		return {
			loading: false,
			routines: []
		};
	},
	created: function created() {
		var _this = this;

		// EventBus.$emit('EVENT_ROUTE_NAME', {name:this.$route.name});
		this.loading = true;
		axios.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* api */].getRoutines).then(function (res) {
			console.log(res.data);
			_this.loading = false;
			_this.routines = res.data.routines;
		}).catch(function (err) {
			console.log(err);
			_this.loading = false;
		});
	},

	/*beforeDestroy(){
 	EventBus.$emit('EVENT_ROUTE_NAME', {name:""});
 },*/
	methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapActions */])(['setCurrentRoutine']), {
		onClickRoutine: function onClickRoutine(routine) {
			var objAux = { id: routine.id, name: routine.name, video: routine.video };
			this.setCurrentRoutine(objAux);
			this.$router.push({ name: 'routine' });
			//console.log(objAux)
		}
	})
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/shared/AppFooter.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__("./resources/assets/js/config.js");
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			siteName: __WEBPACK_IMPORTED_MODULE_0__config__["b" /* siteName */],
			currentYear: new Date().getFullYear()
		};
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/shared/TopMenu.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__("./resources/assets/js/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_jwt_token__ = __webpack_require__("./resources/assets/js/helpers/jwt-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_bus__ = __webpack_require__("./resources/assets/js/event-bus.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			siteName: __WEBPACK_IMPORTED_MODULE_0__config__["b" /* siteName */],
			showBackButton: true,
			showMenu: false
		};
	},
	mounted: function mounted() {
		var self = this;
		__WEBPACK_IMPORTED_MODULE_3__event_bus__["a" /* default */].$on('EVENT_ROUTE_NAME', function (payload) {
			if (payload.name == 'index' || payload.name == 'welcome' || payload.name == 'diagnostic' || payload.name == 'objectives' || payload.name == 'initialPhotos') {
				self.showBackButton = false;
			} else {
				self.showBackButton = true;
			}
		});
	},

	computed: Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])(['isLoggedIn']),
	methods: {
		logout: function logout() {
			var _this = this;

			__WEBPACK_IMPORTED_MODULE_2__helpers_jwt_token__["a" /* default */].removeToken();
			this.$store.dispatch('unsetAuthUser').then(function () {
				_this.$noty.success('You are logged out');
				_this.$router.push({ name: 'login' });
			});
		},
		onClickBackButton: function onClickBackButton() {
			//this.$router.go(-1)


			if (this.$route.name === 'routines' || this.$route.name === 'feeding' || this.$route.name === 'control' || this.$route.name === 'plans' || this.$route.name === 'profile' || this.$route.name === 'profile.editProfile') {
				this.$router.push({ name: 'index' });
			}
			if (this.$route.name === 'routine') {
				this.$router.push({ name: 'routines' });
			}
			if (this.$route.name === 'qualifyRoutine') {
				this.$router.push({ name: 'routine' });
			}
			if (this.$route.name === 'feedingGuide' || this.$route.name === 'feedingIndications' || this.$route.name === 'feedingForbidden' || this.$route.name === 'feedingPortions') {
				this.$router.push({ name: 'feeding' });
			}
			if (this.$route.name === 'feedingSingle') {
				this.$router.push({ name: 'feedingGuide' });
			}
			if (this.$route.name === 'controlFeeding' || this.$route.name === 'controlRoutines' || this.$route.name === 'controlBoard' || this.$route.name === 'controlHemogram') {
				this.$router.push({ name: 'control' });
			}
			if (this.$route.name === 'controlPhotos') {
				this.$router.push({ name: 'controlBoard' });
			}
			if (this.$route.name === 'uploadPhoto') {
				this.$router.push({ name: 'controlPhotos' });
			}
		},
		onClickMenuButton: function onClickMenuButton() {
			this.showMenu = true;
		},
		onClickWrapperMenu: function onClickWrapperMenu() {
			this.showMenu = false;
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/welcome/Welcome.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__("./resources/assets/js/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_bus__ = __webpack_require__("./resources/assets/js/event-bus.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			siteName: __WEBPACK_IMPORTED_MODULE_0__config__["b" /* siteName */]
		};
	},
	mounted: function mounted() {
		__WEBPACK_IMPORTED_MODULE_1__event_bus__["a" /* default */].$emit('EVENT_ROUTE_NAME', { name: this.$route.name });
	},
	beforeDestroy: function beforeDestroy() {
		__WEBPACK_IMPORTED_MODULE_1__event_bus__["a" /* default */].$emit('EVENT_ROUTE_NAME', { name: "" });
	}
});

/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/v-calendar/lib/v-calendar.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes scaleEnter-data-v-bc55024c{0%{-webkit-transform:scaleX(.7) scaleY(.7);transform:scaleX(.7) scaleY(.7);opacity:.3}90%{-webkit-transform:scaleX(1.1) scaleY(1.1);transform:scaleX(1.1) scaleY(1.1)}95%{-webkit-transform:scaleX(.95) scaleY(.95);transform:scaleX(.95) scaleY(.95)}to{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1);opacity:1}}@keyframes scaleEnter-data-v-bc55024c{0%{-webkit-transform:scaleX(.7) scaleY(.7);transform:scaleX(.7) scaleY(.7);opacity:.3}90%{-webkit-transform:scaleX(1.1) scaleY(1.1);transform:scaleX(1.1) scaleY(1.1)}95%{-webkit-transform:scaleX(.95) scaleY(.95);transform:scaleX(.95) scaleY(.95)}to{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1);opacity:1}}@-webkit-keyframes scaleLeave-data-v-bc55024c{0%{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1)}60%{-webkit-transform:scaleX(1.18) scaleY(1.18);transform:scaleX(1.18) scaleY(1.18);opacity:.2}to{-webkit-transform:scaleX(1.15) scaleY(1.18);transform:scaleX(1.15) scaleY(1.18);opacity:0}}@keyframes scaleLeave-data-v-bc55024c{0%{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1)}60%{-webkit-transform:scaleX(1.18) scaleY(1.18);transform:scaleX(1.18) scaleY(1.18);opacity:.2}to{-webkit-transform:scaleX(1.15) scaleY(1.18);transform:scaleX(1.15) scaleY(1.18);opacity:0}}@-webkit-keyframes slideRightScaleEnter-data-v-bc55024c{0%{-webkit-transform:scaleX(0);transform:scaleX(0)}60%{-webkit-transform:scaleX(1.08);transform:scaleX(1.08)}}@keyframes slideRightScaleEnter-data-v-bc55024c{0%{-webkit-transform:scaleX(0);transform:scaleX(0)}60%{-webkit-transform:scaleX(1.08);transform:scaleX(1.08)}}@-webkit-keyframes slideRightTranslateEnter-data-v-bc55024c{0%{-webkit-transform:translateX(-6px);transform:translateX(-6px)}60%{-webkit-transform:translateX(2px);transform:translateX(2px)}}@keyframes slideRightTranslateEnter-data-v-bc55024c{0%{-webkit-transform:translateX(-6px);transform:translateX(-6px)}60%{-webkit-transform:translateX(2px);transform:translateX(2px)}}@-webkit-keyframes slideLeftScaleEnter-data-v-bc55024c{0%{-webkit-transform:scaleX(0);transform:scaleX(0)}60%{-webkit-transform:scaleX(1.08);transform:scaleX(1.08)}}@keyframes slideLeftScaleEnter-data-v-bc55024c{0%{-webkit-transform:scaleX(0);transform:scaleX(0)}60%{-webkit-transform:scaleX(1.08);transform:scaleX(1.08)}}@-webkit-keyframes slideLeftTranslateEnter-data-v-bc55024c{0%{-webkit-transform:translateX(6px);transform:translateX(6px)}60%{-webkit-transform:translateX(-2px);transform:translateX(-2px)}}@keyframes slideLeftTranslateEnter-data-v-bc55024c{0%{-webkit-transform:translateX(6px);transform:translateX(6px)}60%{-webkit-transform:translateX(-2px);transform:translateX(-2px)}}.c-pane-container[data-v-bc55024c]{-ms-flex-negative:1;flex-shrink:1;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-family:BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:400;line-height:1.5;color:#393d46;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;box-sizing:border-box}.c-pane-container.is-expanded[data-v-bc55024c]{width:100%}.c-pane-container.is-vertical[data-v-bc55024c]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.c-pane-container[data-v-bc55024c] *{box-sizing:inherit}.c-pane-container[data-v-bc55024c] :focus{outline:none}.c-pane-divider[data-v-bc55024c]{width:1px;border:1px inset;border-color:#fafafa}@-webkit-keyframes scaleEnter-data-v-2083cb72{0%{-webkit-transform:scaleX(.7) scaleY(.7);transform:scaleX(.7) scaleY(.7);opacity:.3}90%{-webkit-transform:scaleX(1.1) scaleY(1.1);transform:scaleX(1.1) scaleY(1.1)}95%{-webkit-transform:scaleX(.95) scaleY(.95);transform:scaleX(.95) scaleY(.95)}to{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1);opacity:1}}@-webkit-keyframes scaleLeave-data-v-2083cb72{0%{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1)}60%{-webkit-transform:scaleX(1.18) scaleY(1.18);transform:scaleX(1.18) scaleY(1.18);opacity:.2}to{-webkit-transform:scaleX(1.15) scaleY(1.18);transform:scaleX(1.15) scaleY(1.18);opacity:0}}@-webkit-keyframes slideRightScaleEnter-data-v-2083cb72{0%{-webkit-transform:scaleX(0);transform:scaleX(0)}60%{-webkit-transform:scaleX(1.08);transform:scaleX(1.08)}}@-webkit-keyframes slideRightTranslateEnter-data-v-2083cb72{0%{-webkit-transform:translateX(-6px);transform:translateX(-6px)}60%{-webkit-transform:translateX(2px);transform:translateX(2px)}}@-webkit-keyframes slideLeftScaleEnter-data-v-2083cb72{0%{-webkit-transform:scaleX(0);transform:scaleX(0)}60%{-webkit-transform:scaleX(1.08);transform:scaleX(1.08)}}@-webkit-keyframes slideLeftTranslateEnter-data-v-2083cb72{0%{-webkit-transform:translateX(6px);transform:translateX(6px)}60%{-webkit-transform:translateX(-2px);transform:translateX(-2px)}}@keyframes scaleEnter-data-v-2083cb72{0%{-webkit-transform:scaleX(.7) scaleY(.7);transform:scaleX(.7) scaleY(.7);opacity:.3}90%{-webkit-transform:scaleX(1.1) scaleY(1.1);transform:scaleX(1.1) scaleY(1.1)}95%{-webkit-transform:scaleX(.95) scaleY(.95);transform:scaleX(.95) scaleY(.95)}to{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1);opacity:1}}@keyframes scaleLeave-data-v-2083cb72{0%{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1)}60%{-webkit-transform:scaleX(1.18) scaleY(1.18);transform:scaleX(1.18) scaleY(1.18);opacity:.2}to{-webkit-transform:scaleX(1.15) scaleY(1.18);transform:scaleX(1.15) scaleY(1.18);opacity:0}}@keyframes slideRightScaleEnter-data-v-2083cb72{0%{-webkit-transform:scaleX(0);transform:scaleX(0)}60%{-webkit-transform:scaleX(1.08);transform:scaleX(1.08)}}@keyframes slideRightTranslateEnter-data-v-2083cb72{0%{-webkit-transform:translateX(-6px);transform:translateX(-6px)}60%{-webkit-transform:translateX(2px);transform:translateX(2px)}}@keyframes slideLeftScaleEnter-data-v-2083cb72{0%{-webkit-transform:scaleX(0);transform:scaleX(0)}60%{-webkit-transform:scaleX(1.08);transform:scaleX(1.08)}}@keyframes slideLeftTranslateEnter-data-v-2083cb72{0%{-webkit-transform:translateX(6px);transform:translateX(6px)}60%{-webkit-transform:translateX(-2px);transform:translateX(-2px)}}.c-pane[data-v-2083cb72]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.c-horizontal-divider[data-v-2083cb72]{-ms-flex-item-align:center;align-self:center}.c-header[data-v-2083cb72]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:10px}.c-header .c-arrow-layout[data-v-2083cb72]{min-width:26px}.c-header .c-arrow-layout .c-arrow[data-v-2083cb72],.c-header .c-arrow-layout[data-v-2083cb72]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0;padding:0}.c-header .c-arrow-layout .c-arrow[data-v-2083cb72]{font-size:1.6rem;transition:fill-opacity .3s ease-in-out;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.c-header .c-arrow-layout .c-arrow[data-v-2083cb72]:hover{fill-opacity:.5}.c-header .c-title-layout[data-v-2083cb72]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.c-header .c-title-layout .c-title-popover .c-title-anchor[data-v-2083cb72],.c-header .c-title-layout .c-title-popover[data-v-2083cb72]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:inherit;-ms-flex-pack:inherit;justify-content:inherit}.c-header .c-title-layout .c-title-popover .c-title-anchor .c-title[data-v-2083cb72]{font-weight:400;font-size:1.15rem;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}.c-header .c-title-layout.align-left[data-v-2083cb72]{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.c-header .c-title-layout.align-right[data-v-2083cb72]{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.c-header .c-arrow.c-disabled[data-v-2083cb72]{cursor:not-allowed;pointer-events:none;opacity:.2}.c-weekdays[data-v-2083cb72]{display:-webkit-box;display:-ms-flexbox;display:flex;padding:0 5px;color:#9499a8;font-size:.9rem;font-weight:500}.c-weekday[data-v-2083cb72]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0;padding:0;-webkit-box-flex:1;-ms-flex:1;flex:1;cursor:default}.c-weeks[data-v-2083cb72]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding:5px 5px 7px}.c-weeks-rows-wrapper[data-v-2083cb72]{position:relative}.c-weeks-rows[data-v-2083cb72]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%}.title-fade-enter-active[data-v-2083cb72],.title-fade-leave-active[data-v-2083cb72],.title-slide-down-enter-active[data-v-2083cb72],.title-slide-down-leave-active[data-v-2083cb72],.title-slide-left-enter-active[data-v-2083cb72],.title-slide-left-leave-active[data-v-2083cb72],.title-slide-right-enter-active[data-v-2083cb72],.title-slide-right-leave-active[data-v-2083cb72],.title-slide-up-enter-active[data-v-2083cb72],.title-slide-up-leave-active[data-v-2083cb72]{transition:all .25s ease-in-out}.title-fade-leave-active[data-v-2083cb72],.title-none-leave-active[data-v-2083cb72],.title-slide-down-leave-active[data-v-2083cb72],.title-slide-left-leave-active[data-v-2083cb72],.title-slide-right-leave-active[data-v-2083cb72],.title-slide-up-leave-active[data-v-2083cb72]{position:absolute}.title-none-enter-active[data-v-2083cb72],.title-none-leave-active[data-v-2083cb72]{transition-duration:0s}.title-slide-left-enter[data-v-2083cb72],.title-slide-right-leave-to[data-v-2083cb72]{opacity:0;-webkit-transform:translateX(25px);transform:translateX(25px)}.title-slide-left-leave-to[data-v-2083cb72],.title-slide-right-enter[data-v-2083cb72]{opacity:0;-webkit-transform:translateX(-25px);transform:translateX(-25px)}.title-slide-down-leave-to[data-v-2083cb72],.title-slide-up-enter[data-v-2083cb72]{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.title-slide-down-enter[data-v-2083cb72],.title-slide-up-leave-to[data-v-2083cb72]{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.weeks-fade-enter-active[data-v-2083cb72],.weeks-fade-leave-active[data-v-2083cb72],.weeks-slide-down-enter-active[data-v-2083cb72],.weeks-slide-down-leave-active[data-v-2083cb72],.weeks-slide-left-enter-active[data-v-2083cb72],.weeks-slide-left-leave-active[data-v-2083cb72],.weeks-slide-right-enter-active[data-v-2083cb72],.weeks-slide-right-leave-active[data-v-2083cb72],.weeks-slide-up-enter-active[data-v-2083cb72],.weeks-slide-up-leave-active[data-v-2083cb72]{transition:all .25s ease-in-out}.weeks-fade-leave-active[data-v-2083cb72],.weeks-none-leave-active[data-v-2083cb72],.weeks-slide-down-leave-active[data-v-2083cb72],.weeks-slide-left-leave-active[data-v-2083cb72],.weeks-slide-right-leave-active[data-v-2083cb72],.weeks-slide-up-leave-active[data-v-2083cb72]{position:absolute}.weeks-none-enter-active[data-v-2083cb72],.weeks-none-leave-active[data-v-2083cb72]{transition-duration:0s}.weeks-slide-left-enter[data-v-2083cb72],.weeks-slide-right-leave-to[data-v-2083cb72]{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.weeks-slide-left-leave-to[data-v-2083cb72],.weeks-slide-right-enter[data-v-2083cb72]{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.weeks-slide-down-leave-to[data-v-2083cb72],.weeks-slide-up-enter[data-v-2083cb72]{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.weeks-slide-down-enter[data-v-2083cb72],.weeks-slide-up-leave-to[data-v-2083cb72]{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.title-fade-enter[data-v-2083cb72],.title-fade-leave-to[data-v-2083cb72],.title-none-enter[data-v-2083cb72],.title-none-leave-to[data-v-2083cb72],.weeks-fade-enter[data-v-2083cb72],.weeks-fade-leave-to[data-v-2083cb72],.weeks-none-enter[data-v-2083cb72],.weeks-none-leave-to[data-v-2083cb72]{opacity:0}@-webkit-keyframes scaleEnter-data-v-1ad2436f{0%{-webkit-transform:scaleX(.7) scaleY(.7);transform:scaleX(.7) scaleY(.7);opacity:.3}90%{-webkit-transform:scaleX(1.1) scaleY(1.1);transform:scaleX(1.1) scaleY(1.1)}95%{-webkit-transform:scaleX(.95) scaleY(.95);transform:scaleX(.95) scaleY(.95)}to{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1);opacity:1}}@keyframes scaleEnter-data-v-1ad2436f{0%{-webkit-transform:scaleX(.7) scaleY(.7);transform:scaleX(.7) scaleY(.7);opacity:.3}90%{-webkit-transform:scaleX(1.1) scaleY(1.1);transform:scaleX(1.1) scaleY(1.1)}95%{-webkit-transform:scaleX(.95) scaleY(.95);transform:scaleX(.95) scaleY(.95)}to{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1);opacity:1}}@-webkit-keyframes scaleLeave-data-v-1ad2436f{0%{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1)}60%{-webkit-transform:scaleX(1.18) scaleY(1.18);transform:scaleX(1.18) scaleY(1.18);opacity:.2}to{-webkit-transform:scaleX(1.15) scaleY(1.18);transform:scaleX(1.15) scaleY(1.18);opacity:0}}@keyframes scaleLeave-data-v-1ad2436f{0%{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1)}60%{-webkit-transform:scaleX(1.18) scaleY(1.18);transform:scaleX(1.18) scaleY(1.18);opacity:.2}to{-webkit-transform:scaleX(1.15) scaleY(1.18);transform:scaleX(1.15) scaleY(1.18);opacity:0}}@-webkit-keyframes slideRightScaleEnter-data-v-1ad2436f{0%{-webkit-transform:scaleX(0);transform:scaleX(0)}60%{-webkit-transform:scaleX(1.08);transform:scaleX(1.08)}}@keyframes slideRightScaleEnter-data-v-1ad2436f{0%{-webkit-transform:scaleX(0);transform:scaleX(0)}60%{-webkit-transform:scaleX(1.08);transform:scaleX(1.08)}}@-webkit-keyframes slideRightTranslateEnter-data-v-1ad2436f{0%{-webkit-transform:translateX(-6px);transform:translateX(-6px)}60%{-webkit-transform:translateX(2px);transform:translateX(2px)}}@keyframes slideRightTranslateEnter-data-v-1ad2436f{0%{-webkit-transform:translateX(-6px);transform:translateX(-6px)}60%{-webkit-transform:translateX(2px);transform:translateX(2px)}}@-webkit-keyframes slideLeftScaleEnter-data-v-1ad2436f{0%{-webkit-transform:scaleX(0);transform:scaleX(0)}60%{-webkit-transform:scaleX(1.08);transform:scaleX(1.08)}}@keyframes slideLeftScaleEnter-data-v-1ad2436f{0%{-webkit-transform:scaleX(0);transform:scaleX(0)}60%{-webkit-transform:scaleX(1.08);transform:scaleX(1.08)}}@-webkit-keyframes slideLeftTranslateEnter-data-v-1ad2436f{0%{-webkit-transform:translateX(6px);transform:translateX(6px)}60%{-webkit-transform:translateX(-2px);transform:translateX(-2px)}}@keyframes slideLeftTranslateEnter-data-v-1ad2436f{0%{-webkit-transform:translateX(6px);transform:translateX(6px)}60%{-webkit-transform:translateX(-2px);transform:translateX(-2px)}}.popover-container[data-v-1ad2436f]{position:relative;outline:none}.popover-container.expanded[data-v-1ad2436f]{display:block}.popover-origin[data-v-1ad2436f]{position:absolute;-webkit-transform-origin:top center;transform-origin:top center;z-index:10;pointer-events:none}.popover-origin.direction-top[data-v-1ad2436f]{bottom:100%}.popover-origin.direction-bottom[data-v-1ad2436f]{top:100%}.popover-origin.direction-left[data-v-1ad2436f]{top:0;right:100%}.popover-origin.direction-right[data-v-1ad2436f]{top:0;left:100%}.popover-origin.direction-bottom.align-left[data-v-1ad2436f],.popover-origin.direction-top.align-left[data-v-1ad2436f]{left:0}.popover-origin.direction-bottom.align-center[data-v-1ad2436f],.popover-origin.direction-top.align-center[data-v-1ad2436f]{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.popover-origin.direction-bottom.align-right[data-v-1ad2436f],.popover-origin.direction-top.align-right[data-v-1ad2436f]{right:0}.popover-origin.direction-left.align-top[data-v-1ad2436f],.popover-origin.direction-right.align-top[data-v-1ad2436f]{top:0}.popover-origin.direction-left.align-middle[data-v-1ad2436f],.popover-origin.direction-right.align-middle[data-v-1ad2436f]{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.popover-origin.direction-left.align-bottom[data-v-1ad2436f],.popover-origin.direction-right.align-bottom[data-v-1ad2436f]{top:auto;bottom:0}.popover-origin .popover-content-wrapper[data-v-1ad2436f]{position:relative;outline:none}.popover-origin .popover-content-wrapper.interactive[data-v-1ad2436f]{pointer-events:all}.popover-origin .popover-content-wrapper .popover-content[data-v-1ad2436f]{position:relative;background-color:#fafafa;border:1px solid rgba(34,36,38,.15);border-radius:5px;box-shadow:0 1px 2px 0 rgba(34,36,38,.15);padding:4px}.popover-origin .popover-content-wrapper .popover-content[data-v-1ad2436f]:after{display:block;position:absolute;background:inherit;border:inherit;border-width:1px 1px 0 0;width:12px;height:12px;content:\"\"}.popover-origin .popover-content-wrapper .popover-content.direction-bottom[data-v-1ad2436f]:after{top:0;border-width:1px 1px 0 0}.popover-origin .popover-content-wrapper .popover-content.direction-top[data-v-1ad2436f]:after{top:100%;border-width:0 0 1px 1px}.popover-origin .popover-content-wrapper .popover-content.direction-left[data-v-1ad2436f]:after{left:100%;border-width:0 1px 1px 0}.popover-origin .popover-content-wrapper .popover-content.direction-right[data-v-1ad2436f]:after{left:0;border-width:1px 0 0 1px}.popover-origin .popover-content-wrapper .popover-content.align-left[data-v-1ad2436f]:after{left:20px;-webkit-transform:translateY(-50%) translateX(-50%) rotate(-45deg);transform:translateY(-50%) translateX(-50%) rotate(-45deg)}.popover-origin .popover-content-wrapper .popover-content.align-right[data-v-1ad2436f]:after{right:20px;-webkit-transform:translateY(-50%) translateX(50%) rotate(-45deg);transform:translateY(-50%) translateX(50%) rotate(-45deg)}.popover-origin .popover-content-wrapper .popover-content.align-center[data-v-1ad2436f]:after{left:50%;-webkit-transform:translateY(-50%) translateX(-50%) rotate(-45deg);transform:translateY(-50%) translateX(-50%) rotate(-45deg)}.popover-origin .popover-content-wrapper .popover-content.align-top[data-v-1ad2436f]:after{top:18px;-webkit-transform:translateY(-50%) translateX(-50%) rotate(-45deg);transform:translateY(-50%) translateX(-50%) rotate(-45deg)}.popover-origin .popover-content-wrapper .popover-content.align-middle[data-v-1ad2436f]:after{top:50%;-webkit-transform:translateY(-50%) translateX(-50%) rotate(-45deg);transform:translateY(-50%) translateX(-50%) rotate(-45deg)}.popover-origin .popover-content-wrapper .popover-content.align-bottom[data-v-1ad2436f]:after{bottom:18px;-webkit-transform:translateY(50%) translateX(-50%) rotate(-45deg);transform:translateY(50%) translateX(-50%) rotate(-45deg)}.fade-enter-active[data-v-1ad2436f],.fade-leave-active[data-v-1ad2436f],.slide-fade-enter-active[data-v-1ad2436f],.slide-fade-leave-active[data-v-1ad2436f]{transition:all .14s ease-in-out}.fade-enter[data-v-1ad2436f],.fade-leave-to[data-v-1ad2436f],.slide-fade-enter[data-v-1ad2436f],.slide-fade-leave-to[data-v-1ad2436f]{opacity:0}.slide-fade-enter.direction-bottom[data-v-1ad2436f],.slide-fade-leave-to.direction-bottom[data-v-1ad2436f]{-webkit-transform:translateY(-15px);transform:translateY(-15px)}.slide-fade-enter.direction-top[data-v-1ad2436f],.slide-fade-leave-to.direction-top[data-v-1ad2436f]{-webkit-transform:translateY(15px);transform:translateY(15px)}.slide-fade-enter.direction-left[data-v-1ad2436f],.slide-fade-leave-to.direction-left[data-v-1ad2436f]{-webkit-transform:translateX(15px);transform:translateX(15px)}.slide-fade-enter.direction-right[data-v-1ad2436f],.slide-fade-leave-to.direction-right[data-v-1ad2436f]{-webkit-transform:translateX(-15px);transform:translateX(-15px)}.c-week[data-v-28896542]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex}@-webkit-keyframes scaleEnter-data-v-3db80f80{0%{-webkit-transform:scaleX(.7) scaleY(.7);transform:scaleX(.7) scaleY(.7);opacity:.3}90%{-webkit-transform:scaleX(1.1) scaleY(1.1);transform:scaleX(1.1) scaleY(1.1)}95%{-webkit-transform:scaleX(.95) scaleY(.95);transform:scaleX(.95) scaleY(.95)}to{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1);opacity:1}}@-webkit-keyframes scaleLeave-data-v-3db80f80{0%{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1)}60%{-webkit-transform:scaleX(1.18) scaleY(1.18);transform:scaleX(1.18) scaleY(1.18);opacity:.2}to{-webkit-transform:scaleX(1.15) scaleY(1.18);transform:scaleX(1.15) scaleY(1.18);opacity:0}}@-webkit-keyframes slideRightScaleEnter-data-v-3db80f80{0%{-webkit-transform:scaleX(0);transform:scaleX(0)}60%{-webkit-transform:scaleX(1.08);transform:scaleX(1.08)}}@-webkit-keyframes slideRightTranslateEnter-data-v-3db80f80{0%{-webkit-transform:translateX(-6px);transform:translateX(-6px)}60%{-webkit-transform:translateX(2px);transform:translateX(2px)}}@-webkit-keyframes slideLeftScaleEnter-data-v-3db80f80{0%{-webkit-transform:scaleX(0);transform:scaleX(0)}60%{-webkit-transform:scaleX(1.08);transform:scaleX(1.08)}}@-webkit-keyframes slideLeftTranslateEnter-data-v-3db80f80{0%{-webkit-transform:translateX(6px);transform:translateX(6px)}60%{-webkit-transform:translateX(-2px);transform:translateX(-2px)}}@keyframes scaleEnter-data-v-3db80f80{0%{-webkit-transform:scaleX(.7) scaleY(.7);transform:scaleX(.7) scaleY(.7);opacity:.3}90%{-webkit-transform:scaleX(1.1) scaleY(1.1);transform:scaleX(1.1) scaleY(1.1)}95%{-webkit-transform:scaleX(.95) scaleY(.95);transform:scaleX(.95) scaleY(.95)}to{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1);opacity:1}}@keyframes scaleLeave-data-v-3db80f80{0%{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1)}60%{-webkit-transform:scaleX(1.18) scaleY(1.18);transform:scaleX(1.18) scaleY(1.18);opacity:.2}to{-webkit-transform:scaleX(1.15) scaleY(1.18);transform:scaleX(1.15) scaleY(1.18);opacity:0}}@keyframes slideRightScaleEnter-data-v-3db80f80{0%{-webkit-transform:scaleX(0);transform:scaleX(0)}60%{-webkit-transform:scaleX(1.08);transform:scaleX(1.08)}}@keyframes slideRightTranslateEnter-data-v-3db80f80{0%{-webkit-transform:translateX(-6px);transform:translateX(-6px)}60%{-webkit-transform:translateX(2px);transform:translateX(2px)}}@keyframes slideLeftScaleEnter-data-v-3db80f80{0%{-webkit-transform:scaleX(0);transform:scaleX(0)}60%{-webkit-transform:scaleX(1.08);transform:scaleX(1.08)}}@keyframes slideLeftTranslateEnter-data-v-3db80f80{0%{-webkit-transform:translateX(6px);transform:translateX(6px)}60%{-webkit-transform:translateX(-2px);transform:translateX(-2px)}}.c-day-popover[data-v-3db80f80]{-webkit-box-flex:1;-ms-flex:1;flex:1}.c-day[data-v-3db80f80]{position:relative;min-height:28px;z-index:1}.c-day-layer[data-v-3db80f80]{position:absolute;left:0;right:0;top:0;bottom:0;pointer-events:none}.c-day-box-center-center[data-v-3db80f80]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.c-day-box-center-center[data-v-3db80f80],.c-day-box-left-center[data-v-3db80f80]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0;padding:0;height:100%}.c-day-box-left-center[data-v-3db80f80]{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-transform-origin:0 50%;transform-origin:0 50%}.c-day-box-right-center[data-v-3db80f80]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0;padding:0;height:100%;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.c-day-box-center-bottom[data-v-3db80f80]{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;margin:0;padding:0}.c-day-box-center-bottom[data-v-3db80f80],.c-day-content-wrapper[data-v-3db80f80]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.c-day-content-wrapper[data-v-3db80f80]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.c-day-content[data-v-3db80f80]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:1.8rem;height:1.8rem;font-size:.9rem;font-weight:400;line-height:1;border-radius:50%;transition:all .18s ease-in-out;margin:.1rem .08rem}.c-day-backgrounds[data-v-3db80f80]{overflow:hidden;pointer-events:none;z-index:-1;-webkit-backface-visibility:hidden;backface-visibility:hidden}.c-day-background[data-v-3db80f80]{transition:height .13s ease-in-out,background-color .13s ease-in-out}.shift-left[data-v-3db80f80]{margin-left:-1px}.shift-right[data-v-3db80f80]{margin-right:-1px}.shift-left-right[data-v-3db80f80]{margin:0 -1px}.c-day-dots[data-v-3db80f80]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0;padding:0}.c-day-dot[data-v-3db80f80]{width:5px;height:5px;border-radius:50%;background-color:#66b3cc;transition:all .18s ease-in-out}.c-day-dot[data-v-3db80f80]:not(:last-child){margin-right:3px}.c-day-bars[data-v-3db80f80]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0;padding:0;width:75%}.c-day-bar[data-v-3db80f80]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;height:3px;background-color:#66b3cc;transition:all .18s ease-in-out}.c-day-popover-content[data-v-3db80f80]{font-size:.8rem;font-weight:400}.background-enter-active.c-day-fade-enter[data-v-3db80f80]{transition:opacity .2s ease-in-out}.background-enter-active.c-day-slide-right-scale-enter[data-v-3db80f80]{-webkit-animation:slideRightScaleEnter-data-v-3db80f80 .16s ease-in-out;animation:slideRightScaleEnter-data-v-3db80f80 .16s ease-in-out}.background-enter-active.c-day-slide-right-translate-enter[data-v-3db80f80]{-webkit-animation:slideRightTranslateEnter-data-v-3db80f80 .16s ease-in-out;animation:slideRightTranslateEnter-data-v-3db80f80 .16s ease-in-out}.background-enter-active.c-day-slide-left-scale-enter[data-v-3db80f80]{-webkit-animation:slideLeftScaleEnter-data-v-3db80f80 .16s ease-in-out;animation:slideLeftScaleEnter-data-v-3db80f80 .16s ease-in-out}.background-enter-active.c-day-slide-left-translate-enter[data-v-3db80f80]{-webkit-animation:slideLeftTranslateEnter-data-v-3db80f80 .16s ease-in-out;animation:slideLeftTranslateEnter-data-v-3db80f80 .16s ease-in-out}.background-enter-active.c-day-scale-enter[data-v-3db80f80]{-webkit-animation:scaleEnter-data-v-3db80f80 .16s ease-in-out;animation:scaleEnter-data-v-3db80f80 .16s ease-in-out}.background-leave-active.c-day-fade-leave[data-v-3db80f80]{transition:opacity .2s ease-in-out}.background-leave-active.c-day-scale-leave[data-v-3db80f80]{-webkit-animation:scaleLeave-data-v-3db80f80 .2s ease-in-out;animation:scaleLeave-data-v-3db80f80 .2s ease-in-out}.background-enter.c-day-fade-enter[data-v-3db80f80],.background-leave-to.c-day-fade-leave[data-v-3db80f80]{opacity:0}@-webkit-keyframes scaleEnter-data-v-54b1f93b{0%{-webkit-transform:scaleX(.7) scaleY(.7);transform:scaleX(.7) scaleY(.7);opacity:.3}90%{-webkit-transform:scaleX(1.1) scaleY(1.1);transform:scaleX(1.1) scaleY(1.1)}95%{-webkit-transform:scaleX(.95) scaleY(.95);transform:scaleX(.95) scaleY(.95)}to{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1);opacity:1}}@keyframes scaleEnter-data-v-54b1f93b{0%{-webkit-transform:scaleX(.7) scaleY(.7);transform:scaleX(.7) scaleY(.7);opacity:.3}90%{-webkit-transform:scaleX(1.1) scaleY(1.1);transform:scaleX(1.1) scaleY(1.1)}95%{-webkit-transform:scaleX(.95) scaleY(.95);transform:scaleX(.95) scaleY(.95)}to{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1);opacity:1}}@-webkit-keyframes scaleLeave-data-v-54b1f93b{0%{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1)}60%{-webkit-transform:scaleX(1.18) scaleY(1.18);transform:scaleX(1.18) scaleY(1.18);opacity:.2}to{-webkit-transform:scaleX(1.15) scaleY(1.18);transform:scaleX(1.15) scaleY(1.18);opacity:0}}@keyframes scaleLeave-data-v-54b1f93b{0%{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1)}60%{-webkit-transform:scaleX(1.18) scaleY(1.18);transform:scaleX(1.18) scaleY(1.18);opacity:.2}to{-webkit-transform:scaleX(1.15) scaleY(1.18);transform:scaleX(1.15) scaleY(1.18);opacity:0}}@-webkit-keyframes slideRightScaleEnter-data-v-54b1f93b{0%{-webkit-transform:scaleX(0);transform:scaleX(0)}60%{-webkit-transform:scaleX(1.08);transform:scaleX(1.08)}}@keyframes slideRightScaleEnter-data-v-54b1f93b{0%{-webkit-transform:scaleX(0);transform:scaleX(0)}60%{-webkit-transform:scaleX(1.08);transform:scaleX(1.08)}}@-webkit-keyframes slideRightTranslateEnter-data-v-54b1f93b{0%{-webkit-transform:translateX(-6px);transform:translateX(-6px)}60%{-webkit-transform:translateX(2px);transform:translateX(2px)}}@keyframes slideRightTranslateEnter-data-v-54b1f93b{0%{-webkit-transform:translateX(-6px);transform:translateX(-6px)}60%{-webkit-transform:translateX(2px);transform:translateX(2px)}}@-webkit-keyframes slideLeftScaleEnter-data-v-54b1f93b{0%{-webkit-transform:scaleX(0);transform:scaleX(0)}60%{-webkit-transform:scaleX(1.08);transform:scaleX(1.08)}}@keyframes slideLeftScaleEnter-data-v-54b1f93b{0%{-webkit-transform:scaleX(0);transform:scaleX(0)}60%{-webkit-transform:scaleX(1.08);transform:scaleX(1.08)}}@-webkit-keyframes slideLeftTranslateEnter-data-v-54b1f93b{0%{-webkit-transform:translateX(6px);transform:translateX(6px)}60%{-webkit-transform:translateX(-2px);transform:translateX(-2px)}}@keyframes slideLeftTranslateEnter-data-v-54b1f93b{0%{-webkit-transform:translateX(6px);transform:translateX(6px)}60%{-webkit-transform:translateX(-2px);transform:translateX(-2px)}}.c-day-popover-row[data-v-54b1f93b]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:2px 5px;transition:all .18s ease-in-out}.c-day-popover-row.selectable[data-v-54b1f93b]{cursor:pointer}.c-day-popover-row.selectable[data-v-54b1f93b]:hover{background-color:rgba(0,0,0,.1)}.c-day-popover-row[data-v-54b1f93b]:not(:first-child){margin-top:3px}.c-day-popover-row .c-day-popover-indicator[data-v-54b1f93b]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;width:15px;margin-right:3px}.c-day-popover-row .c-day-popover-indicator span[data-v-54b1f93b]{transition:all .18s ease-in-out}.c-day-popover-row .c-day-popover-content[data-v-54b1f93b]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:none;flex-wrap:none;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;transition:all .18s ease-in-out}@-webkit-keyframes scaleEnter-data-v-81948efe{0%{-webkit-transform:scaleX(.7) scaleY(.7);transform:scaleX(.7) scaleY(.7);opacity:.3}90%{-webkit-transform:scaleX(1.1) scaleY(1.1);transform:scaleX(1.1) scaleY(1.1)}95%{-webkit-transform:scaleX(.95) scaleY(.95);transform:scaleX(.95) scaleY(.95)}to{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1);opacity:1}}@-webkit-keyframes scaleLeave-data-v-81948efe{0%{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1)}60%{-webkit-transform:scaleX(1.18) scaleY(1.18);transform:scaleX(1.18) scaleY(1.18);opacity:.2}to{-webkit-transform:scaleX(1.15) scaleY(1.18);transform:scaleX(1.15) scaleY(1.18);opacity:0}}@-webkit-keyframes slideRightScaleEnter-data-v-81948efe{0%{-webkit-transform:scaleX(0);transform:scaleX(0)}60%{-webkit-transform:scaleX(1.08);transform:scaleX(1.08)}}@-webkit-keyframes slideRightTranslateEnter-data-v-81948efe{0%{-webkit-transform:translateX(-6px);transform:translateX(-6px)}60%{-webkit-transform:translateX(2px);transform:translateX(2px)}}@-webkit-keyframes slideLeftScaleEnter-data-v-81948efe{0%{-webkit-transform:scaleX(0);transform:scaleX(0)}60%{-webkit-transform:scaleX(1.08);transform:scaleX(1.08)}}@-webkit-keyframes slideLeftTranslateEnter-data-v-81948efe{0%{-webkit-transform:translateX(6px);transform:translateX(6px)}60%{-webkit-transform:translateX(-2px);transform:translateX(-2px)}}@keyframes scaleEnter-data-v-81948efe{0%{-webkit-transform:scaleX(.7) scaleY(.7);transform:scaleX(.7) scaleY(.7);opacity:.3}90%{-webkit-transform:scaleX(1.1) scaleY(1.1);transform:scaleX(1.1) scaleY(1.1)}95%{-webkit-transform:scaleX(.95) scaleY(.95);transform:scaleX(.95) scaleY(.95)}to{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1);opacity:1}}@keyframes scaleLeave-data-v-81948efe{0%{-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1)}60%{-webkit-transform:scaleX(1.18) scaleY(1.18);transform:scaleX(1.18) scaleY(1.18);opacity:.2}to{-webkit-transform:scaleX(1.15) scaleY(1.18);transform:scaleX(1.15) scaleY(1.18);opacity:0}}@keyframes slideRightScaleEnter-data-v-81948efe{0%{-webkit-transform:scaleX(0);transform:scaleX(0)}60%{-webkit-transform:scaleX(1.08);transform:scaleX(1.08)}}@keyframes slideRightTranslateEnter-data-v-81948efe{0%{-webkit-transform:translateX(-6px);transform:translateX(-6px)}60%{-webkit-transform:translateX(2px);transform:translateX(2px)}}@keyframes slideLeftScaleEnter-data-v-81948efe{0%{-webkit-transform:scaleX(0);transform:scaleX(0)}60%{-webkit-transform:scaleX(1.08);transform:scaleX(1.08)}}@keyframes slideLeftTranslateEnter-data-v-81948efe{0%{-webkit-transform:translateX(6px);transform:translateX(6px)}60%{-webkit-transform:translateX(-2px);transform:translateX(-2px)}}.c-nav[data-v-81948efe]{transition:height 5s ease-in-out;color:#333}.c-header[data-v-81948efe]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #dadada;padding:3px 0}.c-arrow-layout[data-v-81948efe]{min-width:26px}.c-arrow-layout[data-v-81948efe],.c-arrow[data-v-81948efe]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0;padding:0}.c-arrow[data-v-81948efe]{font-size:1.6rem;transition:fill-opacity .3s ease-in-out;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.c-arrow[data-v-81948efe]:hover{fill-opacity:.5}.c-title[data-v-81948efe]{font-weight:500;transition:all .25s ease-in-out}.c-table-cell[data-v-81948efe],.c-title[data-v-81948efe]{font-size:.9rem;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.c-table-cell[data-v-81948efe]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;position:relative;font-weight:400;background-color:#fff;transition:all .1s ease-in-out}.c-table-cell[data-v-81948efe]:hover{background-color:#f0f0f0}.c-disabled[data-v-81948efe]{opacity:.2;cursor:not-allowed;pointer-events:none}.c-disabled[data-v-81948efe]:hover{background-color:transparent}.c-active[data-v-81948efe]{background-color:#f0f0f0;font-weight:600}.c-indicators[data-v-81948efe]{position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;bottom:5px;width:100%;transition:all .1s ease-in-out}.c-indicators .c-indicator[data-v-81948efe]{width:5px;height:5px;border-radius:50%}.c-indicators .c-indicator[data-v-81948efe]:not(:first-child){margin-left:3px}.c-table[data-v-81948efe]{table-layout:fixed;width:100%;border-collapse:collapse}.c-table tr td[data-v-81948efe]{border:1px solid #dadada;width:60px;height:34px}.c-table tr td[data-v-81948efe]:first-child{border-left:0}.c-table tr td[data-v-81948efe]:last-child{border-right:0}.c-table tr:first-child td[data-v-81948efe]{border-top:0}.c-table tr:last-child td[data-v-81948efe]{border-bottom:0}.indicators-enter-active[data-v-81948efe],.indicators-leave-active[data-v-81948efe]{transition:all .1s ease-in-out}.indicators-enter[data-v-81948efe],.indicators-leave-to[data-v-81948efe]{opacity:0}.svg-icon[data-v-12e91ab4]{display:inline-block;stroke:currentColor;stroke-width:0}.svg-icon path[data-v-12e91ab4]{fill:currentColor}.date-label[data-v-6c331e62]{text-align:center}.days-nights[data-v-6c331e62]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:3px}.days-nights .days[data-v-6c331e62],.days-nights .nights[data-v-6c331e62],.days-nights[data-v-6c331e62]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.days-nights .days[data-v-6c331e62],.days-nights .nights[data-v-6c331e62]{font-weight:700}.days-nights .days[data-v-6c331e62]:not(:first-child),.days-nights .nights[data-v-6c331e62]:not(:first-child){margin-left:13px}.days-nights .vc-moon-o[data-v-6c331e62],.days-nights .vc-sun-o[data-v-6c331e62]{margin-right:5px;width:16px;height:16px}.days-nights .vc-sun-o[data-v-6c331e62]{color:#ffb366}.days-nights .vc-moon-o[data-v-6c331e62]{color:#4d4d64}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-33ecfa4a\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/routines/Routine.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.wrapper-routine{\n\tbackground: url('/img/fondo-login.jpg');\n\tbackground-size:cover;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n\theight: 100vh;\n\twidth:100%;\n\tposition: absolute;\n}\n.wrapper-iframe{\n\tbackground-image: url('/img/loading.gif');\n\tbackground-size: 90px;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n}\niframe{\n\twidth: 100%!important;\n\theight: 350px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ba0d9948\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/login/Login.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.wrapper-login{\n\tbackground: url('/img/fondo-login.jpg');\n\tbackground-size:cover;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n\theight: 100vh;\n\twidth:100%;\n\tposition: absolute;\n\ttop:-50px;\n\tpadding-bottom: 60px;\n}\n.logo-login{\n\tdisplay: block;\n\twidth:150px;\n\tmargin:60px auto;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__("./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/v-calendar/lib/v-calendar.min.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/v-calendar/lib/v-calendar.min.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./v-calendar.min.css", function() {
			var newContent = require("!!../../css-loader/index.js!./v-calendar.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/v-calendar/lib/v-calendar.min.js":
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["v-calendar"]=e():t["v-calendar"]=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=59)}([function(t,e,n){"use strict";e.__esModule=!0;var r,i=n(31),a=(r=i,r&&r.__esModule?r:{default:r});e.default=a.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},function(t,e){t.exports=function(t,e,n,r,i,a){var o,s=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(o=t,s=t.default);var c="function"==typeof s?s.options:s;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId=i);var l;if(a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=l):r&&(l=r),l){var d=c.functional,f=d?c.render:c.beforeCreate;d?(c._injectStyles=l,c.render=function(t,e){return l.call(e),f(t,e)}):c.beforeCreate=f?[].concat(f,l):[l]}return{esModule:o,exports:s,options:c}}},function(t,e,n){"use strict";n.d(e,"x",function(){return d}),n.d(e,"n",function(){return f}),n.d(e,"c",function(){return h}),n.d(e,"j",function(){return p}),n.d(e,"q",function(){return v}),n.d(e,"i",function(){return y}),n.d(e,"d",function(){return m}),n.d(e,"o",function(){return b}),n.d(e,"k",function(){return g}),n.d(e,"w",function(){return w}),n.d(e,"u",function(){return _}),n.d(e,"t",function(){return O}),n.d(e,"v",function(){return C}),n.d(e,"h",function(){return M}),n.d(e,"p",function(){return x}),n.d(e,"l",function(){return k}),n.d(e,"m",function(){return S}),n.d(e,"f",function(){return Y}),n.d(e,"e",function(){return j}),n.d(e,"g",function(){return P}),n.d(e,"a",function(){return T}),n.d(e,"b",function(){return I}),n.d(e,"s",function(){return A}),n.d(e,"r",function(){return L});var r=n(0),i=n.n(r),a=n(3),o=n(4),s=n(8),u={},c=[31,28,31,30,31,30,31,31,30,31,30,31],l=new Date,d={year:l.getFullYear(),month:l.getMonth()+1,day:l.getDate()},f=function(t){var e,n=(e=t,Object(o.b)(e)?new Date(e.getTime()):Object(o.d)(e)?new Date(e):Object(o.f)(e)?Object(s.b)(e,["L","YYYY-MM-DD","YYYY/MM/DD"]):Object(o.e)(e)?new Date(e.year||l.getFullYear(),e.month||l.getMonth(),e.day||l.getDate()):new Date(e));return n&&{month:n.getMonth()+1,year:n.getFullYear()}},h=function(t,e){return Object(o.c)(t)?t(e):t},p=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e3,e=[],n=0;n<12;n++)e.push(new Date(t,n,15));return e},v=function(t){for(var e=t.firstDayOfWeek,n=void 0===e?1:e,r=t.year,i=void 0===r?2e3:r,a=t.utc,o=void 0!==a&&a,s=[],u=1,c=0;c<7;u++){var l=o?new Date(Date.UTC(i,0,u)):new Date(i,0,u);((o?l.getUTCDay():l.getDay())===n-1||c>0)&&(s.push(l),c++)}return s},y=function(t,e){var n=t+"."+e,r=u[n];if(!r){var i=a.a.firstDayOfWeek,o=e%4==0&&e%100!=0||e%400==0,s=new Date(e,t-1,1).getDay()+1,l=2===t&&o?29:c[t-1];r={firstDayOfWeek:i,inLeapYear:o,firstWeekday:s,days:l,weeks:Math.ceil((l+Math.abs(s-i))/7),month:t,year:e},u[n]=r}return r},m=function(t){if(t&&t.getTime)return y(t.getMonth()+1,t.getFullYear())},b=function(t,e){return 1===t?y(12,e-1):y(t-1,e)},g=function(t,e){return 12===t?y(1,e+1):y(t+1,e)};function D(t,e){return t&&e?t.year===e.year?t.month===e.month?0:t.month<e.month?-1:1:t.year<e.year?-1:1:0}var w=function(t,e){return 0===D(t,e)},_=function(t,e){return-1===D(t,e)},O=function(t,e){return 1===D(t,e)},C=function(t,e,n){return!!t&&!_(t,e)&&!O(t,n)},M=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce(function(t,e){return t?e?1===D(t,e)?t:e:t:e})},x=function(t){if(t){var e=b(t.month,t.year);return{month:e.month,year:e.year}}},k=function(t){if(t){var e=g(t.month,t.year);return{month:e.month,year:e.year}}},S=function(t,e,n){if(t&&!(e&&-1===D(t,e)||n&&1===D(t,n)))return t},Y=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.find(function(t){return!!t})},j=function(t,e){return t&&t.length?t[0]:e},P=function(t,e){return t&&t.length?t[t.length-1]:e},T=function(t){return Object(o.a)(t)&&t.length},I=function(t,e){return!!function t(e,n){return e?n(e)?e:t(e.parentElement,n):null}(t,function(t){return t===e})},A=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"key";return t&&t.length?t.reduce(function(t,n){return t[n[e]]=n,t},{}):{}},L=function(t,e,n){var r=[];return n.forEach(function(n){var a=n.name||n.toString(),s=n.mixin,u=n.validate;if(Object.prototype.hasOwnProperty.call(t,a)){var c=u?u(t[a]):t[a];e[a]=s&&Object(o.e)(c)?i()({},s,c):c,r.push(a)}}),{target:e,assigned:r.length?r:null}}},function(t,e,n){"use strict";n.d(e,"c",function(){return l}),n.d(e,"b",function(){return d});var r=n(31),i=n.n(r),a=n(0),o=n.n(a),s=n(47),u=n(4),c={componentPrefix:"v",firstDayOfWeek:1,navVisibility:"focus",titlePosition:"center",titleTransition:"slide-h",weeksTransition:"slide-h",paneWidth:256,showLinkedButtons:!1,formats:{title:"MMMM YYYY",weekdays:"W",navMonths:"MMM",input:["L","YYYY-MM-DD","YYYY/MM/DD"],dayPopover:"WWW, MMM D, YYYY",data:["L","YYYY-MM-DD","YYYY/MM/DD"]},datePickerInputProps:function(t){var e=t.dragValue,n=t.mode,r=t.format;return o()({},"single"===n&&{style:{minWidth:"100px"},placeholder:r},"multiple"===n&&{style:{minWidth:"200px"},placeholder:r+", ..."},"range"===n&&{style:o()({minWidth:"150px"},e&&{color:"rgba(0, 0, 0, 0.3)"}),placeholder:r+" - "+r})},datePickerUpdateOnInput:!1,datePickerTintColor:"#66B3CC",datePickerShowCaps:!1,datePickerShowDayPopover:!0,datePickerDisabledAttribute:{contentStyle:function(t){var e=t.isHovered;return o()({color:"#d98c8c",fontWeight:600,opacity:.6,borderRadius:"0"},e&&{cursor:"not-allowed",backgroundColor:"transparent"})}},popoverExpanded:!1,popoverDirection:"bottom",popoverAlign:"left",popoverVisibility:s.a.HOVER,popoverContentOffset:10,popoverKeepVisibleOnInput:!1,maxSwipeTime:300,minHorizontalSwipeDistance:60,maxVerticalSwipeDistance:80,maxTapTolerance:0,maxTapDuration:200,highlight:{animated:!0,height:"1.8rem",borderWidth:"0",borderStyle:"solid",opacity:1},highlightCaps:{animated:!0,height:"1.8rem",borderWidth:"0",borderStyle:"solid",opacity:1},dot:{diameter:"5px",backgroundColor:"#66b3cc",borderWidth:"0",borderStyle:"solid",borderRadius:"50%",opacity:1},bar:{height:"3px",backgroundColor:"#66b3cc",borderWidth:"0",borderStyle:"solid",opacity:1},themeStyles:{wrapper:{backgroundColor:"#fafafa",border:"1px solid #dadada"},verticalDivider:{borderLeft:"1px solid #dadada"},horizontalDivider:{borderTop:"1px solid #dadada"},pane:null,header:null,headerTitle:null,headerArrows:null,headerHorizontalDivider:null,weekdays:null,weekdaysHorizontalDivider:null,weeks:null,dayCell:null,dayCellNotInMonth:{opacity:.4},dayContent:null,dayContentHover:null,dots:null,bars:null,dayPopoverContent:{color:"#333333",fontSize:".8rem",whiteSpace:"nowrap"},navHeader:null,navHeaderTitle:null,navHeaderArrows:null,navMonthCell:null,navYearCell:null}};e.a=c;var l=function(t,e){return Object(u.e)(t)&&t||Object(u.c)(t)&&t(e)||t},d=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return i.a.apply(Object,[c].concat(e))}},function(t,e,n){"use strict";n.d(e,"d",function(){return i}),n.d(e,"b",function(){return a}),n.d(e,"f",function(){return o}),n.d(e,"a",function(){return s}),n.d(e,"e",function(){return u}),n.d(e,"c",function(){return c});var r=function(t){return Object.prototype.toString.call(t).slice(8,-1)},i=function(t){return"Number"===r(t)},a=function(t){return"Date"===r(t)},o=function(t){return"String"===r(t)},s=function(t){return"Array"===r(t)},u=function(t){return"Object"===r(t)},c=function(t){return"Function"===r(t)}},function(t,e){var n=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(37)("wks"),i=n(38),a=n(9).Symbol,o="function"==typeof a;(t.exports=function(t){return r[t]||(r[t]=o&&a[t]||(o?a:i)("Symbol."+t))}).store=r},function(t,e,n){var r=n(9),i=n(5),a=n(40),o=n(18),s="prototype",u=function(t,e,n){var c,l,d,f=t&u.F,h=t&u.G,p=t&u.S,v=t&u.P,y=t&u.B,m=t&u.W,b=h?i:i[e]||(i[e]={}),g=b[s],D=h?r:p?r[e]:(r[e]||{})[s];h&&(n=e);for(c in n)(l=!f&&D&&void 0!==D[c])&&c in b||(d=l?D[c]:n[c],b[c]=h&&"function"!=typeof D[c]?n[c]:y&&l?a(d,r):m&&D[c]==d?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[s]=t[s],e}(d):v&&"function"==typeof d?a(Function.call,d):d,v&&((b.virtual||(b.virtual={}))[c]=d,t&u.R&&g&&!g[c]&&o(g,c,d)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e,n){"use strict";n.d(e,"a",function(){return p}),n.d(e,"b",function(){return v});var r=n(3),i=n(4),a=/d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,o=/\d\d?/,s=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i,u=/\[([^]*?)\]/gm,c=function(){};function l(t){return function(e,n,r){var i=r[t].indexOf(n.charAt(0).toUpperCase()+n.substr(1).toLowerCase());~i&&(e.month=i)}}function d(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t}var f={D:function(t){return t.getDate()},DD:function(t){return d(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return t.getDay()},dd:function(t){return d(t.getDay())},W:function(t,e){return e.dayNamesNarrow[t.getDay()]},WW:function(t,e){return e.dayNamesShorter[t.getDay()]},WWW:function(t,e){return e.dayNamesShort[t.getDay()]},WWWW:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return t.getMonth()+1},MM:function(t){return d(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return String(t.getFullYear()).substr(2)},YYYY:function(t){return d(t.getFullYear(),4)},h:function(t){return t.getHours()%12||12},hh:function(t){return d(t.getHours()%12||12)},H:function(t){return t.getHours()},HH:function(t){return d(t.getHours())},m:function(t){return t.getMinutes()},mm:function(t){return d(t.getMinutes())},s:function(t){return t.getSeconds()},ss:function(t){return d(t.getSeconds())},S:function(t){return Math.round(t.getMilliseconds()/100)},SS:function(t){return d(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return d(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+d(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)}},h={D:[o,function(t,e){t.day=e}],Do:[new RegExp(o.source+s.source),function(t,e){t.day=parseInt(e,10)}],d:[o,c],W:[s,c],M:[o,function(t,e){t.month=e-1}],MMM:[s,l("monthNamesShort")],MMMM:[s,l("monthNames")],YY:[o,function(t,e){var n=+(new Date).getFullYear().toString().substr(0,2);t.year=""+(e>68?n-1:n)+e}],YYYY:[/\d{4}/,function(t,e){t.year=e}],S:[/\d/,function(t,e){t.millisecond=100*e}],SS:[/\d{2}/,function(t,e){t.millisecond=10*e}],SSS:[/\d{3}/,function(t,e){t.millisecond=e}],h:[o,function(t,e){t.hour=e}],m:[o,function(t,e){t.minute=e}],s:[o,function(t,e){t.second=e}],a:[s,function(t,e,n){var r=e.toLowerCase();r===n.amPm[0]?t.isPm=!1:r===n.amPm[1]&&(t.isPm=!0)}],ZZ:[/([\+\-]\d\d:?\d\d|Z)/,function(t,e){"Z"===e&&(e="+00:00");var n=(""+e).match(/([+-]|\d\d)/gi);if(n){var r=60*n[1]+parseInt(n[2],10);t.timezoneOffset="+"===n[0]?r:-r}}]};h.DD=h.D,h.dd=h.d,h.WWWW=h.WWW=h.WW=h.W,h.MM=h.M,h.mm=h.m,h.hh=h.H=h.HH=h.h,h.ss=h.s,h.A=h.a;var p=function(t,e){if("number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date in fecha.format");var n=[];return(e=(e=(e=r.a.masks[e]||e).replace(u,function(t,e){return n.push(e),"??"})).replace(a,function(e){return e in f?f[e](t,r.a):e.slice(1,e.length-1)})).replace(/\?\?/g,function(){return n.shift()})},v=function(t,e){return(Object(i.a)(e)&&e||[Object(i.f)(e)&&e||"YYYY-MM-DD"]).map(function(e){return function(t,e){if("string"!=typeof e)throw new Error("Invalid mask in fecha.parse");if(e=r.a.masks[e]||e,t.length>1e3)return!1;var n=!0,i={};if(e.replace(a,function(e){if(h[e]){var a=h[e],o=t.search(a[0]);~o?t.replace(a[0],function(e){return a[1](i,e,r.a),t=t.substr(o+e.length),e}):n=!1}return h[e]?"":e.slice(1,e.length-1)}),!n)return!1;var o=new Date;!0===i.isPm&&null!=i.hour&&12!=+i.hour?i.hour=+i.hour+12:!1===i.isPm&&12==+i.hour&&(i.hour=0);var s=void 0;return null!=i.timezoneOffset?(i.minute=+(i.minute||0)-+i.timezoneOffset,s=new Date(Date.UTC(i.year||o.getFullYear(),i.month||0,i.day||1,i.hour||0,i.minute||0,i.second||0,i.millisecond||0))):s=new Date(i.year||o.getFullYear(),i.month||0,i.day||1,i.hour||0,i.minute||0,i.second||0,i.millisecond||0),s}(t,e)}).find(function(t){return t})||new Date(t)}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(19),i=n(67),a=n(68),o=Object.defineProperty;e.f=n(11)?Object.defineProperty:function(t,e,n){if(r(t),e=a(e,!0),r(n),i)try{return o(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){t.exports=!n(20)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";e.__esModule=!0;var r,i=n(74),a=(r=i,r&&r.__esModule?r:{default:r});e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,a.default)(t)}},function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(0),i=n.n(r),a=n(14),o=n.n(a),s={methods:{mergeListeners:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.$listeners;return o()(t).reduce(function(e,n){return e[n]=e[n]?[e[n],t[n]]:t[n],e},i()({},e))}}}},function(t,e,n){t.exports={default:n(60),__esModule:!0}},function(t,e,n){var r=n(25);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(62),i=n(39);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(10),i=n(30);t.exports=n(11)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(29);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){"use strict";var r=n(43);var i=function(t){n(73)},a=n(1)(r.a,null,!1,i,"data-v-bc55024c",null);e.a=a.exports},function(t,e,n){"use strict";var r=n(46),i=n(101);var a=function(t){n(95)},o=n(1)(r.a,i.a,!1,a,"data-v-1ad2436f",null);e.a=o.exports},function(t,e,n){"use strict";e.a=v;var r=n(0),i=n.n(r),a=n(14),o=n.n(a),s=n(4),u=n(3),c=n(2),l=n(8),d=864e5;function f(t,e){var n=t.toRange(),r=e.toRange(),i=null,a=null;return n.start?i=r.start?n.start<r.start?n.start:r.start:n.start:r.start&&(i=r.start),n.end&&(!i||n.end>=i)&&(a=n.end),r.end&&(!i||r.end>=i)&&(!a||r.end<a)&&(a=r.end),{start:i,end:a}}function h(t,e){return t.isDate?e.isDate?t.dateTime===e.dateTime:!(!e.startTime||!e.endTime)&&(t.dateTime===e.startTime&&t.dateTime===e.endTime):e.isDate?!(t.start&&e.date<t.start)&&!(t.end&&e.date>t.end):!(t.start&&(!e.start||e.start<t.start))&&!(t.end&&(!e.end||e.end>t.end))}function p(t){if(!t)return null;var e=t.getMonth()+1,n=t.getUTCFullYear(),r=Object(c.i)(e,n),i=t.getDate(),a=r.days-i+1,o=t.getDay()+1,s=Math.floor((i-1)/7+1),u=Math.floor((r.days-i)/7+1),l=Math.ceil((i+Math.abs(r.firstWeekday-r.firstDayOfWeek))/7);return{day:i,dayFromEnd:a,weekday:o,weekdayOrdinal:s,weekdayOrdinalFromEnd:u,week:l,weekFromEnd:r.weeks-l+1,month:e,year:n,date:t,dateTime:t.getTime()}}function v(t,e){var n=new Date(t);return n.setDate(n.getDate()+e),n}function y(t,e){var n=t.start,r=t.end;if(!n||!r||!Object(s.c)(e))return null;for(var i={i:0,date:n,day:p(n),finished:!1},a=null;!i.finished&&i.date<=r;i.i++)a=e(i),i.date=v(i.date,1),i.day=p(i.date);return a}function m(t){var e=t.getDay()+1,n=u.a.firstDayOfWeek;return v(t,e>=n?n-e:-(7-(n-e)))}function b(t,e){return Math.round((e-t)/d)}function g(t,e){return b(m(t),m(e))}function D(t,e){return e.getUTCFullYear()-t.getUTCFullYear()}function w(t,e){return 12*D(t,e)+(e.getMonth()-t.getMonth())}var _={dailyInterval:{test:function(t,e,n){return b(n.start||new Date,t.date)%e==0}},weeklyInterval:{test:function(t,e,n){return g(n.start||new Date,t.date)%e==0}},monthlyInterval:{test:function(t,e,n){return w(n.start||new Date,t.date)%e==0}},yearlyInterval:{test:function(){return function(t,e,n){return D(n.start||new Date,t.date)%e==0}}},days:{validate:function(t){return Object(s.a)(t)?t:[parseInt(t,10)]},test:function(t,e){return e.includes(t.day)||e.includes(-t.dayFromEnd)}},weekdays:{validate:function(t){return Object(s.a)(t)?t:[parseInt(t,10)]},test:function(t,e){return e.includes(t.weekday)}},ordinalWeekdays:{validate:function(t){return o()(t).reduce(function(e,n){var r=t[n];return r?(e[n]=Object(s.a)(r)?r:[parseInt(r,10)],e):e},{})},test:function(t,e){return o()(e).map(function(t){return parseInt(t,10)}).find(function(n){return e[n].includes(t.weekday)&&(n===t.weekdayOrdinal||n===-t.weekdayOrdinalFromEnd)})}},weekends:{validate:function(t){return t},test:function(t){return 1===t.weekday||7===t.weekday}},workweek:{validate:function(t){return t},test:function(t){return t.weekday>=2&&t.weekday<=6}},weeks:{validate:function(t){return Object(s.a)(t)?t:[parseInt(t,10)]},test:function(t,e){return e.includes(t.week)||e.includes(-t.weekFromEnd)}},months:{validate:function(t){return Object(s.a)(t)?t:[parseInt(t,10)]},test:function(t,e){return e.includes(t.month)}},years:{validate:function(t){return Object(s.a)(t)?t:[parseInt(t,10)]},test:function(t,e){return e.includes(t.year)}}},O=o()(_).map(function(t){return{name:t,validate:_[t].validate}}),C=function(t,e,n){return Object(s.c)(t)?t(e):Object(s.e)(t)?o()(t).every(function(r){return _[r].test(e,t[r],n)}):null};e.b=function t(e,n){if(!e)return null;var r={isDateInfo:!0,isDate:Object(s.b)(e)||Object(s.f)(e)||Object(s.d)(e),isRange:Object(s.e)(e)||Object(s.c)(e),order:n||0};if(r.isDate){r.type="date";var a=!Object(s.f)(e)&&new Date(e)||Object(l.b)(e,u.a.formats.data||["L","YYYY-MM-DD","YYYY/MM/DD"]);if(isNaN(a))return null;a.setHours(0,0,0,0),r.date=a,r.dateTime=a.getTime()}if(r.isRange){if(r.type="range",Object(s.c)(e))r.on={and:e};else{var o=e.start&&new Date(e.start),d=e.end&&new Date(e.end);if(o&&d&&o>d){var p=o;o=d,d=p}else o&&e.span>=1&&(d=v(o,e.span-1));o&&(isNaN(o.getTime())?o=null:o.setHours(0,0,0,0)),d&&(isNaN(d.getTime())?d=null:d.setHours(0,0,0,0)),r.start=o,r.end=d,r.startTime=o&&o.getTime(),r.endTime=d&&d.getTime(),o&&d&&(r.daySpan=b(o,d),r.weekSpan=g(o,d),r.monthSpan=w(o,d),r.yearSpan=D(o,d));var m=Object(c.r)(e,{},O);if(m.assigned&&(r.on={and:m.target}),e.on){var _=(Object(s.a)(e.on)?e.on:[e.on]).map(function(t){if(Object(s.c)(t))return t;var e=Object(c.r)(t,{},O);return e.assigned?e.target:null}).filter(function(t){return t});_.length&&(r.on=i()({},r.on,{or:_}))}}r.isComplex=!!r.on}return r.shallowIntersectsDate=function(e){return n=r,i=e.isDate?e:t(e),n.isDate?i.isDate?n.dateTime===i.dateTime:h(i,n):i.isDate?h(n,i):!(n.start&&i.end&&n.start>i.end||n.end&&i.start&&n.end<i.start);var n,i},r.intersectsDate=function(e){var n=e.isDateInfo?e:t(e);if(!r.shallowIntersectsDate(n))return null;if(!r.on)return r;var i=!1;return y(f(r,n),function(t){r.matchesDay(t.day)&&(i=i||n.matchesDay(t.day),t.finished=i)}),i},r.shallowIncludesDate=function(e){return h(r,e.isDate?e:t(e))},r.includesDate=function(e){var n=e.isDateInfo?e:t(e);if(!r.shallowIncludesDate(n))return!1;if(!r.on)return!0;var i=!0;return y(f(r,n),function(t){r.matchesDay(t.day)&&(i=i&&n.matchesDay(t.day),t.finished=!i)}),i},r.includesDay=function(e){var n=t(e.date);return r.shallowIncludesDate(n)&&r.matchesDay(e)?r:null},r.matchesDay=function(t){return!(r.on&&(r.on.and&&!C(r.on.and,t,r)||r.on.or&&!r.on.or.find(function(e){return C(e,t,r)})))},r.toRange=function(){return r.isDate?t({start:r.date,end:r.date}):t({start:r.start,end:r.end})},r.compare=function(t){if(r.order!==t.order)return r.order-t.order;if(r.type!==t.type)return r.isDate?1:-1;if(r.isDate)return 0;var e=r.start-t.start;return 0!==e?e:r.end-t.end},r}},function(t,e,n){"use strict";n.d(e,"e",function(){return o}),n.d(e,"f",function(){return l}),n.d(e,"b",function(){return h}),n.d(e,"c",function(){return p}),n.d(e,"d",function(){return D});var r=n(4),i=n(2),a=n(23),o=function(t){return Object(r.b)(t)&&!isNaN(t.getTime())},s=function(t,e){return o(t)?e(t):""},u=function(t,e){var n=e(t.trim());return o(n)?n:null},c=function(t){var e=t.value,n=t.isRequired,r=t.disabled,i=t.fallbackValue;return!o(e)&&n?i:o(e)&&r&&r.intersectsDate(e)?null:e},l=function(t,e){return!o(t)&&!o(e)||!(!o(t)||!o(e))&&t.getTime()===e.getTime()},d=function(t){if(!o(t))return null;var e=Object(i.d)(t);return{from:e,to:e}},f=function(t,e){return{componentName:"single-date-picker",hasValue:o,formatValue:function(e){return s(e,t)},parseValue:function(t){return u(t,e)},normalizeValue:function(t){return(e=t)&&new Date(e);var e},filterDisabled:c,valuesAreEqual:l,getPageRange:d}},h=function(t){return Object(i.a)(t)},p=function(t){if(!t||!t.length)return null;var e={};return t.filter(function(t){var n=t.getTime();return!Object.prototype.hasOwnProperty.call(e,n)&&(e[n]=!0)}).sort(function(t,e){return t.getTime()-e.getTime()})},v=function(t){var e=t.value,n=t.isRequired,r=t.disabled,i=t.fallbackValue,a=e&&e.filter(function(t){return!r||!r.intersectsDate(t)});return!h(a)&&n?i:a},y=function(t,e){var n=Object(i.a)(t),r=Object(i.a)(e);return!n&&!r||!(!n||!r||n!==r)&&t.every(function(t){return e.includes(t)})},m=function(t){if(!h(t))return null;var e=Object(i.d)(t[0]);return{from:e,to:Object(i.h)(Object(i.d)(Object(i.g)(t)),Object(i.l)(e))}},b=function(t,e){return{componentName:"multiple-date-picker",hasValue:h,formatValue:function(e){return r=t,h(n=e)?n.map(function(t){return r(t)}).join(", "):"";var n,r},parseValue:function(t){return function(t,e){var n=t&&t.split(",").map(function(t){return u(t,e)}).filter(function(t){return o(t)});return n&&n.length?n:null}(t,e)},normalizeValue:function(t){return p(t)},filterDisabled:v,valuesAreEqual:y,getPageRange:m}},g=function(t){return t&&t.start&&t.end},D=function(t){if(!t||!t.start||!t.end)return null;var e=new a.b({start:new Date(t.start),end:new Date(t.end)});return{start:e.start,end:e.end}},w=function(t){var e=t.value,n=t.isRequired,r=t.disabled,i=t.fallbackValue;return!g(e)&&n?i:g(e)&&r&&r.intersectsDate(e)?null:e},_=function(t,e){return!g(t)&&!g(e)||!(!g(t)||!g(e))&&(l(t.start,e.start)&&l(t.end,e.end))},O=function(t){if(!g(t))return null;var e=Object(i.d)(t.start);return{from:e,to:Object(i.h)(Object(i.d)(t.end),Object(i.l)(e))}},C=function(t,e){return{componentName:"date-range-picker",hasValue:g,formatValue:function(e,n){return function(t,e,n){var r=void 0,i=void 0;return e?(r=s(e.start,n),i=s(e.end,n)):t&&(r=s(t.start,n),i=s(t.end,n)),r||i?i?r+" - "+i:r:""}(e,n,t)},normalizeValue:function(t){return D(t)},parseValue:function(t){return function(t,e){var n=t.split("-").map(function(t){return t.trim()});if(n.length>=2){var r=Object(a.b)({start:u(n[0],e),end:u(n[1],e)}),i=r.start,o=r.end;return i&&o&&{start:i,end:o}}return null}(t,e)},filterDisabled:w,valuesAreEqual:_,getPageRange:O}};e.a=function(t,e,n){switch(t){case"single":return f(e,n);case"multiple":return b(e,n);case"range":return C(e,n);default:return null}}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(34),i=n(25);t.exports=function(t){return r(i(t))}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(37)("keys"),i=n(38);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){t.exports={default:n(69),__esModule:!0}},function(t,e){t.exports={}},function(t,e,n){"use strict";var r=n(52),i=n(118);var a=function(t){n(117)},o=n(1)(r.a,i.a,!1,a,"data-v-12e91ab4",null);e.a=o.exports},function(t,e,n){var r=n(35);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(27),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(9),i="__core-js_shared__",a=r[i]||(r[i]={});t.exports=function(t){return a[t]||(a[t]={})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(66);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(29),i=n(9).document,a=r(i)&&r(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){"use strict";var r=n(12),i=n.n(r),a=n(0),o=n.n(a),s=n(93),u=n(121),c=n(3),l=n(13),d=n(2);e.a={mixins:[l.a],render:function(t){var e=this,n=function(n){return t(s.a,{attrs:o()({},e.$attrs,{position:n,page:n<2?e.fromPage_:e.toPage_,minPage:n<2?e.minPage_:e.minToPage,maxPage:n<2?e.maxFromPage:e.maxPage_,hideRightButton:!e.showLinkedButtons&&1===n&&e.isLinked&&!e.isVertical,hideLeftButton:!e.showLinkedButtons&&2===n&&e.isLinked&&!e.isVertical,paneWidth:e.paneWidth,styles:e.themeStyles_,attributes:e.attributes_,formats:e.formats_}),on:e.mergeListeners({"update:page":function(t){n<2?e.fromPage_=t:e.toPage_=t}}),slots:e.$slots,scopedSlots:e.$scopedSlots})};return t("div",{class:{"c-pane-container":!0,"is-vertical":this.isVertical,"is-expanded":this.isExpanded},style:this.wrapperStyle,ref:"root"},[n(this.isDoublePaned_?1:0)].concat(i()(this.isDoublePaned_&&[t("div",{class:"c-pane-div",style:this.dividerStyle}),n(2)])))},name:"VCalendar",components:{CalendarPane:s.a},props:{minDate:Date,maxDate:Date,minPage:Object,maxPage:Object,fromPage:Object,toPage:Object,showLinkedButtons:{type:Boolean,default:function(){return c.a.showLinkedButtons}},isDoublePaned:Boolean,isLinked:Boolean,isVertical:Boolean,isExpanded:Boolean,paneWidth:{type:Number,default:function(){return c.a.paneWidth}},themeStyles:Object,attributes:Array,formats:Object},data:function(){return{isConstrained:!0,fromPage_:null,toPage_:null}},computed:{isDoublePaned_:function(){return this.isDoublePaned&&(this.isVertical||!this.isConstrained)},minPage_:function(){return this.minPage||this.minDate&&Object(d.n)(this.minDate)||null},rightButtonHidden:function(){return 1===this.position&&this.isLinked&&!this.isVertical},leftButtonHidden:function(){return 2===this.position&&this.isLinked&&!this.isVertical},maxPage_:function(){return this.maxPage||this.maxDate&&Object(d.n)(this.maxDate)||null},maxFromPage:function(){return this.isDoublePaned_?Object(d.p)(this.maxPage_):this.maxPage_},minToPage:function(){return this.isDoublePaned_?Object(d.l)(this.minPage_):null},themeStyles_:function(){return o()({},c.a.themeStyles,this.themeStyles)},wrapperStyle:function(){return this.themeStyles_.wrapper},dividerStyle:function(){return this.isVertical?this.themeStyles_.horizontalDivider:this.themeStyles_.verticalDivider},attributes_:function(){return Object(u.a)(this.attributes)},formats_:function(){return o()({},c.a.formats,this.formats)}},watch:{fromPage:function(){this.refreshFromPage()},toPage:function(){this.refreshToPage()},fromPage_:function(t,e){Object(d.w)(t,e)||(this.$emit("update:frompage",t),this.$emit("update:fromPage",t),this.isDoublePaned&&(!this.isLinked&&Object(d.u)(t,this.toPage_)||(this.toPage_=Object(d.l)(t))))},toPage_:function(t,e){Object(d.w)(t,e)||(this.$emit("update:topage",t),this.$emit("update:toPage",t),this.isDoublePaned&&(!this.isLinked&&Object(d.t)(t,this.fromPage_)||(this.fromPage_=Object(d.p)(t))))},isDoublePaned_:function(){this.refreshIsConstrained(),this.refreshToPage()},isLinked:function(t){t&&(this.toPage_=Object(d.l)(this.fromPage_))},isExpanded:function(){this.refreshIsConstrained()}},created:function(){this.refreshFromPage(),this.refreshToPage()},mounted:function(){var t=this;this.$nextTick(function(){t.refreshIsConstrained(),window.addEventListener("resize",t.refreshIsConstrained)})},beforeDestroy:function(){window.removeEventListener("resize",this.refreshIsConstrained)},methods:{refreshFromPage:function(){var t=this;this.fromPage_=d.f.apply(void 0,i()([this.fromPage,{month:d.x.month,year:d.x.year}].map(function(e){return Object(d.m)(e,t.minPage_,t.maxPage_)})).concat([this.minPage_,Object(d.p)(this.maxPage_)]))},refreshToPage:function(){var t=this;this.toPage_=d.f.apply(void 0,i()([this.toPage,Object(d.l)(this.fromPage_)].map(function(e){return Object(d.m)(e,t.minPage_,t.maxPage_)})).concat([this.maxPage_,Object(d.l)(this.minPage_)]))},refreshIsConstrained:function(){var t=this.$refs.root;window&&t&&this.isDoublePaned&&!this.isVertical?window&&window.innerWidth<2*this.paneWidth+30?this.isConstrained=!0:this.isExpanded?this.isConstrained=t.parentElement.offsetWidth<2*this.paneWidth+2:this.isConstrained=!1:this.isConstrained=!1}}}},function(t,e,n){var r=n(10).f,i=n(17),a=n(6)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,a)&&r(t,a,{configurable:!0,value:e})}},function(t,e,n){"use strict";var r=n(0),i=n.n(r),a=n(22),o=n(102),s=n(111),u=n(33),c=n(3),l=n(2),d=n(8),f=n(2);e.a={components:{CalendarWeeks:o.a,CalendarNav:s.a,Popover:a.a,SvgIcon:u.a},props:{position:{type:Number,default:1},page:{type:Object,default:function(){return f.x}},navVisibility:{type:String,default:function(){return c.a.navVisibility}},minPage:Object,maxPage:Object,styles:Object,formats:Object,titlePosition:{type:String,default:function(){return c.a.titlePosition}},titleTransition:{type:String,default:function(){return c.a.titleTransition}},weeksTransition:{type:String,default:function(){return c.a.weeksTransition}},paneWidth:Number,hideLeftButton:Boolean,hideRightButton:Boolean},data:function(){return{todayComps:f.x,pages:[],page_:null,transitionDirection:"",touchState:{},navForceHidden:!1,weeksTransitioning:!1,moveTimeout:null}},computed:{navSlots:function(){var t=this;return["nav-left-button","nav-right-button"].filter(function(e){return t.$scopedSlots[e]})},weekdayLabels:function(){var t=this;return Object(l.q)({firstDayOfWeek:c.a.firstDayOfWeek}).map(function(e){return Object(d.a)(e,t.formats.weekdays)})},titleClass:function(){return this.titlePosition?"align-"+this.titlePosition:""},titleTransition_:function(){return this.getTransitionName("title",this.titleTransition,this.transitionDirection)},weeksTransition_:function(){return this.getTransitionName("weeks",this.weeksTransition,this.transitionDirection)},paneStyle:function(){return{minWidth:this.paneWidth+"px"}},headerStyle:function(){return Object(l.c)(this.styles.header,this.page_)},titleStyle:function(){return Object(l.c)(this.styles.headerTitle,this.page_)},arrowStyle:function(){return Object(l.c)(this.styles.headerArrows,this.page_)},headerHorizontalDividerStyle_:function(){return Object(l.c)(this.styles.headerHorizontalDivider,this.page_)},weekdaysStyle_:function(){return Object(l.c)(this.styles.weekdays,this.page_)},weekdaysHorizontalDividerStyle_:function(){return Object(l.c)(this.styles.weekdaysHorizontalDivider,this.page_)},weeksStyle_:function(){return i()({},Object(l.c)(this.styles.weeks,this.page_),this.weeksTransitioning?{overflow:"hidden"}:null)},navWrapperStyle:function(){return i()({padding:"1px"},Object(l.c)(this.styles.navWrapper,this.page_))},canMovePrevMonth:function(){return this.canMove(this.page_.prevMonthComps)},canMoveNextMonth:function(){return this.canMove(this.page_.nextMonthComps)}},watch:{page:function(t){this.move(t)},page_:function(t,e){this.transitionDirection=this.getTransitionDirection(e,t)}},created:function(){this.page?this.page_=this.loadPage(this.page):(this.page_=this.loadPage(f.x),this.$emit("update:page",this.page_)),this.preloadPages()},methods:{navPageSelected:function(t){this.navForceHidden=!0,this.move(t)},monthIsDisabled:function(t){return this.minPage&&this.yearNumber===this.minPage.year?t<this.minPage.month:!(!this.maxPage||this.yearNumber!==this.maxPage.year)&&t>this.maxPage.month},yearIsDisabled:function(t){return!!(this.minPage&&t<this.minPage.year)||!!(this.maxPage&&t>this.maxPage.year)},touchStart:function(t){var e=t.changedTouches[0];this.touchState={active:!0,startX:e.screenX,startY:e.screenY,startTime:(new Date).getTime(),isSwiping:!1,isMonitoringSwipe:!0}},touchMove:function(t){if(this.touchState.isMonitoringSwipe){if((new Date).getTime()-this.touchState.startTime<=5)t.preventDefault();else{var e=t.changedTouches[0],n=e.screenX-this.touchState.startX,r=e.screenY-this.touchState.startY;Math.abs(n)>=Math.abs(r)&&(this.touchState.isSwiping=!0,t.preventDefault()),this.touchState.isMonitoringSwipe=!1}}else this.touchState.isSwiping&&t.preventDefault()},touchEnd:function(t){var e=t.changedTouches[0],n=e.screenX-this.touchState.startX,r=e.screenY-this.touchState.startY;(new Date).getTime()-this.touchState.startTime<c.a.maxSwipeTime&&Math.abs(n)>=c.a.minHorizontalSwipeDistance&&Math.abs(r)<=c.a.maxVerticalSwipeDistance&&(n<0?this.moveNextMonth():this.movePrevMonth())},canMove:function(t){return(!this.minPage||!Object(f.u)(t,this.minPage))&&(!this.maxPage||!Object(f.t)(t,this.maxPage))},movePrevYear:function(){this.move({month:this.page_.month,year:this.page_.year-1})},movePrevMonth:function(){this.move(this.page_.prevMonthComps)},moveThisMonth:function(){this.move(f.x)},moveNextMonth:function(){this.move(this.page_.nextMonthComps)},moveNextYear:function(){this.move({month:this.page_.month,year:this.page_.year+1})},move:function(t){this.canMove(t)?this.forceMove(t):Object(f.u)(f.x,this.minPage)?this.forceMove(this.minPage):Object(f.t)(t,this.maxPage)&&this.forceMove(this.maxPage)},forceMove:function(t){var e=new Date;this.moveTimeout&&e<this.moveTimeout||(this.moveTimeout=new Date(e.getTime()+250),!t||t.month===this.page_.month&&t.year===this.page_.year||(this.page_=this.loadPage(t),this.$emit("update:page",this.page_),this.preloadPages()))},loadPage:function(t){var e=this,n=t.month,r=t.year,i=r.toString()+"."+n.toString(),a=this.pages.find(function(t){return t.key===i});if(!a){var o=new Date(r,n-1,15),s=Object(f.i)(n,r),u=Object(f.o)(n,r),c=Object(f.k)(n,r);a={key:i,month:n,year:r,title:Object(d.a)(o,this.formats.title),shortMonthLabel:Object(d.a)(o,"MMM"),monthLabel:Object(d.a)(o,"MMMM"),shortYearLabel:r.toString().substring(2),yearLabel:r.toString(),monthComps:s,prevMonthComps:u,nextMonthComps:c,canMove:function(t){return e.canMove(t)},move:function(t){return e.move(t)},moveThisMonth:function(){return e.moveThisMonth()},movePrevMonth:function(){return e.move(u)},moveNextMonth:function(){return e.move(c)}},this.pages.push(a)}return a.position=this.position,a.loaded=!0,a},preloadPages:function(){var t=this;this.$nextTick(function(){t.loadPage(t.page_.prevMonthComps),t.loadPage(t.page_.nextMonthComps),t.pages=t.pages.filter(function(t){return t.loaded}),t.pages.forEach(function(t){t.loaded=!1})})},getTransitionDirection:function(t,e){return t&&e?t.year!==e.year?t.year<e.year?"next":"prev":t.month!==e.month?t.month<e.month?"next":"prev":"":""},getTransitionName:function(t,e,n){return"slide-h"===e?t+"-"+("next"===n?"slide-left":"slide-right"):"slide-v"===e?t+"-"+("next"===n?"slide-up":"slide-down"):t+"-"+e}}}},function(t,e,n){"use strict";var r=n(96),i=n.n(r),a=n(3),o=n(100),s=n(2),u=n(47);e.a={props:{isExpanded:{type:Boolean,default:function(){return a.a.popoverExpanded}},direction:{type:String,default:function(){return a.a.popoverDirection}},align:{type:String,default:function(){return a.a.popoverAlign}},visibility:{type:String,default:function(){return a.a.popoverVisibility}},isInteractive:Boolean,forceHidden:Boolean,toggleVisibleOnClick:Boolean,contentStyle:Object,contentOffset:{type:Number,default:function(){return a.a.popoverContentOffset}},transition:{type:String,default:"slide-fade"},showClearMargin:Boolean},data:function(){return{hoverVisible:!1,focusVisible:!1,clearMargin:0,contentTransitioning:!1,contentTransitioningCancelled:!1,disableNextClick:!1,windowTapClickRegistration:null}},computed:{containerStyle:function(){return this.visible&&i()({},"margin-"+this.direction,this.clearMargin+"px")},contentWrapperStyle:function(){var t={};return t["padding"+this.contentOffsetDirection]=this.contentOffset+"px",t},contentOffsetDirection:function(){switch(this.direction){case"bottom":return"Top";case"top":return"Bottom";case"left":return"Right";case"right":return"Left";default:return""}},visibilityIsManaged:function(){return u.a.isManaged(this.visibility)},visible:function(){return this.visibility===u.a.HOVER?this.hoverVisible:this.visibility===u.a.FOCUS?this.focusVisible:this.visibility===u.a.VISIBLE}},watch:{forceHidden:function(){this.hoverVisible||this.focusVisible?(this.hoverVisible=!1,this.focusVisible=!1):(this.$emit("update:forcehidden",!1),this.$emit("update:forceHidden",!1))}},created:function(){this.windowTapClickRegistration=Object(o.a)(window,this.windowTapOrClick)},mounted:function(){this.refreshClearMargin()},beforeDestroy:function(){this.windowTapClickRegistration.cleanup()},methods:{focusin:function(t){this.contentTransitioning||(this.focusVisible||this.$emit("got-focus",t),this.focusVisible=!0,this.disableNextClick=!0)},focusout:function(t){Object(s.b)(t.relatedTarget,this.$refs.popover)||(this.$emit("lost-focus",t),this.focusVisible=!1)},click:function(t){!this.toggleVisibleOnClick||this.contentTransitioning||!Object(s.b)(t.target,this.$refs.popover)||Object(s.b)(t.target,this.$refs.popoverOrigin)||this.disableNextClick||(this.focusVisible=!this.focusVisible),this.disableNextClick=!1},mousemove:function(){this.forceHidden||this.contentTransitioning||(this.hoverVisible=!0)},mouseleave:function(t){this.forceHidden||Object(s.b)(t.relatedTarget,this.$refs.popover)||(this.hoverVisible=!1)},windowTapOrClick:function(t){Object(s.b)(t.target,this.$refs.popover)||(this.hoverVisible=!1,this.focusVisible=!1)},refreshClearMargin:function(){if(this.showClearMargin&&this.visible&&this.$refs.popoverContent){var t=this.$refs.popoverContent.getBoundingClientRect(),e=t.width,n=t.height,r=("left"===this.direction||"right"===this.direction)&&e||n;this.clearMargin=r+this.contentOffset}else this.clearMargin=0},beforeContentEnter:function(){this.contentTransitioning=!0,this.$emit("will-appear")},contentEnter:function(){this.refreshClearMargin()},afterContentEnter:function(){this.contentTransitioning=!1,this.$emit("did-appear")},contentLeave:function(){this.refreshClearMargin()},beforeContentLeave:function(){this.contentTransitioningCancelled=this.contentTransitioning,this.contentTransitioning=!0,this.$emit("will-disappear",this.contentTransitioningCancelled)},afterContentLeave:function(){this.contentTransitioning=!1,this.$emit("did-disappear",this.contentTransitioningCancelled),this.contentTransitioningCancelled=!1,this.forceHidden&&(this.$emit("update:forcehidden",!1),this.$emit("update:forceHidden",!1))}}}},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={HOVER:"hover",FOCUS:"focus",HIDDEN:"hidden",VISIBLE:"visible",isManual:function(t){return"hidden"===t||"visible"===t},isManaged:function(t){return"hover"===t||"focus"===t}}},function(t,e,n){"use strict";var r=n(104),i=n(2);e.a={components:{CalendarDay:r.a},props:{monthComps:Object,prevMonthComps:Object,nextMonthComps:Object,trimMaxWeek:Boolean},computed:{weeks:function(){for(var t=[],e=this.monthComps,n=e.firstDayOfWeek,r=e.firstWeekday,a=r+(r<n?7:0)-n,o=!0,s=!1,u=!1,c=this.prevMonthComps.days-a+1,l=this.prevMonthComps.days-c+1,d=Math.floor((c-1)/7+1),f=1,h=this.prevMonthComps.weeks,p=1,v=this.prevMonthComps.month,y=this.prevMonthComps.year,m=1;m<=6&&(!u||!this.trimMaxWeek);m++){for(var b=[],g=1,D=n;g<=7;g++,D+=7===D?-6:1){o&&D===r&&(c=1,l=this.monthComps.days,d=Math.floor((c-1)/7+1),f=Math.floor((this.monthComps.days-c)/7+1),h=1,p=this.monthComps.weeks,v=this.monthComps.month,y=this.monthComps.year,o=!1,s=!0);var w=new Date(y,v-1,c),_=c===i.x.day&&v===i.x.month&&y===i.x.year,O=s&&1===c,C=s&&c===this.monthComps.days;b.push({id:v+"."+c,label:c.toString(),day:c,dayFromEnd:l,weekday:D,weekdayOrdinal:d,weekdayOrdinalFromEnd:f,week:h,weekFromEnd:p,month:v,year:y,date:w,dateTime:w.getTime(),isToday:_,isFirstDay:O,isLastDay:C,inMonth:s,inPrevMonth:o,inNextMonth:u}),s&&C?(s=!1,u=!0,c=1,l=this.nextMonthComps.days,d=1,f=Math.floor((this.nextMonthComps.days-c)/7+1),h=1,p=this.nextMonthComps.weeks,v=this.nextMonthComps.month,y=this.nextMonthComps.year):(c++,l--,d=Math.floor((c-1)/7+1),f=Math.floor((this.monthComps.days-c)/7+1))}t.push(b),h++,p--}return t}}}},function(t,e,n){"use strict";var r=n(31),i=n.n(r),a=n(0),o=n.n(a),s=n(22),u=n(106),c=n(2),l=n(4),d=n(3);e.a={components:{Popover:s.a,CalendarDayPopoverRow:u.a},props:{day:{type:Object,required:!0},attributes:Object,popoverContentOffset:{type:Number,default:7},styles:Object,formats:Object},data:function(){return{isHovered:!1,isFocused:!1,glyphs:{}}},computed:{label:function(){return this.day.label},dateTime:function(){return this.day.dateTime},inMonth:function(){return this.day.inMonth},dayCellStyle:function(){return o()({},this.styles.dayCell,!this.inMonth&&this.styles.dayCellNotInMonth)},attributesLength:function(){return this.attributes.length},attributesList:function(){return this.attributes.find(this.day)},attributesMap:function(){return Object(c.s)(this.attributesList)},shouldCheckDirty:function(){return this.attributesLength&&!!this.attributesList.find(function(t){return Object(l.c)(t.highlight)||Object(l.c)(t.highlightCaps)||Object(l.c)(t.dot)||Object(l.c)(t.bar)||Object(l.c)(t.popover)||Object(l.c)(t.contentStyle)})},isHoveredDirty:function(){return this.shouldCheckDirty&&this.isHovered},isFocusedDirty:function(){return this.shouldCheckDirty&&this.isFocused},backgrounds:function(){return this.glyphs.backgrounds},hasBackgrounds:function(){return!!Object(c.a)(this.backgrounds)},dots:function(){return this.glyphs.dots},hasDots:function(){return!!Object(c.a)(this.dots)},dotsStyle:function(){return this.styles.dots},bars:function(){return this.glyphs.bars},hasBars:function(){return!!Object(c.a)(this.bars)},barsStyle:function(){return this.styles.bars},popovers:function(){return this.glyphs.popovers},hasPopovers:function(){return!!Object(c.a)(this.popovers)},popoverContentStyle:function(){return this.styles.dayPopoverContent},popoverState:function(){var t="",e=!1,n=void 0;return this.popovers.forEach(function(r){!t&&r.visibility&&(t=r.visibility),e=e||r.isInteractive,n=n||r.label||r.component||r.slot}),{visibility:t||n&&"hover"||"hidden",isInteractive:e}},popoverVisibility:function(){return this.popoverState.visibility},popoverIsInteractive:function(){return this.popoverState.isInteractive},contentStyle:function(){var t=this.styles.dayContent,e=this.dayCellStyle&&(0===parseFloat(this.dayCellStyle.opacity)||"none"===this.dayCellStyle.pointerEvents);return o()({},Object(l.c)(t)&&t({day:this.day,isHovered:this.isHovered,isFocused:this.isFocused})||t,this.glyphs.contentStyle,e&&{pointerEvents:"none"})}},watch:{isHoveredDirty:function(){this.refreshGlyphs()},isFocusedDirty:function(){this.refreshGlyphs()},attributesList:function(t,e){t.forEach(function(t){t.isNew=!e.find(function(e){return e.key===t.key})}),this.refreshGlyphs()}},created:function(){this.refreshGlyphs()},methods:{getDayEvent:function(t){return o()({},this.day,{attributes:this.attributesList,attributesMap:this.attributesMap,event:t})},click:function(t){this.$emit("dayclick",this.getDayEvent(t))},mouseenter:function(t){this.$emit("daymouseenter",this.getDayEvent(t))},mouseover:function(t){this.isHovered=!0,this.$emit("daymouseover",this.getDayEvent(t))},mouseleave:function(t){this.isHovered=!1,this.$emit("daymouseleave",this.getDayEvent(t))},refreshGlyphs:function(){var t=this;this.glyphs=(this.attributesList||[]).map(function(e){return t.evalAttribute(e,t.isHoveredDirty,t.isFocusedDirty)}).reduce(function(e,n){var r=n.highlight,a=n.highlightCaps,o=n.onStart,s=n.onEnd,u=n.dot,c=n.bar,l=n.popover,d=e.backgrounds,f=e.dots,h=e.bars,p=e.popovers,v=e.contentStyle;return!r||o&&s&&a||d.push(t.getBackground(n)),a&&(o||s)&&d.push(t.getBackgroundCap(n)),u&&f.push(t.getDot(n)),c&&h.push(t.getBar(n)),l&&p.unshift(t.getPopover(n)),i()(v,n.contentStyle),e},{backgrounds:[],dots:[],bars:[],popovers:[],contentStyle:{}})},evalAttribute:function(t,e,n){var r=this,i=t.targetDate,a=i.startTime===this.dateTime,s=i.endTime===this.dateTime,u=!a&&!s,f=function(t){return Object(l.c)(t)&&t({day:r.day,targetDate:i,onStart:a,onEnd:s,inBetween:u,isHovered:e,isFocused:n})||Object(l.e)(t)&&t};return Object(c.r)(t,o()({},t,{onStart:a,onEnd:s,inBetween:u}),[{name:"highlight",mixin:d.a.highlight,validate:f},{name:"highlightCaps",mixin:d.a.highlightCaps,validate:f},{name:"dot",mixin:d.a.dot,validate:f},{name:"bar",mixin:d.a.bar,validate:f},{name:"contentStyle",validate:f},{name:"popover",validate:f},{name:"customData"}]).target},getBackground:function(t){var e=t.key,n=t.highlight,r=t.highlightCaps,i=t.targetDate,a=n.animated,o=n.width,s=n.height,u=n.backgroundColor,c=n.borderColor,l=n.borderWidth,d=n.borderStyle,f=n.opacity,h=n.borderRadius||(i.isDate||i.isComplex?"50%":"290486px"),p={key:e,style:{width:o||s,height:s,backgroundColor:u,borderColor:c,borderWidth:l,borderStyle:d,borderRadius:h,opacity:f}};if(i.isDate||i.isComplex)p.wrapperClass="c-day-layer c-day-box-center-center "+(a?"c-day-scale-enter c-day-scale-leave":"");else{var v=i.startTime===this.dateTime,y=i.endTime===this.dateTime;if(v&&y){var m=a?"c-day-scale-enter c-day-scale-leave":"";p.wrapperClass="c-day-layer c-day-box-center-center "+m,p.style.width="95%",p.style.borderWidth=l,p.style.borderRadius=h+" "+h+" "+h+" "+h}else if(v){var b=a&&!r?"c-day-slide-left-scale-enter":"";p.wrapperClass="c-day-layer c-day-box-right-center shift-right "+b,r?(p.style.width="50%",p.style.borderWidth=l+" 0 "+l+" 0",p.style.borderRadius=0):(p.style.width="95%",p.style.borderWidth=l+" 0 "+l+" "+l,p.style.borderRadius=h+" 0 0 "+h)}else if(y){var g=a&&!r?"c-day-slide-right-scale-enter":"";p.wrapperClass="c-day-layer c-day-box-left-center shift-left "+g,r?(p.style.width="50%",p.style.borderWidth=l+" 0 "+l+" 0",p.style.borderRadius=0):(p.style.width="95%",p.style.borderWidth=l+" "+l+" "+l+" 0",p.style.borderRadius="0 "+h+" "+h+" 0")}else p.wrapperClass="c-day-layer c-day-box-center-center shift-left-right",p.style.width="100%",p.style.borderWidth=l+" 0",p.style.borderRadius="0"}return p},getBackgroundCap:function(t){var e=t.key,n=t.highlightCaps,r=t.targetDate,i=t.isNew,a=r.startTime,o=r.endTime,s=n.animated,u=n.width,c=n.height,l=n.backgroundColor,d=n.borderColor,f=n.borderWidth,h=n.borderStyle,p=n.opacity,v=n.borderRadius||"50%",y="";return s&&(a===o?y="c-day-scale-enter c-day-scale-leave":a===this.dateTime?y=i?"c-day-slide-left-translate-enter":"c-day-slide-right-translate-enter":o===this.dateTime&&(y=i?"c-day-slide-right-translate-enter":"c-day-slide-left-translate-enter")),{key:e+"-cap",wrapperClass:"c-day-layer c-day-box-center-center "+(s?y:""),style:{width:u||c,height:c,backgroundColor:l,borderColor:d,borderWidth:f,borderStyle:h,borderRadius:v,opacity:p}}},getDot:function(t){var e=t.key,n=t.dot;return{key:e,style:{width:n.diameter,height:n.diameter,backgroundColor:n.backgroundColor,borderColor:n.borderColor,borderWidth:n.borderWidth,borderStyle:n.borderStyle,borderRadius:n.borderRadius,opacity:n.opacity}}},getBar:function(t){var e=t.key,n=t.bar;return{key:e,style:{height:n.height,backgroundColor:n.backgroundColor,borderColor:n.borderColor,borderWidth:n.borderWidth,borderStyle:n.borderStyle,opacity:n.opacity}}},getPopover:function(t){var e=t.popover,n=e.label,r=e.labelStyle,i=e.component,a=e.slot,o=e.hideIndicator,s=e.visibility,u=e.isInteractive;return{key:t.key,customData:t.customData,attribute:t,label:Object(l.c)(n)?n(t,this.day):n,labelStyle:Object(l.c)(r)?r(t,this.day):r,component:i,slot:a,hideIndicator:o,visibility:s,isInteractive:void 0!==u?u:!!a}}}}},function(t,e,n){"use strict";e.a={props:{attribute:Object,hideIndicator:Boolean},computed:{isSelectable:function(){return this.$listeners.select},indicatorStyle:function(){var t=this.attribute;return t.highlight?{backgroundColor:t.highlight.backgroundColor,width:"10px",height:"5px",borderRadius:"3px",opacity:t.highlight.opacity}:t.dot?{backgroundColor:t.dot.backgroundColor,width:"5px",height:"5px",borderRadius:"50%",opacity:t.dot.opacity}:t.bar?{backgroundColor:t.bar.backgroundColor,width:"10px",height:"3px",opacity:t.bar.opacity}:t.contentStyle?{backgroundColor:t.contentStyle.color,width:"5px",height:"5px"}:null}}}},function(t,e,n){"use strict";var r=n(0),i=n.n(r),a=n(14),o=n.n(a),s=n(113),u=n.n(s),c=n(33),l=n(23),d=n(8),f=n(2);e.a={components:{SvgIcon:c.a},props:{mode:{type:String,default:"month"},value:{type:Object,default:function(){return{month:0,year:0}}},validator:{type:Function,default:function(){return function(){return!0}}},formats:Object,attributes:Array,styles:Object},data:function(){return{mode_:"",yearIndex:0,yearGroupIndex:0,attributesMap:{}}},computed:{month:function(){return this.value?this.value.month||0:0},year:function(){return this.value?this.value.year||0:0},headerStyle:function(){return this.styles.navHeader},headerTitleStyle:function(){return this.styles.navHeaderTitle},headerArrowsStyle:function(){return this.styles.navHeaderArrows},monthItems:function(){var t=this;return Object(f.j)().map(function(e){return Object(d.a)(e,t.formats.navMonths)}).map(function(e,n){var r=n+1;return{month:r,label:e,attributes:t.getMonthAttributes(r),isActive:r===t.month&&t.yearIndex===t.year,isDisabled:!t.validator({month:r,year:t.yearIndex})}})},yearItems:function(){for(var t=12*this.yearGroupIndex,e=t+12,n=[],r=t;r<e;r+=1)n.push({month:0,year:r,isActive:r===this.year,isDisabled:!this.validator({month:this.month,year:r})});return n},monthRows:function(){return this.createRows(this.monthItems,3)},yearRows:function(){return this.createRows(this.yearItems,3)},firstYear:function(){return Object(f.e)(this.yearItems.map(function(t){return t.year}),0)},lastYear:function(){return Object(f.g)(this.yearItems.map(function(t){return t.year}),0)}},watch:{mode:function(t){this.mode_=t},year:function(){this.yearIndex=this.year},yearIndex:function(t){this.yearGroupIndex=this.getYearGroupIndex(t)},attributes:function(){this.mapAttributes(!0)},yearGroupIndex:function(){this.mapAttributes()}},created:function(){this.mode_=this.mode,this.yearIndex=this.year},methods:{getMonthCellStyle:function(t){return Object(f.c)(this.styles.navMonthCell,t)},getYearCellStyle:function(t){return Object(f.c)(this.styles.navYearCell,t)},getMonthAttributes:function(t){if(this.attributesMap[this.yearIndex]&&this.attributesMap[this.yearIndex][t])return u()(this.attributesMap[this.yearIndex][t])},mapAttributes:function(t){var e=this;if(this.attributes&&this.attributes.length){for(var n=t?{}:this.attributesMap,r=this.firstYear;r<=this.lastYear;r++)if(!n[r]){for(var a={},s=function(t){var n={},i=Object(f.i)(t,r),s=new l.b({start:new Date(i.year,i.month-1,1),end:new Date(i.year,i.month-1,i.days)});e.attributes.forEach(function(t){t.dates.find(function(t){return t.intersects(s)})&&(n[t.key]=e.getAttributeInfo(t))}),o()(n).length&&(a[t]=n)},u=1;u<=12;u++)s(u);o()(a).length&&(n[r]=a)}this.attributesMap=i()({},n)}else this.attributesMap={}},getAttributeInfo:function(t){var e=void 0;return t.highlight?e=t.highlight.backgroundColor:t.dot?e=t.dot.backgroundColor:t.bar?e=t.bar.backgroundColor:t.contentStyle&&(e=t.contentStyle.backgroundColor||t.contentStyle.color),{key:t.key,style:{backgroundColor:e}}},getYearGroupIndex:function(t){return Math.floor(t/12)},monthClick:function(t){this.$emit("input",{month:t,year:this.yearIndex})},yearClick:function(t){this.yearIndex=t,this.selectMode("month")},selectMode:function(t){this.mode_=t,this.$emit("update:mode",t)},movePrevYear:function(){this.yearIndex--},moveNextYear:function(){this.yearIndex++},movePrevYearGroup:function(){this.yearGroupIndex--},moveNextYearGroup:function(){this.yearGroupIndex++},createRows:function(t,e){var n=[],r=[];return t.forEach(function(t){r.push(t),r.length>=e&&(n.push(r),r=[])}),n}}}},function(t,e,n){"use strict";var r={leftArrow:{viewBox:"3 2 12 32",path:"M11.196 10c0 0.143-0.071 0.304-0.179 0.411l-7.018 7.018 7.018 7.018c0.107 0.107 0.179 0.268 0.179 0.411s-0.071 0.304-0.179 0.411l-0.893 0.893c-0.107 0.107-0.268 0.179-0.411 0.179s-0.304-0.071-0.411-0.179l-8.321-8.321c-0.107-0.107-0.179-0.268-0.179-0.411s0.071-0.304 0.179-0.411l8.321-8.321c0.107-0.107 0.268-0.179 0.411-0.179s0.304 0.071 0.411 0.179l0.893 0.893c0.107 0.107 0.179 0.25 0.179 0.411z"},rightArrow:{viewBox:"-2 1 11 32",path:"M10.625 17.429c0 0.143-0.071 0.304-0.179 0.411l-8.321 8.321c-0.107 0.107-0.268 0.179-0.411 0.179s-0.304-0.071-0.411-0.179l-0.893-0.893c-0.107-0.107-0.179-0.25-0.179-0.411 0-0.143 0.071-0.304 0.179-0.411l7.018-7.018-7.018-7.018c-0.107-0.107-0.179-0.268-0.179-0.411s0.071-0.304 0.179-0.411l0.893-0.893c0.107-0.107 0.268-0.179 0.411-0.179s0.304 0.071 0.411 0.179l8.321 8.321c0.107 0.107 0.179 0.268 0.179 0.411z"},moon:{viewBox:"0 0 26 32",path:"M22.536 23.554c-0.643 0.107-1.304 0.161-1.964 0.161-6.625 0-12-5.375-12-12 0-2.268 0.661-4.482 1.857-6.375-4.75 1.411-8.143 5.768-8.143 10.946 0 6.304 5.125 11.429 11.429 11.429 3.446 0 6.679-1.571 8.821-4.161zM26.161 22.036c-2.232 4.839-7.125 7.964-12.446 7.964-7.554 0-13.714-6.161-13.714-13.714 0-7.411 5.804-13.429 13.196-13.696 0.5-0.018 0.911 0.268 1.089 0.696 0.196 0.446 0.071 0.964-0.268 1.286-2.036 1.857-3.161 4.393-3.161 7.143 0 5.357 4.357 9.714 9.714 9.714 1.411 0 2.768-0.304 4.071-0.911 0.446-0.196 0.946-0.107 1.286 0.232s0.429 0.857 0.232 1.286z"},sun:{viewBox:"0 0 32 32",path:"M26.286 16.286c0-5.679-4.607-10.286-10.286-10.286s-10.286 4.607-10.286 10.286 4.607 10.286 10.286 10.286 10.286-4.607 10.286-10.286zM31.214 21.232c-0.054 0.179-0.196 0.304-0.357 0.357l-5.214 1.714v5.464c0 0.179-0.089 0.357-0.232 0.464-0.161 0.107-0.339 0.143-0.518 0.071l-5.214-1.679-3.214 4.429c-0.107 0.143-0.286 0.232-0.464 0.232s-0.357-0.089-0.464-0.232l-3.214-4.429-5.214 1.679c-0.179 0.071-0.357 0.036-0.518-0.071-0.143-0.107-0.232-0.286-0.232-0.464v-5.464l-5.214-1.714c-0.161-0.054-0.304-0.179-0.357-0.357s-0.036-0.375 0.071-0.518l3.214-4.429-3.214-4.429c-0.107-0.161-0.125-0.339-0.071-0.518s0.196-0.304 0.357-0.357l5.214-1.714v-5.464c0-0.179 0.089-0.357 0.232-0.464 0.161-0.107 0.339-0.143 0.518-0.071l5.214 1.679 3.214-4.429c0.214-0.286 0.714-0.286 0.929 0l3.214 4.429 5.214-1.679c0.179-0.071 0.357-0.036 0.518 0.071 0.143 0.107 0.232 0.286 0.232 0.464v5.464l5.214 1.714c0.161 0.054 0.304 0.179 0.357 0.357s0.036 0.357-0.071 0.518l-3.214 4.429 3.214 4.429c0.107 0.143 0.125 0.339 0.071 0.518z"}};e.a={props:["name"],data:function(){return{width:"26px",height:"26px",viewBox:"0 0 32 32",path:"",isBaseline:!1}},mounted:function(){this.updateIcon()},watch:{name:function(){this.updateIcon()}},methods:{updateIcon:function(){var t=r[this.name];t&&(this.width=t.width||"26px",this.height=t.height||"26px",this.viewBox=t.viewBox||"0 0 32 32",this.path=t.path)}}}},function(t,e,n){"use strict";var r=n(0),i=n.n(r),a=n(23),o=n(2),s=n(4);e.a=function(t){if(!t)return null;if(t.isAttribute)return t;t.dates&&!Object(s.a)(t.dates)&&(t.dates=[t.dates]),t.excludeDates&&!Object(s.a)(t.excludeDates)&&(t.excludeDates=[t.excludeDates]);var e=Object(o.a)(t.dates),n=Object(o.a)(t.excludeDates),r=t.excludeMode||"intersects",u=(e&&t.dates||n&&[{}]||[]).map(function(e){return e&&(e.isDateInfo?e:Object(a.b)(e,t.order))}).filter(function(t){return t}),c=(n&&t.excludeDates||[]).map(function(e){return e&&(e.isDateInfo?e:Object(a.b)(e,t.order))}).filter(function(t){return t}),l=u.some(function(t){return t.isComplex}),d=i()({},t,{isAttribute:!0,key:t.key||"guid",order:t.order||0,dates:u,excludeDates:c,isComplex:l,intersectsDate:function(t){return!d.excludesDate(t)&&(u.find(function(e){return e.intersectsDate(t)})||!1)},includesDate:function(t){return!d.excludesDate(t)&&(u.find(function(e){return e.includesDate(t)})||!1)},excludesDate:function(t){return n&&c.find(function(e){return"intersects"===r&&e.intersectsDate(t)||"includes"===r&&e.includesDate(t)})},includesDay:function(t){return!d.excludesDay(t)&&(u.find(function(e){return e.includesDay(t)})||!1)},excludesDay:function(t){return n&&c.find(function(e){return e.includesDay(t)})}});return d}},function(t,e,n){"use strict";var r=n(12),i=n.n(r),a=n(0),o=n.n(a),s=n(22),u=n(123),c=n(124),l=n(125),d=n(126),f=n(24),h=n(53),p=n(3),v=n(23),y=n(2),m=n(4),b=n(8),g=n(13);e.a={mixins:[g.a],render:function(t){var e=this,n=function(n){return t(e.componentName,o()({attrs:o()({},e.$attrs,{value:e.value,isRequired:e.isRequired,formats:e.formats_,selectAttribute:e.selectAttribute_,dragAttribute:e.dragAttribute_,disabledAttribute:e.disabledAttribute_,minDate:e.minDate,maxDate:e.maxDate,fromPage:e.fromPage_,toPage:e.toPage_,themeStyles:e.themeStyles_}),on:e.mergeListeners({"update:fromPage":function(t){return e.fromPage_=t},"update:toPage":function(t){return e.toPage_=t},drag:function(t){return e.dragValue=t}},e.filteredListeners()),slots:e.$slots,scopedSlots:e.$scopedSlots},n&&{slot:n}))};return this.isInline?n():t("popover",{attrs:{isExpanded:this.popoverExpanded,direction:this.popoverDirection,align:this.popoverAlign,visibility:this.popoverVisibility,contentStyle:this.popoverContentStyle,contentOffset:this.popoverContentOffset,forceHidden:this.popoverForceHidden,showClearMargin:this.popoverShowClearMargin,isInteractive:!0},on:{"will-appear":function(t){return e.$emit("popover-will-appear",t)},"did-appear":function(t){return e.$emit("popover-did-appear",t)},"will-disappear":function(t){return e.$emit("popover-will-disappear",t)},"did-disappear":function(t){return e.$emit("popover-did-disappear",t)},"update:forceHidden":function(t){return e.popoverForceHidden=t}}},[Object(m.c)(this.$scopedSlots.default)&&this.$scopedSlots.default({inputValue:this.inputValue,updateValue:this.updateValue})||[t("input",{class:this.inputProps_.class,style:this.inputProps_.style,domProps:{value:this.inputValue},attrs:o()({type:"text"},this.inputAttrs),on:{input:this.inputInput,change:this.inputChange,keyup:this.inputKeyup}})],n("popover-content")])},components:{Popover:s.a,SingleDatePicker:u.a,MultipleDatePicker:c.a,DateRangePicker:l.a},props:{mode:{type:String,default:"single"},value:{type:null,required:!0},isRequired:Boolean,isInline:Boolean,minDate:Date,maxDate:Date,disabledDates:null,availableDates:null,formats:Object,inputProps:{type:Object,default:function(){return{}}},updateOnInput:{type:Boolean,default:function(){return p.a.datePickerUpdateOnInput}},tintColor:{type:String,default:function(){return p.a.datePickerTintColor}},dragAttribute:Object,selectAttribute:Object,disabledAttribute:Object,showCaps:{type:Boolean,default:function(){return p.a.datePickerShowCaps}},showDayPopover:{type:Boolean,default:function(){return p.a.datePickerShowDayPopover}},popoverExpanded:{type:Boolean,default:function(){return p.a.popoverExpanded}},popoverDirection:{type:String,default:function(){return p.a.popoverDirection}},popoverAlign:{type:String,default:function(){return p.a.popoverAlign}},popoverVisibility:{type:String,default:function(){return p.a.popoverVisibility}},popoverContentOffset:{type:Number,default:function(){return p.a.popoverContentOffset}},popoverShowClearMargin:Boolean,popoverKeepVisibleOnInput:{type:Boolean,default:function(){return p.a.popoverKeepVisibleOnInput}},fromPage:Object,toPage:Object,themeStyles:{type:Object,default:function(){return{}}}},data:function(){return{fromPage_:null,toPage_:null,dragValue:null,inputValue:"",popoverForceHidden:!1,disableFormatInput:!1,disablePopoverForceHidden:!1}},computed:{formats_:function(){return o()({},p.a.formats,this.formats)},inputFormats:function(){var t=this.formats_.input;return Object(m.a)(t)&&t||[t]},profile:function(){var t=this;return Object(f.a)(this.mode,function(e){return Object(b.a)(e,t.inputFormats[0])},function(e){return Object(b.b)(e,t.inputFormats)})},componentName:function(){return this.profile.componentName},selectAttribute_:function(){return this.buildSelectDragAttribute(this.selectAttribute)},dragAttribute_:function(){return this.buildSelectDragAttribute(this.dragAttribute,!0)},disabledDates_:function(){var t=[];return this.disabledDates&&(Object(m.a)(this.disabledDates)?t.push.apply(t,i()(this.disabledDates)):t.push(this.disabledDates)),this.minDate&&t.push({start:null,end:Object(v.a)(this.minDate,-1)}),this.maxDate&&t.push({start:Object(v.a)(this.maxDate,1),end:null}),t},disabledAttribute_:function(){return this.disabledDates_||this.availableDates?Object(h.a)(o()({key:"disabled",order:100},this.disabledAttribute||Object(p.c)(p.a.datePickerDisabledAttribute,{mode:this.mode,color:this.tintColor,showDayPopover:this.showDayPopover}),{dates:this.disabledDates_,excludeDates:this.availableDates,excludeMode:"includes"})):null},inputProps_:function(){var t=p.a.datePickerInputProps;return Object(m.c)(t)?o()({},t({mode:this.mode,value:this.value,dragValue:this.dragValue,format:p.a.masks[this.inputFormats[0]]||this.inputFormats[0]}),this.inputProps):Object(m.e)(t)?o()({},t,this.inputProps):this.inputProps},inputAttrs:function(){var t=o()({},this.inputProps_);return t&&(delete t.style,delete t.class),t},themeStyles_:function(){var t=this.themeStyles.dayContent||p.a.themeStyles.dayContent;return o()({},this.themeStyles,{dayContent:function(e){return o()({},e.isHovered&&{backgroundColor:"#dadada",border:"0",cursor:"pointer"},Object(m.c)(t)&&t(e)||t)}},!this.isInline&&{wrapper:null})},popoverContentStyle:function(){return o()({},this.themeStyles.wrapper,{padding:"0",margin:"0"})}},watch:{fromPage:function(t){this.fromPage_=t},toPage:function(t){this.toPage_=t},fromPage_:function(t){this.$emit("update:frompage",t),this.$emit("update:fromPage",t)},toPage_:function(t){this.$emit("update:topage",t),this.$emit("update:toPage",t)},mode:function(){this.$emit("input",null)},value:function(){this.assignPageRange(),this.disableFormatInput||this.formatInput(),"multiple"===this.mode||this.disablePopoverForceHidden||this.hidePopover(),this.disableFormatInput=!1,this.disablePopoverForceHidden=!1},dragValue:function(){this.formatInput()},disabledAttribute_:function(){this.dragValue||this.updateValue(this.value)}},created:function(){this.fromPage_=this.fromPage,this.toPage_=this.toPage,this.assignPageRange(),this.formatInput()},methods:{buildSelectDragAttribute:function(t,e){var n=this,r=o()({key:"drag-select"},t),i=r,a=i.highlight,s=i.highlightCaps,u=i.contentStyle,c=i.dot,l=i.bar;return c||l||(r=o()({},r,{highlight:function(t){return o()({backgroundColor:n.tintColor},e&&{height:"1.64rem",opacity:.5},Object(m.c)(a)&&a(t)||a)},highlightCaps:s||this.showCaps&&function(t){return!t.inBetween&&{backgroundColor:"#fafafa",borderColor:n.tintColor,borderWidth:"2px"}},contentStyle:function(t){return o()({},!e&&{color:"#fafafa"},t.isHovered&&{backgroundColor:"transparent",border:"0"},n.showCaps&&!t.inBetween&&{color:"#333333"},Object(m.c)(u)&&u(t)||u)}})),(r.popover||this.showDayPopover)&&(r.popover=o()({component:d.a,hideIndicator:!0},r.popover)),r},filteredListeners:function(){var t=o()({},this.$listeners);return delete t["update:frompage"],delete t["update:fromPage"],delete t["update:topage"],delete t["update:toPage"],t},assignPageRange:function(){var t=this.profile.getPageRange(this.value);if(t){var e=Object(y.v)(this.fromPage_,t.from,t.to),n=Object(y.v)(this.toPage_,t.from,t.to);"single"===this.mode?e||Object.prototype.hasOwnProperty.call(this.$attrs,"is-double-paned")?n||(this.fromPage_=t.to):this.fromPage_=t.from:(e||(this.fromPage_=t.from),n||(this.toPage_=t.to))}},inputInput:function(t){this.inputValue=t.target.value,this.updateOnInput&&this.updateValue(this.inputValue,{formatInput:!1,hidePopover:!1})},inputChange:function(){this.updateValue(this.inputValue,{formatInput:!0,hidePopover:!1})},inputKeyup:function(t){27===t.keyCode&&this.updateValue(this.value,{formatInput:!0,hidePopover:!0})},updateValue:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.inputValue,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.formatInput,r=void 0!==n&&n,i=e.hidePopover,a=void 0===i?!this.popoverKeepVisibleOnInput:i;this.inputValue=Object(m.f)(t)?t:this.inputValue;var o=Object(m.f)(t)?this.profile.parseValue(t):t,s=this.profile.filterDisabled({value:this.profile.normalizeValue(o),isRequired:this.isRequired,disabled:this.disabledAttribute_,fallbackValue:this.value});if(this.profile.valuesAreEqual(o,s)){!this.profile.valuesAreEqual(this.value,s)?(this.disableFormatInput=!r,this.disablePopoverForceHidden=!a,this.$emit("input",s)):(r&&this.formatInput(),a&&this.hidePopover())}},formatInput:function(){var t=this;this.$nextTick(function(){t.inputValue=t.profile.formatValue(t.value,t.dragValue)})},hidePopover:function(){var t=this;setTimeout(function(){t.popoverForceHidden=!0},200)}}}},function(t,e,n){"use strict";var r=n(12),i=n.n(r),a=n(0),o=n.n(a),s=n(21),u=n(24),c=n(13);e.a={mixins:[c.a],render:function(t){return t(s.a,{attrs:o()({},this.$attrs,{attributes:this.attributes_}),on:this.mergeListeners({dayclick:this.clickDay}),slots:this.$slots,scopedSlots:this.$scopedSlots})},components:{Calendar:s.a},props:{value:{type:Date,default:null},isRequired:Boolean,selectAttribute:Object,disabledAttribute:Object,attributes:Array},computed:{selectAttribute_:function(){return Object(u.e)(this.value)?o()({},this.selectAttribute,{dates:[this.value]}):null},attributes_:function(){var t=[].concat(i()(this.attributes||[]));return this.selectAttribute_&&t.push(this.selectAttribute_),this.disabledAttribute&&t.push(this.disabledAttribute),t}},methods:{clickDay:function(t){this.disabledAttribute&&this.disabledAttribute.includesDay(t)?this.$emit("invalid-input",{reason:"disabled",value:t.date}):Object(u.f)(t.date,this.value)?this.isRequired||this.$emit("input",null):this.$emit("input",t.date)}}}},function(t,e,n){"use strict";var r=n(12),i=n.n(r),a=n(0),o=n.n(a),s=n(21),u=n(24),c=n(13);e.a={mixins:[c.a],render:function(t){return t(s.a,{attrs:o()({},this.$attrs,{attributes:this.attributes_}),on:this.mergeListeners({dayclick:this.clickDay}),slots:this.$slots,scopedSlots:this.$scopedSlots})},components:{Calendar:s.a},props:{value:{type:Array,default:function(){return[]}},isRequired:Boolean,selectAttribute:Object,disabledAttribute:Object,attributes:Array},computed:{selectAttribute_:function(){return Object(u.b)(this.value)?o()({},this.selectAttribute,{dates:this.value}):null},attributes_:function(){var t=[].concat(i()(this.attributes||[]));return this.selectAttribute_&&t.push(this.selectAttribute_),this.disabledAttribute&&t.push(this.disabledAttribute),t}},methods:{clickDay:function(t){if(!this.disabledAttribute||!this.disabledAttribute.includesDay(t))if(Object(u.b)(this.value))if(this.value.find(function(e){return e.getTime()===t.dateTime})){var e=this.value.filter(function(e){return!Object(u.f)(e,t.date)});e.length?this.$emit("input",e):this.isRequired||this.$emit("input",null)}else this.$emit("input",Object(u.c)([].concat(i()(this.value),[t.date])));else this.$emit("input",[t.date])}}}},function(t,e,n){"use strict";var r=n(12),i=n.n(r),a=n(0),o=n.n(a),s=n(21),u=n(13),c=n(24);e.a={mixins:[u.a],render:function(t){return t(s.a,{attrs:o()({},this.$attrs,{attributes:this.attributes_,themeStyles:this.themeStyles_}),on:this.mergeListeners({dayclick:this.clickDay,daymouseenter:this.enterDay}),slots:this.$slots,scopedSlots:this.$scopedSlots})},components:{Calendar:s.a},props:{value:{type:Object,default:function(){}},isRequired:Boolean,dragAttribute:Object,selectAttribute:Object,disabledAttribute:Object,themeStyles:Object,attributes:Array},data:function(){return{dragValue:null,showDisabledContent:!1}},computed:{dragAttribute_:function(){return this.dragValue&&o()({},this.dragAttribute,{dates:[this.dragValue]})},selectAttribute_:function(){return this.value&&o()({},this.selectAttribute,{dates:[this.value]})},attributes_:function(){var t=[].concat(i()(this.attributes||[]));return this.dragAttribute_?t.push(this.dragAttribute_):this.selectAttribute_&&t.push(this.selectAttribute_),this.disabledAttribute&&t.push(this.disabledAttribute),t},themeStyles_:function(){return o()({},this.themeStyles,this.showDisabledContent&&this.disabledAttribute&&{dayContentHover:this.disabledAttribute.contentHoverStyle})}},watch:{dragValue:function(t){this.$emit("drag",Object(c.d)(t))}},created:function(){var t=this;document.addEventListener("keydown",function(e){t.dragValue&&27===e.keyCode&&(t.dragValue=null)})},methods:{clickDay:function(t){var e=t.dateTime;if(this.dragValue){var n=Object(c.d)({start:new Date(this.dragValue.start.getTime()),end:new Date(e)});this.dateIsValid(n)&&(this.dragValue=null,this.$emit("input",n))}else{var r={start:new Date(e),end:new Date(e)};this.dateIsValid(r)&&(this.dragValue=r)}},enterDay:function(t){var e=t.dateTime;if(this.dragValue){var n={start:new Date(this.dragValue.start.getTime()),end:new Date(e)};this.dateIsValid(n)?(this.dragValue=n,this.showDisabledContent=!1):this.showDisabledContent=!0}},dateIsValid:function(t){return!this.disabledAttribute||!this.disabledAttribute.intersectsDate(t)}}}},function(t,e,n){"use strict";var r=n(33),i=n(8);e.a={components:{SvgIcon:r.a},props:{attribute:Object,format:String},computed:{date:function(){return this.attribute.targetDate},isDate:function(){return this.date.isDate},isRange:function(){return this.date.isRange},days:function(){return this.date.daySpan+1},nights:function(){return this.date.daySpan},dateLabel:function(){return this.date&&this.date.date?this.getDateString(this.date.date):""},startDateLabel:function(){return this.date&&this.date.start?this.getDateString(this.date.start):""},endDateLabel:function(){return this.date&&this.date.end?this.getDateString(this.date.end):""}},methods:{getDateString:function(t){return Object(i.a)(t,this.format)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"setupCalendar",function(){return h});var r=n(14),i=n.n(r),a=n(0),o=n.n(a),s=n(21),u=n(122),c=n(22),l=n(129),d=n(3);n.d(e,"Calendar",function(){return s.a}),n.d(e,"DatePicker",function(){return u.a}),n.d(e,"Popover",function(){return c.a});var f={Calendar:s.a,DatePicker:u.a,Popover:c.a},h=function(t){var e=t?t.locale:(new Intl.DateTimeFormat).resolvedOptions().locale;return Object(d.b)(d.a,Object(l.a)(e),t)},p=o()({},f,{install:function(t,e){var n=h(e);i()(f).forEach(function(e){return t.component(""+n.componentPrefix+e,f[e])})}});e.default=p,"undefined"!=typeof window&&window.Vue&&window.Vue.use(p)},function(t,e,n){n(61),t.exports=n(5).Object.keys},function(t,e,n){var r=n(15),i=n(16);n(65)("keys",function(){return function(t){return i(r(t))}})},function(t,e,n){var r=n(17),i=n(26),a=n(63)(!1),o=n(28)("IE_PROTO");t.exports=function(t,e){var n,s=i(t),u=0,c=[];for(n in s)n!=o&&r(s,n)&&c.push(n);for(;e.length>u;)r(s,n=e[u++])&&(~a(c,n)||c.push(n));return c}},function(t,e,n){var r=n(26),i=n(36),a=n(64);t.exports=function(t){return function(e,n,o){var s,u=r(e),c=i(u.length),l=a(o,c);if(t&&n!=n){for(;c>l;)if((s=u[l++])!=s)return!0}else for(;c>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(27),i=Math.max,a=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):a(t,e)}},function(t,e,n){var r=n(7),i=n(5),a=n(20);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],o={};o[t]=e(n),r(r.S+r.F*a(function(){n(1)}),"Object",o)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){t.exports=!n(11)&&!n(20)(function(){return 7!=Object.defineProperty(n(41)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(29);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){n(70),t.exports=n(5).Object.assign},function(t,e,n){var r=n(7);r(r.S+r.F,"Object",{assign:n(71)})},function(t,e,n){"use strict";var r=n(16),i=n(72),a=n(42),o=n(15),s=n(34),u=Object.assign;t.exports=!u||n(20)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=r})?function(t,e){for(var n=o(t),u=arguments.length,c=1,l=i.f,d=a.f;u>c;)for(var f,h=s(arguments[c++]),p=l?r(h).concat(l(h)):r(h),v=p.length,y=0;v>y;)d.call(h,f=p[y++])&&(n[f]=h[f]);return n}:u},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){},function(t,e,n){t.exports={default:n(75),__esModule:!0}},function(t,e,n){n(76),n(86),t.exports=n(5).Array.from},function(t,e,n){"use strict";var r=n(77)(!0);n(78)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(27),i=n(25);t.exports=function(t){return function(e,n){var a,o,s=String(i(e)),u=r(n),c=s.length;return u<0||u>=c?t?"":void 0:(a=s.charCodeAt(u))<55296||a>56319||u+1===c||(o=s.charCodeAt(u+1))<56320||o>57343?t?s.charAt(u):a:t?s.slice(u,u+2):o-56320+(a-55296<<10)+65536}}},function(t,e,n){"use strict";var r=n(79),i=n(7),a=n(80),o=n(18),s=n(17),u=n(32),c=n(81),l=n(44),d=n(85),f=n(6)("iterator"),h=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,v,y,m,b){c(n,e,v);var g,D,w,_=function(t){if(!h&&t in x)return x[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},O=e+" Iterator",C="values"==y,M=!1,x=t.prototype,k=x[f]||x["@@iterator"]||y&&x[y],S=!h&&k||_(y),Y=y?C?_("entries"):S:void 0,j="Array"==e?x.entries||k:k;if(j&&(w=d(j.call(new t)))!==Object.prototype&&w.next&&(l(w,O,!0),r||s(w,f)||o(w,f,p)),C&&k&&"values"!==k.name&&(M=!0,S=function(){return k.call(this)}),r&&!b||!h&&!M&&x[f]||o(x,f,S),u[e]=S,u[O]=p,y)if(g={values:C?S:_("values"),keys:m?S:_("keys"),entries:Y},b)for(D in g)D in x||a(x,D,g[D]);else i(i.P+i.F*(h||M),e,g);return g}},function(t,e){t.exports=!0},function(t,e,n){t.exports=n(18)},function(t,e,n){"use strict";var r=n(82),i=n(30),a=n(44),o={};n(18)(o,n(6)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(o,{next:i(1,n)}),a(t,e+" Iterator")}},function(t,e,n){var r=n(19),i=n(83),a=n(39),o=n(28)("IE_PROTO"),s=function(){},u=function(){var t,e=n(41)("iframe"),r=a.length;for(e.style.display="none",n(84).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u.prototype[a[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[o]=t):n=u(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(10),i=n(19),a=n(16);t.exports=n(11)?Object.defineProperties:function(t,e){i(t);for(var n,o=a(e),s=o.length,u=0;s>u;)r.f(t,n=o[u++],e[n]);return t}},function(t,e,n){var r=n(9).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(17),i=n(15),a=n(28)("IE_PROTO"),o=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?o:null}},function(t,e,n){"use strict";var r=n(40),i=n(7),a=n(15),o=n(87),s=n(88),u=n(36),c=n(89),l=n(90);i(i.S+i.F*!n(92)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,i,d,f=a(t),h="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,y=void 0!==v,m=0,b=l(f);if(y&&(v=r(v,p>2?arguments[2]:void 0,2)),void 0==b||h==Array&&s(b))for(n=new h(e=u(f.length));e>m;m++)c(n,m,y?v(f[m],m):f[m]);else for(d=b.call(f),n=new h;!(i=d.next()).done;m++)c(n,m,y?o(d,v,[i.value,m],!0):i.value);return n.length=m,n}})},function(t,e,n){var r=n(19);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var a=t.return;throw void 0!==a&&r(a.call(t)),e}}},function(t,e,n){var r=n(32),i=n(6)("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||a[i]===t)}},function(t,e,n){"use strict";var r=n(10),i=n(30);t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},function(t,e,n){var r=n(91),i=n(6)("iterator"),a=n(32);t.exports=n(5).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||a[r(t)]}},function(t,e,n){var r=n(35),i=n(6)("toStringTag"),a="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:a?r(e):"Object"==(o=r(e))&&"function"==typeof e.callee?"Arguments":o}},function(t,e,n){var r=n(6)("iterator"),i=!1;try{var a=[7][r]();a.return=function(){i=!0},Array.from(a,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var a=[7],o=a[r]();o.next=function(){return{done:n=!0}},a[r]=function(){return o},t(a)}catch(t){}return n}},function(t,e,n){"use strict";var r=n(45),i=n(120);var a=function(t){n(94)},o=n(1)(r.a,i.a,!1,a,"data-v-2083cb72",null);e.a=o.exports},function(t,e){},function(t,e){},function(t,e,n){"use strict";e.__esModule=!0;var r,i=n(97),a=(r=i,r&&r.__esModule?r:{default:r});e.default=function(t,e,n){return e in t?(0,a.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){t.exports={default:n(98),__esModule:!0}},function(t,e,n){n(99);var r=n(5).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(7);r(r.S+r.F*!n(11),"Object",{defineProperty:n(10).f})},function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n(3),i=n(4),a=function(t,e){if(!t||!t.addEventListener||!Object(i.c)(e))return null;var n={touchState:null},a=function(t){var e=t.targetTouches[0];n.touchState={started:!0,startedOn:new Date,startX:e.screenX,startY:e.screenY,x:e.screenX,y:e.screenY}},o=function(t){var i=n.touchState;if(i&&i.started){var a=t.changedTouches[0];i.x=a.screenX,i.y=a.screenY,i.tapDetected=new Date-i.startedOn<=r.a.maxTapDuration&&Math.abs(i.x-i.startX)<=r.a.maxTapTolerance&&Math.abs(i.y-i.startY)<=r.a.maxTapTolerance,i.tapDetected&&e(t),i.started=!1}},s=function(t){var r=n.touchState;r&&r.tapDetected||e(t)};return t.addEventListener("touchstart",a),t.addEventListener("touchend",o),t.addEventListener("click",s),n.cleanup=function(){t.removeEventListener("touchstart",a),t.removeEventListener("touchend",o),t.removeEventListener("click",s)},n}},function(t,e,n){"use strict";var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"popover",class:["popover-container",{expanded:t.isExpanded}],style:t.containerStyle,attrs:{tabindex:"focus"===t.visibility?-1:void 0},on:{focusin:t.focusin,focusout:t.focusout,mouseleave:t.mouseleave,mousemove:t.mousemove,click:function(e){e.stopPropagation(),t.click(e)}}},[n("transition",{attrs:{tag:"div",name:t.transition},on:{enter:t.contentEnter,"before-enter":t.beforeContentEnter,"after-enter":t.afterContentEnter,leave:t.contentLeave,"before-leave":t.beforeContentLeave,"after-leave":t.afterContentLeave}},[t.visible?n("div",{ref:"popoverOrigin",class:["popover-origin","direction-"+t.direction,"align-"+t.align]},[n("div",{ref:"popoverContentWrapper",class:["popover-content-wrapper","direction-"+t.direction,"align-"+t.align,{interactive:t.isInteractive}],style:t.contentWrapperStyle},[n("div",{ref:"popoverContent",class:["popover-content","direction-"+t.direction,"align-"+t.align],style:t.contentStyle},[t._t("popover-content",[n("div",[t._v("Popover content goes here")])])],2)])]):t._e()]),t._v(" "),t._t("default",[n("span",[t._v("Popover trigger goes here")])])],2)},staticRenderFns:[]};e.a=r},function(t,e,n){"use strict";var r=n(48),i=n(110);var a=function(t){n(103)},o=n(1)(r.a,i.a,!1,a,"data-v-28896542",null);e.a=o.exports},function(t,e){},function(t,e,n){"use strict";var r=n(49),i=n(109);var a=function(t){n(105)},o=n(1)(r.a,i.a,!1,a,"data-v-3db80f80",null);e.a=o.exports},function(t,e){},function(t,e,n){"use strict";var r=n(50),i=n(108);var a=function(t){n(107)},o=n(1)(r.a,i.a,!1,a,"data-v-54b1f93b",null);e.a=o.exports},function(t,e){},function(t,e,n){"use strict";var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["c-day-popover-row",{selectable:t.isSelectable}],on:{click:function(e){t.$emit("select")}}},[!t.hideIndicator&&t.indicatorStyle?n("div",{staticClass:"c-day-popover-indicator"},[n("span",{style:t.indicatorStyle})]):t._e(),t._v(" "),n("div",{staticClass:"c-day-popover-content"},[t._t("default",[t._v("\n      This is the default content slot.\n    ")])],2)])},staticRenderFns:[]};e.a=r},function(t,e,n){"use strict";var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("popover",{staticClass:"c-day-popover",attrs:{align:"center",transition:"fade","content-offset":t.popoverContentOffset,visibility:t.popoverVisibility,"content-style":t.popoverContentStyle,"is-interactive":t.popoverIsInteractive,"toggle-visible-on-click":""},on:{"got-focus":function(e){t.isFocused=!0},"lost-focus":function(e){t.isFocused=!1}}},[n("div",{staticClass:"c-day",style:t.dayCellStyle},[n("transition-group",{staticClass:"c-day-backgrounds c-day-layer",attrs:{name:"background",tag:"div"}},t._l(t.backgrounds,function(t){return n("div",{key:t.key,class:t.wrapperClass},[n("div",{staticClass:"c-day-background",style:t.style})])})),t._v(" "),n("div",{staticClass:"c-day-content-wrapper",on:{click:t.click,mouseenter:t.mouseenter,mouseover:t.mouseover,mouseleave:t.mouseleave}},[t._t("day-content",[n("div",{staticClass:"c-day-content",style:t.contentStyle},[n("div",[t._v("\n            "+t._s(t.day.label)+"\n          ")])])],{day:t.day,contentStyle:t.contentStyle,attributes:t.attributesList})],2),t._v(" "),t.hasDots?n("div",{staticClass:"c-day-layer c-day-box-center-bottom"},[n("div",{staticClass:"c-day-dots",style:t.dotsStyle},t._l(t.dots,function(t){return n("span",{key:t.key,staticClass:"c-day-dot",style:t.style})}))]):t._e(),t._v(" "),t.hasBars?n("div",{staticClass:"c-day-layer c-day-box-center-bottom"},[n("div",{staticClass:"c-day-bars",style:t.barsStyle},t._l(t.bars,function(t){return n("span",{key:t.key,staticClass:"c-day-bar",style:t.style})}))]):t._e()],1),t._v(" "),n("div",{staticClass:"c-day-popover-content",attrs:{slot:"popover-content"},slot:"popover-content"},[t._t("day-popover-header",null,{day:t.day,attributes:t.attributesList}),t._v(" "),t._l(t.popovers,function(e){return n("calendar-day-popover-row",{key:e.key,attrs:{attribute:e.attribute,"hide-indicator":e.hideIndicator}},[t._t(e.slot,[e.label?n("span",{key:e.key,staticClass:"popover-label",style:e.labelStyle},[t._v("\n          "+t._s(e.label)+"\n        ")]):t._e(),t._v(" "),e.component?n(e.component,{tag:"component",attrs:{attribute:e.attribute,format:t.formats.dayPopover,day:t.day}}):t._e()],{attribute:e.attribute,customData:e.attribute.customData,day:t.day})],2)}),t._v(" "),t._t("day-popover-footer",null,{day:t.day,attributes:t.attributesList})],2)])},staticRenderFns:[]};e.a=r},function(t,e,n){"use strict";var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.weeks,function(e,r){return n("div",{key:r+1,staticClass:"c-week",on:{"&touchstart":function(e){t.$emit("touchstart",e)},"&touchmove":function(e){t.$emit("touchmove",e)},"&touchend":function(e){t.$emit("touchend",e)}}},t._l(e,function(e){return n("calendar-day",t._g(t._b({key:e.id,attrs:{day:e},scopedSlots:t._u([t._l(Object.keys(t.$scopedSlots),function(e){return{key:e,fn:function(n){return[t._t(e,null,null,n)]}}})])},"calendar-day",t.$attrs,!1),t.$listeners))}))}))},staticRenderFns:[]};e.a=r},function(t,e,n){"use strict";var r=n(51),i=n(119);var a=function(t){n(112)},o=n(1)(r.a,i.a,!1,a,"data-v-81948efe",null);e.a=o.exports},function(t,e){},function(t,e,n){t.exports={default:n(114),__esModule:!0}},function(t,e,n){n(115),t.exports=n(5).Object.values},function(t,e,n){var r=n(7),i=n(116)(!1);r(r.S,"Object",{values:function(t){return i(t)}})},function(t,e,n){var r=n(16),i=n(26),a=n(42).f;t.exports=function(t){return function(e){for(var n,o=i(e),s=r(o),u=s.length,c=0,l=[];u>c;)a.call(o,n=s[c++])&&l.push(t?[n,o[n]]:o[n]);return l}}},function(t,e){},function(t,e,n){"use strict";var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"svg-icon",attrs:{width:t.width,height:t.height,viewBox:t.viewBox},on:{click:function(e){t.$emit("click",e)}}},[n("path",{attrs:{d:t.path}})])},staticRenderFns:[]};e.a=r},function(t,e,n){"use strict";var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-nav"},["month"===t.mode_?n("div",[n("div",{staticClass:"c-header",style:t.headerStyle},[n("div",{staticClass:"c-arrow-layout"},[t._t("nav-left-button",[n("svg-icon",{staticClass:"c-arrow",style:t.headerArrowsStyle,attrs:{name:"leftArrow"},on:{click:t.movePrevYear}})],{monthItems:[].concat(t.monthItems),move:t.movePrevYear})],2),t._v(" "),n("span",{staticClass:"c-title",style:t.headerTitleStyle,on:{click:function(e){t.selectMode("year")}}},[t._v("\n        "+t._s(t.yearIndex)+"\n      ")]),t._v(" "),n("div",{staticClass:"c-arrow-layout"},[t._t("nav-right-button",[n("svg-icon",{staticClass:"c-arrow",style:t.headerArrowsStyle,attrs:{name:"rightArrow"},on:{click:t.moveNextYear}})],{monthItems:[].concat(t.monthItems),move:t.moveNextYear})],2)]),t._v(" "),n("table",{staticClass:"c-table"},t._l(t.monthRows,function(e,r){return n("tr",{key:r},t._l(e,function(e){return n("td",{key:e.month},[n("div",{staticClass:"c-table-cell",class:{"c-active":e.isActive,"c-disabled":e.isDisabled},style:t.getMonthCellStyle(e),on:{click:function(n){t.monthClick(e.month)}}},[t._v("\n            "+t._s(e.label)+"\n            "),t._v(" "),n("transition",{attrs:{name:"indicators"}},[e.attributes?n("div",{staticClass:"c-indicators"},t._l(e.attributes,function(t){return n("span",{key:t.key,staticClass:"c-indicator",style:t.style})})):t._e()])],1)])}))}))]):t._e(),t._v(" "),"year"===t.mode_?n("div",[n("div",{staticClass:"c-header",style:t.headerStyle},[n("div",{staticClass:"c-arrow-layout"},[t._t("nav-left-button",[n("svg-icon",{staticClass:"c-arrow",style:t.headerArrowsStyle,attrs:{name:"leftArrow"},on:{click:t.movePrevYearGroup}})],{firstYear:t.firstYear,lastYear:t.lastYear,yearItems:[].concat(t.yearItems),move:t.movePrevYearGroup})],2),t._v(" "),n("span",{staticClass:"c-title",style:t.headerTitleStyle,on:{click:function(e){t.selectMode("month")}}},[t._v("\n        "+t._s(t.firstYear)+" - "+t._s(t.lastYear)+"\n      ")]),t._v(" "),n("div",{staticClass:"c-arrow-layout"},[t._t("nav-right-button",[n("svg-icon",{staticClass:"c-arrow",style:t.headerArrowsStyle,attrs:{name:"rightArrow"},on:{click:t.moveNextYearGroup}})],{firstYear:t.firstYear,lastYear:t.lastYear,yearItems:[].concat(t.yearItems),move:t.moveNextYearGroup})],2)]),t._v(" "),n("table",{staticClass:"c-table"},t._l(t.yearRows,function(e,r){return n("tr",{key:r},t._l(e,function(e){return n("td",{key:e.year},[n("div",{staticClass:"c-table-cell",class:{"c-active":e.isActive,"c-disabled":e.isDisabled},style:t.getYearCellStyle(e),on:{click:function(n){t.yearClick(e.year)}}},[t._v("\n            "+t._s(e.year)+"\n          ")])])}))}))]):t._e()])},staticRenderFns:[]};e.a=r},function(t,e,n){"use strict";var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"pane",staticClass:"c-pane",style:t.paneStyle},[t._t("header",[n("div",{staticClass:"c-header",style:t.headerStyle},[n("div",{staticClass:"c-arrow-layout"},[t.hideLeftButton?t._e():t._t("header-left-button",[n("svg-icon",{class:["c-arrow",{"c-disabled":!t.canMovePrevMonth}],style:t.arrowStyle,attrs:{name:"leftArrow"},on:{click:t.movePrevMonth}})],null,t.page_)],2),t._v(" "),n("div",{class:["c-title-layout",t.titleClass]},[n("popover",{staticClass:"c-title-popover",attrs:{direction:"bottom",align:t.titlePosition,visibility:t.navVisibility,"content-style":t.navWrapperStyle,"force-hidden":t.navForceHidden,"toggle-visible-on-click":"","is-interactive":""},on:{"update:forceHidden":function(e){t.navForceHidden=e}}},[n("transition-group",{staticClass:"c-title-anchor",attrs:{tag:"div",name:t.titleTransition_}},t._l(t.pages,function(e){return e===t.page_?n("div",{key:e.key,staticClass:"c-title",style:t.titleStyle},[t._t("header-title",[t._v("\n                "+t._s(e.title)+"\n              ")],null,e)],2):t._e()})),t._v(" "),n("calendar-nav",{attrs:{slot:"popover-content",value:t.page_,validator:t.canMove,styles:t.styles,formats:t.formats},on:{input:function(e){t.navPageSelected(e)}},slot:"popover-content",scopedSlots:t._u([t._l(t.navSlots,function(e){return{key:e,fn:function(n){return[t._t(e,null,null,n)]}}})])})],1)],1),t._v(" "),n("div",{staticClass:"c-arrow-layout"},[t.hideRightButton?t._e():t._t("header-right-button",[n("svg-icon",{class:["c-arrow",{"c-disabled":!t.canMoveNextMonth}],style:t.arrowStyle,attrs:{name:"rightArrow"},on:{click:t.moveNextMonth}})],null,t.page_)],2)])],null,t.page_),t._v(" "),t.headerHorizontalDividerStyle_?n("div",{staticClass:"c-horizontal-divider",style:t.headerHorizontalDividerStyle_}):t._e(),t._v(" "),n("div",{staticClass:"c-weekdays",style:t.weekdaysStyle_},t._l(t.weekdayLabels,function(e,r){return n("div",{key:r+1,staticClass:"c-weekday"},[t._v("\n      "+t._s(e)+"\n    ")])})),t._v(" "),t.weekdaysHorizontalDividerStyle_?n("div",{staticClass:"c-horizontal-divider",style:t.weekdaysHorizontalDividerStyle_}):t._e(),t._v(" "),n("div",{staticClass:"c-weeks",style:t.weeksStyle_},[n("transition-group",{staticClass:"c-weeks-rows-wrapper",attrs:{tag:"div",name:t.weeksTransition_},on:{"before-enter":function(e){t.weeksTransitioning=!0},"after-enter":function(e){t.weeksTransitioning=!1}}},t._l(t.pages,function(e){return e===t.page_?n("calendar-weeks",t._g(t._b({key:e.key,staticClass:"c-weeks-rows",attrs:{"month-comps":e.monthComps,"prev-month-comps":e.prevMonthComps,"next-month-comps":e.nextMonthComps,styles:t.styles,formats:t.formats},on:{"&touchstart":function(e){t.touchStart(e)},"&touchmove":function(e){t.touchMove(e)},"&touchend":function(e){t.touchEnd(e)}},scopedSlots:t._u([t._l(Object.keys(t.$scopedSlots),function(e){return{key:e,fn:function(n){return[t._t(e,null,null,n)]}}})])},"calendar-weeks",t.$attrs,!1),t.$listeners)):t._e()}))],1)],2)},staticRenderFns:[]};e.a=r},function(t,e,n){"use strict";var r=n(0),i=n.n(r),a=n(53),o=n(2);e.a=function(t){var e=Object(o.a)(t)&&t.filter(function(t){return t&&t.dates}).map(function(t,e){return Object(a.a)(i()({key:t.key||e.toString(),order:t.order||0},t))})||[];return{length:e.length,find:function(t){return e.map(function(e){return i()({},e,{targetDate:e.includesDay(t)})}).filter(function(t){return t.targetDate}).sort(function(t,e){return t.targetDate.compare(e.targetDate)})}}}},function(t,e,n){"use strict";var r=n(54),i=n(1)(r.a,null,!1,null,null,null);e.a=i.exports},function(t,e,n){"use strict";var r=n(55),i=n(1)(r.a,null,!1,null,null,null);e.a=i.exports},function(t,e,n){"use strict";var r=n(56),i=n(1)(r.a,null,!1,null,null,null);e.a=i.exports},function(t,e,n){"use strict";var r=n(57),i=n(1)(r.a,null,!1,null,null,null);e.a=i.exports},function(t,e,n){"use strict";var r=n(58),i=n(128);var a=function(t){n(127)},o=n(1)(r.a,i.a,!1,a,"data-v-6c331e62",null);e.a=o.exports},function(t,e){},function(t,e,n){"use strict";var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"date-label"},[this.dateLabel?e("div",[this._v("\n      "+this._s(this.dateLabel)+"\n    ")]):this._e(),this._v(" "),this.startDateLabel?e("div",[this._v("\n      "+this._s(this.startDateLabel)+"\n    ")]):this._e(),this._v(" "),this.endDateLabel?e("div",[this._v("\n      "+this._s(this.endDateLabel)+"\n    ")]):this._e()]),this._v(" "),this.isRange?e("div",{staticClass:"days-nights"},[e("span",{staticClass:"days"},[e("svg-icon",{staticClass:"vc-sun-o",attrs:{name:"sun"}}),this._v("\n      "+this._s(this.days)+"\n    ")],1),this._v(" "),e("span",{staticClass:"nights"},[e("svg-icon",{staticClass:"vc-moon-o",attrs:{name:"moon"}}),this._v("\n      "+this._s(this.nights)+"\n    ")],1)]):this._e()])},staticRenderFns:[]};e.a=r},function(t,e,n){"use strict";var r=n(0),i=n.n(r),a=n(2),o={ar:{dow:7,L:"D/‏M/‏YYYY"},bg:{dow:2,L:"D.MM.YYYY"},ca:{dow:2,L:"DD/MM/YYYY"},"zh-CN":{dow:2,L:"YYYY/MM/DD"},"zh-TW":{L:"YYYY/MM/DD"},hr:{dow:2,L:"DD.MM.YYYY"},cs:{dow:2,L:"DD.MM.YYYY"},da:{dow:2,L:"DD.MM.YYYY"},nl:{dow:2,L:"DD.MM.YYYY"},"en-US":{L:"MM/DD/YYYY"},"en-AU":{dow:2,L:"DD/MM/YYYY"},"en-CA":{L:"YYYY-MM-DD"},"en-GB":{dow:2,L:"DD/MM/YYYY"},"en-IE":{dow:2,L:"DD-MM-YYYY"},"en-NZ":{dow:2,L:"DD/MM/YYYY"},eo:{dow:2,L:"YYYY-MM-DD"},fi:{dow:2,L:"Do MMMM[ta] YYYY"},fr:{dow:2,L:"DD/MM/YYYY"},"fr-CA":{L:"YYYY-MM-DD"},"fr-CH":{dow:2,L:"DD.MM.YYYY"},de:{dow:2,L:"DD.MM.YYYY"},id:{dow:2,L:"DD/MM/YYYY"},it:{dow:2,L:"DD/MM/YYYY"},ja:{L:"YYYY年M月D日"},ko:{L:"YYYY.MM.DD"},mk:{dow:2,L:"D.MM.YYYY"},pl:{dow:2,L:"DD.MM.YYYY"},pt:{dow:2,L:"DD/MM/YYYY"},ro:{dow:2,L:"DD.MM.YYYY"},ru:{dow:2,L:"DD.MM.YYYY"},sk:{dow:2,L:"DD.MM.YYYY"},es:{dow:1,L:"DD/MM/YYYY"},sv:{dow:2,L:"YYYY-MM-DD"},th:{L:"DD/MM/YYYY"},tr:{dow:2,L:"DD.MM.YYYY"},uk:{dow:2,L:"DD.MM.YYYY"}};o.en=o["en-US"],o.zh=o["zh-CN"];var s=function(t,e){var n=new Intl.DateTimeFormat(t,{month:e,timezome:"UTC"});return Object(a.j)().map(function(t){return n.format(t)})},u=function(t,e){var n=new Intl.DateTimeFormat(t,{weekday:e,timeZone:"UTC"});return Object(a.q)({utc:!0}).map(function(t){return n.format(t)})},c=function(t){return""+t+([null,"st","nd","rd"][t%100>>3^1&&t%10]||"th")};e.a=function(t){var e=(new Intl.DateTimeFormat).resolvedOptions().locale,n=[t,t&&t.substring(0,2),e].find(function(t){return o[t]})||t||e,r=i()({dow:1,L:"DD/MM/YYYY"},o[n]),a=u(n,"long"),l=u(n,"short"),d=l.map(function(t){return t.substring(0,2)}),f=u(n,"narrow"),h=s(n,"long"),p=s(n,"short");return{locale:n,firstDayOfWeek:r.dow,masks:{L:r.L},dayNames:a,dayNamesShort:l,dayNamesShorter:d,dayNamesNarrow:f,monthNames:h,monthNamesShort:p,DoFn:c}}}])});
//# sourceMappingURL=v-calendar.min.js.map

/***/ }),

/***/ "./node_modules/vee-validate/dist/locale/es.js":
/***/ (function(module, exports, __webpack_require__) {

!function(e,n){ true?module.exports=n():"function"==typeof define&&define.amd?define(n):((e=e||self).__vee_validate_locale__es=e.__vee_validate_locale__es||{},e.__vee_validate_locale__es.js=n())}(this,function(){"use strict";var e,n={name:"es",messages:{_default:function(e){return"El campo "+e+" no es válido."},after:function(e,n){var o=n[0];return"El campo "+e+" debe ser posterior "+(n[1]?"o igual ":"")+"a "+o+"."},alpha:function(e){return"El campo "+e+" solo debe contener letras."},alpha_dash:function(e){return"El campo "+e+" solo debe contener letras, números y guiones."},alpha_num:function(e){return"El campo "+e+" solo debe contener letras y números."},alpha_spaces:function(e){return"El campo "+e+" solo debe contener letras y espacios."},before:function(e,n){var o=n[0];return"El campo "+e+" debe ser anterior "+(n[1]?"o igual ":"")+"a "+o+"."},between:function(e,n){return"El campo "+e+" debe estar entre "+n[0]+" y "+n[1]+"."},confirmed:function(e){return"El campo "+e+" no coincide."},credit_card:function(e){return"El campo "+e+" es inválido."},date_between:function(e,n){return"El campo "+e+" debe estar entre "+n[0]+" y "+n[1]+"."},date_format:function(e,n){return"El campo "+e+" debe tener un formato "+n[0]+"."},decimal:function(e,n){void 0===n&&(n=[]);var o=n[0];return void 0===o&&(o="*"),"El campo "+e+" debe ser numérico y contener"+("*"===o?"":" "+o)+" puntos decimales."},digits:function(e,n){return"El campo "+e+" debe ser numérico y contener exactamente "+n[0]+" dígitos."},dimensions:function(e,n){return"El campo "+e+" debe ser de "+n[0]+" píxeles por "+n[1]+" píxeles."},email:function(e){return"El campo "+e+" debe ser un correo electrónico válido."},excluded:function(e){return"El campo "+e+" debe ser un valor válido."},ext:function(e){return"El campo "+e+" debe ser un archivo válido."},image:function(e){return"El campo "+e+" debe ser una imagen."},included:function(e){return"El campo "+e+" debe ser un valor válido."},integer:function(e){return"El campo "+e+" debe ser un entero."},ip:function(e){return"El campo "+e+" debe ser una dirección ip válida."},length:function(e,n){var o=n[0],r=n[1];return r?"El largo del campo "+e+" debe estar entre "+o+" y "+r+".":"El largo del campo "+e+" debe ser "+o+"."},max:function(e,n){return"El campo "+e+" no debe ser mayor a "+n[0]+" caracteres."},max_value:function(e,n){return"El campo "+e+" debe de ser "+n[0]+" o menor."},mimes:function(e){return"El campo "+e+" debe ser un tipo de archivo válido."},min:function(e,n){return"El campo "+e+" debe tener al menos "+n[0]+" caracteres."},min_value:function(e,n){return"El campo "+e+" debe ser "+n[0]+" o superior."},numeric:function(e){return"El campo "+e+" debe contener solo caracteres numéricos."},regex:function(e){return"El formato del campo "+e+" no es válido."},required:function(e){return"El campo "+e+" es obligatorio."},size:function(e,n){var o,r,t,a=n[0];return"El campo "+e+" debe ser menor a "+(o=a,r=1024,t=0==(o=Number(o)*r)?0:Math.floor(Math.log(o)/Math.log(r)),1*(o/Math.pow(r,t)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][t])+"."},url:function(e){return"El campo "+e+" no es una URL válida."}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((e={})[n.name]=n,e)),n});

/***/ }),

/***/ "./node_modules/vue-loader/lib/component-normalizer.js":
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-00be881e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/feeding/FeedingPortions.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "columns wrapper-indications" }, [
        _c(
          "div",
          { staticClass: "column col-sm-10 col-xl-10 col-mx-auto text-center" },
          [
            _c("br"),
            _c("br"),
            _vm._v(" "),
            _c("h2", { staticClass: "text-center" }, [_vm._v("TUS PORCIONES")]),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "ctn-images-protions" }, [
              _c("img", { attrs: { src: "/img/taza-icon.png" } }),
              _vm._v(" "),
              _c("img", { attrs: { src: "/img/dedos-icon.png" } }),
              _vm._v(" "),
              _c("img", { attrs: { src: "/img/mano-icon.png" } })
            ]),
            _vm._v(" "),
            _c("ul", [
              _c("li", [_vm._v("Arroz  un pocillo de café")]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "Puré de papa, zapallo, batata o zanahoria  un pocillo de café"
                )
              ]),
              _vm._v(" "),
              _c("li", [_vm._v("Fideos  un pocillo de café")]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Harinas  1 o 2 tostadas de pan integral (por día). "),
                _c("br"),
                _vm._v(" 3 galletitas de agua (por día)")
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Proteína: un poco más grande que la palma de la mano.")
              ]),
              _vm._v(" "),
              _c("li", [_vm._v("Verduras y vegetales: tamaño taza de té.")]),
              _vm._v(" "),
              _c("li", [_vm._v("Mermelada  1 cucharadita de té (no más)")])
            ])
          ]
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-00be881e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-02edda72\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/profile/ProfileWrapper.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col s12" }, [
        _c("ul", { staticClass: "tab tab-block" }, [
          _c(
            "li",
            { staticClass: "tab-item" },
            [
              _c(
                "router-link",
                {
                  staticClass: "nav-link",
                  attrs: {
                    to: { name: "profile" },
                    activeClass: "active",
                    exact: ""
                  }
                },
                [_vm._v("\n\t\t\t\t\tVer Perfil\n\t\t\t\t\t")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "tab-item" },
            [
              _c(
                "router-link",
                {
                  staticClass: "nav-link",
                  attrs: {
                    to: { name: "profile.editProfile" },
                    activeClass: "active",
                    exact: ""
                  }
                },
                [_vm._v("\n\t\t\t\t\t\tEditar Perfil\n\t\t\t\t\t")]
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        [
          _c(
            "transition",
            { attrs: { name: "fade", mode: "out-in" } },
            [_c("router-view")],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-02edda72", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-05ae0628\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/diagnostic/Diagnostic.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "mainWrapper" } },
    [
      _c("br"),
      _vm._v(" "),
      _c("h3", { staticClass: "text-center mt-2" }, [
        _vm._v("DIAGNOSTICO INICIAL")
      ]),
      _vm._v(" "),
      _c("ul", { staticClass: "step ctn-steps" }, [
        _c(
          "li",
          {
            staticClass: "step-item",
            class: { active: _vm.currentStep == "step1" },
            on: {
              click: function($event) {
                return _vm.onClickStep("step1")
              }
            }
          },
          [
            _c(
              "a",
              { staticClass: "tooltip", attrs: { "data-tooltip": "Paso 1" } },
              [_vm._v("1")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "step-item",
            class: { active: _vm.currentStep == "step2" },
            on: {
              click: function($event) {
                return _vm.onClickStep("step2")
              }
            }
          },
          [
            _c(
              "a",
              { staticClass: "tooltip", attrs: { "data-tooltip": "Paso 2" } },
              [_vm._v("2")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "step-item",
            class: { active: _vm.currentStep == "step3" },
            on: {
              click: function($event) {
                return _vm.onClickStep("step3")
              }
            }
          },
          [
            _c(
              "a",
              { staticClass: "tooltip", attrs: { "data-tooltip": "Paso 3" } },
              [_vm._v("3")]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.currentStep == "step1",
              expression: "currentStep =='step1'"
            }
          ],
          attrs: { id: "step1" }
        },
        [
          _c("h3", { staticClass: "text-center mt-1" }, [
            _vm._v("Antecedenctes de salud")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "columns" }, [
            _c(
              "div",
              { staticClass: "column col-sm-10  col-xl-8 col-mx-auto" },
              [
                _c("table", { staticClass: "table table-striped" }, [
                  _c(
                    "tbody",
                    _vm._l(_vm.arrHealthHistory, function(antecedent) {
                      return _c("tr", [
                        _c("td", [_vm._v(_vm._s(antecedent.name))]),
                        _vm._v(" "),
                        _c("td", [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              { staticClass: "form-radio form-inline" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: antecedent.value,
                                      expression: "antecedent.value"
                                    }
                                  ],
                                  attrs: {
                                    type: "radio",
                                    name: antecedent.name,
                                    value: "no"
                                  },
                                  domProps: {
                                    checked: _vm._q(antecedent.value, "no")
                                  },
                                  on: {
                                    change: function($event) {
                                      return _vm.$set(antecedent, "value", "no")
                                    }
                                  }
                                }),
                                _c("i", { staticClass: "form-icon" }),
                                _vm._v(" No\n\t\t\t\t\t\t\t\t\t")
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "label",
                              { staticClass: "form-radio form-inline" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: antecedent.value,
                                      expression: "antecedent.value"
                                    }
                                  ],
                                  attrs: {
                                    type: "radio",
                                    name: antecedent.name,
                                    value: "si"
                                  },
                                  domProps: {
                                    checked: _vm._q(antecedent.value, "si")
                                  },
                                  on: {
                                    change: function($event) {
                                      return _vm.$set(antecedent, "value", "si")
                                    }
                                  }
                                }),
                                _c("i", { staticClass: "form-icon" }),
                                _vm._v(" Si\n\t\t\t\t\t\t\t\t\t")
                              ]
                            )
                          ])
                        ])
                      ])
                    }),
                    0
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group py-2 my-2" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-lg btn-primary float-right",
                      on: {
                        click: function($event) {
                          return _vm.onClickStep("step2")
                        }
                      }
                    },
                    [_vm._v("CONTINUAR")]
                  )
                ])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.currentStep == "step2",
              expression: "currentStep =='step2'"
            }
          ],
          attrs: { id: "step2" }
        },
        [
          _c("h3", { staticClass: "text-center mt-1" }, [
            _vm._v("Condición Física Actual")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "columns" }, [
            _c("div", { staticClass: "column col-xl-8 col-mx-auto" }, [
              _c("div", { staticClass: "ctn-cheboxes" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { staticClass: "form-radio" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.physicalCondition,
                          expression: "physicalCondition"
                        }
                      ],
                      attrs: {
                        type: "radio",
                        name: "physicalCondition",
                        value: "baja"
                      },
                      domProps: {
                        checked: _vm._q(_vm.physicalCondition, "baja")
                      },
                      on: {
                        change: function($event) {
                          _vm.physicalCondition = "baja"
                        }
                      }
                    }),
                    _c("i", { staticClass: "form-icon" }),
                    _c("b", [_vm._v("BAJA")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Sedentario, no hago actividad física actualmente."
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("label", { staticClass: "form-radio" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.physicalCondition,
                          expression: "physicalCondition"
                        }
                      ],
                      attrs: {
                        type: "radio",
                        name: "physicalCondition",
                        value: "media"
                      },
                      domProps: {
                        checked: _vm._q(_vm.physicalCondition, "media")
                      },
                      on: {
                        change: function($event) {
                          _vm.physicalCondition = "media"
                        }
                      }
                    }),
                    _c("i", { staticClass: "form-icon" }),
                    _vm._v(" "),
                    _c("b", [_vm._v("MEDIA")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Esporádicamente hago ejercicio (1 vez por semana hago algún tipo de actividad física)."
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("label", { staticClass: "form-radio" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.physicalCondition,
                          expression: "physicalCondition"
                        }
                      ],
                      attrs: {
                        type: "radio",
                        name: "physicalCondition",
                        value: "alta"
                      },
                      domProps: {
                        checked: _vm._q(_vm.physicalCondition, "alta")
                      },
                      on: {
                        change: function($event) {
                          _vm.physicalCondition = "alta"
                        }
                      }
                    }),
                    _c("i", { staticClass: "form-icon" }),
                    _vm._v(" "),
                    _c("b", [_vm._v("ALTA")]),
                    _vm._v(" "),
                    _c("p", [_vm._v("Entreno más de 2 veces por semana.")])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group py-2" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-lg btn-primary float-right",
                    on: {
                      click: function($event) {
                        return _vm.onClickStep("step3")
                      }
                    }
                  },
                  [_vm._v("CONTINUAR")]
                )
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.currentStep == "step3",
              expression: "currentStep =='step3'"
            }
          ],
          attrs: { id: "step3" }
        },
        [
          _c("h3", { staticClass: "text-center mt-2" }, [
            _vm._v("Cuestionario Personal")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "columns" }, [
            _c(
              "div",
              { staticClass: "column col-sm-10  col-xl-8 col-mx-auto" },
              [
                _vm._l(_vm.arrQuestions, function(question, i) {
                  return _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticClass: "form-label",
                        attrs: { id: "question_" + question.id }
                      },
                      [_c("b", [_vm._v(_vm._s(question.question))])]
                    ),
                    _vm._v(" "),
                    _c("label", { staticClass: "form-radio" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.answers[question.id],
                            expression: "answers[question.id]"
                          }
                        ],
                        attrs: {
                          type: "radio",
                          name: "question" + question.id,
                          value: "A"
                        },
                        domProps: {
                          checked: _vm._q(_vm.answers[question.id], "A")
                        },
                        on: {
                          change: function($event) {
                            return _vm.$set(_vm.answers, question.id, "A")
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("i", { staticClass: "form-icon" }),
                      _vm._v(" " + _vm._s(question.optionA) + "\n\t\t\t\t\t")
                    ]),
                    _vm._v(" "),
                    _c("label", { staticClass: "form-radio" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.answers[question.id],
                            expression: "answers[question.id]"
                          }
                        ],
                        attrs: {
                          type: "radio",
                          name: "question" + question.id,
                          value: "B"
                        },
                        domProps: {
                          checked: _vm._q(_vm.answers[question.id], "B")
                        },
                        on: {
                          change: function($event) {
                            return _vm.$set(_vm.answers, question.id, "B")
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("i", { staticClass: "form-icon" }),
                      _vm._v(" " + _vm._s(question.optionB) + "\n\t\t\t\t\t")
                    ]),
                    _vm._v(" "),
                    _c("hr")
                  ])
                }),
                _vm._v(" "),
                _c("div", { staticClass: "form-group py-2" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-lg btn-primary float-right",
                      on: {
                        click: function($event) {
                          return _vm.onClickStep("step4")
                        }
                      }
                    },
                    [_vm._v("CONTINUAR")]
                  )
                ])
              ],
              2
            )
          ])
        ]
      ),
      _vm._v(" "),
      _vm.loading
        ? _c("loading", { attrs: { message: "Cargando ..." } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-05ae0628", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-06bf4992\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/feeding/FeedingForbidden.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "columns wrapper-indications" }, [
        _c(
          "div",
          { staticClass: "column col-sm-10 col-xl-10 col-mx-auto text-center" },
          [
            _c("br"),
            _vm._v(" "),
            _c("h2", { staticClass: "text-center" }, [
              _vm._v("LOS NO / PROHIBIDOS")
            ]),
            _vm._v(" "),
            _c("ul", [
              _c("li", [_vm._v("Galletitas dulces")]),
              _vm._v(" "),
              _c("li", [_vm._v("Snacks salados fritos")]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Bebidas alcohólicas "),
                _c("br"),
                _vm._v(" (no indicadas en “consumo reducido”)")
              ]),
              _vm._v(" "),
              _c("li", [_vm._v("Helado")]),
              _vm._v(" "),
              _c("li", [_vm._v("Pproductos bollería")]),
              _vm._v(" "),
              _c("li", [_vm._v("De repostería")]),
              _vm._v(" "),
              _c("li", [_vm._v("Snacks salados fritos")]),
              _vm._v(" "),
              _c("li", [
                _vm._v("En general fritos "),
                _c("br"),
                _vm._v(" (no usar esta forma de cocción)")
              ])
            ])
          ]
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-06bf4992", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-13c0f844\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/control/Control.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "columns ctn-buttons" }, [
      _c("div", { staticClass: "column col-sm-12" }, [
        _c("h1", { staticClass: "text-center text-uppercase" }, [
          _vm._v("\n\t\t\t" + _vm._s(_vm.user.profile.name) + "\n\t\t\t")
        ]),
        _vm._v(" "),
        _c("h4", { staticClass: "text-center" }, [
          _vm._v("Bienvenido(a) a tu panel de seguimiento y control ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "columns ctn-plans-welcome" }, [
          _c(
            "div",
            { staticClass: "column col-sm-10 col-xl-10 col-mx-auto" },
            [
              _c(
                "router-link",
                {
                  attrs: {
                    to: { name: "controlFeeding" },
                    tag: "div",
                    activeClass: "active",
                    exact: ""
                  }
                },
                [
                  _c("div", { staticClass: "app-button" }, [
                    _c("div", { staticClass: "left" }, [
                      _c("img", {
                        attrs: {
                          src: "/img/seguimiento/control-comidas-icon.png",
                          alt: "Icon"
                        }
                      }),
                      _vm._v("\n\t\t\t\t\t\t\t\tCONTROL "),
                      _c("br"),
                      _vm._v(" DE COMIDAS\n\t\t\t\t\t\t\t")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "right" }, [
                      _c("i", { staticClass: "icon icon-arrow-right" })
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  attrs: {
                    to: { name: "controlRoutines" },
                    tag: "div",
                    activeClass: "active",
                    exact: ""
                  }
                },
                [
                  _c("div", { staticClass: "app-button" }, [
                    _c("div", { staticClass: "left" }, [
                      _c("img", {
                        attrs: {
                          src: "/img/seguimiento/control-rutinas-icon.png",
                          alt: "Icon"
                        }
                      }),
                      _vm._v("\n\t\t\t\t\t\t\t\tCONTROL "),
                      _c("br"),
                      _vm._v("\n\t\t\t\t\t\t\t\tDE RUTINAS\n\t\t\t\t\t\t\t")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "right" }, [
                      _c("i", { staticClass: "icon icon-arrow-right" })
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _vm.user.status === "premium"
                ? _c(
                    "router-link",
                    {
                      attrs: {
                        to: { name: "controlBoard" },
                        tag: "div",
                        activeClass: "active",
                        exact: ""
                      }
                    },
                    [
                      _c("div", { staticClass: "app-button" }, [
                        _c("div", { staticClass: "left" }, [
                          _c("img", {
                            attrs: {
                              src: "/img/seguimiento/tablero-icon.png",
                              alt: "Icon"
                            }
                          }),
                          _vm._v("\n\t\t\t\t\t\t\t\tTABLERO"),
                          _c("br"),
                          _vm._v(
                            "\n\t\t\t\t\t\t\t\tDE EVOLUCIÓN\n\t\t\t\t\t\t\t"
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "right" }, [
                          _c("i", { staticClass: "icon icon-arrow-right" })
                        ])
                      ])
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.user.status === "premium"
                ? _c(
                    "router-link",
                    {
                      attrs: {
                        to: { name: "controlHemogram" },
                        tag: "div",
                        activeClass: "active",
                        exact: ""
                      }
                    },
                    [
                      _c("div", { staticClass: "app-button" }, [
                        _c("div", { staticClass: "left" }, [
                          _c("img", {
                            attrs: {
                              src: "/img/seguimiento/hemograma-icon.png",
                              alt: "Icon"
                            }
                          }),
                          _vm._v("\n\t\t\t\t\t\t\t\tHEMOGRAMA\n\t\t\t\t\t\t\t")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "right" }, [
                          _c("i", { staticClass: "icon icon-arrow-right" })
                        ])
                      ])
                    ]
                  )
                : _vm._e()
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-13c0f844", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-146e679a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/control/ControlHemogram.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column col-sm-12 col-xl-10 col-mx-auto" }, [
          _c("h3", { staticClass: "text-center" }, [_vm._v("HEMOGRAMA")]),
          _vm._v(" "),
          _c("h5", { staticClass: "text-center" }, [
            _vm._v(
              "Compará los valores de tus hemogramas según avanza tu entrenamiento"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column col-sm-12 col-xl-10 col-mx-auto" }, [
          _c("table", { staticClass: "table table-striped table-hover" }, [
            _c("thead", [
              _c("tr", [
                _c("th"),
                _vm._v(" "),
                _c("th", { staticClass: "text-center" }, [_vm._v("VALORES")])
              ])
            ]),
            _vm._v(" "),
            _c("tbody", [
              _c("tr", [
                _c("td", [_vm._v("LDL")]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _c("input", {
                    staticClass: "input-table",
                    attrs: { type: "text" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Triglicéridos")]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _c("input", {
                    staticClass: "input-table",
                    attrs: { type: "text" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Glucemia am (ayunas)")]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _c("input", {
                    staticClass: "input-table",
                    attrs: { type: "text" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Hemoglobina Glucosilada")]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _c("input", {
                    staticClass: "input-table",
                    attrs: { type: "text" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Insulina am (ayunas)")]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _c("input", {
                    staticClass: "input-table",
                    attrs: { type: "text" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Proteína C Reactiva")]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _c("input", {
                    staticClass: "input-table",
                    attrs: { type: "text" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Ultrasensible")]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _c("input", {
                    staticClass: "input-table",
                    attrs: { type: "text" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("TSH")]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _c("input", {
                    staticClass: "input-table",
                    attrs: { type: "text" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("T4 Libre")]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _c("input", {
                    staticClass: "input-table",
                    attrs: { type: "text" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("T3 Libre")]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _c("input", {
                    staticClass: "input-table",
                    attrs: { type: "text" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Cortisol am (ayunas)")]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _c("input", {
                    staticClass: "input-table",
                    attrs: { type: "text" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Leptina")]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _c("input", {
                    staticClass: "input-table",
                    attrs: { type: "text" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Grehalina")]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _c("input", {
                    staticClass: "input-table",
                    attrs: { type: "text" }
                  })
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-146e679a", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1e5d4365\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/control/ControlPhotos.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column col-sm-12 col-xl-10 col-mx-auto" }, [
          _c("table", { staticClass: "table" }, [
            _c("thead", [
              _c("tr", [
                _c("th", { staticClass: "text-center" }, [_vm._v("MES 1")]),
                _vm._v(" "),
                _c("th", { staticClass: "text-center" }, [
                  _c("div", { staticClass: "wrapper-date no-border" }, [
                    _c("div", { staticClass: "ctn-date" }, [
                      _c(
                        "div",
                        { staticClass: "back", on: { click: _vm.onClickBack } },
                        [_c("i", { staticClass: "icon icon-arrow-left" })]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "date" }, [
                        _vm._v("MES " + _vm._s(_vm.currentMonth))
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "next", on: { click: _vm.onClickNext } },
                        [_c("i", { staticClass: "icon icon-arrow-right" })]
                      )
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("tbody", [
              _c("tr", { staticClass: "text-center" }, [
                _c("td", { staticClass: "w50" }, [
                  _vm.photos[0]
                    ? _c("div", {
                        staticClass: "ctn-image-table",
                        style: {
                          backgroundImage:
                            "url(" +
                            _vm.getImageUrl(_vm.photos[0].photo_1, 1) +
                            ")"
                        },
                        on: {
                          click: function($event) {
                            return _vm.onClickFirstPhoto(1)
                          }
                        }
                      })
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "w50" }, [
                  _vm.currentPhotos
                    ? _c("div", {
                        staticClass: "ctn-image-table",
                        style: {
                          backgroundImage:
                            "url(" +
                            _vm.getImageUrl(_vm.currentPhotos.photo_1, 1) +
                            ")"
                        },
                        on: {
                          click: function($event) {
                            return _vm.onClickPhoto(1)
                          }
                        }
                      })
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("tr", { staticClass: "text-center" }, [
                _c("td", { staticClass: "w50" }, [
                  _vm.photos[0]
                    ? _c("div", {
                        staticClass: "ctn-image-table",
                        style: {
                          backgroundImage:
                            "url(" +
                            _vm.getImageUrl(_vm.photos[0].photo_2, 2) +
                            ")"
                        },
                        on: {
                          click: function($event) {
                            return _vm.onClickFirstPhoto(2)
                          }
                        }
                      })
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "w50" }, [
                  _vm.currentPhotos
                    ? _c("div", {
                        staticClass: "ctn-image-table",
                        style: {
                          backgroundImage:
                            "url(" +
                            _vm.getImageUrl(_vm.currentPhotos.photo_2, 2) +
                            ")"
                        },
                        on: {
                          click: function($event) {
                            return _vm.onClickPhoto(2)
                          }
                        }
                      })
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("tr", { staticClass: "text-center" }, [
                _c("td", { staticClass: "w50" }, [
                  _vm.photos[0]
                    ? _c("div", {
                        staticClass: "ctn-image-table",
                        style: {
                          backgroundImage:
                            "url(" +
                            _vm.getImageUrl(_vm.photos[0].photo_3, 3) +
                            ")"
                        },
                        on: {
                          click: function($event) {
                            return _vm.onClickFirstPhoto(3)
                          }
                        }
                      })
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "w50" }, [
                  _vm.currentPhotos
                    ? _c("div", {
                        staticClass: "ctn-image-table",
                        style: {
                          backgroundImage:
                            "url(" +
                            _vm.getImageUrl(_vm.currentPhotos.photo_3, 3) +
                            ")"
                        },
                        on: {
                          click: function($event) {
                            return _vm.onClickPhoto(3)
                          }
                        }
                      })
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("tr", { staticClass: "text-center" }, [
                _c("td", { staticClass: "w50" }, [
                  _vm.photos[0]
                    ? _c("div", {
                        staticClass: "ctn-image-table",
                        style: {
                          backgroundImage:
                            "url(" +
                            _vm.getImageUrl(_vm.photos[0].photo_4, 4) +
                            ")"
                        },
                        on: {
                          click: function($event) {
                            return _vm.onClickFirstPhoto(4)
                          }
                        }
                      })
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "w50" }, [
                  _vm.currentPhotos
                    ? _c("div", {
                        staticClass: "ctn-image-table",
                        style: {
                          backgroundImage:
                            "url(" +
                            _vm.getImageUrl(_vm.currentPhotos.photo_4, 4) +
                            ")"
                        },
                        on: {
                          click: function($event) {
                            return _vm.onClickPhoto(4)
                          }
                        }
                      })
                    : _vm._e()
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm.loading
        ? _c("loading", { attrs: { message: "Cargando Fotos ..." } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column col-sm-12 col-xl-10 col-mx-auto" }, [
        _c("h3", { staticClass: "text-center" }, [
          _vm._v("SEG. Y CONTROL / FOTOS")
        ]),
        _vm._v(" "),
        _c("h5", { staticClass: "text-center" }, [
          _vm._v(
            "Compará las fotos de distintos períodos del entrenamiento y mirá tu evolución"
          )
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1e5d4365", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1f6d788c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/feeding/FeedingGuide.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c("ul", { staticClass: "tab tab-block ul-tabs-feeding" }, [
        _c(
          "li",
          { staticClass: "tab-item", class: { active: _vm.currentTab == 0 } },
          [
            _c(
              "a",
              {
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.onClickTab(0)
                  }
                }
              },
              [_vm._v("Desayuno")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "tab-item", class: { active: _vm.currentTab == 1 } },
          [
            _c(
              "a",
              {
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.onClickTab(1)
                  }
                }
              },
              [_vm._v("Almuerzo")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "tab-item", class: { active: _vm.currentTab == 2 } },
          [
            _c(
              "a",
              {
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.onClickTab(2)
                  }
                }
              },
              [_vm._v("Merienda")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "tab-item", class: { active: _vm.currentTab == 3 } },
          [
            _c(
              "a",
              {
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.onClickTab(3)
                  }
                }
              },
              [_vm._v("Cena")]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("h2", { staticClass: "text-center" }, [
        _vm._v("Seleccione un tipo de alimento")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "ctn-pyramid" }, [
        _vm.currentPyramid
          ? _c("div", { staticClass: "text-center" }, [
              !_vm.topIsActive
                ? _c("img", {
                    attrs: { src: _vm.currentPyramid[0].img1, alt: "" },
                    on: {
                      click: function($event) {
                        return _vm.onClickItemPyramid(
                          _vm.currentPyramid[0].value,
                          _vm.currentPyramid[0].name
                        )
                      }
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.topIsActive
                ? _c("img", {
                    attrs: { src: _vm.currentPyramid[0].img2, alt: "" },
                    on: {
                      click: function($event) {
                        return _vm.onClickItemPyramid(
                          _vm.currentPyramid[0].value,
                          _vm.currentPyramid[0].name
                        )
                      }
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              !_vm.middleIsActive
                ? _c("img", {
                    attrs: { src: _vm.currentPyramid[1].img1, alt: "" },
                    on: {
                      click: function($event) {
                        return _vm.onClickItemPyramid(
                          _vm.currentPyramid[1].value,
                          _vm.currentPyramid[1].name
                        )
                      }
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.middleIsActive
                ? _c("img", {
                    attrs: { src: _vm.currentPyramid[1].img2, alt: "" },
                    on: {
                      click: function($event) {
                        return _vm.onClickItemPyramid(
                          _vm.currentPyramid[1].value,
                          _vm.currentPyramid[1].name
                        )
                      }
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              !_vm.bottomIsActive
                ? _c("img", {
                    attrs: { src: _vm.currentPyramid[2].img1, alt: "" },
                    on: {
                      click: function($event) {
                        return _vm.onClickItemPyramid(
                          _vm.currentPyramid[2].value,
                          _vm.currentPyramid[2].name
                        )
                      }
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.bottomIsActive
                ? _c("img", {
                    attrs: { src: _vm.currentPyramid[2].img2, alt: "" },
                    on: {
                      click: function($event) {
                        return _vm.onClickItemPyramid(
                          _vm.currentPyramid[2].value,
                          _vm.currentPyramid[2].name
                        )
                      }
                    }
                  })
                : _vm._e()
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "wrapper-cards" }, [
        _vm.currentTab == 0
          ? _c("div", { attrs: { id: "ctnTab1" } })
          : _vm._e(),
        _vm._v(" "),
        _vm.currentTab == 1
          ? _c("div", { attrs: { id: "ctnTab2" } })
          : _vm._e(),
        _vm._v(" "),
        _vm.currentTab == 2
          ? _c("div", { attrs: { id: "ctnTab3" } })
          : _vm._e(),
        _vm._v(" "),
        _vm.currentTab == 3 ? _c("div", { attrs: { id: "ctnTab4" } }) : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal",
          class: { active: _vm.modalIsActive },
          attrs: { id: "modal-id" }
        },
        [
          _c("a", {
            staticClass: "modal-overlay",
            attrs: { "aria-label": "Close" },
            on: { click: _vm.onClickCloseModal }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "modal-container" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c("a", {
                staticClass: "btn btn-clear float-right",
                attrs: { "aria-label": "Close" },
                on: { click: _vm.onClickCloseModal }
              }),
              _vm._v(" "),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c(
                "h3",
                {
                  staticClass:
                    "modal-title h3 text-center text-capitalize no-margin"
                },
                [_vm._v(_vm._s(_vm.currentFoodName))]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "text-center" }, [
                _vm._v("Seleccione una opción")
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("div", { staticClass: "columns" }, [
                _c(
                  "div",
                  { staticClass: "column col-sm-10 col-xl-4 col-mx-auto" },
                  [
                    _c("div", { staticClass: "ctn-cheboxes" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        _vm._l(_vm.currentFoods, function(food) {
                          return _c("label", { staticClass: "form-radio" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.currentFood,
                                  expression: "currentFood"
                                }
                              ],
                              attrs: { type: "radio", name: "currentFood" },
                              domProps: {
                                value: food.id,
                                checked: _vm._q(_vm.currentFood, food.id)
                              },
                              on: {
                                change: function($event) {
                                  _vm.currentFood = food.id
                                }
                              }
                            }),
                            _c("i", { staticClass: "form-icon" }),
                            _vm._v(
                              " " + _vm._s(food.name) + "\n\t\t\t\t\t\t\t  "
                            )
                          ])
                        }),
                        0
                      )
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        on: { click: _vm.onClickChooseForToday }
                      },
                      [_vm._v("ELEGÍR PARA HOY")]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" })
          ])
        ]
      ),
      _vm._v(" "),
      _vm.loading
        ? _c("loading", { attrs: { message: "Cargando Alimentos ..." } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column col-sm-10 col-xl-10 col-mx-auto" }, [
        _c("h2", { staticClass: "text-center" }, [
          _vm._v("Guía de alimentación")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-body" }, [
      _c("div", { staticClass: "content text-center" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1f6d788c", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1fb7d8d3\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/profile/edit-password/EditPassword.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h3", { staticClass: "mb-4" }, [_vm._v("Edit Password")]),
    _vm._v(" "),
    _c("div", { staticClass: "card" }, [
      _c(
        "div",
        { staticClass: "card-body" },
        [
          _c("edit-password-form", { on: { updateSuccess: _vm.updateSuccess } })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1fb7d8d3", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-29175a2e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/shared/AppFooter.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", [_c("br")])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-29175a2e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2a87ae48\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/profile/Profile.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column col-md-10 col-xl-8 col-mx-auto" }, [
        _c("h3", { staticClass: "text-center" }, [_vm._v("Mi Perfil")]),
        _vm._v(" "),
        _c("ul", { staticClass: "profile-list" }, [
          _c("li", [
            _c("b", [_vm._v("Nombre:")]),
            _vm._v(
              " " +
                _vm._s(_vm.user.profile.name) +
                " " +
                _vm._s(_vm.user.profile.last_name)
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Sexo:")]),
            _vm._v(" " + _vm._s(_vm.user.profile.gender))
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Fecha de Nacimiento:")]),
            _vm._v(
              " " +
                _vm._s(_vm._f("formatBirthdate")(_vm.user.profile.birthdate))
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Peso:")]),
            _vm._v(" " + _vm._s(_vm.user.profile.weight) + " kg")
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Altura:")]),
            _vm._v(" " + _vm._s(_vm.user.profile.height) + " cm")
          ])
        ]),
        _vm._v(" "),
        _vm.user.subscription
          ? _c("div", [
              _c("h3", { staticClass: "text-center" }, [
                _vm._v("Mi Suscripción")
              ]),
              _vm._v(" "),
              _c("ul", { staticClass: "profile-list" }, [
                _c("li", [
                  _c("b", [_vm._v("Fecha de inicio:")]),
                  _vm._v(" " + _vm._s(_vm.user.subscription.start_date))
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("b", [_vm._v("Meses Transcurridos:")]),
                  _vm._v(" " + _vm._s(_vm.user.past_months))
                ])
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.user.subscription
          ? _c(
              "div",
              [
                _c("h3", { staticClass: "text-center" }, [
                  _vm._v("Mi Diagnostico")
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "profile-list" }, [
                  _c("li", [
                    _c("b", [_vm._v("Nivel:")]),
                    _vm._v(" " + _vm._s(_vm.user.level))
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("b", [_vm._v("Tipo de dieta:")]),
                    _vm._v(" " + _vm._s(_vm.user.diet_type))
                  ])
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-primary",
                    attrs: {
                      to: { name: "diagnostic" },
                      tag: "a",
                      activeClass: "active",
                      exact: ""
                    }
                  },
                  [_vm._v("Realizar Diagnostico Nuevamente")]
                ),
                _vm._v(" "),
                _vm._m(0)
              ],
              1
            )
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "warning-profile" }, [
      _c("span", [_vm._v("Advertencia:")]),
      _vm._v(
        " Si realizas el diagnostico nuevamente se actualizaran tu puntaje y tipo de dieta"
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2a87ae48", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2b0a0b64\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/welcome/Welcome.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "columns ctn-buttons" }, [
      _c(
        "div",
        { staticClass: "column col-sm-10 col-xl-10 col-mx-auto" },
        [
          _c(
            "router-link",
            {
              attrs: {
                to: { name: "freeRegister" },
                tag: "div",
                activeClass: "active",
                exact: ""
              }
            },
            [
              _c("div", { staticClass: "app-button" }, [
                _c("div", { staticClass: "left" }, [
                  _vm._v("\n\t\t\t\t\t\tREGISTRO "),
                  _c("br"),
                  _vm._v("\n\t\t\t\t\t\tGRATUITO\n\t\t\t\t\t")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "right" }, [
                  _c("i", { staticClass: "icon icon-arrow-right" })
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              attrs: {
                to: { name: "login" },
                tag: "div",
                activeClass: "active",
                exact: ""
              }
            },
            [
              _c("div", { staticClass: "app-button" }, [
                _c("div", { staticClass: "left" }, [
                  _vm._v("\n\t\t\t\t\t\tYA TENGO "),
                  _c("br"),
                  _vm._v("\n\t\t\t\t\t\tUNA CUENTA\n\t\t\t\t\t")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "right" }, [
                  _c("i", { staticClass: "icon icon-arrow-right" })
                ])
              ])
            ]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "video-responsive" }, [
      _c("iframe", {
        attrs: {
          src: "https://www.youtube.com/embed/cFIbsF0I6XE",
          frameborder: "0",
          allow: "autoplay; encrypted-media",
          allowfullscreen: ""
        }
      })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2b0a0b64", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2d54cd3e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/shared/TopMenu.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", [
    _c("header", { staticClass: "app-header" }, [
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column col-sm-2 col-md-4" }, [
          _vm.showBackButton
            ? _c(
                "button",
                {
                  staticClass:
                    "btn btn-primary btn-action btn-lg btn-ham btn-back",
                  on: { click: _vm.onClickBackButton }
                },
                [_c("i", { staticClass: "icon icon-arrow-left" })]
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "column col-sm-2 col-md-4" }, [
          _c(
            "button",
            {
              staticClass:
                "btn btn-primary btn-action btn-lg btn-ham float-right",
              on: { click: _vm.onClickMenuButton }
            },
            [_c("i", { staticClass: "icon icon-menu" })]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "wrapper-menu",
        class: { "show-menu": _vm.showMenu },
        on: { click: _vm.onClickWrapperMenu }
      },
      [
        _c(
          "div",
          {
            staticClass: "content-menu",
            on: {
              click: function($event) {
                $event.stopPropagation()
              }
            }
          },
          [
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c("a", { attrs: { href: "/rutinas" } }, [_vm._v("RUTINAS")]),
            _vm._v(" "),
            _c("a", { attrs: { href: "/alimentacion" } }, [
              _vm._v("ALIMENTACIÓN")
            ]),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "sub-item",
                attrs: { href: "/alimentacion/guia-alimentacion" }
              },
              [_vm._v("Guía de alimentación")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "sub-item",
                attrs: { href: "/alimentacion/indicaciones" }
              },
              [_vm._v("Indiciaciones")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "sub-item",
                attrs: { href: "/alimentacion/prohibidos" }
              },
              [_vm._v("Los NO/ Prohibidos")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "sub-item",
                attrs: { href: "/alimentacion/porciones" }
              },
              [_vm._v("Tus Porciones")]
            ),
            _vm._v(" "),
            _c("a", { attrs: { href: "/control" } }, [
              _vm._v("SEGUIMIENTO Y CONTROL")
            ]),
            _vm._v(" "),
            _c(
              "a",
              {
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.logout($event)
                  }
                }
              },
              [_vm._v("Logout")]
            )
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column col-sm-8 col-md-4 text-center" }, [
      _c("img", {
        staticClass: "header-logo center",
        attrs: { src: "/img/logo-chaupanza.png", alt: "Chau Panza" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ctn-logo-menu" }, [
      _c("img", {
        staticClass: "header-logo center",
        attrs: { src: "/img/logo-chaupanza.png", alt: "Chau Panza" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "/perfil" } }, [
      _c("i", { staticClass: "icon icon-people" }),
      _vm._v("   MI PERFIL")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2d54cd3e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-33ecfa4a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/routines/Routine.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "wrapper-routine", attrs: { id: "mainWrapper" } },
    [
      _c("h2", { staticClass: "text-center text-light" }, [
        _vm._v(_vm._s(_vm.currentRoutine.name))
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "wrapper-iframe" }, [
        _c("iframe", {
          attrs: {
            id: "id-iframe",
            src: _vm.currentRoutine.video,
            width: "640",
            height: "360",
            frameborder: "0",
            allow: "autoplay; fullscreen",
            allowfullscreen: ""
          }
        })
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("div", { staticClass: "columns text-center" }, [
        _c("div", { staticClass: "col-12 text-center" }, [
          _c("br"),
          _c("br"),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              on: { click: _vm.onClickQualify }
            },
            [_vm._v("Calificar Rutina")]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-33ecfa4a", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3a7dd8a8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/home/Home.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "ctn-bg-home" }),
      _vm._v(" "),
      _c("h2", { staticClass: "text-center title-home" }, [
        _vm._v("BIENVENID"),
        _vm.user.profile.gender == "M" ? _c("span", [_vm._v("O")]) : _vm._e(),
        _vm.user.profile.gender == "F" ? _c("span", [_vm._v("A")]) : _vm._e()
      ]),
      _vm._v(" "),
      _c("h1", { staticClass: "text-center text-uppercase subtitle-home" }, [
        _vm._v("\n\t\t\t" + _vm._s(_vm.user.profile.name) + "\n\t\t")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "columns ctn-buttons" }, [
        _c("div", { staticClass: "column col-sm-12" }, [
          _c(
            "div",
            {
              staticClass: "columns ctn-plans-welcome",
              class: { paddingBottomPremium: _vm.userIsFree }
            },
            [
              _c(
                "div",
                { staticClass: "column col-sm-10 col-xl-10 col-mx-auto" },
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: { name: "routines" },
                        tag: "div",
                        activeClass: "active",
                        exact: ""
                      }
                    },
                    [
                      _c("div", { staticClass: "app-button" }, [
                        _c("div", { staticClass: "left" }, [
                          _c("img", {
                            attrs: {
                              src: "/img/rutina-icon.png",
                              alt: "Chau Panza"
                            }
                          }),
                          _vm._v("\n\t\t\t\t\t\t\t\tVER "),
                          _c("br"),
                          _vm._v(" RUTINAS\n\t\t\t\t\t\t\t")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "right" }, [
                          _c("i", { staticClass: "icon icon-arrow-right" })
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _vm.user.status == "premium"
                    ? _c(
                        "router-link",
                        {
                          attrs: {
                            to: { name: "feeding" },
                            tag: "div",
                            activeClass: "active",
                            exact: ""
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "app-button default-cursor" },
                            [
                              _c("div", { staticClass: "left" }, [
                                _c("img", {
                                  attrs: {
                                    src: "/img/guia-alimentacion-icon.png",
                                    alt: "Chau Panza"
                                  }
                                }),
                                _vm._v("\n\t\t\t\t\t\t\t\tGUÍA DE "),
                                _c("br"),
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\tALIMENTACIÓN\n\t\t\t\t\t\t\t"
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "right" }, [
                                _c("i", {
                                  staticClass: "icon icon-arrow-right"
                                })
                              ])
                            ]
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: { name: "control" },
                        tag: "div",
                        activeClass: "active",
                        exact: ""
                      }
                    },
                    [
                      _c("div", { staticClass: "app-button default-cursor" }, [
                        _c("div", { staticClass: "left" }, [
                          _c("img", {
                            attrs: {
                              src: "/img/seguimiento-icon.png",
                              alt: "Chau Panza"
                            }
                          }),
                          _vm._v("\n\t\t\t\t\t\t\t\tSEGUIMIENTO "),
                          _c("br"),
                          _vm._v("\n\t\t\t\t\t\t\t\tY CONTROL\n\t\t\t\t\t\t\t")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "right" }, [
                          _c("i", { staticClass: "icon icon-arrow-right" })
                        ])
                      ])
                    ]
                  )
                ],
                1
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _vm.user.status == "free"
        ? _c(
            "router-link",
            {
              staticClass: "btn-premium",
              attrs: {
                to: { name: "plans" },
                tag: "div",
                activeClass: "active",
                exact: ""
              }
            },
            [_vm._v("\n\t\tPASAR A PLAN PERSONALIZADO\n\t")]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3a7dd8a8", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-425b0cb0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/routines/Routines.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "columns ctn-buttons" }, [
        _c("div", { staticClass: "column col-sm-12" }, [
          _c("div", { staticClass: "columns ctn-plans-welcome" }, [
            _c(
              "div",
              { staticClass: "column col-sm-10 col-xl-10 col-mx-auto" },
              _vm._l(_vm.routines, function(routine) {
                return _c(
                  "div",
                  {
                    on: {
                      click: function($event) {
                        return _vm.onClickRoutine(routine)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "app-button" }, [
                      _c("div", { staticClass: "left" }, [
                        _c("img", {
                          attrs: {
                            src: "/img/play-icon.png",
                            alt: "Chau Panza"
                          }
                        }),
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\t" +
                            _vm._s(routine.name) +
                            " \n\t\t\t\t\t\t\t\t"
                        )
                      ]),
                      _vm._v(" "),
                      _vm._m(1, true)
                    ])
                  ]
                )
              }),
              0
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _vm.loading
        ? _c("loading", { attrs: { message: "Cargando Rutinas ..." } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "columns" }, [
      _c(
        "div",
        { staticClass: "py-2 column col-sm-10 col-xl-10 col-mx-auto" },
        [
          _c(
            "h1",
            { staticClass: "py-2 text-center text-uppercase subtitle-home" },
            [_vm._v("\n\t\t\t\tRUTINAS\n\t\t\t")]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "right" }, [
      _c("i", { staticClass: "icon icon-arrow-right" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-425b0cb0", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4e0c237a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/feeding/FeedingSingle.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "columns" }, [
      _c(
        "div",
        { staticClass: "column col-sm-10 col-xl-10 col-mx-auto text-center" },
        [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "btn btn-lg",
              attrs: {
                to: { name: "feeding" },
                tag: "button",
                activeClass: "active",
                exact: ""
              }
            },
            [_vm._v("\n\t\t\t\tELEGIR PARA HOY\n\t\t\t")]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "columns" }, [
      _c(
        "div",
        { staticClass: "column col-sm-12 col-xl-10 col-mx-auto text-center" },
        [
          _c("div", {
            staticClass: "img-single-feeding",
            staticStyle: {
              "background-image":
                "url('http://tipsparaellas.com/wp-content/uploads/2016/10/tpe1-1.png')"
            }
          })
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "info-single-feeding" }, [
      _c("h3", { staticClass: "title" }, [_vm._v("Pollo con vegetales")]),
      _vm._v(" "),
      _c("h5", { staticClass: "subtitle" }, [_vm._v("380 Kcal.")]),
      _vm._v(" "),
      _c("p", { staticClass: "description" }, [
        _vm._v(
          "\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quod dolorem placeat delectus, nostrum laborum, dolore facere, porro aspernatur omnis, unde reiciendis. Fuga suscipit fugit repudiandae, culpa ea ad! Repellat.\n\t\t\t\t"
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4e0c237a", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-507d6556\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/feeding/FeedingIndications.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "columns wrapper-indications" }, [
      _c(
        "div",
        { staticClass: "column col-sm-10 col-xl-10 col-mx-auto text-center" },
        [
          _c("h2", [_vm._v("INDICACIONES")]),
          _vm._v(" "),
          _vm.user.diet_type == "S"
            ? _c("div", [
                _c("b", [_vm._v("Base de la pirámide")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "En la alimentación indicada para este tipo de deben predominar las verduras y hortalizas (ver clasificación). La mitad de la ingesta en una comida, deberá ser este tipo de alimentación.  Si lo vemos en un plato, éste representa la mitad del mismo."
                  )
                ]),
                _vm._v(" "),
                _c("b", [_vm._v("Centro de la pirámide")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Se recomienda consumir una ingesta moderada de proteínas, principalmente blancas y bajas en grasas como como el pollo, pavo, pescado, etc.  Tambien pequeñas porciones de quesos bajos en grasas están permitidos y componen esta parte de la alimentación, lo mismo que huevos cocidos en agua, en omelette o revueltos (no fritos!)"
                  )
                ]),
                _vm._v(" "),
                _c("b", [_vm._v("Punta de la pirámide")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Son los llamados alimentos de consumo reducido o limitado (ver clasificación). En cada comida, éstos deben representar menos del ¼ del plato."
                  )
                ]),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c("b", [_vm._v("Hidratación")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Tu peso/7 es la cantidad de vasos  de agua de 200cc que debes beber al día"
                  )
                ]),
                _vm._v(" "),
                _c("b", [_vm._v(" Sal")]),
                _vm._v(" "),
                _c("p", [_vm._v("Moderada")]),
                _vm._v(" "),
                _c("b", [_vm._v("Fruta")]),
                _vm._v(" "),
                _c("p", [_vm._v("No consumirla después de las 4:00 PM.")]),
                _vm._v(" "),
                _c("b", [_vm._v("Alimentos procesados")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "(Tales como harinas, dulces, helados, pizzas, postres light y no light, flanes, helados, chocolates en cualquiera de sus formas,  etc.): Tampoco consumir después de las 4:00PM"
                  )
                ]),
                _vm._v(" "),
                _c("b", [_vm._v(" Condimentos")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Aceite de oliva extra virgen, cucharita de té, limón, mostaza, pimienta, canela, jengibre, vinagre de manzana y aceto"
                  )
                ]),
                _vm._v(" "),
                _c("b", [_vm._v("Colaciones")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Si durante el día se siente hambre, consumir una colación que puede ser nueces o almendras (tres unidades), fruta (una) baja en azúcar, como manzana verde o fresas, bastoncitos de zanahoria o apio con queso untable descremado (max tres)."
                  )
                ]),
                _vm._v(" "),
                _c("b", [_vm._v(" Café")]),
                _vm._v(" "),
                _c("p", [_vm._v("Máximo dos por día")]),
                _vm._v(" "),
                _c("b", [_vm._v("Endulzante")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Evitar azúcar, reemplazar por estevia (preferentemente) o endulzantes"
                  )
                ]),
                _vm._v(" "),
                _c("b", [_vm._v(" Huevos")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Solo clara (hasta 2 al día). No usar aceite durante la cocción."
                  )
                ]),
                _vm._v(" "),
                _c("b", [_vm._v("Pastas")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Si las consumo como “consumo reducido”, que sea ¼ del plato, y el resto deben ser verduras, preferentemente verdes.  "
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.user.diet_type == "P"
            ? _c("div", [
                _c("b", [_vm._v("Base de la pirámide")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "En la alimentación indicada para este tipo de deben predominar las proteínas como las carnes, pescado, etc..al igual que los lácteos. La mitad de la ingesta en una comida, deberá ser este tipo de alimentación.  Si lo vemos en un plato, éste representa la mitad del mismo."
                  )
                ]),
                _vm._v(" "),
                _c("b", [_vm._v("Centro de la pirámide")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Lo componen las  verduras y hortalizas (ver clasificación). Más de ¼ de la ingesta en una comida, deberá ser este tipo de alimentación."
                  )
                ]),
                _vm._v(" "),
                _c("b", [_vm._v("Punta de la pirámide")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Son los llamados alimentos de consumo reducido o limitado (ver clasificación). En cada comida, éstos deben representar menos del ¼ del plato."
                  )
                ]),
                _vm._v(" "),
                _vm._m(2),
                _vm._v(" "),
                _c("b", [_vm._v("Hidratación")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Tu peso/7 es la cantidad de vasos  de agua de 200cc que debes beber al día"
                  )
                ]),
                _vm._v(" "),
                _c("b", [_vm._v("Sal")]),
                _vm._v(" "),
                _c("p", [_vm._v("Moderada")]),
                _vm._v(" "),
                _c("b", [_vm._v("Fruta")]),
                _vm._v(" "),
                _c("p", [_vm._v(" No consumirla después de las 4:00 PM.")]),
                _vm._v(" "),
                _c("b", [_vm._v("Alimentos procesados")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "(Tales como harinas, dulces, helados, pizzas, postres light y no light, flanes, helados, chocolates en cualquiera de sus formas,  etc.): Tampoco consumir después de las 4:00PM"
                  )
                ]),
                _vm._v(" "),
                _c("b", [_vm._v("Condimentos")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Aceite de oliva extra virgen, cucharita de té, limón, mostaza, pimienta, canela, jengibre, vinagre de manzana y aceto"
                  )
                ]),
                _vm._v(" "),
                _c("b", [_vm._v("Colaciones")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Si durante el día se siente hambre, consumir una colación que puede ser nueces o almendras (tres unidades), fruta (una) baja en azúcar, como manzana verde o fresas, bastoncitos de zanahoria o apio con queso untable descremado (max tres), rollitos de fiambre (jamón, lomito, queso)."
                  )
                ]),
                _vm._v(" "),
                _c("b", [_vm._v("Café")]),
                _vm._v(" "),
                _c("p", [_vm._v("Máximo dos por día")]),
                _vm._v(" "),
                _c("b", [_vm._v("Endulzante")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Evitar azúcar, reemplazar por estevia (preferentemente) o endulzantes"
                  )
                ]),
                _vm._v(" "),
                _c("b", [_vm._v("Huevos")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v("Hasta 2 al día. No usar aceite durante la cocción.")
                ]),
                _vm._v(" "),
                _c("b", [_vm._v("Pastas")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Si las consumo como “consumo reducido”, que sea ¼ del plato, y el resto deben ser verduras de todo tipo."
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _vm.user.diet_type == "P"
            ? _c("div", [
                _c("h3", [_vm._v("DESAYUNOS/ MERIENDAS")]),
                _vm._v(" "),
                _vm._m(4),
                _vm._v(" "),
                _c("h3", [_vm._v("ALMUERZOS / CENAS")]),
                _vm._v(" "),
                _vm._m(5)
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.user.diet_type == "S"
            ? _c("div", [
                _c("h3", [_vm._v("DESAYUNOS/ MERIENDAS ")]),
                _vm._v(" "),
                _vm._m(6),
                _vm._v(" "),
                _vm._m(7),
                _vm._v(" "),
                _c("h3", [_vm._v("ALMUERZO / CENA")]),
                _vm._v(" "),
                _vm._m(8)
              ])
            : _vm._e()
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "columns" }, [
      _c("div", {
        staticClass: "column col-sm-12 col-xl-10 col-mx-auto text-center"
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "text-align": "center" } }, [
      _c("img", {
        staticStyle: { width: "50%" },
        attrs: { src: "/img/plato-icon.png" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "text-align": "center" } }, [
      _c("img", {
        staticStyle: { width: "50%" },
        attrs: { src: "/img/plato-icon.png" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h3", [_vm._v("CONSUMO REDUCIDO")]),
      _vm._v(" "),
      _c("b", [_vm._v("HARINAS: ")]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [_vm._v("Harina de trigo integral")]),
        _vm._v(" "),
        _c("li", [_vm._v("Harina de Soya-soja")]),
        _vm._v(" "),
        _c("li", [_vm._v("Harina sin glúten")]),
        _vm._v(" "),
        _c("li", [_vm._v("Harina de Arroz")]),
        _vm._v(" "),
        _c("li", [_vm._v("Harina de Cebada")]),
        _vm._v(" "),
        _c("li", [_vm._v("Harina de Centeno")]),
        _vm._v(" "),
        _c("li", [
          _vm._v("Harina de Alforfón "),
          _c("br"),
          _vm._v(" (proviene del trigo sarraceno)")
        ]),
        _vm._v(" "),
        _c("li", [_vm._v("Harina de garbanzos")]),
        _vm._v(" "),
        _c("li", [_vm._v("Harina de Maiz")])
      ]),
      _vm._v(" "),
      _c("b", [_vm._v("FRUTAS")]),
      _c("br"),
      _vm._v(" "),
      _c("small", [
        _vm._v("(Clasificación según índice glucémico) "),
        _c("br"),
        _vm._v("  Solo consumiremos las de índice glucémico bajo:")
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [_vm._v("Limón")]),
        _vm._v(" "),
        _c("li", [
          _vm._v("Frutos Rojos: moras, arándanos, arándanos, frambuesas")
        ]),
        _vm._v(" "),
        _c("li", [_vm._v("Cerezas")]),
        _vm._v(" "),
        _c("li", [_vm._v("Pomelo o toronja")]),
        _vm._v(" "),
        _c("li", [_vm._v("Duraznos o melocotones")]),
        _vm._v(" "),
        _c("li", [_vm._v("Peras")]),
        _vm._v(" "),
        _c("li", [_vm._v("Maracuyá")]),
        _vm._v(" "),
        _c("li", [_vm._v("Mandarinas")]),
        _vm._v(" "),
        _c("li", [_vm._v("Ciruelas")]),
        _vm._v(" "),
        _c("li", [_vm._v("Coco fresco")]),
        _vm._v(" "),
        _c("li", [_vm._v("Manzanas")])
      ]),
      _vm._v(" "),
      _c("b", [_vm._v("CIERTAS BEBIDAS")]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _vm._v(
            "Alcohólicas: Aperitivos, vinos de mesa, aguardientes, digestivas, "
          )
        ]),
        _vm._v("refrescantes.\n\t\t\t\t\t"),
        _c("li", [
          _vm._v(
            "No Alcohólicas: Jugos, leche, sodas, gaseosas, energizantes, yogurt ,kumis "
          )
        ])
      ]),
      _vm._v(" "),
      _c("b", [_vm._v("DULCES")]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [_vm._v("chocolate más 75% de  cacao")]),
        _vm._v(" "),
        _c("li", [_vm._v("Postre light (reducido en glucosa y grasa)")]),
        _vm._v(" "),
        _c("li", [_vm._v("Gelatina Light ")])
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("PROTEINAS Y GRASAS BUENAS")]),
      _vm._v(" "),
      _c("b", [_vm._v("ORIGEN VEGETAL")]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _vm._v(
            "Legumbres: lentejas, garbanzos, judías, soja, habas secas, guisantes secos."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "Cereales: arroz integral, mijo, avena, centeno, quinua, trigo, maíz"
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "Frutos secos: nuez, almendra, avellana, pistacho, cacahuete (maní), anacardo, castaña."
          )
        ]),
        _vm._v(" "),
        _c("b", [_vm._v("ORGEN ANIMAL")]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "Carnes\n\t\t\t\t\t\tRojas: ternera, vaca, cerdo, cordero, oveja, ciervo "
          ),
          _c("br"),
          _vm._v("\n\t\t\t\t\t\tBlancas: pollo, pavo, conejo")
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "Pescados: \n\t\t\t\t\t\tAzul (proporción alta en grasas): Atún, salmón, sardina, arenque,  pez espada,  caballa, anguila, boquerón\n\t\t\t\t\t\t"
          ),
          _c("br"),
          _vm._v(
            "\n\t\t\t\t\t\tBlanco(proporción baja en grasas): Merluza, lenguado, rape,  gallo, rodaballo, bacalao, pescadilla, trucha."
          )
        ]),
        _vm._v(" "),
        _c("li", [_vm._v("Huevos")]),
        _vm._v(" "),
        _c("li", [_vm._v("Lácteos: leche, yogures, quesos")])
      ]),
      _vm._v(" "),
      _c("b", [_vm._v("GRASAS BUENAS")]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _vm._v("Aceites de semilla de uva, de oliva , de ajonjolí, de coco")
        ]),
        _vm._v(" "),
        _c("li", [_vm._v("palta o aguacate")]),
        _vm._v(" "),
        _c("li", [_vm._v("humu")]),
        _vm._v(" "),
        _c("li", [
          _vm._v("nueces, almendras, castañas, pecanas, pistachos, avellanas")
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v("semillas de lino, de cáñamo, de calabaza, de girasol.  ")
        ])
      ]),
      _vm._v(" "),
      _c("b", [_vm._v("HIDRATOS DE CARBONO")]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _vm._v(
            "Verduras de hoja: espinaca, lechuga, acelgas, rúcula, coles, endibia, grelo y nabiza."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "Verduras de Bulbo: ajo, cebolla, cebollín, hinojos, alcachofas, puerros."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v("Verduras de raíz: zanahoria, yuca o mandioca, ocumo, nabo.")
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "Verduras de Flor o inflorescencias: alcachofas, brócoli y coliflor."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "Verduras de Brote:  Brote de soja, alfalfa, trigo, arvejas  y de mostaza."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "Verduras de Fruto: Berenjena, pepino, tomate, pimientos, calabacín, aguacate"
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v("Verduras de Tallo: Apio, espárragos, cardos y puerro.")
        ]),
        _vm._v(" "),
        _c("li", [_vm._v("Tubérculos: papa, batata, yuca, ñame, remolacha")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v(
          "Omelette con jamón y queso, y 2 huevos (1 huevo entero + 1 clara) PROTEÍNAS"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "1 fruta + una tostada untada con queso  cuartirolo light o rodajas de PaltaCONSUMO REDUCIDO+ PROTEÍANAS / GRASAS BUENAS"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "Tres galletas de salvado untadas con queso descremado  CONSUMO REDUCIDO + PROTEÍNAS"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "Una tostada de pan integran con 1 feta de jamón cocido + 1 feta de queso  CONSUMO REDUCIDO + PROTEÍANAS"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "Un pote chico de yougurt descremado con semillas de chía y lino previamente molidas en el mortero  PROTEÍANAS + GRASAS BUENAS"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "2 tostadas integrales untadas con ricota descremada o queso untable descremado  CONSUMO REDUCIDO + PROTEÍANAS"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "½ pote de frutos rojos (arándanos, frutillas, cerezas, moras, etc)  CONSUMO REDUCIDO"
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _c("i", [
          _vm._v(
            "Acompañados con una taza de café cortado, té verde, té negro o una taza de mate cocido."
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v(
          "Wok de pollo, carne, o pescado  con vegetales (condimento: aceite de oliva)  HIDRATOS DE CARBONO + PROTEÍANAS+ GRASAS BUENAS"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "Milanesa de ternera con ensalada (ej zanahoria,  tomate, rúcula). Condimento: Aceite de Oliva  HIDRATOS DE CARBONO + PROTEÍANAS+ CONSUMO REDUCIDO (pan rallado)+ GRASAS BUENAS"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "Carne (magra) al horno con verduras grilladas (morrones de distintos colores, berenjenas,  cebollas, champiñones) PROTEÍNA + HIDRATOS DE CARBONO"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "¼ Pollo (sin piel) con puré de papas o zapallo, o ensalada de hojas verdes. Condimento: Aceite de oliva  PROTEÍNA + HIDRATOS DE CABONO+ GRASAS BUENAS"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "Carne de cerdo con ensalada de hojas verdes y media palta  PROTEÍNA + GRASAS BUENAS (PALTA Y CONDIMENTO) + HIDRATOS DE CARBONO"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "2 Rapiditas con vegetales y pollo  CONSUMO REDUCIDO (MASA) + HIDRATOS DE CARBONO + PROTEÍNA"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v("Soufflé de calabaza  PROTEÍNAS + HIDRATOS DE CARBONO")
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "Salmon con papas y zanahorias cocidas al horno   PROTEÍNAS + HIDRATOS DE CARBONO"
        )
      ]),
      _vm._v(" "),
      _c("li", [_vm._v("Postre: Gelatina light  CONSUMO REDUCIDO")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v(
          "1 rodaja de pan integral untada con queso descremado y/o mermelada (de naranja, frutillas o arándanos)  HIDRATOS DE CARBONO+ PROTEÍNA"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "Yogurt descremado + 1 fruta (manzana verde, naranja)  PROTEÍNA+ CONSUMO REDCIDO "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "Omelette de verduras,  con dos claras de huevo (sin yema)  PROTEÍNAS"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "1 fruta + una tostada untada con queso light o rodajas de Palta  CONSUMO REDUCIDO + HIDRATO DE CARBONO + PROTEÍNA Y GRASAS BUENAS"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "Tres galletas de salvado untadas con queso descremado  CONSUMO REDUCIDO + PROTEÍNA"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "Una tostada de pan integran con 2 fetas de jamón cocido + 2 fetas de queso. descremado  CONSUMO REDUCIDO + PROTEÍNA"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "Un pote chico de yogurt descremado con semillas de chía y lino previamente pisadas en el mortero, y una tostada integral untada con ricota descremada o queso untable descremado  PROTEÍANA + GRASAS BUENAS + CONSUMO REDUCIDO"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "1 bowl con frutas (manzana verde, frutillas, duraznos, naranja, arándanos)  CONSUMO REDUCIDO"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("i", [
        _vm._v(
          "Acompañados con una taza de café cortado, té verde, té negro o una taza de mate cocido."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v(
          "Wok de vegetales y proteínas (pollo, pavo, pescado), condimentado con aceite de oliva  PROTEÍNAS + HIDRATOS DE CARBONO + GRASAS BUENAS"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "Milanesa de carne con ensalada de hojas verdes y tomate. Condimento: aceite de oliva PROTEÍNA + CONSUMO REDUCIDO + HIDRATOS DE CARBONO+ GRASAS BUENAS (aceite de oliva)"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "Carne magra al horno/ensalada de hojas verdes, o espinacas revueltas o verduras grilladas (morrones de distintos colores, berenjenas,  cebollas, champiñones). Condimento: aceite de oliva PROTEÍANAS + GRASAS BUENAS + HIDRATOS DE CARBONO"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "¼ Pollo con ensalada de hojas verdes condimentado con aceite de oliva  PROTEÍANAS + GRASAS BUENAS + HIDRATOS DE CARBONO"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "2 Rapiditas con verduras y pollo  CONSUMO REDUCIDO+ PROTEÍANAS + HIDRATOS DE CARBONO)"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v("Souffle de verduras  PROTEÍANAS + HIDRATOS DE CARBONO")
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "Pescado bajo en grasas (Merluza, Lenguado, Trucha, Mero, Bacalao, Rape, Besugo) con ensalada de hojas verdes o de rúcula y tomate  PROTEÍNAS+ GRASAS BUENAS + HIDRATOS DE CARBONO "
        )
      ]),
      _vm._v(" "),
      _c("li", [_vm._v("Postre: gelatina light  PROTEÍNA")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-507d6556", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-54477851\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/feeding/FeedingWrapper.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    { attrs: { name: "fade", mode: "out-in" } },
    [_c("router-view")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-54477851", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-60586634\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/register/FreeRegister.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "mainWrapper" } },
    [
      _c("br"),
      _vm._v(" "),
      _c("h3", { staticClass: "text-center mt-2" }, [_vm._v("REGISTRO")]),
      _vm._v(" "),
      _c("ul", { staticClass: "step ctn-steps" }, [
        _c(
          "li",
          {
            staticClass: "step-item",
            class: { active: _vm.currentStep == "step1" },
            on: {
              click: function($event) {
                return _vm.onClickStep("step1")
              }
            }
          },
          [
            _c(
              "a",
              {
                staticClass: "tooltip",
                attrs: { "data-tooltip": "Información personal" }
              },
              [_vm._v("Paso 1")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "step-item",
            class: { active: _vm.currentStep == "step2" },
            on: {
              click: function($event) {
                return _vm.onClickStep("step2")
              }
            }
          },
          [
            _c(
              "a",
              {
                staticClass: "tooltip",
                attrs: { "data-tooltip": "Datos de acceso" }
              },
              [_vm._v("Paso 2")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "step-item",
            class: { active: _vm.currentStep == "step3" },
            on: {
              click: function($event) {
                return _vm.onClickStep("step3")
              }
            }
          },
          [
            _c(
              "a",
              {
                staticClass: "tooltip",
                attrs: { "data-tooltip": "Terminos y condiciones" }
              },
              [_vm._v("Paso 3")]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.currentStep == "step1",
              expression: "currentStep =='step1'"
            }
          ],
          attrs: { id: "step1" }
        },
        [
          _c("h3", { staticClass: "text-center mt-1" }, [
            _vm._v("Información Personal")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "columns" }, [
            _c("div", { staticClass: "column col-xl-8 col-mx-auto" }, [
              _c("div", { staticClass: "columns" }, [
                _c(
                  "div",
                  {
                    staticClass: "column col-sm-12 col-6 form-group",
                    class: { "has-error": _vm.errors.has("nombre") }
                  },
                  [
                    _c(
                      "label",
                      {
                        staticClass: "form-label",
                        attrs: { for: "idName", name: "name" }
                      },
                      [_vm._v("Nombre")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.nombre,
                          expression: "nombre"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|alpha|min:2",
                          expression: "'required|alpha|min:2'"
                        }
                      ],
                      staticClass: "form-input",
                      attrs: { id: "idName", name: "nombre", type: "text" },
                      domProps: { value: _vm.nombre },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.nombre = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("nombre"),
                            expression: "errors.has('nombre')"
                          }
                        ],
                        staticClass: "form-input-hint"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("nombre")))]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "column col-sm-12 col-6 form-group",
                    class: { "has-error": _vm.errors.has("apellido") }
                  },
                  [
                    _c(
                      "label",
                      {
                        staticClass: "form-label",
                        attrs: { for: "idLastName" }
                      },
                      [_vm._v("Apellido")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.apellido,
                          expression: "apellido"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|alpha|min:2",
                          expression: "'required|alpha|min:2'"
                        }
                      ],
                      staticClass: "form-input",
                      attrs: {
                        id: "idLastName",
                        name: "apellido",
                        type: "text"
                      },
                      domProps: { value: _vm.apellido },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.apellido = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("apellido"),
                            expression: "errors.has('apellido')"
                          }
                        ],
                        staticClass: "form-input-hint"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("apellido")))]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "columns" }, [
                _c(
                  "div",
                  {
                    staticClass: "column col-6 form-group",
                    class: { "has-error": _vm.errors.has("sexo") }
                  },
                  [
                    _c(
                      "label",
                      {
                        staticClass: "form-label",
                        attrs: { for: "idLastName" }
                      },
                      [_vm._v("Sexo")]
                    ),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          },
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.sexo,
                            expression: "sexo"
                          }
                        ],
                        staticClass: "form-select",
                        attrs: { name: "sexo" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.sexo = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Seleccione una opción")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "M" } }, [
                          _vm._v("Masculino")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "F" } }, [
                          _vm._v("Femenino")
                        ])
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c(
                  "label",
                  { staticClass: "form-label", attrs: { for: "idBirthdate" } },
                  [_vm._v("Fecha Nacimiento")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "columns" }, [
                  _c(
                    "div",
                    {
                      staticClass: "column col-3 form-group",
                      class: { "has-error": _vm.errors.has("dia") }
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.dia,
                            expression: "dia"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|max_value:31|min_value:1",
                            expression: "'required|max_value:31|min_value:1'"
                          }
                        ],
                        staticClass: "form-input",
                        attrs: {
                          name: "dia",
                          type: "text",
                          placeholder: "Día"
                        },
                        domProps: { value: _vm.dia },
                        on: {
                          focus: _vm.onChangeDate,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.dia = $event.target.value
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "column col-5 form-group" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.mes,
                            expression: "mes"
                          }
                        ],
                        staticClass: "form-select",
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.mes = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "01" } }, [
                          _vm._v("Enero")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "02" } }, [
                          _vm._v("Febrero")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "03" } }, [
                          _vm._v("Marzo")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "04" } }, [
                          _vm._v("Abril")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "05" } }, [
                          _vm._v("Mayo")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "06" } }, [
                          _vm._v("Junio")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "07" } }, [
                          _vm._v("Julio")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "08" } }, [
                          _vm._v("Agosto")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "09" } }, [
                          _vm._v("Septiembre")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "10" } }, [
                          _vm._v("Octubre")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "11" } }, [
                          _vm._v("Noviembre")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "12" } }, [
                          _vm._v("Diciembre")
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "column col-4",
                      class: { "has-error": _vm.errors.has("año") }
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.año,
                            expression: "año"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|max_value:2010|min_value:1920",
                            expression:
                              "'required|max_value:2010|min_value:1920'"
                          }
                        ],
                        staticClass: "form-input",
                        attrs: {
                          name: "año",
                          type: "text",
                          placeholder: "Año"
                        },
                        domProps: { value: _vm.año },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.año = $event.target.value
                          }
                        }
                      })
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { class: { "has-error": _vm.errors.has("dia") } }, [
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("dia"),
                          expression: "errors.has('dia')"
                        }
                      ],
                      staticClass: "form-input-hint"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("dia")))]
                  )
                ]),
                _vm._v(" "),
                _c("div", { class: { "has-error": _vm.errors.has("año") } }, [
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("año"),
                          expression: "errors.has('año')"
                        }
                      ],
                      staticClass: "form-input-hint"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("año")))]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.showInvalidDateError,
                        expression: "showInvalidDateError"
                      }
                    ],
                    staticClass: "has-error"
                  },
                  [
                    _c("span", { staticClass: "form-input-hint" }, [
                      _vm._v("La fecha ingresada no es valida")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("fechaNacimiento"),
                        expression: "errors.has('fechaNacimiento')"
                      }
                    ],
                    staticClass: "form-input-hint"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("fechaNacimiento")))]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "columns" }, [
                _c(
                  "div",
                  {
                    staticClass: "column col-6 form-group",
                    class: { "has-error": _vm.errors.has("peso") }
                  },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.peso,
                          expression: "peso"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-input",
                      attrs: { id: "idWeight", name: "peso", type: "text" },
                      domProps: { value: _vm.peso },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.peso = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("peso"),
                            expression: "errors.has('peso')"
                          }
                        ],
                        staticClass: "form-input-hint"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("peso")))]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "column col-6 form-group",
                    class: { "has-error": _vm.errors.has("altura") }
                  },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.altura,
                          expression: "altura"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|decimal",
                          expression: "'required|decimal'"
                        }
                      ],
                      staticClass: "form-input",
                      attrs: { id: "idHeight", name: "altura", type: "text" },
                      domProps: { value: _vm.altura },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.altura = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("altura"),
                            expression: "errors.has('altura')"
                          }
                        ],
                        staticClass: "form-input-hint"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("altura")))]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group py-2" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-lg btn-primary float-right",
                    on: {
                      click: function($event) {
                        return _vm.onClickStep("step2")
                      }
                    }
                  },
                  [_vm._v("CONTINUAR")]
                )
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.currentStep == "step2",
              expression: "currentStep =='step2'"
            }
          ],
          attrs: { id: "step2" }
        },
        [
          _c("h3", { staticClass: "text-center mt-1" }, [
            _vm._v("Datos de acceso")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "columns" }, [
            _c("div", { staticClass: "column col-xl-8 col-mx-auto" }, [
              _c(
                "div",
                {
                  staticClass: "form-group",
                  class: { "has-error": _vm.errors.has("email") }
                },
                [
                  _c(
                    "label",
                    { staticClass: "form-label", attrs: { for: "idEmail" } },
                    [_vm._v("E-mail")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.email,
                        expression: "email"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|email",
                        expression: "'required|email'"
                      }
                    ],
                    staticClass: "form-input",
                    attrs: { id: "idEmail", name: "email", type: "text" },
                    domProps: { value: _vm.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.email = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("email"),
                          expression: "errors.has('email')"
                        }
                      ],
                      staticClass: "form-input-hint"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("email")))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "form-group",
                  class: { "has-error": _vm.errors.has("password") }
                },
                [
                  _c(
                    "label",
                    { staticClass: "form-label", attrs: { for: "idPassword" } },
                    [_vm._v("Contraseña")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.password,
                        expression: "password"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|confirmed:confirmacionPassword|min:6",
                        expression:
                          "'required|confirmed:confirmacionPassword|min:6'"
                      }
                    ],
                    staticClass: "form-input",
                    attrs: {
                      id: "idPassword",
                      name: "password",
                      type: "password"
                    },
                    domProps: { value: _vm.password },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.password = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("password"),
                          expression: "errors.has('password')"
                        }
                      ],
                      staticClass: "form-input-hint"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("password")))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "form-group",
                  class: { "has-error": _vm.errors.has("confirmacionPassword") }
                },
                [
                  _c(
                    "label",
                    { staticClass: "form-label", attrs: { for: "idConfirm" } },
                    [_vm._v("Confirmar Contraseña")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.confirmacionPassword,
                        expression: "confirmacionPassword"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|min:6",
                        expression: "'required|min:6'"
                      }
                    ],
                    ref: "confirmacionPassword",
                    staticClass: "form-input",
                    attrs: {
                      id: "idConfirm",
                      name: "confirmacionPassword",
                      type: "password"
                    },
                    domProps: { value: _vm.confirmacionPassword },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.confirmacionPassword = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("confirmacionPassword"),
                          expression: "errors.has('confirmacionPassword')"
                        }
                      ],
                      staticClass: "form-input-hint"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("confirmacionPassword")))]
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "form-group py-2" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-lg btn-primary float-right",
                    on: {
                      click: function($event) {
                        return _vm.onClickStep("step3")
                      }
                    }
                  },
                  [_vm._v("CONTINUAR")]
                )
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.currentStep == "step3",
              expression: "currentStep =='step3'"
            }
          ],
          attrs: { id: "step3" }
        },
        [
          _c("h3", { staticClass: "text-center mt-2" }, [
            _vm._v("Términos y condiciones")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "columns" }, [
            _c(
              "div",
              { staticClass: "column col-sm-10  col-xl-8 col-mx-auto" },
              [
                _c("p", { staticClass: "p-terms text-justify" }),
                _vm._v(" "),
                _vm._m(2),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "form-group",
                    class: { "has-error": _vm.errors.has("aceptarTerminos") }
                  },
                  [
                    _c(
                      "label",
                      {
                        staticClass: "form-checkbox",
                        class: { "is-error": _vm.errors.has("aceptarTerminos") }
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.aceptarTerminos,
                              expression: "aceptarTerminos"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'"
                            }
                          ],
                          attrs: { name: "aceptarTerminos", type: "checkbox" },
                          domProps: {
                            checked: Array.isArray(_vm.aceptarTerminos)
                              ? _vm._i(_vm.aceptarTerminos, null) > -1
                              : _vm.aceptarTerminos
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.aceptarTerminos,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    (_vm.aceptarTerminos = $$a.concat([$$v]))
                                } else {
                                  $$i > -1 &&
                                    (_vm.aceptarTerminos = $$a
                                      .slice(0, $$i)
                                      .concat($$a.slice($$i + 1)))
                                }
                              } else {
                                _vm.aceptarTerminos = $$c
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("i", { staticClass: "form-icon" }),
                        _vm._v(
                          " Acepto los términos y condiciones bajo mi responsabilidad\n\t\t\t\t\t  "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("aceptarTerminos"),
                            expression: "errors.has('aceptarTerminos')"
                          }
                        ],
                        staticClass: "form-input-hint"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("aceptarTerminos")))]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-group py-2" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-lg btn-primary float-right",
                      on: { click: _vm.onClickRegister }
                    },
                    [_vm._v("CONTINUAR")]
                  )
                ])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _vm.loading
        ? _c("loading", { attrs: { message: "Cargando ..." } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "idWeight" } },
      [_vm._v("Peso "), _c("b", [_vm._v("(kg)")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "idHeight" } },
      [_vm._v("Altura "), _c("b", [_vm._v("(m)")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-body terms-card text-justify" }, [
        _vm._v(
          "\n\t\t\t\t\t\t\tAl aceptar, usted certifica queha sido autorizado por su médico para participar en programas de entrenamiento, ya que al no ser presencial, no nos responsabilizados de cualquier daño o lesión\n\t\t\t\t\t\t"
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-60586634", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-63d6eadc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/feeding/Feeding.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column col-sm-10 col-xl-10 col-mx-auto" }, [
        _c("h1", { staticClass: "text-center" }, [
          _vm._v("Guía de alimentación")
        ]),
        _vm._v(" "),
        _c("h4", { staticClass: "text-center" }, [
          _vm._v("Según tu perfil metabólico")
        ]),
        _vm._v(" "),
        _c(
          "div",
          [
            _c(
              "router-link",
              {
                attrs: {
                  to: { name: "feedingGuide" },
                  tag: "div",
                  activeClass: "active",
                  exact: ""
                }
              },
              [
                _c("div", { staticClass: "app-button" }, [
                  _c("div", { staticClass: "left" }, [
                    _c("img", {
                      attrs: {
                        src: "/img/alimentacion/guia-icon.png",
                        alt: "Icon"
                      }
                    }),
                    _vm._v("\n\t\t\t\t\t\t\tGUIA DE "),
                    _c("br"),
                    _vm._v(" ALIMENTACIÓN\n\t\t\t\t\t\t")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "right" }, [
                    _c("i", { staticClass: "icon icon-arrow-right" })
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                attrs: {
                  to: { name: "feedingIndications" },
                  tag: "div",
                  activeClass: "active",
                  exact: ""
                }
              },
              [
                _c("div", { staticClass: "app-button" }, [
                  _c("div", { staticClass: "left" }, [
                    _c("img", {
                      attrs: {
                        src: "/img/alimentacion/indicaciones-icon.png",
                        alt: "Icon"
                      }
                    }),
                    _vm._v("\n\t\t\t\t\t\t\tINDICACIONES\n\t\t\t\t\t\t")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "right" }, [
                    _c("i", { staticClass: "icon icon-arrow-right" })
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                attrs: {
                  to: { name: "feedingForbidden" },
                  tag: "div",
                  activeClass: "active",
                  exact: ""
                }
              },
              [
                _c("div", { staticClass: "app-button" }, [
                  _c("div", { staticClass: "left" }, [
                    _c("img", {
                      attrs: {
                        src: "/img/alimentacion/prohibidos-icon.png",
                        alt: "Icon"
                      }
                    }),
                    _vm._v("\n\t\t\t\t\t\t\tLOS NO "),
                    _c("br"),
                    _vm._v("\n\t\t\t\t\t\t\tPROHIBIDOS\n\t\t\t\t\t\t")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "right" }, [
                    _c("i", { staticClass: "icon icon-arrow-right" })
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                attrs: {
                  to: { name: "feedingPortions" },
                  tag: "div",
                  activeClass: "active",
                  exact: ""
                }
              },
              [
                _c("div", { staticClass: "app-button" }, [
                  _c("div", { staticClass: "left" }, [
                    _c("img", {
                      attrs: {
                        src: "/img/alimentacion/porciones-icon.png",
                        alt: "Icon"
                      }
                    }),
                    _vm._v("\n\t\t\t\t\t\t\tTUS"),
                    _c("br"),
                    _vm._v("\n\t\t\t\t\t\t\tPORCIONES\n\t\t\t\t\t\t")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "right" }, [
                    _c("i", { staticClass: "icon icon-arrow-right" })
                  ])
                ])
              ]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-63d6eadc", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6ce538f4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/diagnostic/InitialPhotos.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "mainWrapper" } },
    [
      _c("br"),
      _vm._v(" "),
      _c("ul", { staticClass: "step ctn-steps" }, [
        _c(
          "li",
          {
            staticClass: "step-item",
            class: { active: _vm.currentStep == 1 },
            on: {
              click: function($event) {
                return _vm.onClickStep(1)
              }
            }
          },
          [
            _c(
              "a",
              { staticClass: "tooltip", attrs: { "data-tooltip": "Frente" } },
              [_vm._v("Frente")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "step-item",
            class: { active: _vm.currentStep == 2 },
            on: {
              click: function($event) {
                return _vm.onClickStep(2)
              }
            }
          },
          [
            _c(
              "a",
              { staticClass: "tooltip", attrs: { "data-tooltip": "Perfil" } },
              [_vm._v("Perfil")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "step-item",
            class: { active: _vm.currentStep == 3 },
            on: {
              click: function($event) {
                return _vm.onClickStep(3)
              }
            }
          },
          [
            _c(
              "a",
              { staticClass: "tooltip", attrs: { "data-tooltip": "Espalda" } },
              [_vm._v("Espalda")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "step-item",
            class: { active: _vm.currentStep == 4 },
            on: {
              click: function($event) {
                return _vm.onClickStep(4)
              }
            }
          },
          [
            _c(
              "a",
              { staticClass: "tooltip", attrs: { "data-tooltip": "Ropa" } },
              [_vm._v("Ropa")]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.currentStep == 1,
              expression: "currentStep ==1"
            }
          ],
          attrs: { id: "step1" }
        },
        [_vm._m(0)]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.currentStep == 2,
              expression: "currentStep ==2"
            }
          ],
          attrs: { id: "step2" }
        },
        [_vm._m(1)]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.currentStep == 3,
              expression: "currentStep ==3"
            }
          ],
          attrs: { id: "step3" }
        },
        [_vm._m(2)]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.currentStep == 4,
              expression: "currentStep ==4"
            }
          ],
          attrs: { id: "step4" }
        },
        [_vm._m(3)]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c(
          "div",
          { staticClass: "column col-sm-10 col-xl-10 col-mx-auto text-center" },
          [
            _c("br"),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: " my-2",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.onClickSkip($event)
                  }
                }
              },
              [_vm._v("Omitir Paso")]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _vm.loading
        ? _c("loading", { attrs: { message: "Cargando ..." } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column col-sm-10 col-xl-6 col-mx-auto" }, [
        _c(
          "div",
          {
            staticClass: "slim",
            attrs: {
              id: "myCropper",
              "data-size": "1200,1000",
              "data-post": "output"
            }
          },
          [_c("input", { attrs: { type: "file", name: "image" } })]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column col-sm-10 col-xl-6 col-mx-auto" }, [
        _c(
          "div",
          {
            staticClass: "slim",
            attrs: {
              id: "myCropper2",
              "data-size": "1200,1000",
              "data-post": "output"
            }
          },
          [_c("input", { attrs: { type: "file", name: "image" } })]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column col-sm-10 col-xl-6 col-mx-auto" }, [
        _c(
          "div",
          {
            staticClass: "slim",
            attrs: {
              id: "myCropper3",
              "data-size": "1200,1000",
              "data-post": "output"
            }
          },
          [_c("input", { attrs: { type: "file", name: "image" } })]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column col-sm-10 col-xl-6 col-mx-auto" }, [
        _c(
          "div",
          {
            staticClass: "slim",
            attrs: {
              id: "myCropper4",
              "data-size": "1200,1000",
              "data-post": "output"
            }
          },
          [_c("input", { attrs: { type: "file", name: "image" } })]
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6ce538f4", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7155ed20\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/routines/QualifyRoutine.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "mainWrapper" } },
    [
      _c("div", { staticClass: "ctn-qualify-routine" }, [
        _c("h2", [_vm._v("RUTINA COMPLETADA!")]),
        _vm._v(" "),
        _c("h4", [_vm._v("Marque como sintió que fue la rutina:")]),
        _vm._v(" "),
        _c("div", { staticClass: "ctn-cheboxes" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "form-radio" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.score,
                    expression: "score"
                  }
                ],
                attrs: { type: "radio", name: "score", value: "1" },
                domProps: { checked: _vm._q(_vm.score, "1") },
                on: {
                  change: function($event) {
                    _vm.score = "1"
                  }
                }
              }),
              _c("i", { staticClass: "form-icon" }),
              _vm._v(" Muy Fácil\n\t\t\t  ")
            ]),
            _vm._v(" "),
            _c("label", { staticClass: "form-radio" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.score,
                    expression: "score"
                  }
                ],
                attrs: { type: "radio", name: "score", value: "2" },
                domProps: { checked: _vm._q(_vm.score, "2") },
                on: {
                  change: function($event) {
                    _vm.score = "2"
                  }
                }
              }),
              _c("i", { staticClass: "form-icon" }),
              _vm._v(" Fácil\n\t\t\t  ")
            ]),
            _vm._v(" "),
            _c("label", { staticClass: "form-radio" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.score,
                    expression: "score"
                  }
                ],
                attrs: { type: "radio", name: "score", value: "3" },
                domProps: { checked: _vm._q(_vm.score, "3") },
                on: {
                  change: function($event) {
                    _vm.score = "3"
                  }
                }
              }),
              _c("i", { staticClass: "form-icon" }),
              _vm._v(" Moderada\n\t\t\t  ")
            ]),
            _vm._v(" "),
            _c("label", { staticClass: "form-radio" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.score,
                    expression: "score"
                  }
                ],
                attrs: { type: "radio", name: "score", value: "4" },
                domProps: { checked: _vm._q(_vm.score, "4") },
                on: {
                  change: function($event) {
                    _vm.score = "4"
                  }
                }
              }),
              _c("i", { staticClass: "form-icon" }),
              _vm._v(" Algo Dura\n\t\t\t  ")
            ]),
            _vm._v(" "),
            _c("label", { staticClass: "form-radio" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.score,
                    expression: "score"
                  }
                ],
                attrs: { type: "radio", name: "score", value: "5" },
                domProps: { checked: _vm._q(_vm.score, "5") },
                on: {
                  change: function($event) {
                    _vm.score = "5"
                  }
                }
              }),
              _c("i", { staticClass: "form-icon" }),
              _vm._v(" Dura\n\t\t\t  ")
            ]),
            _vm._v(" "),
            _c("label", { staticClass: "form-radio" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.score,
                    expression: "score"
                  }
                ],
                attrs: { type: "radio", name: "score", value: "6" },
                domProps: { checked: _vm._q(_vm.score, "6") },
                on: {
                  change: function($event) {
                    _vm.score = "6"
                  }
                }
              }),
              _c("i", { staticClass: "form-icon" }),
              _vm._v(" Muy Dura\n\t\t\t  ")
            ]),
            _vm._v(" "),
            _c("label", { staticClass: "form-radio" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.score,
                    expression: "score"
                  }
                ],
                attrs: { type: "radio", name: "score", value: "7" },
                domProps: { checked: _vm._q(_vm.score, "7") },
                on: {
                  change: function($event) {
                    _vm.score = "7"
                  }
                }
              }),
              _c("i", { staticClass: "form-icon" }),
              _vm._v(" Máxima +10\n\t\t\t  ")
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column col-sm-10 col-xl-10 col-mx-auto" }, [
          _c("div", { staticClass: "ctn-footer-qualify" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", [
              _c("label", { attrs: { for: "idFrec" } }, [
                _vm._v("Frecuencia Cardiaca")
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.heartRate,
                    expression: "heartRate"
                  }
                ],
                attrs: { type: "number", placeholder: "PPM" },
                domProps: { value: _vm.heartRate },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.heartRate = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary float-right",
                  on: { click: _vm.onClickQualify }
                },
                [_vm._v("  FINALIZAR  ")]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm.loading
        ? _c("loading", { attrs: { message: "Calificando Rutina ..." } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("img", {
        staticClass: "d-inline-block",
        attrs: { src: "/img/comillas.png", alt: "Frase" }
      }),
      _vm._v(
        " Cuando sientas que vas a rendirte, piensa en proque emepezaste\n\t\t\t\t"
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7155ed20", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-73d59ed0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/control/ControlFeeding.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column col-sm-12 col-xl-8 col-mx-auto" }, [
          _c("div", { staticClass: "wrapper-date" }, [
            _c("div", {
              staticClass: "calendar-button",
              on: { click: _vm.onClickCalendar }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "ctn-date" }, [
              _c("div", { staticClass: "date" }, [
                _vm._v(_vm._s(_vm.currentFormatDate))
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("ul", { staticClass: "tab tab-block ul-tabs-feeding" }, [
        _c(
          "li",
          { staticClass: "tab-item", class: { active: _vm.currentTab == 0 } },
          [
            _c(
              "a",
              {
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.onClickTab(0)
                  }
                }
              },
              [_vm._v("Desayuno")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "tab-item", class: { active: _vm.currentTab == 1 } },
          [
            _c(
              "a",
              {
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.onClickTab(1)
                  }
                }
              },
              [_vm._v("Almuerzo")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "tab-item", class: { active: _vm.currentTab == 2 } },
          [
            _c(
              "a",
              {
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.onClickTab(2)
                  }
                }
              },
              [_vm._v("Merienda")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "tab-item", class: { active: _vm.currentTab == 3 } },
          [
            _c(
              "a",
              {
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.onClickTab(3)
                  }
                }
              },
              [_vm._v("Cena")]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("h2", { staticClass: "text-center" }, [
        _vm._v("Seleccione un tipo de alimento")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "ctn-pyramid" }, [
        _vm.currentPyramid
          ? _c("div", { staticClass: "text-center" }, [
              !_vm.topIsActive
                ? _c("img", {
                    attrs: { src: _vm.currentPyramid[0].img1, alt: "" },
                    on: {
                      click: function($event) {
                        return _vm.onClickItemPyramid(
                          _vm.currentPyramid[0].value,
                          _vm.currentPyramid[0].name
                        )
                      }
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.topIsActive
                ? _c("img", {
                    attrs: { src: _vm.currentPyramid[0].img2, alt: "" },
                    on: {
                      click: function($event) {
                        return _vm.onClickItemPyramid(
                          _vm.currentPyramid[0].value,
                          _vm.currentPyramid[0].name
                        )
                      }
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              !_vm.middleIsActive
                ? _c("img", {
                    attrs: { src: _vm.currentPyramid[1].img1, alt: "" },
                    on: {
                      click: function($event) {
                        return _vm.onClickItemPyramid(
                          _vm.currentPyramid[1].value,
                          _vm.currentPyramid[1].name
                        )
                      }
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.middleIsActive
                ? _c("img", {
                    attrs: { src: _vm.currentPyramid[1].img2, alt: "" },
                    on: {
                      click: function($event) {
                        return _vm.onClickItemPyramid(
                          _vm.currentPyramid[1].value,
                          _vm.currentPyramid[1].name
                        )
                      }
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              !_vm.bottomIsActive
                ? _c("img", {
                    attrs: { src: _vm.currentPyramid[2].img1, alt: "" },
                    on: {
                      click: function($event) {
                        return _vm.onClickItemPyramid(
                          _vm.currentPyramid[2].value,
                          _vm.currentPyramid[2].name
                        )
                      }
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.bottomIsActive
                ? _c("img", {
                    attrs: { src: _vm.currentPyramid[2].img2, alt: "" },
                    on: {
                      click: function($event) {
                        return _vm.onClickItemPyramid(
                          _vm.currentPyramid[2].value,
                          _vm.currentPyramid[2].name
                        )
                      }
                    }
                  })
                : _vm._e()
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "wrapper-cards" }, [
        _vm.currentTab == 0
          ? _c("div", { attrs: { id: "ctnTab1" } })
          : _vm._e(),
        _vm._v(" "),
        _vm.currentTab == 1
          ? _c("div", { attrs: { id: "ctnTab2" } })
          : _vm._e(),
        _vm._v(" "),
        _vm.currentTab == 2
          ? _c("div", { attrs: { id: "ctnTab3" } })
          : _vm._e(),
        _vm._v(" "),
        _vm.currentTab == 3 ? _c("div", { attrs: { id: "ctnTab4" } }) : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal",
          class: { active: _vm.modalIsActive },
          attrs: { id: "modal-id" }
        },
        [
          _c("a", {
            staticClass: "modal-overlay",
            attrs: { "aria-label": "Close" },
            on: { click: _vm.onClickCloseModal }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "modal-container" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c("a", {
                staticClass: "btn btn-clear float-right",
                attrs: { "aria-label": "Close" },
                on: { click: _vm.onClickCloseModal }
              }),
              _vm._v(" "),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c(
                "h3",
                {
                  staticClass:
                    "modal-title h3 text-center text-capitalize no-margin"
                },
                [_vm._v(_vm._s(_vm.currentFoodName))]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "text-center" }, [
                _vm._v("Seleccione una opción")
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("div", { staticClass: "columns" }, [
                _c(
                  "div",
                  { staticClass: "column col-sm-10 col-xl-4 col-mx-auto" },
                  [
                    _c("div", { staticClass: "ctn-cheboxes" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        _vm._l(_vm.currentFoods, function(food) {
                          return _c("label", { staticClass: "form-radio" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.currentFood,
                                  expression: "currentFood"
                                }
                              ],
                              attrs: { type: "radio", name: "currentFood" },
                              domProps: {
                                value: food.id,
                                checked: _vm._q(_vm.currentFood, food.id)
                              },
                              on: {
                                change: function($event) {
                                  _vm.currentFood = food.id
                                }
                              }
                            }),
                            _c("i", { staticClass: "form-icon" }),
                            _vm._v(
                              " " + _vm._s(food.name) + "\n\t\t\t\t\t\t\t  "
                            )
                          ])
                        }),
                        0
                      )
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        on: { click: _vm.onClickChoose }
                      },
                      [_vm._v("Elegír para " + _vm._s(_vm.currentFormatDate))]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" })
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal",
          class: { active: _vm.modalCalendarIsActive },
          attrs: { id: "modal-id" }
        },
        [
          _c("a", {
            staticClass: "modal-overlay",
            attrs: { "aria-label": "Close" },
            on: { click: _vm.onClickCloseModal }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "modal-container",
              staticStyle: { width: "420px", "max-width": "100%" }
            },
            [
              _c("div", { staticClass: "modal-header" }, [
                _c("a", {
                  staticClass: "btn btn-clear float-right",
                  attrs: { "aria-label": "Close" },
                  on: { click: _vm.onClickCloseModal }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "modal-title h5 text-center" }, [
                  _vm._v("Calendario")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "div",
                  { staticClass: "content text-center" },
                  [
                    _c("v-calendar", {
                      attrs: { "pane-width": 320, attributes: _vm.attrs },
                      on: { dayclick: _vm.onClickDay }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" })
            ]
          )
        ]
      ),
      _vm._v(" "),
      _vm.loading
        ? _c("loading", { attrs: { message: "Cargando Alimentos ..." } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column col-sm-10 col-xl-10 col-mx-auto" }, [
        _c("h2", { staticClass: "text-center" }, [
          _vm._v("Control de alimentación")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-body" }, [
      _c("div", { staticClass: "content text-center" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-73d59ed0", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7b71dbfc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/loading/Loading.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "loading-wrapper" }, [
    _c("div", { staticClass: "loading loading-lg" }),
    _vm._v(" "),
    _c("div", { staticClass: "loading-msg" }, [_vm._v(_vm._s(_vm.message))])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7b71dbfc", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7cfad8c4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/plans/Plans.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column col-sm-10 col-xl-10 col-mx-auto" }, [
          _c("h1", { staticClass: "text-center" }, [
            _vm._v("PLANES PERSONALIZADOS")
          ]),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "app-button",
              on: {
                click: function($event) {
                  return _vm.onClickPlanButton(1)
                }
              }
            },
            [
              _c("div", { staticClass: "left" }, [
                _vm._v("\n\t\t\t\t\tPLAN 3 MESES ($100) \n\t\t\t\t")
              ]),
              _vm._v(" "),
              _vm._m(1)
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "app-button",
              on: {
                click: function($event) {
                  return _vm.onClickPlanButton(2)
                }
              }
            },
            [
              _c("div", { staticClass: "left" }, [
                _vm._v("\n\t\t\t\t\tPLAN 6 MESES ($200) \n\t\t\t\t")
              ]),
              _vm._v(" "),
              _vm._m(2)
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "app-button",
              on: {
                click: function($event) {
                  return _vm.onClickPlanButton(3)
                }
              }
            },
            [
              _c("div", { staticClass: "left" }, [
                _vm._v("\n\t\t\t\t\tPLAN 12 MESES ($300) \n\t\t\t\t")
              ]),
              _vm._v(" "),
              _vm._m(3)
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _vm.loading
        ? _c("loading", { attrs: { message: "Cargando ..." } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-center" }, [
      _vm._v("Entrenamiento Personalizado "),
      _c("b", [_vm._v("+")]),
      _vm._v(" Plan de alimentación adecuado Diagnóstico inicial "),
      _c("b", [_vm._v("+")]),
      _vm._v(" Entrenamientos en videos a tiempo real"),
      _c("b", [_vm._v("+")]),
      _vm._v(" Plan de alimentación adecuado "),
      _c("b", [_vm._v("+")]),
      _vm._v(" Seguimiento mensual "),
      _c("b", [_vm._v("+")]),
      _vm._v(" Interconsultas")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "right" }, [
      _c("i", { staticClass: "icon icon-arrow-right" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "right" }, [
      _c("i", { staticClass: "icon icon-arrow-right" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "right" }, [
      _c("i", { staticClass: "icon icon-arrow-right" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7cfad8c4", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8142f38c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/App.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container grid-sm no-padding main-container" },
    [
      _vm.$route.name != "login" ? _c("top-menu") : _vm._e(),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "fade", mode: "out-in" } },
        [_c("router-view")],
        1
      ),
      _vm._v(" "),
      _c("app-footer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8142f38c", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-857e2dda\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/control/ControlRoutines.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("link", {
        attrs: {
          rel: "stylesheet",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.9.0/fullcalendar.css"
        }
      }),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm.scores.length > 0
        ? _c("div", { staticClass: "columns" }, [
            _c(
              "div",
              { staticClass: "column col-sm-12 col-xl-8 col-mx-auto" },
              [
                _c("div", { staticClass: "wrapper-date" }, [
                  _c("div", {
                    staticClass: "calendar-button",
                    on: { click: _vm.onClickCalendar }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "ctn-date" }, [
                    _c(
                      "div",
                      { staticClass: "back", on: { click: _vm.onClickBack } },
                      [_c("i", { staticClass: "icon icon-arrow-left" })]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "date" }, [
                      _vm._v(_vm._s(_vm.currentScore.format_date))
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "next", on: { click: _vm.onClickNext } },
                      [_c("i", { staticClass: "icon icon-arrow-right" })]
                    )
                  ])
                ])
              ]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.scores.length > 0
        ? _c("div", { staticClass: "columns" }, [
            _c(
              "div",
              { staticClass: "column col-sm-12 col-xl-10 col-mx-auto" },
              [
                _c("div", { staticClass: "ctn-emoji" }, [
                  _c("img", {
                    attrs: { src: _vm.getCurrentImage(), alt: "emoji" }
                  }),
                  _vm._v(" "),
                  _c("h2", [_vm._v(_vm._s(_vm.currentScoreName))]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "La rutina fue exigente pero no tuviste problemas para completarla"
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-primary btn-block",
                    attrs: {
                      to: { name: "controlBoard" },
                      tag: "button",
                      activeClass: "active",
                      exact: ""
                    }
                  },
                  [_vm._v("\n\t\t\t\tVER TABLERO EVOLUTIVO\n\t\t\t")]
                )
              ],
              1
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal",
          class: { active: _vm.modalIsActive },
          attrs: { id: "modal-id" }
        },
        [
          _c("a", {
            staticClass: "modal-overlay",
            attrs: { "aria-label": "Close" },
            on: { click: _vm.onClickCloseModal }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "modal-container",
              staticStyle: { width: "420px", "max-width": "100%" }
            },
            [
              _c("div", { staticClass: "modal-header" }, [
                _c("a", {
                  staticClass: "btn btn-clear float-right",
                  attrs: { "aria-label": "Close" },
                  on: { click: _vm.onClickCloseModal }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "modal-title h5 text-center" }, [
                  _vm._v("Calendario de rutinas realizadas")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "div",
                  { staticClass: "content text-center" },
                  [
                    _c("v-calendar", {
                      attrs: { "pane-width": 320, attributes: _vm.attrs },
                      on: { dayclick: _vm.onClickDay }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" })
            ]
          )
        ]
      ),
      _vm._v(" "),
      _vm.loading
        ? _c("loading", { attrs: { message: "Cargando ..." } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column col-sm-12 col-xl-10 col-mx-auto" }, [
        _c("h5", { staticClass: "text-center" }, [
          _vm._v("Seguimiento y control de rutinas")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ctn-frase" }, [
      _c("p", [
        _c("img", {
          staticClass: "d-inline-block",
          attrs: { src: "/img/comillas.png", alt: "Frase" }
        }),
        _vm._v(
          " Cuando sientas que vas a rendirte, piensa en proque emepezaste\n\t\t\t\t"
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-857e2dda", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8933779a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/profile/edit-profile/EditProfile.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h3", { staticClass: "text-center" }, [_vm._v("Editar Perfil")]),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column col-xl-8 col-mx-auto" }, [
          _c("div", { staticClass: "columns" }, [
            _c(
              "div",
              {
                staticClass: "column col-sm-12 col-12 form-group",
                class: { "has-error": _vm.errors.has("email") }
              },
              [
                _c(
                  "label",
                  {
                    staticClass: "form-label",
                    attrs: { for: "idName", name: "name" }
                  },
                  [_vm._v("Email")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.email,
                      expression: "email"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required|email",
                      expression: "'required|email'"
                    }
                  ],
                  staticClass: "form-input",
                  attrs: { id: "idName", name: "email", type: "text" },
                  domProps: { value: _vm.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.email = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("email"),
                        expression: "errors.has('email')"
                      }
                    ],
                    staticClass: "form-input-hint"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("email")))]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "columns" }, [
            _c(
              "div",
              {
                staticClass: "column col-sm-12 col-6 form-group",
                class: { "has-error": _vm.errors.has("nombre") }
              },
              [
                _c(
                  "label",
                  {
                    staticClass: "form-label",
                    attrs: { for: "idName", name: "name" }
                  },
                  [_vm._v("Nombre")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.nombre,
                      expression: "nombre"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required|alpha|min:2",
                      expression: "'required|alpha|min:2'"
                    }
                  ],
                  staticClass: "form-input",
                  attrs: { id: "idName", name: "nombre", type: "text" },
                  domProps: { value: _vm.nombre },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.nombre = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("nombre"),
                        expression: "errors.has('nombre')"
                      }
                    ],
                    staticClass: "form-input-hint"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("nombre")))]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "column col-sm-12 col-6 form-group",
                class: { "has-error": _vm.errors.has("apellido") }
              },
              [
                _c(
                  "label",
                  { staticClass: "form-label", attrs: { for: "idLastName" } },
                  [_vm._v("Apellido")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.apellido,
                      expression: "apellido"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required|alpha|min:2",
                      expression: "'required|alpha|min:2'"
                    }
                  ],
                  staticClass: "form-input",
                  attrs: { id: "idLastName", name: "apellido", type: "text" },
                  domProps: { value: _vm.apellido },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.apellido = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("apellido"),
                        expression: "errors.has('apellido')"
                      }
                    ],
                    staticClass: "form-input-hint"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("apellido")))]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "columns" }, [
            _c(
              "div",
              {
                staticClass: "column col-6 form-group",
                class: { "has-error": _vm.errors.has("sexo") }
              },
              [
                _c(
                  "label",
                  { staticClass: "form-label", attrs: { for: "idLastName" } },
                  [_vm._v("Sexo")]
                ),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.sexo,
                        expression: "sexo"
                      }
                    ],
                    staticClass: "form-select",
                    attrs: { name: "sexo" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.sexo = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [
                      _vm._v("Seleccione una opción")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "M" } }, [
                      _vm._v("Masculino")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "F" } }, [
                      _vm._v("Femenino")
                    ])
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c(
              "label",
              { staticClass: "form-label", attrs: { for: "idBirthdate" } },
              [_vm._v("Fecha Nacimiento")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "columns" }, [
              _c(
                "div",
                {
                  staticClass: "column col-3 form-group",
                  class: { "has-error": _vm.errors.has("dia") }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.dia,
                        expression: "dia"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|max_value:31|min_value:1",
                        expression: "'required|max_value:31|min_value:1'"
                      }
                    ],
                    staticClass: "form-input",
                    attrs: { name: "dia", type: "text", placeholder: "Día" },
                    domProps: { value: _vm.dia },
                    on: {
                      focus: _vm.onChangeDate,
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.dia = $event.target.value
                      }
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "column col-5 form-group" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.mes,
                        expression: "mes"
                      }
                    ],
                    staticClass: "form-select",
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.mes = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "01" } }, [_vm._v("Enero")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "02" } }, [
                      _vm._v("Febrero")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "03" } }, [_vm._v("Marzo")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "04" } }, [_vm._v("Abril")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "05" } }, [_vm._v("Mayo")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "06" } }, [_vm._v("Junio")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "07" } }, [_vm._v("Julio")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "08" } }, [
                      _vm._v("Agosto")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "09" } }, [
                      _vm._v("Septiembre")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "10" } }, [
                      _vm._v("Octubre")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "11" } }, [
                      _vm._v("Noviembre")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "12" } }, [
                      _vm._v("Diciembre")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "column col-4",
                  class: { "has-error": _vm.errors.has("año") }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.año,
                        expression: "año"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|max_value:2010|min_value:1920",
                        expression: "'required|max_value:2010|min_value:1920'"
                      }
                    ],
                    staticClass: "form-input",
                    attrs: { name: "año", type: "text", placeholder: "Año" },
                    domProps: { value: _vm.año },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.año = $event.target.value
                      }
                    }
                  })
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { class: { "has-error": _vm.errors.has("dia") } }, [
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("dia"),
                      expression: "errors.has('dia')"
                    }
                  ],
                  staticClass: "form-input-hint"
                },
                [_vm._v(_vm._s(_vm.errors.first("dia")))]
              )
            ]),
            _vm._v(" "),
            _c("div", { class: { "has-error": _vm.errors.has("año") } }, [
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("año"),
                      expression: "errors.has('año')"
                    }
                  ],
                  staticClass: "form-input-hint"
                },
                [_vm._v(_vm._s(_vm.errors.first("año")))]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.showInvalidDateError,
                    expression: "showInvalidDateError"
                  }
                ],
                staticClass: "has-error"
              },
              [
                _c("span", { staticClass: "form-input-hint" }, [
                  _vm._v("La fecha ingresada no es valida")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("fechaNacimiento"),
                    expression: "errors.has('fechaNacimiento')"
                  }
                ],
                staticClass: "form-input-hint"
              },
              [_vm._v(_vm._s(_vm.errors.first("fechaNacimiento")))]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "columns" }, [
            _c(
              "div",
              {
                staticClass: "column col-6 form-group",
                class: { "has-error": _vm.errors.has("peso") }
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.peso,
                      expression: "peso"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required|numeric",
                      expression: "'required|numeric'"
                    }
                  ],
                  staticClass: "form-input",
                  attrs: { id: "idWeight", name: "peso", type: "text" },
                  domProps: { value: _vm.peso },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.peso = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("peso"),
                        expression: "errors.has('peso')"
                      }
                    ],
                    staticClass: "form-input-hint"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("peso")))]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "column col-6 form-group",
                class: { "has-error": _vm.errors.has("altura") }
              },
              [
                _vm._m(1),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.altura,
                      expression: "altura"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required|decimal",
                      expression: "'required|decimal'"
                    }
                  ],
                  staticClass: "form-input",
                  attrs: { id: "idHeight", name: "altura", type: "text" },
                  domProps: { value: _vm.altura },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.altura = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("altura"),
                        expression: "errors.has('altura')"
                      }
                    ],
                    staticClass: "form-input-hint"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("altura")))]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group py-2" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-lg btn-primary float-right",
                on: {
                  click: function($event) {
                    return _vm.onClickSave()
                  }
                }
              },
              [_vm._v("GUARDAR CAMBIOS")]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _vm.loading
        ? _c("loading", { attrs: { message: "Cargando ..." } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "idWeight" } },
      [_vm._v("Peso "), _c("b", [_vm._v("(kg)")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "idHeight" } },
      [_vm._v("Altura "), _c("b", [_vm._v("(m)")])]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8933779a", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-92d14f70\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/objectives/Objectives.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "mainWrapper" } },
    [
      _c("br"),
      _vm._v(" "),
      _c("ul", { staticClass: "step ctn-steps" }, [
        _c(
          "li",
          {
            staticClass: "step-item",
            class: { active: _vm.currentStep == "step1" },
            on: {
              click: function($event) {
                return _vm.onClickStep("step1")
              }
            }
          },
          [
            _c(
              "a",
              { staticClass: "tooltip", attrs: { "data-tooltip": "Paso 1" } },
              [_vm._v("1")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "step-item",
            class: { active: _vm.currentStep == "step2" },
            on: {
              click: function($event) {
                return _vm.onClickStep("step2")
              }
            }
          },
          [
            _c(
              "a",
              { staticClass: "tooltip", attrs: { "data-tooltip": "Paso 2" } },
              [_vm._v("2")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "step-item",
            class: { active: _vm.currentStep == "step3" },
            on: {
              click: function($event) {
                return _vm.onClickStep("step3")
              }
            }
          },
          [
            _c(
              "a",
              { staticClass: "tooltip", attrs: { "data-tooltip": "Paso 3" } },
              [_vm._v("3")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "step-item",
            class: { active: _vm.currentStep == "step4" },
            on: {
              click: function($event) {
                return _vm.onClickStep("step4")
              }
            }
          },
          [
            _c(
              "a",
              { staticClass: "tooltip", attrs: { "data-tooltip": "Paso 4" } },
              [_vm._v("4")]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.currentStep == "step1",
              expression: "currentStep =='step1'"
            }
          ],
          attrs: { id: "step1" }
        },
        [
          _c("h3", { staticClass: "text-center mt-2" }, [
            _vm._v("OBJETIVOS PERSONALES")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "text-center" }, [
            _vm._v("Marque el/los que corresponda")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "columns" }, [
            _c(
              "div",
              { staticClass: "column col-sm-10  col-xl-8 col-mx-auto" },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { staticClass: "form-checkbox" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.objective1,
                          expression: "objective1"
                        }
                      ],
                      attrs: { type: "checkbox" },
                      domProps: {
                        checked: Array.isArray(_vm.objective1)
                          ? _vm._i(_vm.objective1, null) > -1
                          : _vm.objective1
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.objective1,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 && (_vm.objective1 = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.objective1 = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.objective1 = $$c
                          }
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("i", { staticClass: "form-icon" }),
                    _vm._v(" "),
                    _c("b", [_vm._v("ESTÉTICO")]),
                    _vm._v(" "),
                    _c("p", [_vm._v("Trabajar y modelar partes del cuerpo")])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { staticClass: "form-checkbox" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.objective2,
                          expression: "objective2"
                        }
                      ],
                      attrs: { type: "checkbox" },
                      domProps: {
                        checked: Array.isArray(_vm.objective2)
                          ? _vm._i(_vm.objective2, null) > -1
                          : _vm.objective2
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.objective2,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 && (_vm.objective2 = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.objective2 = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.objective2 = $$c
                          }
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("i", { staticClass: "form-icon" }),
                    _vm._v(" "),
                    _c("b", [_vm._v("SALUD")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v("Realizar actividad para fortalecer la salud")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { staticClass: "form-checkbox" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.objective3,
                          expression: "objective3"
                        }
                      ],
                      attrs: { type: "checkbox" },
                      domProps: {
                        checked: Array.isArray(_vm.objective3)
                          ? _vm._i(_vm.objective3, null) > -1
                          : _vm.objective3
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.objective3,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 && (_vm.objective3 = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.objective3 = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.objective3 = $$c
                          }
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("i", { staticClass: "form-icon" }),
                    _vm._v(" "),
                    _c("b", [_vm._v("RENDIMINENTO FÍSICO")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v("Mejorar el rendimiento físico y resistencia")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group py-2 my-2" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-lg btn-primary float-right",
                      on: { click: _vm.onClickNextStep1 }
                    },
                    [_vm._v("CONTINUAR")]
                  )
                ])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.currentStep == "step2",
              expression: "currentStep =='step2'"
            }
          ],
          attrs: { id: "step2" }
        },
        [
          _c("h3", { staticClass: "text-center mt-1" }, [
            _vm._v("OBJETIVO ESTÉTICO")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "columns" }, [
            _c(
              "div",
              { staticClass: "column col-xl-8 col-mx-auto" },
              [
                _c("h5", [_vm._v("Seleccione las zonas a trabajar")]),
                _vm._v(" "),
                _vm._l(_vm.arrBodyParts, function(bodyPart) {
                  return _c("div", { staticClass: "form-group" }, [
                    _c("label", { staticClass: "form-checkbox" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: bodyPart.selected,
                            expression: "bodyPart.selected"
                          }
                        ],
                        attrs: { type: "checkbox", value: "true" },
                        domProps: {
                          checked: Array.isArray(bodyPart.selected)
                            ? _vm._i(bodyPart.selected, "true") > -1
                            : bodyPart.selected
                        },
                        on: {
                          change: [
                            function($event) {
                              var $$a = bodyPart.selected,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = "true",
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      bodyPart,
                                      "selected",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      bodyPart,
                                      "selected",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(bodyPart, "selected", $$c)
                              }
                            },
                            function($event) {
                              return _vm.onChangeCheckboxBodyPart(bodyPart.id)
                            }
                          ]
                        }
                      }),
                      _vm._v(" "),
                      _c("i", { staticClass: "form-icon" }),
                      _vm._v(" " + _vm._s(bodyPart.name) + "\n\t\t\t\t  ")
                    ])
                  ])
                }),
                _vm._v(" "),
                _c("div", { staticClass: "form-group py-2" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-lg btn-primary float-right",
                      on: { click: _vm.onClickNextStep2 }
                    },
                    [_vm._v("CONTINUAR")]
                  )
                ])
              ],
              2
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.currentStep == "step3",
              expression: "currentStep =='step3'"
            }
          ],
          attrs: { id: "step3" }
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "columns" }, [
            _c(
              "div",
              { staticClass: "column col-sm-12 col-xl-10 col-mx-auto" },
              [
                _c(
                  "table",
                  { staticClass: "table table-striped table-hover" },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.arrHemogram, function(itemH) {
                        return _c("tr", [
                          _c("td", [_vm._v(_vm._s(itemH.name))]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-center" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: itemH.value,
                                  expression: "itemH.value"
                                }
                              ],
                              staticClass: "input-table",
                              attrs: { type: "text" },
                              domProps: { value: itemH.value },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(itemH, "value", $event.target.value)
                                }
                              }
                            })
                          ])
                        ])
                      }),
                      0
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-lg btn-primary float-right",
                      on: { click: _vm.onClickNextStep3 }
                    },
                    [_vm._v("CONTINUAR")]
                  )
                ])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.currentStep == "step4",
              expression: "currentStep =='step4'"
            }
          ],
          attrs: { id: "step4" }
        },
        [
          _vm._m(2),
          _vm._v(" "),
          _c("div", { staticClass: "columns" }, [
            _c(
              "div",
              { staticClass: "column col-sm-12 col-xl-8 col-mx-auto" },
              [
                _vm._m(3),
                _vm._v(" "),
                _vm._m(4),
                _vm._v(" "),
                _c("div", { staticClass: "form-group py-2 my-2" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-lg btn-primary float-right",
                      on: { click: _vm.sendObjectives }
                    },
                    [_vm._v("CONTINUAR")]
                  )
                ])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _vm.currentBodyPart
        ? _c(
            "div",
            {
              staticClass: "modal",
              class: { active: _vm.showModal },
              attrs: { id: "modal-id" }
            },
            [
              _c("a", {
                staticClass: "modal-overlay",
                attrs: { href: "#close", "aria-label": "Close" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "modal-container" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c("a", {
                    staticClass: "btn btn-clear float-right",
                    attrs: { href: "#close", "aria-label": "Close" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.closeModal($event)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-title h3 text-center" }, [
                    _vm._v(_vm._s(_vm.currentBodyPart.name))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-center" }, [
                    _vm._v("Marque las zonas específicas a trabajar")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-center" },
                    _vm._l(_vm.currentBodyPart.partsNumber, function(i) {
                      return _c(
                        "div",
                        { staticClass: "form-group d-inline-block" },
                        [
                          _c("label", { staticClass: "form-checkbox" }, [
                            _c("input", { attrs: { type: "checkbox" } }),
                            _vm._v(" "),
                            _c("i", { staticClass: "form-icon" }),
                            _vm._v(
                              " " +
                                _vm._s(_vm.arrLetters[i - 1]) +
                                "\n\t\t\t\t\t  "
                            )
                          ])
                        ]
                      )
                    }),
                    0
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c("div", { staticClass: "content" }, [
                    _c("div", { staticClass: "columns" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "column col-sm-8  col-xl-5 col-mx-auto text-center"
                        },
                        [
                          _vm.user.profile.gender == "M"
                            ? _c("img", {
                                attrs: {
                                  width: "100%",
                                  src: _vm.currentBodyPart.imgMan
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.user.profile.gender == "F"
                            ? _c("img", {
                                attrs: {
                                  width: "100%",
                                  src: _vm.currentBodyPart.imgWoman
                                }
                              })
                            : _vm._e()
                        ]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-primary float-right",
                      on: { click: _vm.closeModal }
                    },
                    [_vm._v("CONTINUAR")]
                  )
                ])
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.loading
        ? _c("loading", { attrs: { message: "Cargando ..." } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column col-sm-12 col-xl-10 col-mx-auto" }, [
        _c("h3", { staticClass: "text-center mt-1" }, [
          _vm._v("OBJETIVO SALUD")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "text-center" }, [
          _vm._v(
            "Complete los campos con los resultados de los análisis clínicos"
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [_c("tr", [_c("th"), _vm._v(" "), _c("th")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column col-sm-12 col-xl-10 col-mx-auto" }, [
        _c("h3", { staticClass: "text-center mt-1" }, [
          _vm._v("OBJETIVO RENDIMIENTO FÍSICO")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "app-button default-cursor" }, [
      _c("div", { staticClass: "left left-column" }, [
        _c("b", [_vm._v("AUMENTAR V02M")]),
        _vm._v(" "),
        _c("span", [
          _vm._v(
            "Es la capacidad de absorber la máxima cantidad de oxígeno, transportarlo y utilizarlo durante un determinado tiempo. Esto se traduce en una mejor capacidad de resistir un esfuerzo aeróbico - anaeróbico."
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "app-button default-cursor" }, [
      _c("div", { staticClass: "left left-column" }, [
        _c("b", [_vm._v("FORTALECIMIENTO MUSCULAR")]),
        _vm._v(" "),
        _c("span", [
          _vm._v(
            "La evolución se medirá con los datos cargados luego de cada rutina"
          )
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-92d14f70", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-a070c342\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/control/ControlWrapper.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    { attrs: { name: "fade", mode: "out-in" } },
    [_c("router-view")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-a070c342", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ba0d9948\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/login/Login.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "wrapper-login" }, [
    _c("div", { staticClass: "column col-sm-10 col-xl-10 col-mx-auto" }, [
      _c("img", {
        staticClass: "logo-login",
        attrs: { src: "/img/logo2.png", alt: "Chau Panza" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c(
          "div",
          { staticClass: "column col-sm-10 col-xl-8 col-mx-auto" },
          [
            _c("login-form", { on: { loginSuccess: _vm.loginSuccess } }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "my-2" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "text-light",
                    attrs: {
                      to: { name: "freeRegister" },
                      tag: "a",
                      activeClass: "",
                      exact: ""
                    }
                  },
                  [
                    _vm._v(
                      "\n\t\t\t\t\t\tAún no tenés cuenta? Registrate\n\t\t\t\t\t"
                    )
                  ]
                ),
                _vm._v(" "),
                _c("a", { attrs: { href: "/" } })
              ],
              1
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ba0d9948", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-bbc3779c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/control/ControlBoard.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column col-sm-12 col-xl-10 col-mx-auto" }, [
          _c("h3", { staticClass: "text-center" }, [
            _vm._v("SEG. Y CONTROL / ESTADISTICAS")
          ]),
          _vm._v(" "),
          _c("h5", { staticClass: "text-center" }, [
            _vm._v(
              "Compará las estadísticas de dos períodos distintos y mirá la evolución en fotos"
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "text-center my-2" }, [
            _c(
              "a",
              {
                staticClass: "btn btn-gray",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.onClickModal($event)
                  }
                }
              },
              [_vm._v("Cargar datos del mes")]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column col-sm-12 col-xl-10 col-mx-auto" }, [
          _c("table", { staticClass: "table table-striped table-hover" }, [
            _c("thead", [
              _c("tr", [
                _c("th", [_vm._v("PERÍODO")]),
                _vm._v(" "),
                _c("th", { staticClass: "text-center" }, [_vm._v("MES 1")]),
                _vm._v(" "),
                _c("th", { staticClass: "text-center" }, [
                  _c("div", { staticClass: "wrapper-date no-border" }, [
                    _c("div", { staticClass: "ctn-date" }, [
                      _c(
                        "div",
                        { staticClass: "back", on: { click: _vm.onClickBack } },
                        [_c("i", { staticClass: "icon icon-arrow-left" })]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "date" }, [
                        _vm._v("MES " + _vm._s(_vm.currentMonth))
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "next", on: { click: _vm.onClickNext } },
                        [_c("i", { staticClass: "icon icon-arrow-right" })]
                      )
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("tbody", [
              _c("tr", [
                _c("td", [_vm._v("PESO (KG)")]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm.controlMonth1
                    ? _c("div", [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t" +
                            _vm._s(_vm.controlMonth1.peso) +
                            "\n\t\t\t\t\t\t\t"
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm.currentControl
                    ? _c("div", [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t" +
                            _vm._s(_vm.currentControl.peso) +
                            "\n\t\t\t\t\t\t\t"
                        )
                      ])
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("INDICE CINTURA / CADERA")]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm.controlMonth1
                    ? _c("div", [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t" +
                            _vm._s(_vm.controlMonth1.indice_cadera) +
                            "\n\t\t\t\t\t\t\t"
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm.currentControl
                    ? _c("div", [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t" +
                            _vm._s(_vm.currentControl.indice_cadera) +
                            "\n\t\t\t\t\t\t\t"
                        )
                      ])
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("PERIMETRO ABDOMINAL")]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm.controlMonth1
                    ? _c("div", [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t" +
                            _vm._s(_vm.controlMonth1.perimetro_abdominal) +
                            "\n\t\t\t\t\t\t\t"
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm.currentControl
                    ? _c("div", [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t" +
                            _vm._s(_vm.currentControl.perimetro_abdominal) +
                            "\n\t\t\t\t\t\t\t"
                        )
                      ])
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("COMO ME SENTÍ (PROMEDIO MENSUAL)")]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm._v(
                    "\n\t\t\t\t\t\t\t" +
                      _vm._s(_vm._f("getScoreName")(_vm.routineControlMonth1)) +
                      "\n\t\t\t\t\t\t"
                  )
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm._v(
                    "\n\t\t\t\t\t\t\t" +
                      _vm._s(
                        _vm._f("getScoreName")(_vm.currentRoutineControl)
                      ) +
                      "\n\t\t\t\t\t\t"
                  )
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("COMIDAS COMPLETADAS")]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm._v(
                    "\n\t\t\t\t\t\t\t" +
                      _vm._s(_vm.foodsControlMonth1) +
                      " %\n\t\t\t\t\t\t"
                  )
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm._v(
                    "\n\t\t\t\t\t\t\t" +
                      _vm._s(_vm.currentFoodControl) +
                      " %\n\t\t\t\t\t\t"
                  )
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c(
          "div",
          { staticClass: "column col-sm-12 col-xl-10 col-mx-auto" },
          [
            _c("br"),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "btn btn-primary btn-block",
                attrs: {
                  to: { name: "controlPhotos" },
                  tag: "button",
                  activeClass: "active",
                  exact: ""
                }
              },
              [_vm._v("ANTES Y DESPUES EN FOTOS")]
            ),
            _vm._v(" "),
            _vm._m(0)
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal",
          class: { active: _vm.showModal },
          attrs: { id: "modal-id" }
        },
        [
          _c("a", {
            staticClass: "modal-overlay",
            attrs: { "aria-label": "Close" },
            on: { click: _vm.onClickCloseModal }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "modal-container" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c("a", {
                staticClass: "btn btn-clear float-right",
                attrs: { "aria-label": "Close" },
                on: { click: _vm.onClickCloseModal }
              }),
              _vm._v(" "),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c(
                "h3",
                {
                  staticClass:
                    "modal-title h3 text-center text-capitalize no-margin"
                },
                [_vm._v("INGRESAR DATOS DEL MES")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "form-group ctn-form-modal-control" }, [
                _c(
                  "select",
                  {
                    staticClass: "form-select",
                    attrs: { name: "", id: "" },
                    on: { change: _vm.onChangeSelectMonth }
                  },
                  [
                    _c("option", { attrs: { value: "0" } }, [
                      _vm._v("Seleccione el mes")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.user.past_months, function(i) {
                      return _c("option", { domProps: { value: i } }, [
                        _vm._v("Mes " + _vm._s(i))
                      ])
                    })
                  ],
                  2
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "content text-center" }, [
                _c(
                  "table",
                  { staticClass: "table table-striped table-hover" },
                  [
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v("PESO (KG)")]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c("input", {
                            staticClass: "input-table",
                            attrs: { id: "inputPeso", type: "number" },
                            domProps: { value: _vm.currentControlSelect.peso }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("INDICE CINTURA / CADERA")]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c("input", {
                            staticClass: "input-table",
                            attrs: { id: "inputIndiceCadera", type: "number" },
                            domProps: {
                              value: _vm.currentControlSelect.indice_cadera
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("PERIMETRO ABDOMINAL")]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c("input", {
                            staticClass: "input-table",
                            attrs: {
                              id: "inputPerimetroAbdominal",
                              type: "number"
                            },
                            domProps: {
                              value:
                                _vm.currentControlSelect.perimetro_abdominal
                            }
                          })
                        ])
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("br"),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "text-center" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-lg btn-primary",
                      on: { click: _vm.onClickSaveControls }
                    },
                    [_vm._v("GUARDAR")]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" })
          ])
        ]
      ),
      _vm._v(" "),
      _vm.loading
        ? _c("loading", { attrs: { message: "Cargando Información ..." } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ctn-frase" }, [
      _c("p", [
        _c("img", {
          staticClass: "d-inline-block",
          attrs: { src: "/img/comillas.png", alt: "Frase" }
        }),
        _vm._v(
          " Cuando sientas que vas a rendirte, piensa en proque emepezaste\n\t\t\t\t"
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-bbc3779c", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-bc3a9b92\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/profile/edit-password/EditPasswordForm.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.updatePassword($event)
          }
        }
      },
      [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "new-password" } }, [
            _vm._v("New Password")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.new_password,
                expression: "form.new_password"
              }
            ],
            staticClass: "form-control",
            class: { "is-invalid": _vm.error.new_password },
            attrs: {
              type: "password",
              id: "new-password",
              disabled: _vm.loading
            },
            domProps: { value: _vm.form.new_password },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "new_password", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.error.new_password,
                  expression: "error.new_password"
                }
              ],
              staticClass: "invalid-feedback"
            },
            [_vm._v(_vm._s(_vm.error.new_password))]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "confirm-new-password" } }, [
            _vm._v("Confirm New Password")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.confirm_new_password,
                expression: "form.confirm_new_password"
              }
            ],
            staticClass: "form-control",
            class: { "is-invalid": _vm.error.confirm_new_password },
            attrs: {
              type: "password",
              id: "confirm-new-password",
              disabled: _vm.loading
            },
            domProps: { value: _vm.form.confirm_new_password },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "confirm_new_password", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.error.confirm_new_password,
                  expression: "error.confirm_new_password"
                }
              ],
              staticClass: "invalid-feedback"
            },
            [_vm._v(_vm._s(_vm.error.confirm_new_password))]
          )
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-primary",
            attrs: { type: "submit", disabled: _vm.loading }
          },
          [
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.loading,
                    expression: "loading"
                  }
                ]
              },
              [_vm._v("Updating Password")]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.loading,
                    expression: "!loading"
                  }
                ]
              },
              [_vm._v("Update Password")]
            )
          ]
        ),
        _vm._v(" "),
        _vm._m(0)
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-text text-muted mt-4" }, [
      _vm._v("\n\t\t\tUpdate Password is disabled for demo purpose.\n\t\t\t"),
      _c("br"),
      _vm._v("\n\t\t\tPlease, enable it from "),
      _c("code", [_vm._v("updatePassword()")]),
      _vm._v(" method in EditPasswordForm.vue component\n\t\t")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-bc3a9b92", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-cf1cbf80\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/login/LoginForm.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.login($event)
          }
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "form-group",
            class: { "has-error": _vm.errors.has("email") }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.email,
                  expression: "form.email"
                },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required|email",
                  expression: "'required|email'"
                }
              ],
              staticClass: "form-input",
              class: { "is-invalid": _vm.error.email },
              attrs: {
                type: "email",
                placeholder: "Email",
                id: "email",
                autocomplete: "off",
                disabled: _vm.loading,
                name: "email"
              },
              domProps: { value: _vm.form.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "email", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("email"),
                    expression: "errors.has('email')"
                  }
                ],
                staticClass: "form-input-hint"
              },
              [_vm._v(_vm._s(_vm.errors.first("email")))]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "form-group",
            class: { "has-error": _vm.errors.has("password") }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.password,
                  expression: "form.password"
                },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required|min:6",
                  expression: "'required|min:6'"
                }
              ],
              staticClass: "form-input",
              class: { "is-invalid": _vm.error.password },
              attrs: {
                type: "password",
                placeholder: "Contraseña",
                id: "password",
                disabled: _vm.loading,
                name: "password"
              },
              domProps: { value: _vm.form.password },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "password", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("password"),
                    expression: "errors.has('password')"
                  }
                ],
                staticClass: "form-input-hint"
              },
              [_vm._v(_vm._s(_vm.errors.first("password")))]
            )
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-primary btn-block",
              attrs: { type: "submit", disabled: _vm.loading }
            },
            [
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.loading,
                      expression: "loading"
                    }
                  ]
                },
                [_vm._v("VALIDANDO INFORMACIÓN...")]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.loading,
                      expression: "!loading"
                    }
                  ]
                },
                [_vm._v("INGRESAR")]
              )
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-cf1cbf80", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ec38bbd0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/control/UploadPhoto.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column col-sm-12 col-xl-10 col-mx-auto" }, [
          _c("h3", { staticClass: "text-center" }, [
            _vm._v("Subir Foto - "),
            _c("b", [_vm._v(_vm._s(_vm.photoName))]),
            _vm._v(" - Mes " + _vm._s(_vm.month))
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm.loading
        ? _c("loading", { attrs: { message: "Cargando ..." } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column col-sm-10 col-xl-6 col-mx-auto" }, [
        _c(
          "div",
          {
            staticClass: "slim",
            attrs: {
              id: "myCropper",
              "data-size": "1200,1000",
              "data-post": "output"
            }
          },
          [_c("input", { attrs: { type: "file", name: "image" } })]
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ec38bbd0", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-plugin-load-script/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const LoadScript = {
  install: function (Vue) {
    Vue.loadScript = Vue.prototype.$loadScript = function (src) { // eslint-disable-line no-param-reassign
      return new Promise(function (resolve, reject) {
        if (document.querySelector('script[src="' + src + '"]')) {
          resolve();

          return;
        }

        const el = document.createElement('script');

        el.type = 'text/javascript';
        el.async = true;
        el.src = src;

        el.addEventListener('load', resolve);
        el.addEventListener('error', reject);
        el.addEventListener('abort', reject);

        document.head.appendChild(el);
      });
    };

    Vue.unloadScript = Vue.prototype.$unloadScript = function (src) { // eslint-disable-line no-param-reassign
      return new Promise(function (resolve, reject) {
        const el = document.querySelector('script[src="' + src + '"]');

        if (!el) {
          reject();

          return;
        }

        document.head.removeChild(el);

        resolve();
      });
    };
  },
};

/* harmony default export */ __webpack_exports__["a"] = (LoadScript);


/***/ }),

/***/ "./node_modules/vue-router/dist/vue-router.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*!
  * vue-router v3.0.2
  * (c) 2018 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if ("development" !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

function extend (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

var View = {
  name: 'RouterView',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    // used by devtools to display a router-view badge
    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
}

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (true) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "development" !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'RouterLink',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
      ? 'router-link-active'
      : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
      ? 'router-link-exact-active'
      : globalExactActiveClass;
    var activeClass = this.activeClass == null
      ? activeClassFallback
      : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
      ? exactActiveClassFallback
      : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
}

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('RouterView', View);
  Vue.component('RouterLink', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (true) {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (true) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (true) {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ("development" !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (true) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */

function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = extend({}, next);
    next._normalized = true;
    var params = extend(extend({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (true) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

/*  */



function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (true) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
      ? originalRedirect(createRoute(record, location, null, router))
      : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (true) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (true) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (true) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      // Fix #1994: using * with props: true generates a param named 0
      params[key.name || 'pathMatch'] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */

var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  // Fix for #2195 Add optional third attribute to workaround a bug in safari https://bugs.webkit.org/show_bug.cgi?id=182678
  window.history.replaceState({ key: getStateKey() }, '', window.location.href.replace(window.location.origin, ''));
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (true) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior.call(router, to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (true) {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "development" !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (
    instances[key] &&
    !instances[key]._isBeingDestroyed // do not reuse being destroyed instance
  ) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */

var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (supportsScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = decodeURI(window.location.pathname);
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */

var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : decodeURI(href.slice(index + 1))
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */

var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */



var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (true) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  "development" !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.2';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["a"] = (VueRouter);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-33ecfa4a\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/routines/Routine.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-33ecfa4a\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/routines/Routine.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("9a0fede4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-33ecfa4a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Routine.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-33ecfa4a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Routine.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ba0d9948\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/login/Login.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ba0d9948\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/login/Login.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("169bd71a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ba0d9948\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ba0d9948\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__("./node_modules/vue-style-loader/lib/listToStyles.js")

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./node_modules/vuejs-noty/dist/vuejs-noty.js":
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["vuejs-noty"]=e():t["vuejs-noty"]=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=12)}([function(t,e,n){t.exports=!n(1)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var o=n(17);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e,n){var o=n(6),i=n(5);t.exports=function(t){return o(i(t))}},function(t,e,n){t.exports={default:n(13),__esModule:!0}},function(t,e){},function(t,e,n){!function(e,n){t.exports=n()}(0,function(){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=6)}([function(t,e,n){"use strict";function o(t,e,n){var o=void 0;if(!n){for(o in e)if(e.hasOwnProperty(o)&&e[o]===t)return!0}else for(o in e)if(e.hasOwnProperty(o)&&e[o]===t)return!0;return!1}function i(t){t=t||window.event,void 0!==t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e="noty_"+t+"_";return e+="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)})}function s(t){var e=t.offsetHeight,n=window.getComputedStyle(t);return e+=parseInt(n.marginTop)+parseInt(n.marginBottom)}function u(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e=e.split(" ");for(var i=0;i<e.length;i++)document.addEventListener?t.addEventListener(e[i],n,o):document.attachEvent&&t.attachEvent("on"+e[i],n)}function a(t,e){return("string"==typeof t?t:d(t)).indexOf(" "+e+" ")>=0}function c(t,e){var n=d(t),o=n+e;a(n,e)||(t.className=o.substring(1))}function l(t,e){var n=d(t),o=void 0;a(t,e)&&(o=n.replace(" "+e+" "," "),t.className=o.substring(1,o.length-1))}function f(t){t.parentNode&&t.parentNode.removeChild(t)}function d(t){return(" "+(t&&t.className||"")+" ").replace(/\s+/gi," ")}function h(){function t(){b.PageHidden=document[s],o()}function e(){b.PageHidden=!0,o()}function n(){b.PageHidden=!1,o()}function o(){b.PageHidden?i():r()}function i(){setTimeout(function(){Object.keys(b.Store).forEach(function(t){b.Store.hasOwnProperty(t)&&b.Store[t].options.visibilityControl&&b.Store[t].stop()})},100)}function r(){setTimeout(function(){Object.keys(b.Store).forEach(function(t){b.Store.hasOwnProperty(t)&&b.Store[t].options.visibilityControl&&b.Store[t].resume()}),b.queueRenderAll()},100)}var s=void 0,a=void 0;void 0!==document.hidden?(s="hidden",a="visibilitychange"):void 0!==document.msHidden?(s="msHidden",a="msvisibilitychange"):void 0!==document.webkitHidden&&(s="webkitHidden",a="webkitvisibilitychange"),u(document,a,t),u(window,"blur",e),u(window,"focus",n)}function p(t){if(t.hasSound){var e=document.createElement("audio");t.options.sounds.sources.forEach(function(t){var n=document.createElement("source");n.src=t,n.type="audio/"+v(t),e.appendChild(n)}),t.barDom?t.barDom.appendChild(e):document.querySelector("body").appendChild(e),e.volume=t.options.sounds.volume,t.soundPlayed||(e.play(),t.soundPlayed=!0),e.onended=function(){f(e)}}}function v(t){return t.match(/\.([^.]+)$/)[1]}Object.defineProperty(e,"__esModule",{value:!0}),e.css=e.deepExtend=e.animationEndEvents=void 0;var m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.inArray=o,e.stopPropagation=i,e.generateID=r,e.outerHeight=s,e.addListener=u,e.hasClass=a,e.addClass=c,e.removeClass=l,e.remove=f,e.classList=d,e.visibilityChangeFlow=h,e.createAudioElements=p;var y=n(1),b=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(y);e.animationEndEvents="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",e.deepExtend=function t(e){e=e||{};for(var n=1;n<arguments.length;n++){var o=arguments[n];if(o)for(var i in o)o.hasOwnProperty(i)&&(Array.isArray(o[i])?e[i]=o[i]:"object"===m(o[i])&&null!==o[i]?e[i]=t(e[i],o[i]):e[i]=o[i])}return e},e.css=function(){function t(t){return t.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()})}function e(t){var e=document.body.style;if(t in e)return t;for(var n=i.length,o=t.charAt(0).toUpperCase()+t.slice(1),r=void 0;n--;)if((r=i[n]+o)in e)return r;return t}function n(n){return n=t(n),r[n]||(r[n]=e(n))}function o(t,e,o){e=n(e),t.style[e]=o}var i=["Webkit","O","Moz","ms"],r={};return function(t,e){var n=arguments,i=void 0,r=void 0;if(2===n.length)for(i in e)e.hasOwnProperty(i)&&void 0!==(r=e[i])&&e.hasOwnProperty(i)&&o(t,i,r);else o(t,n[1],n[2])}}()},function(t,e,n){"use strict";function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"global",e=0,n=E;return P.hasOwnProperty(t)&&(n=P[t].maxVisible,Object.keys(D).forEach(function(n){D[n].options.queue!==t||D[n].closed||e++})),{current:e,maxVisible:n}}function i(t){P.hasOwnProperty(t.options.queue)||(P[t.options.queue]={maxVisible:E,queue:[]}),P[t.options.queue].queue.push(t)}function r(t){if(P.hasOwnProperty(t.options.queue)){var e=[];Object.keys(P[t.options.queue].queue).forEach(function(n){P[t.options.queue].queue[n].id!==t.id&&e.push(P[t.options.queue].queue[n])}),P[t.options.queue].queue=e}}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"global";if(P.hasOwnProperty(t)){var e=P[t].queue.shift();e&&e.show()}}function u(){Object.keys(P).forEach(function(t){s(t)})}function a(t){var e=x.generateID("ghost"),n=document.createElement("div");n.setAttribute("id",e),x.css(n,{height:x.outerHeight(t.barDom)+"px"}),t.barDom.insertAdjacentHTML("afterend",n.outerHTML),x.remove(t.barDom),n=document.getElementById(e),x.addClass(n,"noty_fix_effects_height"),x.addListener(n,x.animationEndEvents,function(){x.remove(n)})}function c(t){v(t);var e='<div class="noty_body">'+t.options.text+"</div>"+f(t)+'<div class="noty_progressbar"></div>';t.barDom=document.createElement("div"),t.barDom.setAttribute("id",t.id),x.addClass(t.barDom,"noty_bar noty_type__"+t.options.type+" noty_theme__"+t.options.theme),t.barDom.innerHTML=e,b(t,"onTemplate")}function l(t){return!(!t.options.buttons||!Object.keys(t.options.buttons).length)}function f(t){if(l(t)){var e=document.createElement("div");return x.addClass(e,"noty_buttons"),Object.keys(t.options.buttons).forEach(function(n){e.appendChild(t.options.buttons[n].dom)}),t.options.buttons.forEach(function(t){e.appendChild(t.dom)}),e.outerHTML}return""}function d(t){t.options.modal&&(0===S&&p(),e.DocModalCount=S+=1)}function h(t){if(t.options.modal&&S>0&&(e.DocModalCount=S-=1,S<=0)){var n=document.querySelector(".noty_modal");n&&(x.removeClass(n,"noty_modal_open"),x.addClass(n,"noty_modal_close"),x.addListener(n,x.animationEndEvents,function(){x.remove(n)}))}}function p(){var t=document.querySelector("body"),e=document.createElement("div");x.addClass(e,"noty_modal"),t.insertBefore(e,t.firstChild),x.addClass(e,"noty_modal_open"),x.addListener(e,x.animationEndEvents,function(){x.removeClass(e,"noty_modal_open")})}function v(t){if(t.options.container)return void(t.layoutDom=document.querySelector(t.options.container));var e="noty_layout__"+t.options.layout;t.layoutDom=document.querySelector("div#"+e),t.layoutDom||(t.layoutDom=document.createElement("div"),t.layoutDom.setAttribute("id",e),x.addClass(t.layoutDom,"noty_layout"),document.querySelector("body").appendChild(t.layoutDom))}function m(t){t.options.timeout&&(t.options.progressBar&&t.progressDom&&x.css(t.progressDom,{transition:"width "+t.options.timeout+"ms linear",width:"0%"}),clearTimeout(t.closeTimer),t.closeTimer=setTimeout(function(){t.close()},t.options.timeout))}function y(t){t.options.timeout&&t.closeTimer&&(clearTimeout(t.closeTimer),t.closeTimer=-1,t.options.progressBar&&t.progressDom&&x.css(t.progressDom,{transition:"width 0ms linear",width:"100%"}))}function b(t,e){t.listeners.hasOwnProperty(e)&&t.listeners[e].forEach(function(e){"function"==typeof e&&e.apply(t)})}function w(t){b(t,"afterShow"),m(t),x.addListener(t.barDom,"mouseenter",function(){y(t)}),x.addListener(t.barDom,"mouseleave",function(){m(t)})}function g(t){delete D[t.id],t.closing=!1,b(t,"afterClose"),x.remove(t.barDom),0!==t.layoutDom.querySelectorAll(".noty_bar").length||t.options.container||x.remove(t.layoutDom),(x.inArray("docVisible",t.options.titleCount.conditions)||x.inArray("docHidden",t.options.titleCount.conditions))&&C.decrement(),s(t.options.queue)}Object.defineProperty(e,"__esModule",{value:!0}),e.Defaults=e.Store=e.Queues=e.DefaultMaxVisible=e.docTitle=e.DocModalCount=e.PageHidden=void 0,e.getQueueCounts=o,e.addToQueue=i,e.removeFromQueue=r,e.queueRender=s,e.queueRenderAll=u,e.ghostFix=a,e.build=c,e.hasButtons=l,e.handleModal=d,e.handleModalClose=h,e.queueClose=m,e.dequeueClose=y,e.fire=b,e.openFlow=w,e.closeFlow=g;var _=n(0),x=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(_),S=(e.PageHidden=!1,e.DocModalCount=0),k={originalTitle:null,count:0,changed:!1,timer:-1},C=e.docTitle={increment:function(){k.count++,C._update()},decrement:function(){if(--k.count<=0)return void C._clear();C._update()},_update:function(){var t=document.title;k.changed?document.title="("+k.count+") "+k.originalTitle:(k.originalTitle=t,document.title="("+k.count+") "+t,k.changed=!0)},_clear:function(){k.changed&&(k.count=0,document.title=k.originalTitle,k.changed=!1)}},E=e.DefaultMaxVisible=5,P=e.Queues={global:{maxVisible:E,queue:[]}},D=e.Store={};e.Defaults={type:"alert",layout:"topRight",theme:"mint",text:"",timeout:!1,progressBar:!0,closeWith:["click"],animation:{open:"noty_effects_open",close:"noty_effects_close"},id:!1,force:!1,killer:!1,queue:"global",container:!1,buttons:[],callbacks:{beforeShow:null,onShow:null,afterShow:null,onClose:null,afterClose:null,onHover:null,onTemplate:null},sounds:{sources:[],volume:1,conditions:[]},titleCount:{conditions:[]},modal:!1,visibilityControl:!0}},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.NotyButton=void 0;var i=n(0),r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(i);e.NotyButton=function t(e,n,i){var s=this,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return o(this,t),this.dom=document.createElement("button"),this.dom.innerHTML=e,this.id=u.id=u.id||r.generateID("button"),this.cb=i,Object.keys(u).forEach(function(t){s.dom.setAttribute(t,u[t])}),r.addClass(this.dom,n||"noty_btn"),this}},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();e.Push=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/service-worker.js";return o(this,t),this.subData={},this.workerPath=e,this.listeners={onPermissionGranted:[],onPermissionDenied:[],onSubscriptionSuccess:[],onSubscriptionCancel:[],onWorkerError:[],onWorkerSuccess:[],onWorkerNotSupported:[]},this}return i(t,[{key:"on",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return"function"==typeof e&&this.listeners.hasOwnProperty(t)&&this.listeners[t].push(e),this}},{key:"fire",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.listeners.hasOwnProperty(t)&&this.listeners[t].forEach(function(t){"function"==typeof t&&t.apply(e,n)})}},{key:"create",value:function(){console.log("NOT IMPLEMENTED YET")}},{key:"isSupported",value:function(){var t=!1;try{t=window.Notification||window.webkitNotifications||navigator.mozNotification||window.external&&void 0!==window.external.msIsSiteMode()}catch(t){}return t}},{key:"getPermissionStatus",value:function(){var t="default";if(window.Notification&&window.Notification.permissionLevel)t=window.Notification.permissionLevel;else if(window.webkitNotifications&&window.webkitNotifications.checkPermission)switch(window.webkitNotifications.checkPermission()){case 1:t="default";break;case 0:t="granted";break;default:t="denied"}else window.Notification&&window.Notification.permission?t=window.Notification.permission:navigator.mozNotification?t="granted":window.external&&void 0!==window.external.msIsSiteMode()&&(t=window.external.msIsSiteMode()?"granted":"default");return t.toString().toLowerCase()}},{key:"getEndpoint",value:function(t){var e=t.endpoint,n=t.subscriptionId;return n&&-1===e.indexOf(n)&&(e+="/"+n),e}},{key:"isSWRegistered",value:function(){try{return"activated"===navigator.serviceWorker.controller.state}catch(t){return!1}}},{key:"unregisterWorker",value:function(){var t=this;"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then(function(e){var n=!0,o=!1,i=void 0;try{for(var r,s=e[Symbol.iterator]();!(n=(r=s.next()).done);n=!0){r.value.unregister(),t.fire("onSubscriptionCancel")}}catch(t){o=!0,i=t}finally{try{!n&&s.return&&s.return()}finally{if(o)throw i}}})}},{key:"requestSubscription",value:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=this,o=this.getPermissionStatus(),i=function(o){"granted"===o?(t.fire("onPermissionGranted"),"serviceWorker"in navigator?navigator.serviceWorker.register(t.workerPath).then(function(){navigator.serviceWorker.ready.then(function(t){n.fire("onWorkerSuccess"),t.pushManager.subscribe({userVisibleOnly:e}).then(function(t){var e=t.getKey("p256dh"),o=t.getKey("auth");n.subData={endpoint:n.getEndpoint(t),p256dh:e?window.btoa(String.fromCharCode.apply(null,new Uint8Array(e))):null,auth:o?window.btoa(String.fromCharCode.apply(null,new Uint8Array(o))):null},n.fire("onSubscriptionSuccess",[n.subData])}).catch(function(t){n.fire("onWorkerError",[t])})})}):n.fire("onWorkerNotSupported")):"denied"===o&&(t.fire("onPermissionDenied"),t.unregisterWorker())};"default"===o?window.Notification&&window.Notification.requestPermission?window.Notification.requestPermission(i):window.webkitNotifications&&window.webkitNotifications.checkPermission&&window.webkitNotifications.requestPermission(i):i(o)}}]),t}()},function(t,e,n){(function(e,o){/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.0
 */
!function(e,n){t.exports=n()}(0,function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function i(t){return"function"==typeof t}function r(t){z=t}function s(t){U=t}function u(){return void 0!==R?function(){R(c)}:a()}function a(){var t=setTimeout;return function(){return t(c,1)}}function c(){for(var t=0;t<Q;t+=2){(0,X[t])(X[t+1]),X[t]=void 0,X[t+1]=void 0}Q=0}function l(t,e){var n=arguments,o=this,i=new this.constructor(d);void 0===i[tt]&&j(i);var r=o._state;return r?function(){var t=n[r-1];U(function(){return D(r,i,t,o._result)})}():k(o,i,t,e),i}function f(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(d);return g(n,t),n}function d(){}function h(){return new TypeError("You cannot resolve a promise with itself")}function p(){return new TypeError("A promises callback cannot return that same promise.")}function v(t){try{return t.then}catch(t){return it.error=t,it}}function m(t,e,n,o){try{t.call(e,n,o)}catch(t){return t}}function y(t,e,n){U(function(t){var o=!1,i=m(n,e,function(n){o||(o=!0,e!==n?g(t,n):x(t,n))},function(e){o||(o=!0,S(t,e))},"Settle: "+(t._label||" unknown promise"));!o&&i&&(o=!0,S(t,i))},t)}function b(t,e){e._state===nt?x(t,e._result):e._state===ot?S(t,e._result):k(e,void 0,function(e){return g(t,e)},function(e){return S(t,e)})}function w(t,e,n){e.constructor===t.constructor&&n===l&&e.constructor.resolve===f?b(t,e):n===it?(S(t,it.error),it.error=null):void 0===n?x(t,e):i(n)?y(t,e,n):x(t,e)}function g(e,n){e===n?S(e,h()):t(n)?w(e,n,v(n)):x(e,n)}function _(t){t._onerror&&t._onerror(t._result),C(t)}function x(t,e){t._state===et&&(t._result=e,t._state=nt,0!==t._subscribers.length&&U(C,t))}function S(t,e){t._state===et&&(t._state=ot,t._result=e,U(_,t))}function k(t,e,n,o){var i=t._subscribers,r=i.length;t._onerror=null,i[r]=e,i[r+nt]=n,i[r+ot]=o,0===r&&t._state&&U(C,t)}function C(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var o=void 0,i=void 0,r=t._result,s=0;s<e.length;s+=3)o=e[s],i=e[s+n],o?D(n,o,i,r):i(r);t._subscribers.length=0}}function E(){this.error=null}function P(t,e){try{return t(e)}catch(t){return rt.error=t,rt}}function D(t,e,n,o){var r=i(n),s=void 0,u=void 0,a=void 0,c=void 0;if(r){if(s=P(n,o),s===rt?(c=!0,u=s.error,s.error=null):a=!0,e===s)return void S(e,p())}else s=o,a=!0;e._state!==et||(r&&a?g(e,s):c?S(e,u):t===nt?x(e,s):t===ot&&S(e,s))}function O(t,e){try{e(function(e){g(t,e)},function(e){S(t,e)})}catch(e){S(t,e)}}function T(){return st++}function j(t){t[tt]=st++,t._state=void 0,t._result=void 0,t._subscribers=[]}function M(t,e){this._instanceConstructor=t,this.promise=new t(d),this.promise[tt]||j(this.promise),V(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?x(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&x(this.promise,this._result))):S(this.promise,A())}function A(){return new Error("Array Methods must be provided an Array")}function q(t){return new M(this,t).promise}function N(t){var e=this;return new e(V(t)?function(n,o){for(var i=t.length,r=0;r<i;r++)e.resolve(t[r]).then(n,o)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function H(t){var e=this,n=new e(d);return S(n,t),n}function L(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function W(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function F(t){this[tt]=T(),this._result=this._state=void 0,this._subscribers=[],d!==t&&("function"!=typeof t&&L(),this instanceof F?O(this,t):W())}function B(){var t=void 0;if(void 0!==o)t=o;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=F}var I=void 0;I=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var V=I,Q=0,R=void 0,z=void 0,U=function(t,e){X[Q]=t,X[Q+1]=e,2===(Q+=2)&&(z?z(c):Z())},G="undefined"!=typeof window?window:void 0,Y=G||{},K=Y.MutationObserver||Y.WebKitMutationObserver,$="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),J="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,X=new Array(1e3),Z=void 0;Z=$?function(){return function(){return e.nextTick(c)}}():K?function(){var t=0,e=new K(c),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}():J?function(){var t=new MessageChannel;return t.port1.onmessage=c,function(){return t.port2.postMessage(0)}}():void 0===G?function(){try{var t=n(9);return R=t.runOnLoop||t.runOnContext,u()}catch(t){return a()}}():a();var tt=Math.random().toString(36).substring(16),et=void 0,nt=1,ot=2,it=new E,rt=new E,st=0;return M.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===et&&n<t;n++)this._eachEntry(e[n],n)},M.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,o=n.resolve;if(o===f){var i=v(t);if(i===l&&t._state!==et)this._settledAt(t._state,e,t._result);else if("function"!=typeof i)this._remaining--,this._result[e]=t;else if(n===F){var r=new n(d);w(r,t,i),this._willSettleAt(r,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(o(t),e)},M.prototype._settledAt=function(t,e,n){var o=this.promise;o._state===et&&(this._remaining--,t===ot?S(o,n):this._result[e]=n),0===this._remaining&&x(o,this._result)},M.prototype._willSettleAt=function(t,e){var n=this;k(t,void 0,function(t){return n._settledAt(nt,e,t)},function(t){return n._settledAt(ot,e,t)})},F.all=q,F.race=N,F.resolve=f,F.reject=H,F._setScheduler=r,F._setAsap=s,F._asap=U,F.prototype={constructor:F,then:l,catch:function(t){return this.then(null,t)}},F.polyfill=B,F.Promise=F,F})}).call(e,n(7),n(8))},function(t,e){},function(t,e,n){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();n(5);var s=n(4),u=function(t){return t&&t.__esModule?t:{default:t}}(s),a=n(0),c=o(a),l=n(1),f=o(l),d=n(2),h=n(3),p=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i(this,t),this.options=c.deepExtend({},f.Defaults,e),this.id=this.options.id||c.generateID("bar"),this.closeTimer=-1,this.barDom=null,this.layoutDom=null,this.progressDom=null,this.showing=!1,this.shown=!1,this.closed=!1,this.closing=!1,this.killable=this.options.timeout||this.options.closeWith.length>0,this.hasSound=this.options.sounds.sources.length>0,this.soundPlayed=!1,this.listeners={beforeShow:[],onShow:[],afterShow:[],onClose:[],afterClose:[],onHover:[],onTemplate:[]},this.promises={show:null,close:null},this.on("beforeShow",this.options.callbacks.beforeShow),this.on("onShow",this.options.callbacks.onShow),this.on("afterShow",this.options.callbacks.afterShow),this.on("onClose",this.options.callbacks.onClose),this.on("afterClose",this.options.callbacks.afterClose),this.on("onHover",this.options.callbacks.onHover),this.on("onTemplate",this.options.callbacks.onTemplate),this}return r(t,[{key:"on",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return"function"==typeof e&&this.listeners.hasOwnProperty(t)&&this.listeners[t].push(e),this}},{key:"show",value:function(){var e=this;if(!0!==this.options.killer||f.PageHidden)if("string"!=typeof this.options.killer||f.PageHidden){var n=f.getQueueCounts(this.options.queue);if(n.current>=n.maxVisible||f.PageHidden)return f.addToQueue(this),f.PageHidden&&this.hasSound&&c.inArray("docHidden",this.options.sounds.conditions)&&c.createAudioElements(this),f.PageHidden&&c.inArray("docHidden",this.options.titleCount.conditions)&&f.docTitle.increment(),this}else t.closeAll(this.options.killer);else t.closeAll();if(f.Store[this.id]=this,f.fire(this,"beforeShow"),this.showing=!0,this.closing)return this.showing=!1,this;if(f.build(this),f.handleModal(this),this.options.force?this.layoutDom.insertBefore(this.barDom,this.layoutDom.firstChild):this.layoutDom.appendChild(this.barDom),this.hasSound&&!this.soundPlayed&&c.inArray("docVisible",this.options.sounds.conditions)&&c.createAudioElements(this),c.inArray("docVisible",this.options.titleCount.conditions)&&f.docTitle.increment(),this.shown=!0,this.closed=!1,f.hasButtons(this)&&Object.keys(this.options.buttons).forEach(function(t){var n=e.barDom.querySelector("#"+e.options.buttons[t].id);c.addListener(n,"click",function(n){c.stopPropagation(n),e.options.buttons[t].cb()})}),this.progressDom=this.barDom.querySelector(".noty_progressbar"),c.inArray("click",this.options.closeWith)&&(c.addClass(this.barDom,"noty_close_with_click"),c.addListener(this.barDom,"click",function(t){c.stopPropagation(t),e.close()},!1)),c.addListener(this.barDom,"mouseenter",function(){f.fire(e,"onHover")},!1),this.options.timeout&&c.addClass(this.barDom,"noty_has_timeout"),c.inArray("button",this.options.closeWith)){c.addClass(this.barDom,"noty_close_with_button");var o=document.createElement("div");c.addClass(o,"noty_close_button"),o.innerHTML="×",this.barDom.appendChild(o),c.addListener(o,"click",function(t){c.stopPropagation(t),e.close()},!1)}return f.fire(this,"onShow"),null===this.options.animation.open?this.promises.show=new u.default(function(t){t()}):"function"==typeof this.options.animation.open?this.promises.show=new u.default(this.options.animation.open.bind(this)):(c.addClass(this.barDom,this.options.animation.open),this.promises.show=new u.default(function(t){c.addListener(e.barDom,c.animationEndEvents,function(){c.removeClass(e.barDom,e.options.animation.open),t()})})),this.promises.show.then(function(){var t=e;setTimeout(function(){f.openFlow(t)},100)}),this}},{key:"stop",value:function(){return f.dequeueClose(this),this}},{key:"resume",value:function(){return f.queueClose(this),this}},{key:"setTimeout",value:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){if(this.stop(),this.options.timeout=t,this.barDom){this.options.timeout?c.addClass(this.barDom,"noty_has_timeout"):c.removeClass(this.barDom,"noty_has_timeout");var e=this;setTimeout(function(){e.resume()},100)}return this})},{key:"setText",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.barDom&&(this.barDom.querySelector(".noty_body").innerHTML=t),e&&(this.options.text=t),this}},{key:"setType",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.barDom){c.classList(this.barDom).split(" ").forEach(function(t){"noty_type__"===t.substring(0,11)&&c.removeClass(e.barDom,t)}),c.addClass(this.barDom,"noty_type__"+t)}return n&&(this.options.type=t),this}},{key:"setTheme",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.barDom){c.classList(this.barDom).split(" ").forEach(function(t){"noty_theme__"===t.substring(0,12)&&c.removeClass(e.barDom,t)}),c.addClass(this.barDom,"noty_theme__"+t)}return n&&(this.options.theme=t),this}},{key:"close",value:function(){var t=this;return this.closed?this:this.shown?(f.fire(this,"onClose"),this.closing=!0,null===this.options.animation.close?this.promises.close=new u.default(function(t){t()}):"function"==typeof this.options.animation.close?this.promises.close=new u.default(this.options.animation.close.bind(this)):(c.addClass(this.barDom,this.options.animation.close),this.promises.close=new u.default(function(e){c.addListener(t.barDom,c.animationEndEvents,function(){t.options.force?c.remove(t.barDom):f.ghostFix(t),e()})})),this.promises.close.then(function(){f.closeFlow(t),f.handleModalClose(t)}),this.closed=!0,this):(f.removeFromQueue(this),this)}}],[{key:"closeAll",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object.keys(f.Store).forEach(function(e){t?f.Store[e].options.queue===t&&f.Store[e].killable&&f.Store[e].close():f.Store[e].killable&&f.Store[e].close()}),this}},{key:"overrideDefaults",value:function(t){return f.Defaults=c.deepExtend({},f.Defaults,t),this}},{key:"setMaxVisible",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.DefaultMaxVisible,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"global";return f.Queues.hasOwnProperty(e)||(f.Queues[e]={maxVisible:t,queue:[]}),f.Queues[e].maxVisible=t,this}},{key:"button",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return new d.NotyButton(t,e,n,o)}},{key:"version",value:function(){return"3.1.0"}},{key:"Push",value:function(t){return new h.Push(t)}}]),t}();e.default=p,c.visibilityChangeFlow(),t.exports=e.default},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function r(t){if(f===clearTimeout)return clearTimeout(t);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function s(){v&&h&&(v=!1,h.length?p=h.concat(p):m=-1,p.length&&u())}function u(){if(!v){var t=i(s);v=!0;for(var e=p.length;e;){for(h=p,p=[];++m<e;)h&&h[m].run();m=-1,e=p.length}h=null,v=!1,r(t)}}function a(t,e){this.fun=t,this.array=e}function c(){}var l,f,d=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(t){f=o}}();var h,p=[],v=!1,m=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];p.push(new a(t,e)),1!==p.length||v||i(u)},a.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){}])})},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(9),r=o(i),s=n(11),u=o(s);n(10);var a={layout:"topRight",theme:"mint",timeout:5e3,progressBar:!0,closeWith:["click"]},c={options:{},setOptions:function(t){return this.options=(0,r.default)({},a,t),this},show:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"alert",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=(0,r.default)({},this.options,n,{type:e,text:t});return new u.default(o).show()},success:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.show(t,"success",e)},error:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.show(t,"error",e)},warning:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.show(t,"warning",e)},info:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.show(t,"info",e)}};e.default={install:function(t,e){var n=c.setOptions(e);t.prototype.$noty=n,t.noty=n}}},function(t,e,n){n(39),t.exports=n(4).Object.assign},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var o=n(3);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var o=n(8),i=n(35),r=n(34);t.exports=function(t){return function(e,n,s){var u,a=o(e),c=i(a.length),l=r(s,c);if(t&&n!=n){for(;c>l;)if((u=a[l++])!=u)return!0}else for(;c>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var o=n(14);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,i){return t.call(e,n,o,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var o=n(3),i=n(2).document,r=o(i)&&o(i.createElement);t.exports=function(t){return r?i.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var o=n(2),i=n(4),r=n(18),s=n(23),u=function(t,e,n){var a,c,l,f=t&u.F,d=t&u.G,h=t&u.S,p=t&u.P,v=t&u.B,m=t&u.W,y=d?i:i[e]||(i[e]={}),b=y.prototype,w=d?o:h?o[e]:(o[e]||{}).prototype;d&&(n=e);for(a in n)(c=!f&&w&&void 0!==w[a])&&a in y||(l=c?w[a]:n[a],y[a]=d&&"function"!=typeof w[a]?n[a]:v&&c?r(l,o):m&&w[a]==l?function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):p&&"function"==typeof l?r(Function.call,l):l,p&&((y.virtual||(y.virtual={}))[a]=l,t&u.R&&b&&!b[a]&&s(b,a,l)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var o=n(26),i=n(31);t.exports=n(0)?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(0)&&!n(1)(function(){return 7!=Object.defineProperty(n(19)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var o=n(29),i=n(27),r=n(30),s=n(36),u=n(6),a=Object.assign;t.exports=!a||n(1)(function(){var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach(function(t){e[t]=t}),7!=a({},t)[n]||Object.keys(a({},e)).join("")!=o})?function(t,e){for(var n=s(t),a=arguments.length,c=1,l=i.f,f=r.f;a>c;)for(var d,h=u(arguments[c++]),p=l?o(h).concat(l(h)):o(h),v=p.length,m=0;v>m;)f.call(h,d=p[m++])&&(n[d]=h[d]);return n}:a},function(t,e,n){var o=n(15),i=n(24),r=n(37),s=Object.defineProperty;e.f=n(0)?Object.defineProperty:function(t,e,n){if(o(t),e=r(e,!0),o(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var o=n(22),i=n(8),r=n(16)(!1),s=n(32)("IE_PROTO");t.exports=function(t,e){var n,u=i(t),a=0,c=[];for(n in u)n!=s&&o(u,n)&&c.push(n);for(;e.length>a;)o(u,n=e[a++])&&(~r(c,n)||c.push(n));return c}},function(t,e,n){var o=n(28),i=n(20);t.exports=Object.keys||function(t){return o(t,i)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var o=n(33)("keys"),i=n(38);t.exports=function(t){return o[t]||(o[t]=i(t))}},function(t,e,n){var o=n(2),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e,n){var o=n(7),i=Math.max,r=Math.min;t.exports=function(t,e){return t=o(t),t<0?i(t+e,0):r(t,e)}},function(t,e,n){var o=n(7),i=Math.min;t.exports=function(t){return t>0?i(o(t),9007199254740991):0}},function(t,e,n){var o=n(5);t.exports=function(t){return Object(o(t))}},function(t,e,n){var o=n(3);t.exports=function(t,e){if(!o(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!o(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!o(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!o(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e,n){var o=n(21);o(o.S+o.F,"Object",{assign:n(25)})}])});

/***/ }),

/***/ "./node_modules/vuex/dist/vuex.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Store */
/* unused harmony export install */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return mapState; });
/* unused harmony export mapMutations */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mapActions; });
/* unused harmony export createNamespacedHelpers */
/**
 * vuex v3.1.0
 * (c) 2019 Evan You
 * @license MIT
 */
function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if (true) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    "development" !== 'production' &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if (true) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return result.then(function (res) {
    try {
      this$1._actionSubscribers
        .filter(function (sub) { return sub.after; })
        .forEach(function (sub) { return sub.after(action, this$1.state); });
    } catch (e) {
      if (true) {
        console.warn("[vuex] error in after action subscribers: ");
        console.error(e);
      }
    }
    return res
  })
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ("development" !== 'production' && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ("development" !== 'production' && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (true) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ("development" !== 'production' && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ("development" !== 'production' && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.1.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};

/* harmony default export */ __webpack_exports__["a"] = (index_esm);



/***/ }),

/***/ "./resources/assets/js/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuejs_noty__ = __webpack_require__("./node_modules/vuejs-noty/dist/vuejs-noty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuejs_noty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuejs_noty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__("./resources/assets/js/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_index__ = __webpack_require__("./resources/assets/js/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_App_vue__ = __webpack_require__("./resources/assets/js/components/App.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_jwt_token__ = __webpack_require__("./resources/assets/js/helpers/jwt-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vee_validate__ = __webpack_require__("./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vee_validate_dist_locale_es_js__ = __webpack_require__("./node_modules/vee-validate/dist/locale/es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vee_validate_dist_locale_es_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_vee_validate_dist_locale_es_js__);
//import $ from 'jquery';












//window.$ = window.jQuery = require('jquery');
window.axios = __WEBPACK_IMPORTED_MODULE_2_axios___default.a;
//require('bootstrap');

//require('materialize-css');


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuejs_noty___default.a, {
	progressBar: false,
	layout: 'bottomRight',
	theme: 'relax',
	timeout: 3000
});

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_7_vee_validate__["default"], {
	locale: 'es',
	dictionary: {
		es: __WEBPACK_IMPORTED_MODULE_8_vee_validate_dist_locale_es_js___default.a
	}
});

__WEBPACK_IMPORTED_MODULE_2_axios___default.a.interceptors.request.use(function (config) {
	config.headers['X-CSRF-TOKEN'] = window.Laravel.csrfToken;
	config.headers['X-Requested-With'] = 'XMLHttpRequest';

	if (__WEBPACK_IMPORTED_MODULE_6__helpers_jwt_token__["a" /* default */].getToken()) {
		config.headers['Authorization'] = 'Bearer ' + __WEBPACK_IMPORTED_MODULE_6__helpers_jwt_token__["a" /* default */].getToken();
	}

	return config;
}, function (error) {
	return Promise.reject(error);
});

__WEBPACK_IMPORTED_MODULE_2_axios___default.a.interceptors.response.use(function (response) {
	return response;
}, function (error) {
	var errorResponseData = error.response.data;

	var errors = ["token_invalid", "token_expired", "token_not_provided"];

	if (errorResponseData.error && errors.includes(errorResponseData.error)) {

		__WEBPACK_IMPORTED_MODULE_4__store_index__["a" /* default */].dispatch('unsetAuthUser').then(function () {
			__WEBPACK_IMPORTED_MODULE_6__helpers_jwt_token__["a" /* default */].removeToken();
			__WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */].push({ name: 'login' });
		});
	}

	return Promise.reject(error);
});

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('app', __WEBPACK_IMPORTED_MODULE_5__components_App_vue___default.a);

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
	router: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */],
	store: __WEBPACK_IMPORTED_MODULE_4__store_index__["a" /* default */]
}).$mount('#app');

/***/ }),

/***/ "./resources/assets/js/components/App.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/App.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8142f38c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/App.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8142f38c", Component.options)
  } else {
    hotAPI.reload("data-v-8142f38c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/control/Control.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/control/Control.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-13c0f844\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/control/Control.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/control/Control.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-13c0f844", Component.options)
  } else {
    hotAPI.reload("data-v-13c0f844", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/control/ControlBoard.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/control/ControlBoard.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-bbc3779c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/control/ControlBoard.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/control/ControlBoard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bbc3779c", Component.options)
  } else {
    hotAPI.reload("data-v-bbc3779c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/control/ControlFeeding.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/control/ControlFeeding.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-73d59ed0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/control/ControlFeeding.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/control/ControlFeeding.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73d59ed0", Component.options)
  } else {
    hotAPI.reload("data-v-73d59ed0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/control/ControlHemogram.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/control/ControlHemogram.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-146e679a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/control/ControlHemogram.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/control/ControlHemogram.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-146e679a", Component.options)
  } else {
    hotAPI.reload("data-v-146e679a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/control/ControlPhotos.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/control/ControlPhotos.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1e5d4365\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/control/ControlPhotos.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/control/ControlPhotos.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e5d4365", Component.options)
  } else {
    hotAPI.reload("data-v-1e5d4365", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/control/ControlRoutines.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/control/ControlRoutines.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-857e2dda\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/control/ControlRoutines.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/control/ControlRoutines.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-857e2dda", Component.options)
  } else {
    hotAPI.reload("data-v-857e2dda", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/control/ControlWrapper.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/control/ControlWrapper.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-a070c342\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/control/ControlWrapper.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/control/ControlWrapper.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a070c342", Component.options)
  } else {
    hotAPI.reload("data-v-a070c342", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/control/UploadPhoto.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/control/UploadPhoto.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ec38bbd0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/control/UploadPhoto.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/control/UploadPhoto.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ec38bbd0", Component.options)
  } else {
    hotAPI.reload("data-v-ec38bbd0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/diagnostic/Diagnostic.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/diagnostic/Diagnostic.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-05ae0628\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/diagnostic/Diagnostic.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/diagnostic/Diagnostic.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-05ae0628", Component.options)
  } else {
    hotAPI.reload("data-v-05ae0628", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/diagnostic/InitialPhotos.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/diagnostic/InitialPhotos.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6ce538f4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/diagnostic/InitialPhotos.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/diagnostic/InitialPhotos.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ce538f4", Component.options)
  } else {
    hotAPI.reload("data-v-6ce538f4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/feeding/Feeding.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/feeding/Feeding.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-63d6eadc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/feeding/Feeding.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/feeding/Feeding.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-63d6eadc", Component.options)
  } else {
    hotAPI.reload("data-v-63d6eadc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/feeding/FeedingForbidden.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/feeding/FeedingForbidden.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-06bf4992\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/feeding/FeedingForbidden.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/feeding/FeedingForbidden.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-06bf4992", Component.options)
  } else {
    hotAPI.reload("data-v-06bf4992", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/feeding/FeedingGuide.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/feeding/FeedingGuide.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1f6d788c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/feeding/FeedingGuide.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/feeding/FeedingGuide.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f6d788c", Component.options)
  } else {
    hotAPI.reload("data-v-1f6d788c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/feeding/FeedingIndications.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/feeding/FeedingIndications.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-507d6556\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/feeding/FeedingIndications.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/feeding/FeedingIndications.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-507d6556", Component.options)
  } else {
    hotAPI.reload("data-v-507d6556", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/feeding/FeedingPortions.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/feeding/FeedingPortions.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-00be881e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/feeding/FeedingPortions.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/feeding/FeedingPortions.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-00be881e", Component.options)
  } else {
    hotAPI.reload("data-v-00be881e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/feeding/FeedingSingle.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/feeding/FeedingSingle.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4e0c237a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/feeding/FeedingSingle.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/feeding/FeedingSingle.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e0c237a", Component.options)
  } else {
    hotAPI.reload("data-v-4e0c237a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/feeding/FeedingWrapper.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/feeding/FeedingWrapper.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-54477851\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/feeding/FeedingWrapper.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/feeding/FeedingWrapper.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54477851", Component.options)
  } else {
    hotAPI.reload("data-v-54477851", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/home/Home.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/home/Home.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3a7dd8a8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/home/Home.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/home/Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a7dd8a8", Component.options)
  } else {
    hotAPI.reload("data-v-3a7dd8a8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/loading/Loading.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/loading/Loading.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7b71dbfc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/loading/Loading.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/loading/Loading.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b71dbfc", Component.options)
  } else {
    hotAPI.reload("data-v-7b71dbfc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/login/Login.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ba0d9948\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/login/Login.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/login/Login.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ba0d9948\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/login/Login.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/login/Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ba0d9948", Component.options)
  } else {
    hotAPI.reload("data-v-ba0d9948", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/login/LoginForm.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/login/LoginForm.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-cf1cbf80\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/login/LoginForm.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/login/LoginForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cf1cbf80", Component.options)
  } else {
    hotAPI.reload("data-v-cf1cbf80", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/objectives/Objectives.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/objectives/Objectives.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-92d14f70\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/objectives/Objectives.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/objectives/Objectives.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-92d14f70", Component.options)
  } else {
    hotAPI.reload("data-v-92d14f70", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/plans/Plans.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/plans/Plans.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7cfad8c4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/plans/Plans.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/plans/Plans.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7cfad8c4", Component.options)
  } else {
    hotAPI.reload("data-v-7cfad8c4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/profile/Profile.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/profile/Profile.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2a87ae48\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/profile/Profile.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/profile/Profile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a87ae48", Component.options)
  } else {
    hotAPI.reload("data-v-2a87ae48", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/profile/ProfileWrapper.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/profile/ProfileWrapper.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-02edda72\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/profile/ProfileWrapper.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/profile/ProfileWrapper.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-02edda72", Component.options)
  } else {
    hotAPI.reload("data-v-02edda72", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/profile/edit-password/EditPassword.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/profile/edit-password/EditPassword.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1fb7d8d3\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/profile/edit-password/EditPassword.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/profile/edit-password/EditPassword.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1fb7d8d3", Component.options)
  } else {
    hotAPI.reload("data-v-1fb7d8d3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/profile/edit-password/EditPasswordForm.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/profile/edit-password/EditPasswordForm.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-bc3a9b92\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/profile/edit-password/EditPasswordForm.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/profile/edit-password/EditPasswordForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bc3a9b92", Component.options)
  } else {
    hotAPI.reload("data-v-bc3a9b92", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/profile/edit-profile/EditProfile.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/profile/edit-profile/EditProfile.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8933779a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/profile/edit-profile/EditProfile.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/profile/edit-profile/EditProfile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8933779a", Component.options)
  } else {
    hotAPI.reload("data-v-8933779a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/register/FreeRegister.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/register/FreeRegister.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-60586634\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/register/FreeRegister.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/register/FreeRegister.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60586634", Component.options)
  } else {
    hotAPI.reload("data-v-60586634", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/routines/QualifyRoutine.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/routines/QualifyRoutine.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7155ed20\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/routines/QualifyRoutine.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/routines/QualifyRoutine.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7155ed20", Component.options)
  } else {
    hotAPI.reload("data-v-7155ed20", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/routines/Routine.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-33ecfa4a\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/routines/Routine.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/routines/Routine.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-33ecfa4a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/routines/Routine.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/routines/Routine.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-33ecfa4a", Component.options)
  } else {
    hotAPI.reload("data-v-33ecfa4a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/routines/Routines.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/routines/Routines.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-425b0cb0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/routines/Routines.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/routines/Routines.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-425b0cb0", Component.options)
  } else {
    hotAPI.reload("data-v-425b0cb0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/shared/AppFooter.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/shared/AppFooter.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-29175a2e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/shared/AppFooter.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/shared/AppFooter.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-29175a2e", Component.options)
  } else {
    hotAPI.reload("data-v-29175a2e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/shared/TopMenu.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/shared/TopMenu.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2d54cd3e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/shared/TopMenu.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/shared/TopMenu.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d54cd3e", Component.options)
  } else {
    hotAPI.reload("data-v-2d54cd3e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/welcome/Welcome.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/welcome/Welcome.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2b0a0b64\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/welcome/Welcome.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/welcome/Welcome.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b0a0b64", Component.options)
  } else {
    hotAPI.reload("data-v-2b0a0b64", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return siteName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return api; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// const apiDomain = Laravel.apiDomain;
var apiDomain = '/api';
var siteName = Laravel.siteName;

var api = _defineProperty({
	login: apiDomain + '/authenticate',
	currentUser: apiDomain + '/user',
	updateUserProfile: apiDomain + '/user/profile/update',
	updateUserPassword: apiDomain + '/user/password/update',

	freeRegister: apiDomain + '/user/free-register',
	test: apiDomain + '/test',
	getRoutines: apiDomain + '/get-routines',
	qualifyRoutine: apiDomain + '/qualify-routine',
	getUserScores: apiDomain + '/get-user-scores',
	getFoods: apiDomain + '/get-foods',
	getFoodsByDate: apiDomain + '/get-foods-by-date',
	getUserIndications: apiDomain + '/get-user-indications',
	setFoodUser: apiDomain + '/set-food-user',
	setFoodUserByDate: apiDomain + '/set-food-user-by-date',
	postUrlUserPlan: apiDomain + '/url-user-plan',
	setDiagnostic: apiDomain + '/set-diagnostic',
	setObjectives: apiDomain + '/set-objectives',
	getPhotos: apiDomain + '/get-photos',
	getControls: apiDomain + '/get-controls',
	setControls: apiDomain + '/set-controls'
}, 'updateUserProfile', apiDomain + '/update-profile');

/***/ }),

/***/ "./resources/assets/js/event-bus.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
// event-bus.js

var EventBus = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a();
/* harmony default export */ __webpack_exports__["a"] = (EventBus);

/***/ }),

/***/ "./resources/assets/js/helpers/jwt-token.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	setToken: function setToken(token) {
		window.localStorage.setItem('jwt_token', token);
	},
	getToken: function getToken() {
		return window.localStorage.getItem('jwt_token');
	},
	removeToken: function removeToken() {
		window.localStorage.removeItem('jwt_token');
	}
});

/***/ }),

/***/ "./resources/assets/js/router.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router__ = __webpack_require__("./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_jwt_token__ = __webpack_require__("./resources/assets/js/helpers/jwt-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_index__ = __webpack_require__("./resources/assets/js/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__("./resources/assets/js/routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__("./resources/assets/js/config.js");


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





__WEBPACK_IMPORTED_MODULE_1_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]);






var router = new __WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]({
	mode: 'history',
	routes: __WEBPACK_IMPORTED_MODULE_5__routes__["a" /* default */],
	scrollBehavior: function scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 };
	}
});
router.beforeEach(function (to, from, next) {
	window.scrollTo(0, 0);
	next();
});

router.beforeEach(function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(to, from, next) {
		var _ref2, authUser;

		return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						if (!(__WEBPACK_IMPORTED_MODULE_3__helpers_jwt_token__["a" /* default */].getToken() && !__WEBPACK_IMPORTED_MODULE_4__store_index__["a" /* default */].getters.isLoggedIn)) {
							_context.next = 7;
							break;
						}

						_context.next = 3;
						return axios.get(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* api */].currentUser);

					case 3:
						_ref2 = _context.sent;
						authUser = _ref2.data;
						_context.next = 7;
						return __WEBPACK_IMPORTED_MODULE_4__store_index__["a" /* default */].dispatch('setAuthUser', authUser);

					case 7:
						if (!to.meta.requiresAuthInit) {
							_context.next = 13;
							break;
						}

						if (!(__WEBPACK_IMPORTED_MODULE_4__store_index__["a" /* default */].getters.isLoggedIn || __WEBPACK_IMPORTED_MODULE_3__helpers_jwt_token__["a" /* default */].getToken())) {
							_context.next = 12;
							break;
						}

						return _context.abrupt('return', next());

					case 12:
						return _context.abrupt('return', next({ name: 'welcome' }));

					case 13:
						if (!to.meta.requiresAuth) {
							_context.next = 19;
							break;
						}

						if (!(__WEBPACK_IMPORTED_MODULE_4__store_index__["a" /* default */].getters.isLoggedIn || __WEBPACK_IMPORTED_MODULE_3__helpers_jwt_token__["a" /* default */].getToken())) {
							_context.next = 18;
							break;
						}

						return _context.abrupt('return', next());

					case 18:
						return _context.abrupt('return', next({ name: 'login' }));

					case 19:
						if (!to.meta.requiresGuest) {
							_context.next = 25;
							break;
						}

						if (!(__WEBPACK_IMPORTED_MODULE_4__store_index__["a" /* default */].getters.isLoggedIn || __WEBPACK_IMPORTED_MODULE_3__helpers_jwt_token__["a" /* default */].getToken())) {
							_context.next = 24;
							break;
						}

						return _context.abrupt('return', next({ name: 'index' }));

					case 24:
						return _context.abrupt('return', next());

					case 25:
						next();

					case 26:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, _this);
	}));

	return function (_x, _x2, _x3) {
		return _ref.apply(this, arguments);
	};
}());

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),

/***/ "./resources/assets/js/routes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_home_Home_vue__ = __webpack_require__("./resources/assets/js/components/home/Home.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_home_Home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_home_Home_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_Login_vue__ = __webpack_require__("./resources/assets/js/components/login/Login.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_Login_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_login_Login_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_profile_ProfileWrapper_vue__ = __webpack_require__("./resources/assets/js/components/profile/ProfileWrapper.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_profile_ProfileWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_profile_ProfileWrapper_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_profile_Profile_vue__ = __webpack_require__("./resources/assets/js/components/profile/Profile.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_profile_Profile_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_profile_Profile_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_profile_edit_profile_EditProfile_vue__ = __webpack_require__("./resources/assets/js/components/profile/edit-profile/EditProfile.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_profile_edit_profile_EditProfile_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_profile_edit_profile_EditProfile_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_profile_edit_password_EditPassword_vue__ = __webpack_require__("./resources/assets/js/components/profile/edit-password/EditPassword.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_profile_edit_password_EditPassword_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_profile_edit_password_EditPassword_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_register_FreeRegister_vue__ = __webpack_require__("./resources/assets/js/components/register/FreeRegister.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_register_FreeRegister_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_register_FreeRegister_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_welcome_Welcome_vue__ = __webpack_require__("./resources/assets/js/components/welcome/Welcome.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_welcome_Welcome_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_welcome_Welcome_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_plans_Plans_vue__ = __webpack_require__("./resources/assets/js/components/plans/Plans.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_plans_Plans_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_plans_Plans_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_routines_Routines_vue__ = __webpack_require__("./resources/assets/js/components/routines/Routines.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_routines_Routines_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_routines_Routines_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_routines_Routine_vue__ = __webpack_require__("./resources/assets/js/components/routines/Routine.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_routines_Routine_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__components_routines_Routine_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_routines_QualifyRoutine_vue__ = __webpack_require__("./resources/assets/js/components/routines/QualifyRoutine.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_routines_QualifyRoutine_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__components_routines_QualifyRoutine_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_feeding_Feeding_vue__ = __webpack_require__("./resources/assets/js/components/feeding/Feeding.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_feeding_Feeding_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__components_feeding_Feeding_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_feeding_FeedingGuide_vue__ = __webpack_require__("./resources/assets/js/components/feeding/FeedingGuide.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_feeding_FeedingGuide_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__components_feeding_FeedingGuide_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_feeding_FeedingWrapper_vue__ = __webpack_require__("./resources/assets/js/components/feeding/FeedingWrapper.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_feeding_FeedingWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__components_feeding_FeedingWrapper_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_feeding_FeedingSingle_vue__ = __webpack_require__("./resources/assets/js/components/feeding/FeedingSingle.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_feeding_FeedingSingle_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__components_feeding_FeedingSingle_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_feeding_FeedingIndications_vue__ = __webpack_require__("./resources/assets/js/components/feeding/FeedingIndications.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_feeding_FeedingIndications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__components_feeding_FeedingIndications_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_feeding_FeedingForbidden_vue__ = __webpack_require__("./resources/assets/js/components/feeding/FeedingForbidden.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_feeding_FeedingForbidden_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__components_feeding_FeedingForbidden_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_feeding_FeedingPortions_vue__ = __webpack_require__("./resources/assets/js/components/feeding/FeedingPortions.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_feeding_FeedingPortions_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__components_feeding_FeedingPortions_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_control_ControlWrapper_vue__ = __webpack_require__("./resources/assets/js/components/control/ControlWrapper.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_control_ControlWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__components_control_ControlWrapper_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_control_Control_vue__ = __webpack_require__("./resources/assets/js/components/control/Control.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_control_Control_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__components_control_Control_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_control_ControlFeeding_vue__ = __webpack_require__("./resources/assets/js/components/control/ControlFeeding.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_control_ControlFeeding_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__components_control_ControlFeeding_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_control_ControlRoutines_vue__ = __webpack_require__("./resources/assets/js/components/control/ControlRoutines.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_control_ControlRoutines_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__components_control_ControlRoutines_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_control_ControlBoard_vue__ = __webpack_require__("./resources/assets/js/components/control/ControlBoard.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_control_ControlBoard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__components_control_ControlBoard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_control_ControlPhotos_vue__ = __webpack_require__("./resources/assets/js/components/control/ControlPhotos.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_control_ControlPhotos_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24__components_control_ControlPhotos_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_control_ControlHemogram_vue__ = __webpack_require__("./resources/assets/js/components/control/ControlHemogram.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_control_ControlHemogram_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25__components_control_ControlHemogram_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_control_UploadPhoto_vue__ = __webpack_require__("./resources/assets/js/components/control/UploadPhoto.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_control_UploadPhoto_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26__components_control_UploadPhoto_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_diagnostic_Diagnostic_vue__ = __webpack_require__("./resources/assets/js/components/diagnostic/Diagnostic.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_diagnostic_Diagnostic_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27__components_diagnostic_Diagnostic_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_objectives_Objectives_vue__ = __webpack_require__("./resources/assets/js/components/objectives/Objectives.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_objectives_Objectives_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28__components_objectives_Objectives_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_diagnostic_InitialPhotos_vue__ = __webpack_require__("./resources/assets/js/components/diagnostic/InitialPhotos.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_diagnostic_InitialPhotos_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29__components_diagnostic_InitialPhotos_vue__);































/* harmony default export */ __webpack_exports__["a"] = ([{
	path: '/',
	name: 'index',
	component: __WEBPACK_IMPORTED_MODULE_0__components_home_Home_vue___default.a,
	meta: { requiresAuthInit: true }
}, {
	path: '/bienvenido',
	name: 'welcome',
	component: __WEBPACK_IMPORTED_MODULE_7__components_welcome_Welcome_vue___default.a,
	meta: { requiresGuest: true }
},
/* LOGIN y REGISTRO*/
{
	path: '/app-login',
	name: 'login',
	component: __WEBPACK_IMPORTED_MODULE_1__components_login_Login_vue___default.a,
	meta: { requiresGuest: true }
}, {
	path: '/registro-gratuito',
	name: 'freeRegister',
	component: __WEBPACK_IMPORTED_MODULE_6__components_register_FreeRegister_vue___default.a,
	meta: { requiresGuest: true }
}, {
	path: '/planes',
	name: 'plans',
	component: __WEBPACK_IMPORTED_MODULE_8__components_plans_Plans_vue___default.a,
	meta: { requiresAuth: true }
},
/* RUTINAS*/
{
	path: '/rutinas',
	name: 'routines',
	component: __WEBPACK_IMPORTED_MODULE_9__components_routines_Routines_vue___default.a,
	meta: { requiresAuth: true }
}, {
	path: '/rutina',
	name: 'routine',
	component: __WEBPACK_IMPORTED_MODULE_10__components_routines_Routine_vue___default.a,
	meta: { requiresAuth: true }
}, {
	path: '/calificar-rutina',
	name: 'qualifyRoutine',
	component: __WEBPACK_IMPORTED_MODULE_11__components_routines_QualifyRoutine_vue___default.a,
	meta: { requiresAuth: true }
}, {
	path: '/diagnostico-inicial',
	name: 'diagnostic',
	component: __WEBPACK_IMPORTED_MODULE_27__components_diagnostic_Diagnostic_vue___default.a,
	meta: { requiresAuth: true }
}, {
	path: '/seleccionar-objetivos',
	name: 'objectives',
	component: __WEBPACK_IMPORTED_MODULE_28__components_objectives_Objectives_vue___default.a,
	meta: { requiresAuth: true }
}, {
	path: '/ingresar-fotos',
	name: 'initialPhotos',
	component: __WEBPACK_IMPORTED_MODULE_29__components_diagnostic_InitialPhotos_vue___default.a,
	meta: { requiresAuth: true }
},
/* ALIMENTACIÓN*/
{
	path: '/alimentacion',
	//name: 'feeding',
	component: __WEBPACK_IMPORTED_MODULE_14__components_feeding_FeedingWrapper_vue___default.a,
	//meta: {requiresAuth: true},
	children: [{
		path: '',
		name: 'feeding',
		component: __WEBPACK_IMPORTED_MODULE_12__components_feeding_Feeding_vue___default.a,
		meta: { requiresAuth: true },
		header: {}
	}, {
		path: 'guia-alimentacion',
		name: 'feedingGuide',
		component: __WEBPACK_IMPORTED_MODULE_13__components_feeding_FeedingGuide_vue___default.a,
		meta: { requiresAuth: true }
	}, {
		path: 'elegir',
		name: 'feedingSingle',
		component: __WEBPACK_IMPORTED_MODULE_15__components_feeding_FeedingSingle_vue___default.a,
		meta: { requiresAuth: true }
	}, {
		path: 'indicaciones',
		name: 'feedingIndications',
		component: __WEBPACK_IMPORTED_MODULE_16__components_feeding_FeedingIndications_vue___default.a,
		meta: { requiresAuth: true }
	}, {
		path: 'prohibidos',
		name: 'feedingForbidden',
		component: __WEBPACK_IMPORTED_MODULE_17__components_feeding_FeedingForbidden_vue___default.a,
		meta: { requiresAuth: true }
	}, {
		path: 'porciones',
		name: 'feedingPortions',
		component: __WEBPACK_IMPORTED_MODULE_18__components_feeding_FeedingPortions_vue___default.a,
		meta: { requiresAuth: true }
	}, {
		path: '*',
		redirect: {
			name: 'feeding'
		}
	}]
},
/* CONTROL*/
{
	path: '/control',
	//name: 'feeding',
	component: __WEBPACK_IMPORTED_MODULE_19__components_control_ControlWrapper_vue___default.a,
	//meta: {requiresAuth: true},
	children: [{
		path: '',
		name: 'control',
		component: __WEBPACK_IMPORTED_MODULE_20__components_control_Control_vue___default.a,
		meta: { requiresAuth: true }
	}, {
		path: 'comidas',
		name: 'controlFeeding',
		component: __WEBPACK_IMPORTED_MODULE_21__components_control_ControlFeeding_vue___default.a,
		meta: { requiresAuth: true }
	}, {
		path: 'rutinas',
		name: 'controlRoutines',
		component: __WEBPACK_IMPORTED_MODULE_22__components_control_ControlRoutines_vue___default.a,
		meta: { requiresAuth: true }
	}, {
		path: 'tablero-evolucion',
		name: 'controlBoard',
		component: __WEBPACK_IMPORTED_MODULE_23__components_control_ControlBoard_vue___default.a,
		meta: { requiresAuth: true }
	}, {
		path: 'fotos',
		name: 'controlPhotos',
		component: __WEBPACK_IMPORTED_MODULE_24__components_control_ControlPhotos_vue___default.a,
		meta: { requiresAuth: true }
	}, {
		path: 'hemograma',
		name: 'controlHemogram',
		component: __WEBPACK_IMPORTED_MODULE_25__components_control_ControlHemogram_vue___default.a,
		meta: { requiresAuth: true }
	}, {
		path: 'subir-foto',
		name: 'uploadPhoto',
		component: __WEBPACK_IMPORTED_MODULE_26__components_control_UploadPhoto_vue___default.a,
		meta: { requiresAuth: true }
	}, {
		path: '*',
		redirect: {
			name: 'control'
		}
	}]
}, {
	path: '/perfil',
	component: __WEBPACK_IMPORTED_MODULE_2__components_profile_ProfileWrapper_vue___default.a,
	children: [{
		path: '',
		name: 'profile',
		component: __WEBPACK_IMPORTED_MODULE_3__components_profile_Profile_vue___default.a,
		meta: { requiresAuth: true }
	}, {
		path: 'editar',
		name: 'profile.editProfile',
		component: __WEBPACK_IMPORTED_MODULE_4__components_profile_edit_profile_EditProfile_vue___default.a,
		meta: { requiresAuth: true }
	}, {
		path: 'editar-password',
		name: 'profile.editPassword',
		component: __WEBPACK_IMPORTED_MODULE_5__components_profile_edit_password_EditPassword_vue___default.a,
		meta: { requiresAuth: true }
	}, {
		path: '*',
		redirect: {
			name: 'profile'
		}
	}]
}]);

/***/ }),

/***/ "./resources/assets/js/store/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_auth__ = __webpack_require__("./resources/assets/js/store/modules/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_currentRoutine__ = __webpack_require__("./resources/assets/js/store/modules/currentRoutine.js");





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
	modules: {
		auth: __WEBPACK_IMPORTED_MODULE_2__modules_auth__["a" /* default */],
		currentRoutine: __WEBPACK_IMPORTED_MODULE_3__modules_currentRoutine__["a" /* default */]
	},
	strict: true
}));

/***/ }),

/***/ "./resources/assets/js/store/modules/auth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SET_USER */
/* unused harmony export UNSET_USER */
var _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
|--------------------------------------------------------------------------
| Mutation Types
|--------------------------------------------------------------------------
*/
var SET_USER = 'SET_USER';
var UNSET_USER = 'UNSET_USER';

/*
|--------------------------------------------------------------------------
| Initial State
|--------------------------------------------------------------------------
*/
var initialState = {
	id: null,
	email: null,
	level: 0,
	past_months: 0,
	diet_type: null,
	profile: null,
	subscription: null
};

/*
|--------------------------------------------------------------------------
| Mutations
|--------------------------------------------------------------------------
*/
var mutations = (_mutations = {}, _defineProperty(_mutations, SET_USER, function (state, payload) {
	state.id = payload.user.id;
	state.email = payload.user.email;
	state.level = payload.user.level;
	state.past_months = payload.user.past_months;
	state.diet_type = payload.user.diet_type;
	state.profile = payload.user.profile;
	state.status = payload.user.status;
	state.subscription = payload.user.subscription;
}), _defineProperty(_mutations, UNSET_USER, function (state, payload) {
	state.id = null;
	state.email = null;
	state.level = 0;
	state.past_months = 0;
	state.diet_type = null;
	state.profile = null;
	state.status = null;
	state.subscription = null;
}), _mutations);

/*
|--------------------------------------------------------------------------
| Actions
|--------------------------------------------------------------------------
*/
var actions = {
	setAuthUser: function setAuthUser(context, user) {
		context.commit(SET_USER, { user: user });
	},
	unsetAuthUser: function unsetAuthUser(context) {
		context.commit(UNSET_USER);
	}
};

/*
|--------------------------------------------------------------------------
| Getters
|--------------------------------------------------------------------------
*/
var getters = {
	isLoggedIn: function isLoggedIn(state) {
		return !!(state.id && state.email);
	}
};

/*
|--------------------------------------------------------------------------
| Export the module
|--------------------------------------------------------------------------
*/
/* harmony default export */ __webpack_exports__["a"] = ({
	state: initialState,
	mutations: mutations,
	actions: actions,
	getters: getters
});

/***/ }),

/***/ "./resources/assets/js/store/modules/currentRoutine.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SET_CURRENT_ROUTINE */
/* unused harmony export UNSET_CURRENT_ROUTINE */
var _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
|--------------------------------------------------------------------------
| Mutation Types
|--------------------------------------------------------------------------
*/
var SET_CURRENT_ROUTINE = 'SET_CURRENT_ROUTINE';
var UNSET_CURRENT_ROUTINE = 'UNSET_CURRENT_ROUTINE';

/*
|--------------------------------------------------------------------------
| Initial State
|--------------------------------------------------------------------------
*/
var initialState = {
	id: null,
	name: null,
	video: null
};

/*
|--------------------------------------------------------------------------
| Mutations
|--------------------------------------------------------------------------
*/
var mutations = (_mutations = {}, _defineProperty(_mutations, SET_CURRENT_ROUTINE, function (state, payload) {
	state.id = payload.routine.id;
	state.name = payload.routine.name;
	state.video = payload.routine.video;
}), _defineProperty(_mutations, UNSET_CURRENT_ROUTINE, function (state, payload) {
	state.id = null;
	state.name = null;
	state.video = null;
}), _mutations);

/*
|--------------------------------------------------------------------------
| Actions
|--------------------------------------------------------------------------
*/
var actions = {
	setCurrentRoutine: function setCurrentRoutine(context, routine) {
		context.commit(SET_CURRENT_ROUTINE, { routine: routine });
	},
	unsetCurrentRoutine: function unsetCurrentRoutine(context) {
		context.commit(UNSET_CURRENT_ROUTINE);
	}
};

/*
|--------------------------------------------------------------------------
| Getters
|--------------------------------------------------------------------------
*/
var getters = {};

/*
|--------------------------------------------------------------------------
| Export the module
|--------------------------------------------------------------------------
*/
/* harmony default export */ __webpack_exports__["a"] = ({
	state: initialState,
	mutations: mutations,
	actions: actions,
	getters: getters
});

/***/ }),

/***/ "./resources/assets/sass/admin.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/sass/app.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./resources/assets/js/app.js");
__webpack_require__("./resources/assets/sass/app.scss");
module.exports = __webpack_require__("./resources/assets/sass/admin.scss");


/***/ })

},[0]);