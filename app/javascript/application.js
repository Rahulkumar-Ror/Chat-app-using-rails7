// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//= require turbolinks
//= require jquery3
//= require popper
//= require bootstrap-sprockets
import "@hotwired/turbo-rails"
import "controllers"
import "bootstrap";
import Rails from "@rails/ujs";
Rails.start()
