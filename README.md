# cs411-stock-tracker
This is the repository for spring 2022 cs 411 group 23's code. We will upload all code for the stock tracker to this space. 

The front end contains a variety of components. It has App.js which runs the whole front end. Navbar components allows you to go between pages. Then, there is a folder called pages, which has the code for each of the pages: sign up, log in, search, and display stock. To run the front end part, use npm start on the command line. 

The backend is found in the demo folder, which has files for stock, stock service, and running the application. These connect to spring boot, which allow connection to the front end also with the files like to-do app. In the stock file, we create an object for a stock that draws data from the API and stores certain information. Then, we have the stock service file, which allows you to add and remove stocks from a list of them. This is allows for information to change from the user input. You can run this backend side from the application.java file using maven. 