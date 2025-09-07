# 🫀 Project\_Exb\_1 – Multiple Disease Prediction Web App

An end-to-end web application for predicting multiple diseases using machine learning, complete with datasets, trained models, Jupyter notebooks, and an interactive frontend. This project also includes documentation and presentation materials for academic or demo purposes.

---

## 📋 Project Structure

```
Project_Exb_1/
│
├── Datasets/        # Raw and processed datasets used for modeling  
├── Notebooks/       # Jupyter Notebooks: EDA, preprocessing, model training  
├── Paper/           # Written documentation of project methodology  
├── Presentation/    # Slides or visuals summarizing the project  
├── models/          # Saved trained models for inference  
├── static/          # Static assets: CSS, JavaScript, images  
├── templates/       # HTML templates for rendering web pages  
├── app.py           # Main backend application (Flask)  
└── flow.txt         # Outline of the project workflow
```

---

## 💪 Features

* Predicts **multiple diseases** using ML models
* Interactive web interface (Flask + HTML templates)
* Organized project workflow with datasets, notebooks, and models
* Includes **paper** and **presentation** for academic submission
* Scalable architecture for adding more diseases in the future

---

## 💻 Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Python (Flask)
* **Machine Learning:** scikit-learn, pandas, NumPy
* **Visualization & Analysis:** Jupyter Notebooks, matplotlib, seaborn

---

## ⚡️ Getting Started

### 1⃣ Clone the repository

```bash
git clone https://github.com/mkp151203/Multiple_Disease_Prediction_Webapp.git
cd Multiple_Disease_Prediction_Webapp
```

### 2⃣ Install dependencies

```bash
pip install -r requirements.txt
```

*(If `requirements.txt` is missing, install Flask, pandas, scikit-learn manually.)*

### 3⃣ Run the backend server

```bash
python app.py
```

### 4⃣ Access the web app

Open your browser and go to:

```
http://localhost:5000
```

---

## 📊 Workflow

* Load dataset → preprocess → train ML models → save models (`.pkl`)
* Web app loads saved models for predictions
* User inputs health parameters via frontend forms
* Predictions are displayed instantly on the web app

---

## 🏰 Future Improvements

* Add more diseases for prediction
* Deploy on **Heroku / AWS / GCP**
* Enhance UI/UX with React or TailwindCSS
* Integrate real-time data from wearables

---

## 📜 License

This project is licensed under the **MIT License**.

---

✍️ Created with ❤️ by **Mehul Kumar Patel**
