# A student record dashboard

### Features:-

1. A form to take in student data, marks and update in the records
2. Update the latest details and display it on the table in the same page
3. Action buttons to edit each record and remove the student permenantly.
  
### WorkFlow:-

- Enter the required student details in the form, each field in the correct format
- Prees the Submit button to store the data and automatically display on the table
- Use the edit button which automatically takes You back to the prefilled form with current details and press update button to store
- Use the delete button and confirm to permenantly delete the student record

### [Video Demo](https://drive.google.com/file/d/1eHsOkUB_TS344UHZL3GKTcPg4TVEq2Bf/view?usp=drive_link)

### Notes on Tech Concepts

- Used javascript DOM manipulation and event handling to validate and capture form data
- Used Appropriate css styling with `grid` and `flexbox` for responsive design
- Font awesome API for Icons
- Used `json-server` npm package to emulate a backend & DB. Stored all the student details in the db.json file. Run the server first for the application to work correctly `json-server -p 3001 student-dashboard/db.json`.
- `axios` was used to send HTTP request and iteract with the json server.
