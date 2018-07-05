import Mock from 'mockjs';

const SIMPLE_BARS = Mock.mock({
  "data|1-10": ["@integer(10, 100)"]
});

const PIRE_BARS = Mock.mock({
  "data|9": [{
    "data|7": ["@integer(10, 100)"]
  }]
});


export {
  SIMPLE_BARS,
  PIRE_BARS
};
