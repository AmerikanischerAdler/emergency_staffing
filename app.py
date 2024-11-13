import requests
from flask import Flask, render_template, request, redirect, session, url_for
from datetime import datetime
import csv

app = Flask(__name__)

info = ["", "", "", ""]

@app.route('/')
@app.route('/home')
def home():
    return render_template('index.html')

@app.route('/sub', methods=["POST"])
def sub():
    if request.form.get("patients"):
        patients = request.form.get("patients")
    else: 
        return redirect(url_for('home'))

    if request.form.get("hour"):
        hour = request.form.get("hour")
    else: 
        return redirect(url_for('home'))

    if request.form.get("date"):
        date = request.form.get("date")
    else:
        date = datetime.now().date()

    if request.form.get("comment"):
        comment = request.form.get("comment")
    else: 
        comment = ""

    global info
    info = [date, hour, patients, comment]
    
    with open("history.csv", "a", newline='') as hist:
        writer = csv.writer(hist)
        writer.writerow(info)

    return redirect(url_for('data'))

@app.route('/data')
def data():
    try:
        with open('history.csv', newline='') as csvfile:
            reader = csv.reader(csvfile)
            rows = list(reader)
            data = rows[-4:]
        error = None
    except:
        data = None
        error = "No Available Data"

    return render_template('data.html', data=data, error=error)

@app.route('/history')
def history():
    try:
        with open('history.csv', newline='') as csvfile:
            reader = csv.reader(csvfile)
            hist = list(reader)
    except:
        data = None
        error = "No Available Data"
 
    return render_template('history.html', hist=hist)

if __name__ == '__main__':
    app.run(debug=True)

