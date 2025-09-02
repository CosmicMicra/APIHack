import React, { useState } from "react";

const UploadForm = () => {
  const [csvFile, setCsvFile] = useState(null);
  const [link, setLink] = useState("");

  const handleFileChange = (e) => {
    setCsvFile(e.target.files[0]);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (csvFile) {
      console.log("CSV file uploaded:", csvFile);
      // TODO: send to backend
    } else if (link) {
      console.log("Link entered:", link);
      // TODO: send to backend
    } else {
      alert("Please upload a CSV file or enter a link!");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Step 1: Upload CSV or Enter Link</h2>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Upload CSV:</label>
        <input type="file" accept=".csv" onChange={handleFileChange} />
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Or Enter Link:</label>
        <input
          type="text"
          placeholder="https://example.com/properties"
          value={link}
          onChange={handleLinkChange}
          style={styles.input}
        />
      </div>

      <button type="submit" style={styles.button}>
        Next
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "400px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default UploadForm;
