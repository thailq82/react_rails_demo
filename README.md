1. Rails backend API:
    - Pre-requisite:
        + Ruby 2.6 (tested versions: Ruby 2.6.5, gem 3.1.2)
        + Rails 6.0 (tested version: Rails 6.0.2.1)
        + mysql 5.7
        
    - Start app:
        + make sure mysql is started
        + cd to rails_demo folder
        + configure db information (host, username, password, database) in config\database.yml
          Make sure an empty database schema (with the name specified at above and UTF-8 encoding) is already created and accessible
        + Run below commands:
            bundle install
            rails db:migrate
            rake db:seed_fu
            rails server
        + View API result from this URL: http://localhost:3000/api/v1/people/index
        
2. React frontend:
    - Pre-requisite:
        + Node 8 (tested versions: Node 8.15.1, npm 6.4.1)
        + Yarn (tested version: yarn 1.15.2)
        
    - Start app:
        + cd to react_demo folder
        + Clone .env.example to .env
        + Run below commands:
            yarn install
            yarn start
        + Access app from this address: http://localhost:3001/