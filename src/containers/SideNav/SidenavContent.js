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
                  <span className="nav-text"><IntlMessages id="sidebar.loans.LoanDisbursement"/></span>
                </NavLink>
              </li>
            </ul>
          </li>
          {/* Adminstrative management links */}
           <li className="menu collapse-box">
            <Button>
              <i className="fas fa-cog" />
              <span className="nav-text">
                <IntlMessages id="sidebar.adminManagement" />
              </span>
            </Button>
            <ul className="sub-menu">
              <li>
                <NavLink className="prepend-icon" to="/app/admin-management/add-loan-product">
                  <span className="nav-text"><IntlMessages id="sidebar.adminManagement.AddLoanProduct" /></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/admin-management/create-share-product">
                  <span className="nav-text"><IntlMessages id="sidebar.adminManagement.CreateShareProduct" /></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/admin-management/register-savings&deposit-product">
                  <span className="nav-text"><IntlMessages id="sidebar.adminManagement.RegSavingsAndDeposit" /></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/bank-management/add-bank-details">
                  <span className="nav-text"><IntlMessages id="Add Bank Details" /></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/bank-management/edit-bank-details">
                  <span className="nav-text"><IntlMessages id="Edit Bank Details" /></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/bank-management/relationship-manager">
                  <span className="nav-text"><IntlMessages id="Relationship Manager" /></span>
                </NavLink>
              </li>
            </ul>
            </li>
          {/* client Adminstration link */}
          <li className="menu">
            <Button>
              <i class="fas fa-piggy-bank"></i>
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
        </ul>
      </CustomScrollbars>
    );
  }
}

export default withRouter(SidenavContent);
