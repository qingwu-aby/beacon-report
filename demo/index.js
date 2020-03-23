import Monitor from '../index';

new Monitor({
  domain: 'http://localhost:1234'
}, () => {}).reportData()

