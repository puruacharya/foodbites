import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SettingNav from './SettingNav';
import AboutPage from './AboutPage';
import PhotosPage from './PhotosPage';
import AccountPage from './AccountPage';
import BasicPage from './BasicPage';
import { updatePassword } from '../../auth/authActions';
import { updateProfile } from '../userActions';

const actions = {
  updatePassword,
  updateProfile
};

const mapState = (state) => ({
  providerId: state.firebase.auth.providerData[0].providerId,
  user: state.firebase.profile
})

const SettingsDashboard = ({ updatePassword, providerId, user, updateProfile }) => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from="/settings" to="/settings/basic" />
          <Route path="/settings/basic" render={() => <BasicPage updateProfile={updateProfile} initialValues={user}/>} />
          <Route path="/settings/about" render={() => <AboutPage updateProfile={updateProfile} initialValues={user}/>} />
          <Route path="/settings/photos" component={PhotosPage} />
          <Route
            path="/settings/account"
            render={() => <AccountPage updatePassword={updatePassword} providerId={providerId} />}
          />
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingNav />
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapState, actions)(SettingsDashboard);