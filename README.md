# pool Application  🎉

This project implements a serverless pool or sketching application using AWS services. ☁️

## Features ✨

* **User Registration:**  Users can register for the pool by providing their email, name, and phone number. 📝
* **Secure Data Storage:** User data is securely stored in a DynamoDB table. 🗄️
* **Automated sketch:**  The application automatically selects three random winners. 🏆
* **Scalability and Reliability:** Built on serverless architecture using AWS Lambda and API Gateway, ensuring scalability and reliability. 🚀
* **Secure API Access:**  Mutual TLS authentication is implemented for secure API access. 🔒
* **Frontend Hosting:** Static HTML pages are hosted on S3 and served through CloudFront for optimal performance. 🌐

## Architecture 🏗️

The application leverages several AWS services to achieve a serverless and scalable architecture:

* **DynamoDB:** NoSQL database for storing user data.
* **Lambda Functions:** Serverless functions for handling application logic.
* **API Gateway:**  Provides a secure and scalable API endpoint.
* **S3 and CloudFront:**  Hosts and serves the static frontend application.

## Implementation Details 🛠️

This section outlines the key steps involved in setting up the pool application:

**1. DynamoDB Table** 💾

* **Table Name:** poc99_pool
* **Partition Key:** email (string)
* **Attributes:**
    * email (string)
    * name (string)
    * phone (string)
    * won (string)

**2. Lambda Functions** ⚡️

* **IAM Role:** Create IAM role for AWS services to access DynamoDB and create logs.
* **employ:**  Adds a new user to the DynamoDB table.
* **calculate:** Retrieves the total number of registered users from the DynamoDB table.
* **sketch:**  Randomly selects three winners from the DynamoDB table and updates their `won` status.

**3. API Gateway** 🚪

* Create a custom domain name (optional).
* Create an SSL certificate using AWS Certificate Manager (ACM).
* Configure API Gateway to use the custom domain.
* Create a DNS A record to link the domain with the API Gateway endpoint.
* Set up API Gateway API mappings to connect the Lambda functions.

**4. Security** 🔐

* Enable mutual TLS authentication for API Gateway to ensure secure communication.

**5. Frontend Hosting** 🖥️

* Host the static HTML pages for the frontend application on Amazon S3.
* Use CloudFront to serve the frontend application from S3 for improved performance and security.

## Deployment 🛠️

1. **Clone the repository:** `git clone https://github.com/abdoelwaly/aws-serverless-project-pool-app.git`
2. **Deploy the AWS resources:** Use the provided AWS CloudFormation template or deploy the resources manually.
3. **Configure API Gateway:** Set up the custom domain, certificates, and API mappings.
4. **Upload the frontend files:** Upload the HTML pages to the S3 bucket.

## Usage 👨‍💻

1. Access the frontend application through the CloudFront distribution URL.
2. Register for the pool by providing the required information.
3. The application will automatically sketch winners at the scheduled time.
