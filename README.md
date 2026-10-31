# SFG Movement Tracker

A beginner-level, frontend-only UI prototype for demonstrating how Semi-Finished Goods (SFGs) could be tracked between three plants.

## Technology
- HTML
- CSS
- Vanilla JavaScript

No Node.js, Express.js, database, login, SAP integration, or external service is required.

## Folder structure

```text
SFG_Movement_Tracker/
├── index.html
├── style.css
├── script.js
├── README.md
└── data/
    └── dummy-job-orders.json
```

## Run locally

1. Extract the project ZIP file.
2. Open the `SFG_Movement_Tracker` folder.
3. Double-click `index.html` to open it in a browser.

You can also open the folder in VS Code and use the Live Server extension if installed.

## What is included

- **Dashboard:** Sample dispatch, pending receipt and completed receipt counts, plus recent movements.
- **Send SFG:** Basic form fields and simple validation. Submitting does not save or dispatch a record.
- **Receive SFG:** Sample pending records. Confirm Receipt displays a placeholder message.
- **Movement History:** Static sample records and a simple text search.
- **Dummy Job Order:** A JSON file with sample job order information.

## Prototype limitations

This is only an interface demonstration. Data is stored in JavaScript as sample data and is not persisted. There is no authentication, database, complete dispatch/receipt workflow, SAP connection, or job order system integration.
