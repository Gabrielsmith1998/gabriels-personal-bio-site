import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Contact from '../views/Contact';
import Create from '../views/Create';
import Home from '../views/Home';
import Projects from '../views/Projects';
import CreatePortal from '../views/CreatePortal';
import CreateTech from '../views/CreateTech';
import Edit from '../views/Edit';
import TechUpdate from '../views/TechUpdate';
// import ProjectForm from '../components/ProjectForm';
import EditForm from '../views/EditForm';
import TechEditForm from '../views/TechEditForm';
import Technologies from '../views/Technologies';

export default function Router({ user }) {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/tech">
          <Technologies />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route
          exact
          path="/createPortal"
          component={() => <CreatePortal user={user} />}
        />
        <Route
          exact
          path="/editProjects"
          component={() => <Edit user={user} />}
        />
        <Route
          exact
          path="/editProject/:fbKey"
          component={() => <EditForm user={user} />}
        />
        <Route
          exact
          path="/editTech/:fbKey"
          component={() => <TechEditForm user={user} />}
        />
        <Route
          exact
          path="/editTech"
          component={() => <TechUpdate user={user} />}
        />
        <Route
          exact
          path="/createProjects"
          component={() => <Create user={user} />}
        />
        <Route
          exact
          path="/createTech"
          component={() => <CreateTech user={user} />}
        />
      </Switch>
    </>
  );
}

Router.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};
Router.defaultProps = {
  user: null,
};
