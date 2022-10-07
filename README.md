# COSC349-a2
## Shay Stevens #7196262
My application is a dog booking website, called Doge Rentals. The application is built using two virtual machines, an RDS database and S3 for storage. The first VM is a web server that users interact with to make a booking. And the second VM is an admin server that hosts the admin page that shows the bookings made by users from the database. The RDS database stores the bookings made by the customers while the S3 is used to backup the applications files.

## Getting started
### Step 1:
Use `git clone` in a terminal to clone this repository into your desired destination.

### Step2:
`cd` into COSC349-a2.

### Step 3:
Navigate to AWS learner lab and start the lab.

### Step 4:
Copy the AWS CLI details into the Vagrantfile credentials

### Step 5:
Run `vagrant up` in order to start the automated build process (This takes around 6 minutes for the initial build and 2 minutes for redeployments).

### Step 6:
Click the green AWS on the AWS learner lab navigate to EC2 -> instances(running) then check the box next to one of them and click on the ipv4 address remember to change https to http.

## Web server (#VM1)
The web server is responsible for hosting the web pages that a user interacts with in order to make a booking for a dog. Simpliy go to the Rent a Doge tab select the dogs you want to book and fill out the form with your details and hit submit to make a booking. This booking is then inserted into the bookings database hosted by amazon RDS.

## Admin Server (#VM2)
The admin server is responsible for hosting the admin webpage.The admin page reads the bookings from the bookings database from RDS and displays the bookings in a table for the admin to look at.

## Database server (RDS)
The database server is responsible for hosting the database. MySQL is used to create the tables and to insert values into the tables. There is a bookings table that is stored in the database that holds the bookings made by clients.

## File backup (S3)
The file backup is used to backup the files for the admin and client web pages. This is for a precaution in case a file is corrupted or if a future developer wants to update the files they always have a backup to fall back on. The backup is found in S3 -> cosc349-a2-bucket.

## Cleaning up
Run `vagrant destroy` to destroy the virtual machines.
