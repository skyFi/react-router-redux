# react-router-redux
connect react router 4.x and redux.

## Usage

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
import connect from 'react-router-redux';
export default connect(mapStateToProps)(Something)
```
