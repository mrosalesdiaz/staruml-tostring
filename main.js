const _ = require('./lodash.js');
const clipboard = require('electron').clipboard;

function __copyNames() {
  const views = app.selections.getSelectedViews();
  const data = _.map(views, (e) => {{
  	const path=_.result(e,'model.getPathname','');
    return `${path}`;
  }});
  clipboard.writeText(_.join(data, '\n'));
}

function __copyNamesAndTypes() {
  const views = app.selections.getSelectedViews();
  const data = _.map(views, (e) => {
  	const path=_.result(e,'model.getPathname','');
    return `${_.result(e,'model.getTypeString','Unknown')} ${path}`;
  });
  clipboard.writeText(_.join(data, '\n'));
}

app.commands.register('copyfromcanvas:copyNames', __copyNames);
app.commands.register('copyfromcanvas:copyNameAndTypes', __copyNamesAndTypes);