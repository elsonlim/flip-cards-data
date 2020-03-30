# flip-cards-data

Steps to populate data:

1. Install all the required packages.
   ```bash
   $ npm install
   ```

2. Download the data in .csv format (into your Downloads folder).

3. Move the data into this repo by running the following helper command:
   ```bash
   $ npm run data:new
   ```

Steps to update data for local environment:

1. Create a **.env** file and include `MONGO_URL` in this file, e.g.
   ```
   MONGO_URL=<paste_your_url_here>
   ```

2. Include your IP address in the **Network Access** config for mongoDB.

3. Run the following command:
   ```bash
   $ npm run start

   > flip-cards-data@1.0.0 start /flip-cards/flip-cards-data
   > node src/index.js

   deleting data
   connected to mongodb
   adding 380 number of data
   done
   Close DB
   DB closed. Good Bye
   ```
