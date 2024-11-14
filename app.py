import requests
from flask import Flask, render_template, request, redirect, session, url_for
from datetime import datetime
import csv

app = Flask(__name__)

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

    info = [date, hour, patients, comment]
    
    with open("history.csv", "a", newline='') as hist:
        writer = csv.writer(hist)
        writer.writerow(info)

    return redirect(url_for('data'))

@app.route('/data')
def data():
    data = []
    with open("history.csv", "r", newline="") as file:
        reader = csv.reader(file)
        for row in reader:
            try:
                row[0] = datetime.strptime(row[0], "%Y-%m-%d")
                row[1] = int(row[1])

            except (IndexError, ValueError):
                continue  
        
            data.append(row)
    
    data.sort(key=lambda x: (x[0], x[1]), reverse=True)
    
    for row in data:
        row[0] = row[0].strftime("%m/%d/%Y")
    
    return render_template('data.html', data=data)

if __name__ == '__main__':
    app.run(debug=True)

