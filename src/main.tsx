import app from 'apprun';

const model = 'Hello world - AppRun !';

const view = (state) => <div>
  <h1>{state}</h1>
</div>;

const update = {
  hello: (_, state) => state
};

app.start(document.body, model, view, update);

import('../pkg').catch(e => console.log(e))