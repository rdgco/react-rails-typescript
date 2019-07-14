# README

This is a starter project that integrates Ruby on Rails as the server using webpacker and the react-rails gem.
Additionally, this is configured to use Typescript code in .ts and .tsx files.

* Ruby version: 2.6
* Rails Version: 5.2
* CSS Framework: react-bootstrap

Installation:

Make sure you are using Ruby version 2.6.

1. bundle install
2. yarn install
3. rails db:create

To Test:

bundle exec rspec

To run the rails server and webpack-dev-server:

foreman -p 30000 -f Procfile.dev

