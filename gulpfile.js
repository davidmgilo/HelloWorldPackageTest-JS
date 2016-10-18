const elixir = require ('laravel-elixir');

elixir ( mix =>{
   mix.webpack('app.js')
});

//mix = function () == mix => ... Arrow functions