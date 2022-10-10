# Lab 16

## AWS Server

Practice in the deployment of a server to AWS using Elastic Beanstalk

### Author: Xavier Hillman

[GUI Deployment](http://xh-aws-server-gui.eba-2czm2xem.us-east-1.elasticbeanstalk.com/)

[CLI Deployment](http://xh-aws-server-cli-dev.us-east-1.elasticbeanstalk.com/)

### Setup

Make sure you have aws and elastic beanstalk installed via npm

### Process

#### Using the GUI

- Sign in to AWS
- Search Elastic Beanstalk
- Create new application
  - application name
  - platform = Node.js
- Create an environment
- Upload .zip file of index.js and package.json

#### Using the CLI

- Ensure you have a user with the proper permissions in the AWS console
  - search IAM and create one if not
- Navigate to project directory
- `eb init`
  - follow the prompts
- `eb create`
  - follow the prompts
- `eb deploy`
  - after making changes
  