# React - Rail Demo
Demonstration of building React table component with sorting support using React 16 and Rails 6
# Rails backend API
## Pre-requisite
- Ruby 2.6 (tested versions: Ruby 2.6.5, gem 3.1.2)
- Rails 6.0 (tested version: Rails 6.0.2.1)
- Mysql 5.7
        
## Start app
1. Start mysql server if it's not running
2. Create an empty database schema with UTF-8 encoding
3. `cd` to rails_demo folder
4. Configure db information in `config\database.yml`
5. Run below commands:
```
bundle install
rails db:migrate
rake db:seed_fu
rails server
```
6. View API result from this URL: http://localhost:3000/api/v1/people/index
        
# React frontend
## Pre-requisite
- Node 8 (tested versions: Node 8.15.1, npm 6.4.1)
- Yarn (tested version: yarn 1.15.2)
## Start app
1. `cd` to react_demo folder
2. Clone .env.example to .env
3. Run below commands:
```
yarn install
yarn start
```
4. Access app from this address: http://localhost:3001/