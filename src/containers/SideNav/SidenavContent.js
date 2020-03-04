import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import IntlMessages from 'util/IntlMessages';
import CustomScrollbars from 'util/CustomScrollbars';


class SidenavContent extends Component {
  componentDidMount() {
    const { history } = this.props;
    const that = this;
    const pathname = `${history.location.pathname}`;// get current path

    const menuLi = document.getElementsByClassName('menu');
    for (let i = 0; i < menuLi.length; i++) {
      menuLi[i].onclick = function (event) {

        const parentLiEle = that.closest(this, 'li');
        if (menuLi[i].classList.contains('menu') && parentLiEle !== null) {
          event.stopPropagation();

          if (menuLi[i].classList.contains('open')) {
            menuLi[i].classList.remove('open', 'active');
          } else {
            menuLi[i].classList.add('open', 'active');
          }
        } else {
          for (let j = 0; j < menuLi.length; j++) {
            const parentLi = that.closest(this, 'li');
            if (menuLi[j] !== this && (parentLi === null || !parentLi.classList.contains('open'))) {
              menuLi[j].classList.remove('open');
            } else {
              if (menuLi[j].classList.contains('open')) {
                menuLi[j].classList.remove('open');
              } else {
                menuLi[j].classList.add('open');
              }
            }
          }
        }
      }
    }

    const activeLi = document.querySelector('a[href="' + pathname + '"]');// select current a element
    try {
      const activeNav = this.closest(activeLi, 'ul'); // select closest ul
      if (activeNav.classList.contains('sub-menu')) {
        this.closest(activeNav, 'li').classList.add('open');
      } else {
        this.closest(activeLi, 'li').classList.add('open');
      }
    } catch (error) {

    }
  }

  componentWillReceiveProps(nextProps) {
    const { history } = nextProps;
    const pathname = `${history.location.pathname}`;// get current path

    const activeLi = document.querySelector('a[href="' + pathname + '"]');// select current a element
    try {
      const activeNav = this.closest(activeLi, 'ul'); // select closest ul
      if (activeNav.classList.contains('sub-menu')) {
        this.closest(activeNav, 'li').classList.add('open');
      } else {
        this.closest(activeLi, 'li').classList.add('open');
      }
    } catch (error) {

    }
  }

  closest(el, selector) {
    try {
      let matchesFn;
      // find vendor prefix
      ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
        if (typeof document.body[fn] === 'function') {
          matchesFn = fn;
          return true;
        }
        return false;
      });

      let parent;

      // traverse parents
      while (el) {
        parent = el.parentElement;
        if (parent && parent[matchesFn](selector)) {
          return parent;
        }
        el = parent;
      }
    } catch (e) {

    }

    return null;
  }

  render() {
    return (
      <CustomScrollbars className=" scrollbar">
        <ul className="nav-menu">
          {/* sidebar title */}
          <li className="nav-header">
            <IntlMessages id="sidebar.main" />
          </li>
          {/* default dashboard link */}
          <li className="ui_tooltip">
            <NavLink className="prepend-icon"
              to="/app/dashboard/synfin">
              <i className="zmdi zmdi-view-dashboard zmdi-hc-fw" />
              <span className="nav-text">
                <IntlMessages id="sidebar.dashboard" />
              </span>
            </NavLink>
          </li>
          {/* client Adminstration link */}
          <li className="menu">
            <Button>
              <i className="zmdi zmdi-home zmdi-hc-fw" />
              <span className="nav-text text-transform-none">
                <IntlMessages id="sidebar.clientAdmin" />
              </span>
            </Button>

            <ul className="sub-menu">
              <li>
              
                <NavLink className="prepend-icon"
                  to="/app/client-admin/create-bank">
                  <i className="zmdi zmdi-settings zmdi-hc-fw" />
                  <span className="nav-text"><IntlMessages
                    id="sidebar.clientAdmin.CreateBank" /></span>
                </NavLink>
              </li>
              <li>
              <NavLink className="prepend-icon"
                to="/app/client-admin/view-bank">
                <i className="zmdi zmdi-view-list-alt zmdi-hc-fw" />
                <span className="nav-text"><IntlMessages
                  id="sidebar.clientAdmin.ViewBank" /></span>
              </NavLink>
            </li>
            {/* ---------------Users menus start here-------------------- */}
            <li>
                <NavLink className="prepend-icon"
                  to="/app/client-admin/create-user">
                  <i className="zmdi zmdi-account-add zmdi-hc-fw" />
                  <span className="nav-text"><IntlMessages
                    id="sidebar.clientAdmin.CreateUser" /></span>
                </NavLink>
              </li>
              <li>
              <NavLink className="prepend-icon"
                to="/app/client-admin/view-user">
                <i className="zmdi zmdi-view-list-alt zmdi-hc-fw" />
                <span className="nav-text"><IntlMessages
                  id="sidebar.clientAdmin.ViewUser" /></span>
              </NavLink>
            </li>
             {/* ---------------Users menus end here-------------------- */}
            {/* ---------------Branches menus start here-------------------- */}
            <li>
                <NavLink className="prepend-icon"
                  to="/app/client-admin/add-branch">
                  <i className="zmdi zmdi-account-add zmdi-hc-fw" />
                  <span className="nav-text"><IntlMessages
                    id="sidebar.clientAdmin.CreateBranch" /></span>
                </NavLink>
              </li>
              <li>
              <NavLink className="prepend-icon"
                to="/app/client-admin/view-branch">
                <i className="zmdi zmdi-view-list-alt zmdi-hc-fw" />
                <span className="nav-text"><IntlMessages
                  id="sidebar.clientAdmin.ViewBranch" /></span>
              </NavLink>
            </li>
             {/* ---------------Branches menus end here-------------------- */}
              {/* ---------------Currencies menus start here-------------------- */}
            <li>
                <NavLink className="prepend-icon"
                  to="/app/client-admin/add-currency">
                  <i className="zmdi zmdi-money zmdi-hc-fw" />
                  <span className="nav-text"><IntlMessages
                    id="sidebar.clientAdmin.CreateCurrency" /></span>
                </NavLink>
              </li>
              <li>
              <NavLink className="prepend-icon"
                to="/app/client-admin/view-currency">
                <i className="zmdi zmdi-view-list-alt zmdi-hc-fw" />
                <span className="nav-text"><IntlMessages
                  id="sidebar.clientAdmin.ViewCurrency" /></span>
              </NavLink>
            </li>
             {/* ---------------Currencies menus end here-------------------- */}
            </ul>
          </li>
          {/* Loans links */}
          <li className="menu collapse-box">
            <Button>
              <i className="zmdi zmdi-widgets zmdi-hc-fw" />
              <span className="nav-text">
                <IntlMessages id="sidebar.loans" />
              </span>
            </Button>
            <ul className="sub-menu">
               <li>
                <NavLink className="prepend-icon" to="/app/loans/create-loan-account">
                  <span className="nav-text"><IntlMessages id="sidebar.loans.CreateLoanAcc"/></span>
                </NavLink>
              </li>
               <li>
                <NavLink className="prepend-icon" to="/app/loans/loan-disbursement">
                  <span className="nav-text">Loan Disbursement</span>
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="menu collapse-box">
            <Button>
              <i className="zmdi zmdi-trending-up zmdi-hc-fw" />
              <span className="nav-text">
                <IntlMessages id="sidebar.metrics" />
              </span>
            </Button>
            <ul className="sub-menu">
              {/* <li>
                <NavLink className="prepend-icon" to="/app/metrics/classic">
                  <span className="nav-text"><IntlMessages id="sidebar.classic" /></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/metrics/modern">
                  <span className="nav-text"><IntlMessages id="sidebar.modern" /></span>
                </NavLink>
              </li> */}
            </ul>
          </li>
          {/* <li className="nav-header">
            <IntlMessages id="sidebar.inBuiltApp"/>
          </li>
          <li className="menu no-arrow">
            <NavLink to="/app/mail">
              <i className="zmdi zmdi-email zmdi-hc-fw"/>
              <span className="nav-text"><IntlMessages id="sidebar.appModule.mail"/></span>
            </NavLink>
          </li>

          <li className="menu no-arrow">
            <NavLink to="/app/to-do">
              <i className="zmdi zmdi-check-square zmdi-hc-fw"/>
              <span className="nav-text"><IntlMessages id="sidebar.appModule.toDo"/></span>
            </NavLink>
          </li>

          <li className="menu no-arrow">
            <NavLink to="/app/contact">
              <i className="zmdi zmdi-account-box zmdi-hc-fw"/>
              <span className="nav-text"><IntlMessages id="sidebar.appModule.contact"/></span>
            </NavLink>
          </li>

          <li className="menu no-arrow">
            <NavLink to="/app/chat">
              <i className="zmdi zmdi-comment zmdi-hc-fw"/>
              <span className="nav-text"><IntlMessages id="sidebar.appModule.chat"/></span>
            </NavLink>
          </li> */}

          {/* <li className="nav-header">
            <IntlMessages id="sidebar.inBuiltReduxApp"/>
          </li>
          <li className="menu no-arrow">
            <NavLink to="/app/to-do-redux">
              <i className="zmdi zmdi-check-square zmdi-hc-fw"/>
              <span className="nav-text"><IntlMessages id="sidebar.appModule.toDo"/></span>
            </NavLink>
          </li>

          <li className="menu no-arrow">
            <NavLink to="/app/mail-redux">
              <i className="zmdi zmdi-email zmdi-hc-fw"/>
              <span className="nav-text"><IntlMessages id="sidebar.appModule.mail"/></span>
            </NavLink>
          </li>

          <li className="menu no-arrow">
            <NavLink to="/app/chat-redux">
              <i className="zmdi zmdi-comment zmdi-hc-fw"/>
              <span className="nav-text"><IntlMessages id="sidebar.appModule.chat"/></span>
            </NavLink>
          </li>

          <li className="menu no-arrow">
            <NavLink to="/app/contact-redux">
              <i className="zmdi zmdi-account-box zmdi-hc-fw"/>
              <span className="nav-text"><IntlMessages id="sidebar.appModule.contact"/></span>
            </NavLink>
          </li> */}

          {/* <li className="nav-header">
            <IntlMessages id="sidebar.social"/>
          </li>
          <li className="menu no-arrow">
            <NavLink to="/app/social-apps/profile">
              <i className="zmdi zmdi-account-box zmdi-hc-fw"/>
              <span className="nav-text"><IntlMessages id="sidebar.profile"/></span>
            </NavLink>
          </li>
          <li className="menu no-arrow">
            <NavLink to="/app/social-apps/wall">
              <i className="zmdi zmdi-account-box zmdi-hc-fw"/>
              <span className="nav-text"><IntlMessages id="sidebar.wall"/></span>
            </NavLink>
          </li>

          <li className="nav-header">
            <IntlMessages id="sidebar.view"/>
          </li>

          <li className="menu collapse-box">
            <Button>
              <i className="zmdi zmdi-view-web zmdi-hc-fw"/>
              <span className="nav-text"><IntlMessages id="sidebar.tables"/></span>
            </Button>

            <ul className="sub-menu">
              <li>
                <NavLink className="prepend-icon" to="/app/table/basic">
                  <span className="nav-text"><IntlMessages id="sidebar.tables.basicTable"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/table/data">
                  <span className="nav-text"><IntlMessages id="sidebar.tables.dataTable"/></span>
                </NavLink>
              </li>
            </ul>
          </li> */}

          {/* <li className="timeline_tooltip menu">
            <Button>
              <i className="zmdi zmdi-swap-alt zmdi-hc-fw zmdi-hc-rotate-90"/>
              <span className="nav-text"><IntlMessages id="sidebar.timeLine"/></span>
            </Button>
            <ul className="sub-menu">

              <li>
                <NavLink className="prepend-icon" to="/app/time-line/default">
                  <span className="nav-text"><IntlMessages id="sidebar.timeLine.default"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/time-line/default-with-icon">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.timeLine.defaultwithIcons"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/time-line/left-align">
                  <span className="nav-text"><IntlMessages id="sidebar.timeLine.leftAligned"/></span>
                </NavLink>
              </li>
              {/*<li>
                            <NavLink className="prepend-icon" to="/app/time-line/zigzag">
                                <span className="nav-text"><IntlMessages id="sidebar.timeLine.zigzag"/></span>
                            </NavLink>
                        </li>*/}
          {/* </ul>
          </li> */}

          {/* <li className="menu">
            <Button>
              <i className="zmdi zmdi-view-list zmdi-hc-fw"/>
              <span className="nav-text"><IntlMessages id="sidebar.customViews"/></span>
            </Button>
            <ul className="sub-menu">
              <li>
                <NavLink className="prepend-icon"
                         to="/app/custom-views/simple-list">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.customViews.plainListView"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/custom-views/strip-list">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.customViews.withDivider"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/custom-views/card-list">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.customViews.cardListView"/></span>
                </NavLink>
              </li>
            </ul>
          </li> */}

          {/* <li className="nav-header">
            <IntlMessages id="sidebar.form"/>
          </li>

          <li className="menu">
            <Button>
              <i className="zmdi zmdi-book-image zmdi-hc-fw"/>
              <span className="nav-text"><IntlMessages id="sidebar.forms"/></span>
            </Button>
            <ul className="sub-menu">
              <li>
                <NavLink className="prepend-icon" to="/app/form/components">
                  <span className="nav-text"><IntlMessages id="sidebar.forms.components"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/form/stepper">
                  <span className="nav-text"><IntlMessages id="sidebar.forms.stepper"/></span>
                </NavLink>
              </li>
            </ul>
          </li> */}

          {/* <li className="nav-header">
            <IntlMessages id="sidebar.extensions"/>
          </li>

          <li className="menu">
            <Button className="void">
              <i className="zmdi zmdi-code-setting zmdi-hc-fw"/>
              <span className="nav-text"><IntlMessages id="sidebar.editors"/></span>
            </Button>

            <ul className="sub-menu">
              <li>
                <NavLink className="prepend-icon" to="/app/editor/ck">
                  <span className="nav-text"><IntlMessages id="sidebar.editors.CKEditor"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/editor/wysiswyg">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.editors.WYSISWYGEditor"/></span>
                </NavLink>
              </li>
            </ul>

          </li> */}

          {/* <li className="menu">
            <Button className="void">
              <i className="zmdi zmdi-brush zmdi-hc-fw"/>
              <span className="nav-text"><IntlMessages id="sidebar.pickers"/></span>
            </Button>

            <ul className="sub-menu">
              <li>
                <NavLink className="prepend-icon" to="/app/pickers/date-time">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.pickers.dateTimePickers"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/pickers/color">
                  <span className="nav-text"><IntlMessages id="sidebar.pickers.colorPickers"/></span>
                </NavLink>
              </li>
            </ul>

          </li> */}

          {/* <li className="menu">
            <Button className="void">
              <i className="zmdi zmdi-key zmdi-hc-fw"/>
              <span className="nav-text"><IntlMessages id="sidebar.extensions"/></span>
            </Button>

            <ul className="sub-menu">
              <li>
                <NavLink className="prepend-icon" to="/app/extensions/dnd">
                  <span className="nav-text"><IntlMessages id="sidebar.extensions.dragNDrop"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/extensions/dropzone">
                  <span className="nav-text"><IntlMessages id="sidebar.extensions.dropzone"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/extensions/sweet-alert">
                  <span className="nav-text"><IntlMessages id="sidebar.extensions.sweetAlert"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/extensions/notification">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.extensions.notification"/></span>
                </NavLink>
              </li>
            </ul>
          </li> */}
          {/* 
          <li className="menu">
            <Button>
              <i className="zmdi zmdi-chart zmdi-hc-fw"/>
              <span className="nav-text"><IntlMessages id="sidebar.chart"/></span>
            </Button>

            <ul className="sub-menu">
              <li>
                <NavLink className="prepend-icon" to="/app/chart/line">
                  <span className="nav-text"><IntlMessages id="sidebar.chart.line"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/chart/bar">
                  <span className="nav-text"><IntlMessages id="sidebar.chart.bar"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/chart/area">
                  <span className="nav-text"><IntlMessages id="sidebar.chart.area"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/chart/composed">
                                <span className="nav-text"><IntlMessages
                                  id="sidebar.chart.composed"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/chart/scatter">
                                <span className="nav-text"><IntlMessages
                                  id="sidebar.chart.scatter"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/chart/pie">
                  <span className="nav-text"><IntlMessages id="sidebar.chart.pie"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/chart/radial">
                  <span className="nav-text"><IntlMessages id="sidebar.chart.radial"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/chart/radar">
                  <span className="nav-text"><IntlMessages id="sidebar.chart.radar"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/chart/treemap">
                  <span className="nav-text"><IntlMessages id="sidebar.chart.tree"/></span>
                </NavLink>
              </li>
            </ul>
          </li> */}

          {/* <li className="map_tooltip menu">
            <Button>
              <i className="zmdi zmdi-google-maps zmdi-hc-fw"/>
              <span className="nav-text"><IntlMessages id="sidebar.map"/></span>
            </Button>

            <ul className="sub-menu">
              <li>
                <NavLink className="prepend-icon" to="/app/map/simple">
                  <span className="nav-text"><IntlMessages id="sidebar.map.simple"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/map/styled">
                  <span className="nav-text"><IntlMessages id="sidebar.map.styled"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/map/geo-location">
                  <span className="nav-text"><IntlMessages id="sidebar.map.geoLocation"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/map/directions">
                  <span className="nav-text"><IntlMessages id="sidebar.map.mapDirection"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/map/overlay">
                  <span className="nav-text"><IntlMessages id="sidebar.map.overlay"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/map/kml">
                  <span className="nav-text"><IntlMessages id="sidebar.map.kmLayer"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/map/popup-info">
                  <span className="nav-text"><IntlMessages id="sidebar.map.popupInfo"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/map/traffic">
                  <span className="nav-text"><IntlMessages id="sidebar.map.trafficLayer"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/map/street-view">
                  <span className="nav-text"><IntlMessages id="sidebar.map.streetView"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/map/event">
                  <span className="nav-text"><IntlMessages id="sidebar.map.eventListener"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/map/drawing">
                  <span className="nav-text"><IntlMessages id="sidebar.map.mapDrawing"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/map/clustering">
                  <span className="nav-text"><IntlMessages id="sidebar.map.mapClustering"/></span>
                </NavLink>
              </li>
            </ul>
          </li> */}

          {/* <li className="nav-header">
            <IntlMessages id="sidebar.modules"/>
          </li>

          <li className="menu">
            <Button className="void">
              <i className="zmdi zmdi-calendar zmdi-hc-fw"/>
              <span className="nav-text"><IntlMessages id="sidebar.calendar"/></span>
            </Button>

            <ul className="sub-menu">
              <li>
                <NavLink className="prepend-icon" to="/app/calendar/basic">
                  <span className="nav-text"><IntlMessages id="sidebar.calendar.basic"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/calendar/cultures">
                  <span className="nav-text"><IntlMessages id="sidebar.calendar.cultures"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/calendar/dnd">
                  <span className="nav-text"><IntlMessages id="sidebar.calendar.dnd"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/calendar/popup">
                  <span className="nav-text"><IntlMessages id="sidebar.calendar.popup"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/calendar/rendering">
                  <span className="nav-text"><IntlMessages id="sidebar.calendar.rendering"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/calendar/selectable">
                  <span className="nav-text"><IntlMessages id="sidebar.calendar.selectable"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/calendar/timeslots">
                  <span className="nav-text"><IntlMessages id="sidebar.calendar.timeslots"/></span>
                </NavLink>
              </li>
            </ul>

          </li> */}

          {/* 

          <li className="menu">
            <Button>
              <i className="zmdi zmdi-collection-item-8 zmdi-hc-fw"/>
              <span className="nav-text"><IntlMessages id="sidebar.appModule"/></span>
            </Button>

            <ul className="sub-menu">
              <li>
                <NavLink className="prepend-icon" to="/app/app-module/login-1">
                  <span className="nav-text"><IntlMessages id="sidebar.appModule.login1"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/app-module/login-2">
                  <span className="nav-text"><IntlMessages id="sidebar.appModule.login2"/></span>
                </NavLink>
              </li>

              <li>
                <NavLink className="prepend-icon"
                         to="/app/app-module/login-with-stepper">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.appModule.loginStepper"/></span>
                </NavLink>
              </li>

              <li>
                <NavLink className="prepend-icon"
                         to="/app/app-module/sign-up-1">
                  <span className="nav-text"><IntlMessages id="sidebar.appModule.signup1"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/app-module/sign-up-2">
                  <span className="nav-text"><IntlMessages id="sidebar.appModule.signup2"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/app-module/forgot-password-1">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.appModule.forgotPassword1"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/app-module/forgot-password-2">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.appModule.forgotPassword2"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/app-module/lock-screen-1">
                  <span className="nav-text"><IntlMessages id="sidebar.appModule.lock1"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/app-module/lock-screen-2">
                  <span className="nav-text"><IntlMessages id="sidebar.appModule.lock2"/></span>
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="nav-header">
            <IntlMessages id="sidebar.extras"/>
          </li>

          <li className="menu">
            <Button>
              <i className="zmdi zmdi-view-web zmdi-hc-fw"/>
              <span className="nav-text"><IntlMessages id="sidebar.icons"/></span>
            </Button>
            <ul className="sub-menu">
              <li>
                <NavLink className="prepend-icon" to="/app/icons/material">
                  <span className="nav-text"><IntlMessages id="sidebar.icons.material"/></span>
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="menu">
            <Button>
              <i className="zmdi zmdi-collection-bookmark zmdi-hc-fw zmdi-hc-rotate-90"/>
              <span className="nav-text"><IntlMessages id="sidebar.extraElements"/></span>
            </Button>
            <ul className="sub-menu">
              <li>
                <NavLink className="prepend-icon"
                         to="/app/extra-elements/pricing-table">
                                <span className="nav-text"><IntlMessages
                                  id="sidebar.extraElements.pricingTable"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/extra-elements/callouts">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.extraElements.callouts"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/extra-elements/testimonials">
                                <span className="nav-text"><IntlMessages
                                  id="sidebar.extraElements.testimonials"/></span>
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="menu">
            <Button>
              <i className="zmdi zmdi-pages zmdi-hc-fw"/>
              <span className="nav-text"><IntlMessages id="sidebar.extraPages"/></span>
            </Button>
            <ul className="sub-menu">
              <li>
                <NavLink className="prepend-icon"
                         to="/app/extra-pages/about-us">
                  <span className="nav-text"><IntlMessages id="sidebar.extraPages.aboutUs"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/extra-pages/contact-us">
                  <span className="nav-text"><IntlMessages id="sidebar.extraPages.contactUs"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/extra-pages/blog">
                  <span className="nav-text"><IntlMessages id="sidebar.extraPages.blog"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/extra-pages/faq">
                  <span className="nav-text"><IntlMessages id="sidebar.extraPages.faq"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/extra-pages/portfolio">
                  <span className="nav-text"><IntlMessages id="sidebar.extraPages.portfolio"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/extra-pages/error-404">
                  <span className="nav-text"><IntlMessages id="sidebar.extraPages.404"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/extra-pages/error-500">
                  <span className="nav-text"><IntlMessages id="sidebar.extraPages.500"/></span>
                </NavLink>
              </li>
            </ul>
          </li> */}

        </ul>
      </CustomScrollbars>
    );
  }
}

export default withRouter(SidenavContent);
