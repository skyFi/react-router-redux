# react-router-redux
connect react router 4.x and redux.

## Install

```JavaScript
npm install react-router4-redux --save

//or 
yarn add react-router4-redux
```

## Why && Usage

* normal

use redux before:

```JavaScript
import { connect } from 'react-redux';
export default connect(mapStateToProps)(Something)
```

after using react-router 4.x:

```JavaScript
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
export default withRouter(connect(mapStateToProps)(Something))
```

oooh that`s so tedious.

but now, you can do just simple redux:

```JavaScript
import connect from 'react-router4-redux';
export default connect(mapStateToProps)(Something)
```

* use for connect mixins:

```JavaScript
import connect from 'react-router4-redux';
export default connect(mapStateToProps)(Something, SomeMixin1, SomeMixin2, SomeMixin3 /*, ....mixins*/)
```

* add fetchData func

async fetchData({ dispatch, match }) {
  await dispatch(someAction());
}
